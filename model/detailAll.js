// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"detailAll",
		css:["detail_all"],
		html:["detail_all"],
		fn:function(){
			
			var source=this;
			//init
			source.init=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.target.find(".nav .point").unbind("click").bind("click",function(){
					source.target.find(".desc,.com,.member").hide();
					source.target.find("."+$(this).attr("pid")).show();
					source.target.find(".nav .point").removeClass("hl");
					$(this).addClass("hl");
					});
				};
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);