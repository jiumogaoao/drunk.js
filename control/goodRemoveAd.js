// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodRemoveAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry={};
			var typeArry={};
			var list=[];
			function page(sg){
				var showList=[];
				$.each(list,function(i,n){
					showList.push(
					{id:n.id,main:[n.id,n.title,objArry[n.object].name,typeArry[n.type].name,"￥"+n.price,n.copy,n.payedMember,n.payedMoney,moment(n.orderTime,"x").format("YYYY-MM-DD"),"￥"+(n.passNumber*n.price),moment(n.stratTime,"x").format("YYYY-MM-DD"),"预约中"]}
					);
					});
				obj.model.get("#acMain","goodRemoveAd","formTable",function(model){
				model.set({
				title:"商品列表",
				button:[{id:"sendRemove",text:"提交删除"}],
				head:[
					{"title":"商品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"项目","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"类型","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"单价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"总份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"总人数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"已筹金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"预约时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"启动金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开始时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"删除","type":"checkbox","name":"remove","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
				model.target.find("#sendRemove").unbind("click").bind("click",function(){
					obj.api.run("product_remove",{tk:tk,list:model.result().remove},function(){
						obj.hash("goodListAd");
						},function(e){});
					});
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
						modelA.change("goodRemoveAd");
						modelA.clean();
						modelA.show();
						page(model);
					callback();
						});
					},{w:"100%"});
					
				});
				}
			
			function getObj(tka){
				tk=tka;
				var callbackCount=0;
				function callback(){
					callbackCount++;
					if(callbackCount==3){
						headLayout();
						footLayout();
						mainLayout();
						}
					}
				obj.api.run("product_get",null,function(returnData){
					console.log(returnData);
					list=returnData;
					callback();
					},function(e){});
				obj.api.run("obj_get",null,function(returnData){
					objArry=_.indexBy(returnData,"id");
					callback();
					},function(e){});
				obj.api.run("type_get",null,function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callback();
					},function(e){});
				}
			obj.api.tk(getObj);
			}
		});
	})($,app,config);