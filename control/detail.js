// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"detail",
		par:[],
		fn:function(data){
			obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:0
				});
				model.reflash();
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
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"detailAll","detailAll",function(modelA){
						modelA.show();
					$('img').load(function(){
				model.reflash();
				});	
					callback();
					
						});
					},{w:"100%"});
					
				});
			
			}
		});
	})($,app,config);