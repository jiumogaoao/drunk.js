/*! This is uglify test - 2015-10-27 */!function(a,b,c){b.model.set({name:"listIndex",css:["index_list"],html:["index_list"],fn:function(){var c={},d=this;d.init=function(){},d.reflash=function(){var e=_.template(d.html[0])(c);d.target.html(d.css[0]+e),d.target.find(".main .point").unbind("click").bind("click",function(){b.hash("detail/"+a(this).attr("pid"))}),d.target.find(".type .point").unbind("click").bind("click",function(){b.hash("search/"+a(this).attr("oid")+"/"+a(this).attr("tid"))}),d.target.find(".type .more").unbind("click").bind("click",function(){b.hash("list/"+a(this).attr("oid"))})},d.set=function(a){c=a}}})}($,app,config);