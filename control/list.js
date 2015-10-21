// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"list",
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
				model.goto("pageTree",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count==5){
							fn();
							}
						}
					obj.model.get(target,"productList1","productList",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"pomoTableA","pomoTableA",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"productList2","productList",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"pomoTableB","pomoTableB",function(model){
						model.show();
					callback()
						});
					obj.model.get(target,"productList3","productList",function(model){
						model.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);