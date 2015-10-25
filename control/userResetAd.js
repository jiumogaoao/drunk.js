// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"userResetAd",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","userResetAd","formTable",function(model){
				model.set({
				title:"用户列表",
				button:[{id:"",text:"提交重置"}],
				head:[
					{"title":"用户编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"用户名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"手机","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"邮箱","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"地址","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"证件号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"重置","type":"checkbox","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","某人","18520812136","394127821@qq.com","广东深圳","44010319861105",false],
					["REDSFDSFFDGGFD","某人","18520812136","394127821@qq.com","广东深圳","44010319861105",false]
				]
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