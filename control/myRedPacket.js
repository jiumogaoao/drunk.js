// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myRedPacket",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","myRedPacket","formTable",function(model){
				model.set({
				title:"红包记录",
				button:[],
				head:[
					{"title":"红包编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"红包金额/元","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发放时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"有效时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发放规则","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","99999999999.99","2015.10.04","2015.10.04","已过期","注册后第一次登录奖励"],
					["REDSFDSFFDGGFD","99999999999.99","2015.10.04","2015.10.04","已过期","注册后第一次登录奖励"]
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
						modelA.change("myRedPacket");
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