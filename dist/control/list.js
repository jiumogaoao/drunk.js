/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"list",par:["object"],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.set({object:h,type:0}),a.reflash(),a.change(c.object),a.show()})}function e(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){var c=(new Date).getTime(),d=[],e=[],f=[];a.each(j,function(a,b){b.orderTime<c&&(b.stratTime>c?d.push(b):b.stratTime<=c&&b.payedCount>=b.passNumber&&b.payedCount<b.copy?e.push(b):f.push(b))}),b.model.get("#main","seguesOne","segues",function(c){c.show(),c["goto"]("pageTree",function(g,h){function j(b){a("img").load(function(){b.reflash()}),l++,5===l&&h()}g.clean();var l=0;b.model.get(g,"productList1","productList",function(a){a.set({list:d,type:i}),a.reflash(),a.show(),j(c)}),b.model.get(g,"pomoTableA","pomoTableA",function(a){a.set({image:[k["04"],k["05"],k["06"],k["07"],k["08"]]}),a.reflash(),a.show(),j(c)}),b.model.get(g,"productList2","productList",function(a){a.set({list:e,type:i}),a.reflash(),a.show(),j(c)}),b.model.get(g,"pomoTableB","pomoTableB",function(a){a.set({image:[k["09"],k[10],k[11],k[12],k[13]]}),a.reflash(),a.show(),j(c)}),b.model.get(g,"productList3","productList",function(a){a.set({list:f,type:i}),a.reflash(),a.show(),j(c)})},{w:"100%"})})}function g(g){function l(){m++,4===m&&(d(),e(),f())}var m=0;b.api.run("product_get",null,function(b){console.log(b),j=[],a.each(b,function(a,b){b.object===c.object&&j.push(b)}),l()},function(a){alert(a)}),b.api.run("obj_get",null,function(a){h=_.indexBy(a,"id"),l()},function(a){alert(a)}),b.api.run("type_get",null,function(a){i=_.indexBy(a,"id"),l()},function(a){alert(a)}),b.api.run("promo_get",{tk:g},function(a){k=_.indexBy(a,"id"),l()},function(a){alert(a)})}var h={},i={},j=[],k=[];b.api.tk(g)}})}($,app,config);