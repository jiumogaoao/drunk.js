// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"search",
		par:["object","type"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
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
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===2){
							fn();
							}
						}
					obj.model.get(target,"searchList","searchList",function(modelA){
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"productList","productList",function(modelA){
						modelA.set({list:[
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
			],
			type:{
					"a":{name:"热门城市",id:"a"},"b":{name:"热门地区",id:"b"},"c":{name:"潜力地区",id:"c"}
				}
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