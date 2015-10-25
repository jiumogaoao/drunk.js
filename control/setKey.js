// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"setKey",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","setKeyAd","formInput",function(model){
				model.set({
					title:"重置密码",
					nav:[],
					list:[
					{name:"",title:"原始密码",placeholder:"请输入原始密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"新密码",placeholder:"请输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"确认密码",placeholder:"请再次输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"确认提交"}]
					})
				model.reflash()
				model.show();
				});
				}
			obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:2
				});
				model.reflash();
				model.show();
				});
			obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
			obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count==1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.reflash();
						modelA.change("setKey");
						modelA.clean();
						modelA.show();
						page();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);