// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"search",
		par:[],
		fn:function(data){
			obj.model.get("#head","headSimple","head",function(model){
				model.show();
				});
			obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
			obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count==2){
							fn();
							}
						}
					obj.model.get(target,"searchList","searchList",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"productList","productList",function(model){
						model.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);