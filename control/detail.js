// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"detail",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var product={};
			var redpacket={};
			var account={};
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
					obj.model.get(target,"detailAll","detailAll",function(modelA){
						modelA.set({"id":"",/*id*/
		"title":"星星花园",/*标题*/
		"subhead":"第一期",/*副标题*/
		"image":["img/pic.jpg","img/pic.jpg","img/pic.jpg","img/pic.jpg"],/*图片*/
		"price":9999,/*金额*/
		"copy":100,/*份数*/
		"payedCount":9,/*已众筹笔数*/
		"payedMoney":99,/*已众筹金额*/
		"payedMember":3,/*已众筹人数*/
		"maxTime":1024,/*持有期限*/
		"tax":1,/*税费预算*/
		"stratTime":1024,/*开始时间*/
		"yearReturn":10,/*年收益率*/
		"more":10,/*增值*/
		"dsc":"",//简介
		"change":10,//债权转移费用
		"invite":"",/*介绍人*/
		"inviteMoney":"",/*介绍费*/
		"object":"",/*项目*/
		"type":"",/*类型*/
		"tag":"0",/*标签*/
		"orderTime":2233,/*预约时间*/
		"passNumber":3443,/*通过份数*/
		"place":"广东广州",/*地点*/
		"buildtype":"住宅",/*建筑类型*/
		"buildState":"在建",/*建筑阶段*/
		"detail":"img/detail.jpg",/*详情*/
		"com":[
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			},
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			},
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"},
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			}
			],
		"member":[
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"},
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"},
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"},
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"},
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"},
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"}
		],
		"balance":999,
		"reckpacket":99
		});
						modelA.refalsh();
						modelA.show();
					$('img').load(function(){
				model.reflash();
				});	
					callback();
					
						});
					},{w:"100%"});
					
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount==3){
						headLayout();
				footLayout();
				mainLayout();
						}
					}
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn()
					},function(){})
				obj.api.run("product_detail",{tk:tk},function(returnData){
					product=returnData;
					callbackfn()
					},function(){})
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);