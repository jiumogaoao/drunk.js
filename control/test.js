// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"test",
		par:[],
		fn:function(data){
			$("body").hide();
			obj.api.tk(function(tk){
				obj.api.run("com_get",null,function(returnData){
				debugger;
				},function(err){
					console.log(err);
					});
				});
			
			}
		});
	})($,app,config);