// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"searchList",
		css:["search_list"],
		html:["search_list"],
		fn:function(){
			var data={
				typeList:[{id:"a",name:"热门地区"},{id:"b",name:"热门城市"},{id:"c",name:"潜力地区"}],
				stateList:[{id:"a",name:"预约中"},{id:"b",name:"进行中"},{id:"c",name:"已结束"}],
				orderList:[{id:"a",name:"时间"},{id:"b",name:"人气"},{id:"c",name:"金额"}]
				};
			var callback={
				type:"all",
				state:"all",
				order:"all"
				}
			var source=this;
			source.callback=function(callback){
				
				}
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find(".point").unbind("click").bind("click",function(){
					source.change($(this).parents(".list").attr("searchType"),$(this).attr("pid"))
					});
				}
			source.change=function(searchType,id){
				source.target.find("."+searchType+" .point").removeClass("hl")
				source.target.find("."+searchType+" .point[pid='"+id+"']").addClass("hl")
				callback[searchType]=id;
				source.callback(callback);
				}
			
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);