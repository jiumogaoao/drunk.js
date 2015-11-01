// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"setKeyAd",
		par:[],
		fn:function(data){
			tk="";
			var objArry=[];
			var typeArry=[];
			function page(sg){
				obj.model.get("#acMain","setKeyAd","formInput",function(model){
				model.set({
					title:"重置密码",
					nav:[],
					list:[
					{name:"oldKey",title:"原始密码",placeholder:"请输入原始密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"newKey",title:"新密码",placeholder:"请输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"newKey2",title:"确认密码",placeholder:"请再次输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"setSend",text:"确认提交"}]
					});
				model.reflash();
				model.target.find("#setSend").unbind("click").bind("click",function(){
					var sendMessage=model.result();
					sendMessage.tk=tk;
					if(sendMessage.oldKey&&sendMessage.newKey&&sendMessage.newKey2&&(sendMessage.newKey===sendMessage.newKey2)){
						obj.api.run("set_key",sendMessage,function(){
							alert("修改成功")
							model.reflash();
							},function(){})
						}
					})
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
				function headLayout(){
					obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
					}
				function footLayout(){
					obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
					}
				function mainLayout(){
					obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(modelA){
						modelA.reflash();
						modelA.change("setKeyAd");
						modelA.clean();
						modelA.show();
						page(model);
					callback();
						});
					},{w:"100%"});
					
				});
					}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount==2){
						headLayout();
				footLayout();
				mainLayout();
						}
					}
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);