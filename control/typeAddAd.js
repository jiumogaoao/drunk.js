// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeAddAd",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#acMain","typeAddAd","formInput",function(model){
				model.set({
					title:"类型添加",
					nav:[],
					list:[
					{name:"",title:"类型名",placeholder:"请填写类型名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"确认提交"}]
					});
				model.reflash();
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
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
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(modelA){
						modelA.reflash();
						modelA.change("typeAddAd");
						modelA.clean();
						modelA.show();
						page(model);
					callback();
						});
					},{w:"100%"});
					
				});
			
			}
		});
	})($,app,config);