/*! This is uglify test - 2015-10-26 */!function(a,b,c){b.control.set({name:"messageListAd",par:[],fn:function(c){function d(c){b.model.get("#acMain","messageListAd","formTable",function(b){b.set({title:"待发消息列表",button:[],head:[{title:"消息编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"消息标题",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"发送时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"发送用户",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"发送内容",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]}],list:[["REDSFDSFFDGGFD","特别提醒","2015.05.03","REDSFDSFFDGGFD","请勿恶意攻击我们老板"],["REDSFDSFFDGGFD","特别提醒","2015.05.03","REDSFDSFFDGGFD","请勿恶意攻击我们老板"]]}),b.reflash(),b.show(),a("img").load(function(){c.reflash()})})}b.model.get("#head","headSimple","head",function(a){a.set({object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],type:0}),a.reflash(),a.show()}),b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()}),b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"adminCenterTem","adminCenterTem",function(b){b.clean(),b.show(),d(a),f()})},{w:"100%"})})}})}($,app,config);