// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"sysMessage",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","sysMessage","formTable",function(model){
				model.set({
				title:"消息列表",
				button:[],
				head:[
					{"title":"消息编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发放时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"消息内容","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","2015.10.04","恭喜你成功注册星众筹"],
					["REDSFDSFFDGGFD","2015.10.04","恭喜你成功注册星众筹"]
				]
				});
				model.reflash();
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
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){modelA.reflash();
						modelA.change("sysMessage");
						modelA.clean();
						page();
						modelA.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);