// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myDetail",
		par:[],
		fn:function(data){
			function page(sg){
				obj.model.get("#ucMain","myDetail","formInput",function(model){
				model.set({
					title:"基本资料",
					nav:[{id:"",title:"实名认证"},{id:"",title:"银行卡绑定"}],
					list:[
					{name:"",title:"手机",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"邮箱",placeholder:"请填写邮箱",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"头像",placeholder:"支持JPG,JPEG,GIF,PNG,BMP格式，且不超过5M",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"昵称",placeholder:"请填写昵称",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"简介",placeholder:"",type:"textArea",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"保存"}]
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
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.reflash();
						modelA.change("myDetail");
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						});
					},{w:"100%"});
					
				});
			
			}
		});
	})($,app,config);