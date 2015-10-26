// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"head",
		css:["head_all"],
		html:["head_all"],
		fn:function(){
			var data={};
			/*{
				object:[{id:"",name:"产权众筹"},{id:"",name:"经营权众筹"},{id:"",name:"众筹建房"}],
				type:0
				}*/
			var object="all";
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.change(object);
				source.target.find("#login").unbind("click").bind("click",function(){
					obj.model.get("#pop","login","login",function(model){
						model.type(0);
						model.callback=function(result){
							data.type=1;
							source.reflash();
							};
				model.show();
				app.pop.show();
				});
					});
				source.target.find("#regist").unbind("click").bind("click",function(){
					obj.model.get("#pop","login","login",function(model){
						model.type(1);
						model.callback=function(result){
							data.type=1;
							source.reflash();
							};
				model.show();
				app.pop.show();
				});
					});
				source.target.find(".point.object").unbind("click").bind("click",function(){
						app.hash("list/"+$(this).attr("oid"));
					});
				source.target.find("[oid='index']").unbind("click").bind("click",function(){
					app.hash("index");
					});
				source.target.find("#userCenter").unbind("click").bind("click",function(){
					app.hash("myAccount");
					});
				};
			source.change=function(id){
				source.target.find(".point").removeClass("hl");
				source.target.find(".point[oid='"+id+"']").addClass("hl");
				object=id;
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);