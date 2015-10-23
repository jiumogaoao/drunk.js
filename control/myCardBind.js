// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myCardBind",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","myCardBind","formInput",function(model){
				model.set({
					title:"银行卡绑定",
					nav:[{id:"",title:"基本资料"},{id:"",title:"实名认证"}]
					list:[
					{name:"",title:"开户名",placeholder:"请填写开户名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"银行卡号",placeholder:"请填写银行卡号",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"开户城市",placeholder:"请填写银行卡号",type:"place",value:["",""],valuelabel:"",option:{"aa":{label:"",value:"",option:[]}}},
					{name:"",title:"开户支行",placeholder:"请填写银行卡号",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"确认"}]
					});
				model.reflash();
				model.show();
				});
				}
			obj.model.get("#head","headSimple","head",function(model){
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
					obj.model.get(target,"userCenterTem","userCenterTem",function(model){
						model.clean();
						page();
						model.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);