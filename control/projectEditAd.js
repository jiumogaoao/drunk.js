// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"projectEditAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list=[];
			function page(sg){
				var showList=[];
				$.each(list,function(i,n){
					showList.push({id:n.id,main:[n.id,n.name,"99","99"]});
					});
				obj.model.get("#acMain","projectEditAd","formTable",function(model){
				model.set({
				title:"项目列表",
				button:[{id:"editSend",text:"提交修改"}],
				head:[
					{"title":"项目编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"项目名","type":"input","name":"name","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"正在进行的商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
				model.target.find("#editSend").unbind("click").bind("click",function(){
					var sendList=[];
					$.each(model.result(),function(i,n){
						sendList.push(n)
						})
					obj.api.run("obj_edit",{tk:tk,list:sendList},function(){
						obj.hash("projectListAd");
						},function(e){alert(e)});
					});
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
			function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:list,
				type:0
				});
				model.reflash();
				model.show();
				});
				}
			function footLayout(){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function mainLayout(){
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
						modelA.change("projectEditAd");
						modelA.clean();
						modelA.show();
						page(model);
					callback();
						});
					},{w:"100%"});
					
				});
				}
			
			function getObj(tka){
				tk=tka;
				obj.api.run("obj_get",{tk:tk},function(returnData){
					list=returnData;
					headLayout();
					footLayout();
					mainLayout();
					},function(e){alert(e)})
				}
			obj.api.tk(getObj);
			}
		});
	})($,app,config);