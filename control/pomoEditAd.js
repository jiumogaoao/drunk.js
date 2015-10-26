// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoEditAd",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#acMain","pomoEditAd","formTable",function(model){
				model.set({
				title:"用户列表",
				button:[{id:"",text:"提交修改"}],
				head:[
					{"title":"广告编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"广告位","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"广告图","type":"input","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"超链接","type":"input","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","头部（一）","http://www.baidu.com","http://www.baidu.com"],
					["REDSFDSFFDGGFD","头部（一）","http://www.baidu.com","http://www.baidu.com"]
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