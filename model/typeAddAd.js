// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"typeAddAd",
		css:["form_input"],
		html:["type_add_ad"],
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