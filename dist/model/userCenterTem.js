/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.model.set({name:"userCenterTem",css:["user_center_tem"],html:["user_center_tem"],fn:function(){function c(){g.target.find(".point_tem").removeClass("hl"),g.target.find(".point_tem[pid='"+f+"']").addClass("hl"),g.target.find(".group_tem").removeClass("hl"),g.target.find(".point_tem[pid='"+f+"']").parents(".group_tem").addClass("hl")}var d="",e={object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}]},f="myAccount",g=this;g.init=function(){},g.callback=function(){},g.reflash=function(){function f(){e.balance=k.balance,e.redpacket=k.redpacket,e.phone=k.phone,e.image=k.image,e.order=0,e.buy=0,a.each(j,function(a,b){i[b.productId]?e.order++:e.buy++});var f=_.template(g.html[0])(e);g.target.html(g.css[0]+f),g.callback(),g.target.find("#moneyIn").unbind("click").bind("click",function(){b.model.get("#pop","moneyIn","pop",function(a){a.set({title:"充值确认",button:[{id:"inSend",text:"确认充值"}],list:[{name:"number",title:"充值金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}]}),a.reflash(),a.target.find("#inSend").unbind("click").bind("click",function(){var c=a.result();c.tk=d,b.api.run("money_in",c,function(){alert("充值成功"),window.location.reload()},function(a){alert(a)})}),a.show(),app.pop.show()})}),g.target.find("#moneyOut").unbind("click").bind("click",function(){b.model.get("#pop","moneyOut","pop",function(a){a.set({title:"提现确认",button:[{id:"outSend",text:"确认提现"}],list:[{name:"number",title:"提现金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}]}),a.reflash(),a.target.find("#outSend").unbind("click").bind("click",function(){var c=a.result();c.tk=d,b.api.run("money_out",c,function(){alert("提现成功"),window.location.reload()},function(a){alert(a)})}),a.show(),app.pop.show()})}),c(),g.target.find(".group_tem").unbind("click").bind("click",function(){g.target.find(".group_tem").removeClass("hl"),a(this).addClass("hl")}),g.target.find(".point_tem").unbind("click").bind("click",function(){b.hash(a(this).attr("pid"))})}function h(c){d=c;var e=0,g=function(){e++,3===e&&f()};b.api.run("product_get",{tk:d},function(b){var c=(new Date).getTime();a.each(b,function(a,b){b.stratTime>c&&i.push(b)}),i=_.indexBy(i,"id"),g()},function(a){alert(a)}),b.api.run("deal_get",{tk:d},function(b){a.each(b,function(a,b){b.endTime||j.push(b)}),j=_.indexBy(j,"id"),g()},function(){}),b.api.run("tk_get",{tk:d},function(a){k=a.user,g()},function(){})}var i=[],j=[],k={};b.api.tk(h)},g.change=function(a){f=a,c()},g.set=function(a){e=a}}})}($,app,config);