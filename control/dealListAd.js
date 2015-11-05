// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealListAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var dealList=[];
			var product=[];
			function page(sg){
				obj.model.get("#acMain","dealListAd","formTable",function(model){
				model.set({
				title:"交易列表",
				button:[],
				head:[
					{"title":"交易编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"账号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"买入价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"],
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"]
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
				type:0
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
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(modelA){
						modelA.reflash();
						modelA.change("dealListAd");
						modelA.clean();
						modelA.show();
						page(model);
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
					if(callbackcount==4){
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
				obj.api.run("deal_getAll",{tk:tk},function(returnData){
					dealList=returnData;
				},function(){});
				obj.api.run("product_get",{tk:tk},function(returnData){
					var now=new Date().getTime();
					$.each(returnData,function(i,n){
						if(n.orderTime<=now){
							product.push(n)
						}
					})
					product=_.indexBy(product,"id");
				},function(){});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);