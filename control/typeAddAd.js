// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeAddAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			function page(sg){
				obj.model.get("#acMain","typeAddAd","formInput",function(model){
				model.set({
					title:"类型添加",
					nav:[],
					list:[
					{name:"name",title:"类型名",placeholder:"请填写类型名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"addSend",text:"确认提交"}]
					});
				model.reflash();
				model.target.find("#addSend").unbind("click").bind("click",function(){
					obj.api.run("type_add",{tk:tk,name:model.result().name},function(){
						obj.hash("typeListAd")
						},function(e){alert(e)})
					});
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
						modelA.change("typeAddAd");
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
					},function(e){alert(e)})
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(e){alert(e)})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);