// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoEditAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list=[];
			function page(sg){
				obj.model.get("#acMain","pomoEditAd","formTable",function(model){
					var showList=[];
					$.each(list,function(i,n){
						showList.push({id:n.id,main:[n.id,n.name,n.image,n.link]});
						});
				model.set({
				title:"用户列表",
				button:[{id:"editSend",text:"提交修改"}],
				head:[
					{"title":"广告编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"广告位","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"广告图","type":"input","name":"image","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"超链接","type":"input","name":"link","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
				model.target.find("#editSend").unbind("click").bind("click",function(){
					var sendMessage=[];
					$.each(model.result(),function(i,n){
						sendMessage.push(n);
						});
					sendMessage.tk=tk;
					obj.api.run("promo_edit",{tk:tk,list:sendMessage},function(){
						obj.hash("pomoListAd");
						},function(e){alert(e);});
					});
				model.show();
				sg.reflash();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
				function headLayout(){
					obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
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
						modelA.callback=function(){
							modelA.change("pomoEditAd");
							modelA.clean();
							modelA.show();
							page(model);
							callback();
						};
						modelA.reflash();
						});
					},{w:"100%"});
					
				});
					}
			
				function getList(tka){
					tk=tka;
					var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						headLayout();
				footLayout();
				mainLayout();
						}
					};
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
					obj.api.run("promo_get",{tk:tk},function(returnData){
						list=returnData;
						callbackfn();
						},function(e){alert(e);});
					}
			obj.api.tk(getList);
			}
		});
	})($,app,config);