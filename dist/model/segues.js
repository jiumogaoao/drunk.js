/*! This is uglify test - 2015-10-26 */!function(a,b,c){b.model.set({name:"segues",css:[],html:[],fn:function(){var b="",c="",d={},e=this;e.init=function(){},e.set=function(a){};var f=function(a){var d=e.target.find(".segues_page#"+c);b.length&&b!==c?(d.css({left:"100%","z-index":"99"}),d.show(),e.target.css({width:d.width(),height:d.height()}),d.animate({left:"0px"},1e3,function(){d.css({"z-index":"auto"}),e.target.find(".segues_page#"+b).hide()})):(d.show(),e.target.css({width:d.width(),height:d.height()}))};e.reflash=function(){console.log(c);var a=e.target.find(".segues_page#"+c);e.target.css({width:a.width(),height:a.height()})},e["goto"]=function(g,h,i){var j={w:"auto",bg:"#fff"};if(i&&a.extend(j,i),c.length&&(b=c),c=g,!d[g]){var k=a("<div class='segues_page' id='"+g+"'></div>").appendTo(e.target);k.css({position:"absolute",top:"0px",left:"0px",width:j.w,"background-color":j.bg}),k.clean=function(){k.find(".model").hide()},d[g]={target:k}}d[g].fn=h,d[g].fn(d[g].target,f)}}})}($,app,config);