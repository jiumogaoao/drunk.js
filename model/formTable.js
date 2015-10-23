// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formTable",
		css:["form_table"],
		html:["form_table"],
		fn:function(){
			var data={};
			/*
			var data={
				title:"交易列表",
				button:[{id:"",text:""}],
				head:[
					{"title":"交易编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"账号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"买入价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"],
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"]
				]
				};
				*/
			var source=this;
			//init
			source.init=function(){
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				}
			//set
			source.set=function(setData){
				data=setData;
				};
			}
		});
	})($,app,config);