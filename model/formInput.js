// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formInput",
		css:["form_input"],
		html:["form_input"],
		fn:function(){
			/*
			{
					title:"",
					nav:[{id:"",title:""}],
					list:[
					{name:"",title:"",placeholder:"",type:"",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:""}]
					};
			*/
			var data={};
			var source=this;
			//init
			source.init=function(){
				source.target.html();
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				};
			//set
			source.set=function(setData){
				data=setData;
				};
			}
		});
	})($,app,config);