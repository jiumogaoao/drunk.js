// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"pop",
		css:["pop_all"],
		html:["pop_all"],
		fn:function(){
			var data={};
			/*{
				title:"",
				button:[{id:"",text:""}],
				list:[
					{name:"",title:"",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]}
				]
				}*/
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find(".close").unbind("click").bind("click",function(){
					app.pop.hide();
					})
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);