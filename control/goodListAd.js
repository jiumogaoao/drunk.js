// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodListAd",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","goodListAd","formTable",function(model){
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
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","星星花园","产品","热门","￥999","99","99","￥999","20150503","20150503","20150503","预约中"],
					["REDSFDSFFDGGFD","星星花园","产品","热门","￥999","99","99","￥999","20150503","20150503","20150503","预约中"]
				]
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