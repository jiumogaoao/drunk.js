// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"userCenterTem",
		css:["user_center_tem"],
		html:["user_center_tem"],
		fn:function(){
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
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				change();
				source.target.find(".group_tem").unbind("click").bind("click",function(){
					source.target.find(".group_tem").removeClass("hl");
					$(this).addClass("hl");
					});
				source.target.find(".point_tem").unbind("click").bind("click",function(){
					obj.hash($(this).attr("pid"));
					});
				}
			source.change=function(id){
				point=id;
				change();
				}
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);