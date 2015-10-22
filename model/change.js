// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"change",
		css:["pop_all"],
		html:["change_all"],
		fn:function(){
			
			var source=this;
			//init
			source.init=function(){
				source.target.html(source.css[0]+source.html[0]);
				};
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);