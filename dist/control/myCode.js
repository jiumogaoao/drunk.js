/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"myCode",par:[],fn:function(c){function d(c){b.model.get("#ucMain","myCode","myCode",function(b){b.set({id:l.id}),b.reflash(),b.show(),a("img").load(function(){c.reflash()})})}function e(){b.model.get("#head","headSimple","head",function(a){a.set({object:j,type:2}),a.reflash(),a.show()})}function f(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function g(){b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"userCenterTem","userCenterTem",function(b){b.callback=function(){b.change("myCode"),b.clean(),d(a),b.show(),f()},b.set({object:j}),b.reflash()})},{w:"100%"})})}function h(a){i=a;var c=0,d=function(){c++,3===c&&(e(),f(),g())};b.api.run("obj_get",{tk:i},function(a){j=_.indexBy(a,"id"),d()},function(a){alert(a)}),b.api.run("type_get",{tk:i},function(a){k=_.indexBy(a,"id"),d()},function(a){alert(a)}),b.api.run("tk_get",{tk:i},function(a){l=a.user,d()},function(a){alert(a)})}var i="",j=[],k=[],l={};b.api.tk(h)}})}($,app,config);