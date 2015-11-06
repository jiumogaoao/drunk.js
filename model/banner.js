// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"banner",
		css:["banner_all"],
		html:["banner_all"],
		fn:function(){
			var data={};
			/*{
				image:[{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}],
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:0
				};*/
			var source=this;
			source.setType=function(type){
				data.type=type;
				}
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				obj.api.tk(function(tk){
					var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find("#login").unbind("click").bind("click",function(){
							obj.model.get("#pop","login","login",function(modelB){
								modelB.type(0);
								modelB.callback=function(result){
									result.data.tk=tk;
									obj.api.run("login",result.data,function(returnData){
									data.type=returnData.type;
									source.reflash();
										},function(){})
									
									};
						modelB.show();
						app.pop.show();
						});
							});
				source.target.find("#regist").unbind("click").bind("click",function(){
							obj.model.get("#pop","login","login",function(model){
								model.type(1);
								model.callback=function(result){
									result.data.tk=tk;
									obj.api.run("register",result.data,function(){
										data.type=1;
										source.reflash();
										},function(){})
									
									};
						model.show();
						app.pop.show();
						});
							});
				source.target.find("#userCenter").unbind("click").bind("click",function(){
					if(data.type===1){
						obj.hash("myAccount");
						}
					if(data.type===2){
						obj.hash("dealListAd");
						}
					});
				source.target.find("#esc").unbind("click").bind("click",function(){
					obj.cookies("tk",null,true);
					data.type=0;
					source.reflash();
					});
				source.target.find(".bottom .point").unbind("click").bind("click",function(){
					if($(this).attr("oid")){
						app.hash("list/"+$(this).attr("oid"));
						}
					});
					})
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);