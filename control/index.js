// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:[],
		fn:function(data){
			obj.model.get("#head","headSimple","head",function(model){
				model.show();
				});
			$("#head").hide();
			$("#spaceTop").hide();
			obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
			obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageOne",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count==3){
							fn();
							}
						}
					obj.model.get(target,"banner","banner",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"navIndex","navIndex",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"listIndex","listIndex",function(model){
						model.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);