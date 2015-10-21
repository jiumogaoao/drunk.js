// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"pomoTableA",
		css:["pomo_table_A"],
		html:["pomo_table_A"],
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