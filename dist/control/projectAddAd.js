/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"projectAddAd",par:[],fn:function(c){function d(c){b.model.get("#acMain","projectAddAd","formInput",function(d){d.set({title:"项目添加",nav:[],list:[{name:"name",title:"项目名",placeholder:"请填写项目名",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"addSend",text:"确认提交"}]}),d.reflash(),d.target.find("#addSend").unbind("click").bind("click",function(){var a=d.result();a.tk=i,b.api.run("obj_add",a,function(){b.hash("projectListAd")},function(a){alert(a)})}),d.show(),a("img").load(function(){c.reflash()})})}function e(){b.model.get("#head","headSimple","head",function(a){a.set({object:j,type:0}),a.reflash(),a.show()})}function f(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function g(){b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"adminCenterTem","adminCenterTem",function(b){b.callback=function(){b.change("projectAddAd"),b.clean(),b.show(),d(a),f()},b.reflash()})},{w:"100%"})})}function h(a){i=a;var c=0,d=function(){c++,2===c&&(e(),f(),g())};b.api.run("obj_get",{tk:i},function(a){j=_.indexBy(a,"id"),d()},function(a){alert(a)}),b.api.run("type_get",{tk:i},function(a){k=_.indexBy(a,"id"),d()},function(a){alert(a)})}var i="",j=[],k=[];b.api.tk(h)}})}($,app,config);