// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"detail",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var product={};
			var redpacket={};
			var account={};
			var user={};
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
					obj.model.get(target,"detailAll","detailAll",function(modelA){
						product.buy=0;
						product.user={}
						if(user&&user.id){
							product.user={
							balance:user.balance,
							redpacket:user.redpacket
						}
						}
						product.buildtypeArry=["农民房","商品房","商铺"];
						product.buildStateArry=["未建","在建","新房","二手房"];
						var now=new Date().getTime();
						if(product.orderTime<now){
							if(product.stratTime>now){
								product.tag=0;
							}else if(product.stratTime<now&&product.payedCount>=product.passNumber&&product.payedCount<product.copy){
								product.tag=1;
							}else{
								product.tag=2;
							}
						}
						modelA.set(product);
						modelA.refalsh();
						modelA.target.find(".numSub").unbind("click").bind("click",function(){
							if(product.buy>1){
								product.buy--;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").html("支持 ￥"+(product.price*product.buy));
								modelA.target.find("#buyButton").show();
							}else{
								product.buy=0;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").hide();
							}
						});
						modelA.target.find(".numAdd").unbind("click").bind("click",function(){
							var maxValue=((product.copy-product.payedCount)<Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price))?(product.copy-product.payedCount):Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price);
							if(product.buy<=maxValue-1){
								product.buy++;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").html("支持 ￥"+(product.price*product.buy));
								modelA.target.find("#buyButton").show();
							}
						});
						modelA.target.find(".numInput").unbind("change").bind("change",function(){
							var maxValue=((product.copy-product.payedCount)<Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price))?(product.copy-product.payedCount):Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price);
							product.buy=Number($(this).val());
							console.log(maxValue)
							console.log(product.buy)
							if(product.buy>maxValue){
								product.buy=maxValue;
							}
							$(this).val(product.buy);
						});
						modelA.show();
					$('img').load(function(){
				model.reflash();
				});	
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
				obj.api.run("product_detail",{tk:tk,id:data.id},function(returnData){
					product=returnData;
					callbackfn()
					},function(){})
				obj.api.run("tk_get",{tk:tk},function(returnData){
					user=returnData.user;
					console.log(user);
					callbackfn()
					},function(){})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);