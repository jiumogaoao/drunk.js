/*! This is uglify test - 2015-10-27 */!function(a,b,c){b.model.set({name:"login",css:["pop_all"],html:["login_all"],fn:function(){var b={phone:"",password:"",code:""},c=0,d=this;d.callback=function(){},d.init=function(){d.target.html(d.css[0]+d.html[0]),d.target.find(".close").unbind("click").bind("click",function(){app.pop.hide()}),d.target.find("#regist").unbind("click").bind("click",function(){d.type(1)}),d.target.find("#login").unbind("click").bind("click",function(){d.type(0)}),d.target.find("[D_type='input']").unbind("change").bind("change",function(){b[a(this).attr("D_key")]=a(this).val()}),d.target.find("#sendButton").unbind("click").bind("click",function(){d.callback({data:b,type:c}),app.pop.hide()})},d.type=function(a){c=a,d.target.find(".list").hide(),d.target.find(".list"+a).show(),c?(d.target.find("#sendButton").html("注册"),d.target.find(".nav").removeClass("hl"),d.target.find("#regist").addClass("hl")):(d.target.find("#sendButton").html("登录"),d.target.find(".nav").removeClass("hl"),d.target.find("#login").addClass("hl"))},d.set=function(a){}}})}($,app,config);