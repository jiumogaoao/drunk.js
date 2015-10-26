// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodEditAd",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#acMain","goodEditAd","formTable",function(model){
				model.set({
				title:"商品列表",
				button:[],
				head:[
					{"title":"商品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"项目","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"类型","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品价格","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"总份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"总人数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"总金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"预约时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"启动金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开始时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"修改","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","星星花园","产品","热门","￥999","99","99","￥999","20150503","20150503","20150503",'<div class="button">修改</div>'],
					["REDSFDSFFDGGFD","星星花园","产品","热门","￥999","99","99","￥999","20150503","20150503","20150503",'<div class="button">修改</div>']
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