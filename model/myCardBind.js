// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"myCardBind",
		css:["form_input"],
		html:["my_card_bind"],
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