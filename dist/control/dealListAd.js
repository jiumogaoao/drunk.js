/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"dealListAd",par:[],fn:function(c){function d(c){var d=[];a.each(l,function(a,b){m[b.productId]&&d.push({id:b.id,main:[b.id,b.productId,b.userId,b.buyPrice,b.sellPrice,b.count,moment(b.startTime,"x").format("YYYY-MM-DD"),b.endTime?moment(b.endTime,"x").format("YYYY-MM-DD"):0,b.endTime?"卖出":"持有"]})}),b.model.get("#acMain","dealListAd","formTable",function(b){b.set({title:"交易列表",button:[],head:[{title:"交易编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"产品编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"账号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"买入价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"卖出价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易份数",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"卖出时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"状态",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]}],list:d}),b.reflash(),b.show(),a("img").load(function(){c.reflash()})})}function e(){b.model.get("#head","headSimple","head",function(a){a.set({object:j,type:0}),a.reflash(),a.show()})}function f(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function g(){b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"adminCenterTem","adminCenterTem",function(b){b.callback=function(){b.change("dealListAd"),b.clean(),b.show(),d(a),f()},b.reflash()})},{w:"100%"})})}function h(c){i=c;var d=0,h=function(){d++,4===d&&(e(),f(),g())};b.api.run("obj_get",{tk:i},function(a){j=_.indexBy(a,"id"),h()},function(a){alert(a)}),b.api.run("type_get",{tk:i},function(a){k=_.indexBy(a,"id"),h()},function(a){alert(a)}),b.api.run("deal_getAll",{tk:i},function(a){l=a,h()},function(a){alert(a)}),b.api.run("product_get",{tk:i},function(b){var c=(new Date).getTime();a.each(b,function(a,b){b.stratTime<=c&&m.push(b)}),m=_.indexBy(m,"id"),h()},function(a){alert(a)})}var i="",j=[],k=[],l=[],m=[];b.api.tk(h)}})}($,app,config);