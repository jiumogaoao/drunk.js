// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var productArry=[];
			function headLayput(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
			$("#head").hide();
			$("#spaceTop").hide();
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
				model.goto("pageOne",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===3){
							fn();
							}
						}
					obj.model.get(target,"banner","banner",function(modelA){
						modelA.set({
				image:[{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}],
				object:objArry,
				type:0
				});
				obj.api.run("tk_get",{tk:tk},function(returnData){
							modelA.setType(returnData.user.type||0);
							modelA.reflash();
							modelA.show();
							callback(model);
							},function(){});
						});
					obj.model.get(target,"navIndex","navIndex",function(modelA){
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"listIndex","listIndex",function(modelA){
						$.each(productArry,function(i,n){
							if(!objArry[n.object].list){
								objArry[n.object].list=[];
								}
								objArry[n.object].list.push(n);
							})
						modelA.set({
				list:objArry,
				type:typeArry
				});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					},{w:"100%"});
					
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount==3){
						headLayput();
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
				obj.api.run("product_get",{tk:tk},function(returnData){
					productArry=returnData;
					callbackfn()
					},function(){})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);