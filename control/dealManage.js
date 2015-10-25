// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealManage",
		par:["object"],
		fn:function(data){
			function page(){
				obj.model.get("#ucMain","dealManage"+data.object,"formTable",function(model){
					model.set({
				title:"交易列表",
				button:[],
				head:[
					{"title":"交易编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"现价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"资金总额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"结束时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"操作","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","星星花园","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","99999999999.99","2015.10.04","2015.10.04",'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>'],
					["REDSFDSFFDGGFD","星星花园","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","99999999999.99","2015.10.04","2015.10.04",'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>']
				]
				});
					model.reflash();
				model.show();
				});
				}
			obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:2
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
						if(count==1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){modelA.reflash();
						modelA.change("dealManage/"+data.object);
						modelA.clean();
						page();
						modelA.show();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);