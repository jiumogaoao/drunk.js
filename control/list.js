// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"list",
		par:["object"],
		fn:function(data){
			var objArry={};
			var typeArry={};
			var list=[];
			function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.change(data.object);
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
				console.log(list)
				var now=new Date().getTime();
				var nostart=[];
				var started=[];
				var end=[]
				$.each(list,function(i,n){
					console.log("*****")
					console.log(now)
					console.log(n.orderTime)
					console.log(n.stratTime)
					console.log(n.payedCount)
					console.log(n.passNumber)
					console.log(n.copy)
					if(n.orderTime<now){
						if(n.stratTime<now){
							nostart.push(n);
							}else if(n.stratTime<=now&&n.payedCount>=n.passNumber&&n.payedCount<n.copy){
								started.push(n)
								}else{
									end.push(n)
									}
						}
					})
					debugger;
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTree",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===5){
							fn();
							}
						}
					obj.model.get(target,"productList1","productList",function(modelA){
						modelA.set({list:end,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"pomoTableA","pomoTableA",function(modelA){
						modelA.set({image:[
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}
			]
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"productList2","productList",function(modelA){
						modelA.set({list:started,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"pomoTableB","pomoTableB",function(modelA){
						modelA.set({image:[
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}
			]
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"productList3","productList",function(modelA){
						modelA.set({list:nostart,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					},{w:"100%"});
					
				});
				}
			
			function getObj(tk){
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
					list=[];
					$.each(returnData,function(i,n){
						if(n.object==data.object){
							list.push(n)
							}
						})
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