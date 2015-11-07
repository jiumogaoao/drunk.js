// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"userCenterTem",
		css:["user_center_tem"],
		html:["user_center_tem"],
		fn:function(){
			var tk="";
			var data={
				object:[
					{id:"a",name:"产权众筹"},
					{id:"b",name:"经营权众筹"},
					{id:"c",name:"众筹建房"},
				]
				};
			var point="myAccount";
			function change(){
				source.target.find(".point_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").addClass("hl");
				source.target.find(".group_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").parents(".group_tem").addClass("hl");
				}
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				
				function layout(tk){
					var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find("#moneyIn").unbind("click").bind("click",function(){
					obj.model.get("#pop","moneyIn","pop",function(model){
						model.set({
						title:"充值确认",
						button:[{id:"inSend",text:"确认充值"}],
						list:[
							{name:"number",title:"充值金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}
						]
						});
						model.reflash();
						model.target.find("#inSend").unbind("click").bind("click",function(){
							var sendData=model.result();
							sendData.tk=tk;
							obj.api.run("money_in",sendData,function(){
								alert("充值成功")
								window.location.reload();
							},function(e){alert(e)})
						});
						model.show();
						app.pop.show();
					});
				});
				source.target.find("#moneyOut").unbind("click").bind("click",function(){
					obj.model.get("#pop","moneyOut","pop",function(model){
						model.set({
						title:"提现确认",
						button:[{id:"outSend",text:"确认提现"}],
						list:[
							{name:"number",title:"提现金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}
						]
						});
						model.reflash();
						model.target.find("#outSend").unbind("click").bind("click",function(){
							var sendData=model.result();
							sendData.tk=tk;
							obj.api.run("money_out",sendData,function(){
								alert("提现成功")
								window.location.reload();
							},function(e){alert(e)})
						});
						model.show();
						app.pop.show();
					});
				});
				change();
				source.target.find(".group_tem").unbind("click").bind("click",function(){
					source.target.find(".group_tem").removeClass("hl");
					$(this).addClass("hl");
					});
				source.target.find(".point_tem").unbind("click").bind("click",function(){
					obj.hash($(this).attr("pid"));
					});
				}
				obj.api.tk(layout);
				};
			source.change=function(id){
				point=id;
				change();
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
			};
			}
		});
	})($,app,config);