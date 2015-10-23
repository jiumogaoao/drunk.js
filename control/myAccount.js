// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myAccount",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","myAccount","formTable",function(model){
				model.set({
				title:"收支记录",
				button:[],
				head:[
					{"title":"收支编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支金额/元","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支类型","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支摘要","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","99999999999.99","2015.10.04","充值","充值还要写理由吗~"],
					["REDSFDSFFDGGFD","99999999999.99","2015.10.04","充值","充值还要写理由吗~"]
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