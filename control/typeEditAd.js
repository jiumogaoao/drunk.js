// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeEditAd",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#acMain","projectEditAd","formTable",function(model){
				model.set({
				title:"类型列表",
				button:[{id:"",text:"提交修改"}],
				head:[
					{"title":"类型编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"类型名","type":"input","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"正在进行的商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","热门城市","99","99"],
					["REDSFDSFFDGGFD","热门城市","99","99"]
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