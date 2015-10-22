// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"banner",
		css:["banner_all"],
		html:["banner_all"],
		fn:function(){
			
			var source=this;
			//init
			source.init=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.target.find("#login").unbind("click").bind("click",function(){
					
					});
				/*
				obj.model.get("#pop","login","login",function(model){
				model.show();
				app.pop.show();
				});
				
				obj.model.get("#pop","buy","buy",function(model){
				model.show();
				app.pop.show();
				});
				
				obj.model.get("#pop","sale","sale",function(model){
				model.show();
				app.pop.show();
				});
				
				obj.model.get("#pop","order","order",function(model){
				model.show();
				app.pop.show();
				});
				*/
				obj.model.get("#pop","change","change",function(model){
				model.show();
				app.pop.show();
				});
				};
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);