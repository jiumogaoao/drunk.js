/*! This is uglify test - 2015-10-27 */!function(a,b,c){b.control.set({name:"myAccount",par:[],fn:function(c){function d(c){b.model.get("#ucMain","myAccount","formTable",function(b){b.set({title:"收支记录",button:[],head:[{title:"收支编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"收支金额/元",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"收支时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"收支类型",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"收支摘要",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]}],list:[["REDSFDSFFDGGFD","99999999999.99","2015.10.04","充值","充值还要写理由吗~"],["REDSFDSFFDGGFD","99999999999.99","2015.10.04","充值","充值还要写理由吗~"]]}),b.reflash(),b.show(),a("img").load(function(){c.reflash()})})}b.model.get("#head","headSimple","head",function(a){a.set({object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],type:2}),a.reflash(),a.show()}),b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()}),b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(c,e){function f(){g++,1===g&&e()}c.clean();var g=0;b.model.get(c,"userCenterTem","userCenterTem",function(b){b.reflash(),b.change("myAccount"),b.clean(),d(a),b.show(),f()})},{w:"100%"})})}})}($,app,config);