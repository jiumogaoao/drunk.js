/*! This is uglify test - 2015-10-27 */!function(a,b,c){b.control.set({name:"dealManage",par:["object"],fn:function(c){function d(d){b.model.get("#ucMain","dealManage"+c.object,"formTable",function(b){b.set({title:"交易列表",button:[],head:[{title:"交易编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"产品名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"产品编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"现价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易份数",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"资金总额",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"结束时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"操作",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]}],list:[["REDSFDSFFDGGFD","星星花园","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","99999999999.99","2015.10.04","2015.10.04",'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>'],["REDSFDSFFDGGFD","星星花园","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","99999999999.99","2015.10.04","2015.10.04",'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>']]}),b.reflash(),b.show(),a("img").load(function(){d.reflash()})})}b.model.get("#head","headSimple","head",function(a){a.set({object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],type:2}),a.reflash(),a.show()}),b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()}),b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(e,f){function g(){h++,1===h&&f()}e.clean();var h=0;b.model.get(e,"userCenterTem","userCenterTem",function(b){b.reflash(),b.change("dealManage/"+c.object),b.clean(),d(a),b.show(),g()})},{w:"100%"})})}})}($,app,config);