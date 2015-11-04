// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myRedPacket",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			function page(sg){
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
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
				function headLayout(){
					obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:2
				});
				model.reflash();
				model.show();
				});
					}
				function footLayout(){
					obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
					}
				function mainLayout(){
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
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.set({
							object:objArry
						})
						modelA.reflash();
						modelA.change("myRedPacket");
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						});
					},{w:"100%"});
					
				});
					}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount==2){
						headLayout();
				footLayout();
				mainLayout();
						}
					}
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);