// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodEditDetailAd",
		par:['id'],
		fn:function(data){
			var tk="";
			var list={};
			function page(sg,tk,ob,type){
				var objArry={};
				$.each(ob,function(i,n){
					objArry[n.id]={label:n.name,value:n.id};
					});
				var typeArry={};
				$.each(type,function(i,n){
					typeArry[n.id]={label:n.name,value:n.id};
					});
				obj.model.get("#acMain","goodEditDetailAd","formInput",function(model){
				model.setResult(list[data.id]);
				model.set({
					title:"商品添加",
					nav:[],
					list:[
					{name:"title",title:"商品名",placeholder:"请填写商品名",type:"input",value:list[data.id].title,valuelabel:"",option:[{label:"",value:""}]},
					{name:"object",title:"所属项目",placeholder:"",type:"select",value:list[data.id].object,valuelabel:"请选择所属项目",option:objArry},
					{name:"type",title:"所属分类",placeholder:"",type:"select",value:list[data.id].type,valuelabel:"请选择所属分类",option:typeArry},
					{name:"price",title:"商品价格",placeholder:"",type:"number",value:list[data.id].price,valuelabel:"",option:[{label:"",value:""}]},
					{name:"copy",title:"商品份数",placeholder:"",type:"number",value:list[data.id].copy,valuelabel:"",option:[{label:"",value:""}]},
					{name:"orderTime",title:"预约时间",placeholder:"",type:"time",value:list[data.id].orderTime,valuelabel:"",option:[{label:"",value:""}]},
					{name:"passNumber",title:"通过份数",placeholder:"",type:"number",value:list[data.id].passNumber,valuelabel:"",option:[{label:"",value:""}]},
					{name:"stratTime",title:"开始时间",placeholder:"",type:"time",value:list[data.id].stratTime,valuelabel:"",option:[{label:"",value:""}]},
					{name:"canChange",title:"是否可转让",placeholder:"",type:"select",value:list[data.id].canChange,valuelabel:"是否可转让",option:{"1":{label:"是",value:"1"},"0":{label:"否",value:"0"}}},
					{name:"yearReturn",title:"年化率",placeholder:"",type:"number",value:list[data.id].yearReturn,valuelabel:"",option:[{label:"",value:""}]},
					{name:"change",title:"转让费用",placeholder:"",type:"number",value:list[data.id].change,valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"地点",placeholder:"",type:"longInput",value:list[data.id].place,valuelabel:"",option:
					[{label:"",value:""}]
					},
					{name:"buildtype",title:"建筑类型",placeholder:"",type:"select",value:list[data.id].buildtype,valuelabel:"建筑类型",option:{"1":{label:"是",value:"1"},"0":{label:"否",value:"0"}}},
					{name:"buildState",title:"建筑阶段",placeholder:"",type:"select",value:list[data.id].buildState,valuelabel:"建筑类型",option:{"1":{label:"是",value:"1"},"0":{label:"否",value:"0"}}},
					{name:"image",title:"展示图片",placeholder:"",type:"pic",value:list[data.id].image,valuelabel:"",option:[]},
					{name:"dsc",title:"概述",placeholder:"",type:"textarea",value:list[data.id].dsc,valuelabel:"",option:[]},
					{name:"detail",title:"详情",placeholder:"",type:"pic",value:list[data.id].detail,valuelabel:"",option:[]}
					],
					button:[{id:"sendEdit",text:"确认提交"}]
					});
				
				model.reflash();
				model.target.find("#sendEdit").unbind("click").bind("click",function(){
					var sendResult=model.result();
					sendResult.tk=tk;
					debugger;
					obj.api.run("product_edit",sendResult,function(addReturn){
						obj.hash("goodListAd");
						},function(e){});
					});	
				model.show();
				sg.reflash();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
			function getHead(tk,ob){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:ob,
				type:0
				});
				model.reflash();
				model.show();
				});
				}
			function getFoot(tk){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function getmain(tk,ob){
				var type=[];
				ob=_.indexBy(ob,'id');
				var count=0;
				var callbackCount=function(){
					count++;
					if(count==2){
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
									modelA.change("goodAddAd");
									modelA.clean();
									modelA.show();
									page(model,tk,ob,type);
								callback();
									});
								},{w:"100%"});
								
							});
						}
						
						
					}
				obj.api.run("product_get",{tk:tk},function(returnData){
					list=_.indexBy(returnData,'id');
					callbackCount();
					},function(e){})	
				obj.api.run("type_get",null,function(returnData){
					type=_.indexBy(returnData,'id');
					callbackCount();
					},function(e){});
				
				}
			function getcommon(tka){
				tk=tka;
				obj.api.run("obj_get",null,function(returnData){
					getHead(tk,returnData);
					getFoot(tk);
					getmain(tk,returnData);
					},function(e){})
				}
			obj.api.tk(getcommon);
			}
		});
	})($,app,config);