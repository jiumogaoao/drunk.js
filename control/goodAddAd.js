// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodAddAd",
		par:[],
		fn:function(data){
			function page(){
				obj.model.get("#acMain","goodAddAd","formInput",function(model){
				model.set({
					title:"商品添加",
					list:[
					{name:"",title:"商品名",placeholder:"请填写商品名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"所属项目",placeholder:"",type:"select",value:"",valuelabel:"请选择所属项目",option:[{label:"",value:""}]},
					{name:"",title:"所属分类",placeholder:"",type:"select",value:"",valuelabel:"请选择所属分类",option:[{label:"",value:""}]},
					{name:"",title:"商品价格",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"商品份数",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"预约时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"启动金额",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"开始时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"是否可转让",placeholder:"",type:"select",value:"",valuelabel:"是否可转让",option:[{label:"是",value:"1"},{label:"否",value:"0"}]},
					{name:"",title:"年化率",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"转让费用",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"地点",placeholder:"",type:"place",value:["",""],valuelabel:["",""],option:
					{"a":{label:"",value:"",option:[{label:"",value:""}]}}
					},
					{name:"",title:"建筑类型",placeholder:"",type:"select",value:"",valuelabel:"建筑类型",option:[{label:"是",value:"1"},{label:"否",value:"0"}]},
					{name:"",title:"建筑阶段",placeholder:"",type:"select",value:"",valuelabel:"建筑类型",option:[{label:"是",value:"1"},{label:"否",value:"0"}]},
					{name:"",title:"展示图片",placeholder:"",type:"pic",value:"",valuelabel:"",option:[]},
					{name:"",title:"概述",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[]},
					],
					button:[{id:"sendAdd",text:"确认提交"}]
					});
				model.reflash();
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
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(model){
						model.clean();
						model.show();
						page();
					callback()
						});
					},{w:"100%"});
					
				})
			
			}
		});
	})($,app,config);