// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageAddAd",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","messageAddAd","formInput",function(model){
				model.set({
					title:"待发消息添加",
					nav:[],
					list:[
					{name:"",title:"消息标题",placeholder:"请填写消息标题",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"发送时间",placeholder:"请选择发送时间",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"发送对象",placeholder:"请填写接收用户编号",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"消息内容",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"确认提交"}]
					});
				model.reflash();
				model.show();
				});
				}
			obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:0
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
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(model){
						model.clean();
						model.show();
						page();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);