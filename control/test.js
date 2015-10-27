// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"test",
		par:[],
		fn:function(data){
			$("body").hide();
			obj.api.run("obj_get",null,function(returnData){
				debugger;
				},function(err){
					console.log(err);
					});
			}
		});
	})($,app,config);