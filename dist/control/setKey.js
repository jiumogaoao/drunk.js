/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"setKey",par:[],fn:function(c){function d(c){b.model.get("#ucMain","setKey","formInput",function(d){d.set({title:"重置密码",nav:[],list:[{name:"oldKey",title:"原始密码",placeholder:"请输入原始密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"newKey",title:"新密码",placeholder:"请输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"newKey2",title:"确认密码",placeholder:"请再次输入新密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"setSend",text:"确认提交"}]}),d.reflash(),d.target.find("#setSend").unbind("click").bind("click",function(){var a=d.result();a.tk=i,a.oldKey&&a.newKey&&a.newKey2&&a.newKey===a.newKey2&&b.api.run("set_key",a,function(){alert("修改成功"),d.reflash()},function(a){alert(a)})}),d.show(),a("img").load(function(){c.reflash()})})}function e(){b.model.get("#head","headSimple","head",function(a){a.set({object:j,type:2}),a.reflash(),a.show()})}function f(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function g(){b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"userCenterTem","userCenterTem",function(b){b.callback=function(){b.change("setKey"),b.clean(),d(a),b.show(),f()},b.set({object:j}),b.reflash()})},{w:"100%"})})}function h(a){i=a;var c=0,d=function(){c++,2===c&&(e(),f(),g())};b.api.run("obj_get",{tk:i},function(a){j=_.indexBy(a,"id"),d()},function(a){alert(a)}),b.api.run("type_get",{tk:i},function(a){k=_.indexBy(a,"id"),d()},function(a){alert(a)})}var i="",j=[],k=[];b.api.tk(h)}})}($,app,config);