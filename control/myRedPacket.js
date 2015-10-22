// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myRedPacket",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","myRedPacket","myRedPacket",function(model){
				model.show();
				});
				}
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
						if(count==1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(model){
						model.clean();
						page();
						model.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);