// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodAddAd",
		par:[],
		fn:function(data){
			function page(sg,tk,ob,type){
				var objArry=[];
				$.each(ob,function(i,n){
					objArry.push({label:n.name,value:n.id});
					});
				var typeArry=[];
				$.each(type,function(i,n){
					typeArry.push({label:n.name,value:n.id});
					});
				obj.model.get("#acMain","goodAddAd","formInput",function(model){
				model.set({
					title:"商品添加",
					nav:[],
					list:[
					{name:"title",title:"商品名",placeholder:"请填写商品名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"object",title:"所属项目",placeholder:"",type:"select",value:"",valuelabel:"请选择所属项目",option:objArry},
					{name:"type",title:"所属分类",placeholder:"",type:"select",value:"",valuelabel:"请选择所属分类",option:typeArry},
					{name:"price",title:"商品价格",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"copy",title:"商品份数",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"orderTime",title:"预约时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"passNumber",title:"通过份数",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"stratTime",title:"开始时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"canChange",title:"是否可转让",placeholder:"",type:"select",value:"",valuelabel:"是否可转让",option:[{label:"是",value:"1"},{label:"否",value:"0"}]},
					{name:"yearReturn",title:"年化率",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"change",title:"转让费用",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:
					[{label:"",value:""}]
					},
					{name:"buildtype",title:"建筑类型",placeholder:"",type:"select",value:"",valuelabel:"建筑类型",option:[{label:"商铺",value:"2"},{label:"商品房",value:"1"},{label:"农民房",value:"0"}]},
					{name:"buildState",title:"建筑阶段",placeholder:"",type:"select",value:"",valuelabel:"建筑阶段",option:[{label:"二手房",value:"3"},{label:"新房",value:"2"},{label:"在建",value:"1"},{label:"未建",value:"0"}]},
					{name:"image",title:"展示图片",placeholder:"",type:"pic",value:"",valuelabel:"",option:[]},
					{name:"dsc",title:"概述",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[]},
					{name:"detail",title:"详情",placeholder:"",type:"pic",value:"",valuelabel:"",option:[]}
					],
					button:[{id:"sendAdd",text:"确认提交"}]
					});
				
				model.reflash();
				model.target.find("#sendAdd").unbind("click").bind("click",function(){
					var sendResult=model.result();
					sendResult.tk=tk;
					obj.api.run("product_add",sendResult,function(addReturn){
						obj.hash("goodListAd");
						},function(e){alert(e);});
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
				var callbackCount=function(){
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
										modelA.change("goodAddAd");
										modelA.clean();
										modelA.show();
										page(model,tk,ob,type);
										callback();
									};
									modelA.reflash();
									
									});
								},{w:"100%"});
								
							});
						
					};
				obj.api.run("type_get",null,function(returnData){
					type=returnData;
					callbackCount();
					},function(e){alert(e);});
				
				}
			function getcommon(tk){
				obj.api.run("obj_get",null,function(returnData){
					getHead(tk,returnData);
					getFoot(tk);
					getmain(tk,returnData);
					},function(e){alert(e);});
				}
			obj.api.tk(getcommon);
			}
		});
	})($,app,config);