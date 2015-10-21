// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"adminCenterTem",
		css:["user_center_tem"],
		html:["admin_center_tem"],
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