// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"orderListAd",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","orderListAd","orderListAd",function(model){
				model.set({
				title:"预约列表",
				button:[],
				head:[
					{"title":"预约编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"账号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"预约价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"预约份","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"预约时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"结束时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99","2015.10.04","2015.10.04"],
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99","2015.10.04","2015.10.04"]
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