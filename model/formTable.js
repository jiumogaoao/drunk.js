// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formTable",
		css:["form_table"],
		html:["form_table"],
		fn:function(){
			var result={};
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
				source.target.find("[D_type='input']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){
					result[$(this).parents(".select").attr("D_key")]=$(this).attr("value");
					result[$(this).parents(".select").find(".value").html($(this).html());
					});
				source.target.find("[D_type='number'] .add").unbind("click").bind("click",function(){
					var newValue=1;
					if(result[$(this).parents(".number").attr("D_key")]){
						newValue=result[$(this).parents(".number").attr("D_key")]+1;
						}
					result[$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .sub").unbind("click").bind("click",function(){
					var newValue=0;
					if(result[$(this).parents(".number").attr("D_key")]&&result[$(this).parents(".number").attr("D_key")]>0){
						newValue=result[$(this).parents(".number").attr("D_key")]-1;
						}
					result[$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .value").unbind("change").bind("change",function(){
					result[$(this).parents(".number").attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='time']").each(function(){
					var that=this;
					$(this).datepicker({
						change:function(){
							result[$(that).attr("D_key")]=$(that).val();
							}
});
					});
				};
			//set
			source.set=function(setData){
				data=setData;
				};
			source.setResult=function(setData){
				result=setData;
				}
			source.result=function(){
				return result;
				}
			}
		});
	})($,app,config);