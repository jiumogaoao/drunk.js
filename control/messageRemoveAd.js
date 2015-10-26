// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageRemoveAd",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#acMain","messageRemoveAd","formTable",function(model){
				model.set({
				title:"待发消息列表",
				button:[{id:"",text:"提交删除"}],
				head:[
					{"title":"消息编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"消息标题","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发送时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发送用户","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发送内容","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"删除","type":"checkbox","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","特别提醒","2015.05.03","REDSFDSFFDGGFD","请勿恶意攻击我们老板",true],
					["REDSFDSFFDGGFD","特别提醒","2015.05.03","REDSFDSFFDGGFD","请勿恶意攻击我们老板",true]
				]
				});
				model.reflash();
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
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
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(modelA){
						modelA.clean();
						modelA.show();
						page(model);
					callback();
						});
					},{w:"100%"});
					
				});
			
			}
		});
	})($,app,config);