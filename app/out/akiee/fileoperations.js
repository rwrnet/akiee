// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.fileoperations');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.test');
akiee.fileoperations.fs = require("fs");
akiee.fileoperations.path = cljs.nodejs.require.call(null,"path");
akiee.fileoperations.process = cljs.nodejs.require.call(null,"process");
akiee.fileoperations.org = cljs.nodejs.require.call(null,"./lib/markdown-org-mode-parser");
cljs.core.enable_console_print_BANG_.call(null);
akiee.fileoperations.dirname = ".akiee";
akiee.fileoperations.filename = "liveflow.md";
akiee.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
* nil -> String
* produce the home directory of the user according to plattform
*/
akiee.fileoperations.user_home = (function user_home(){
if(cljs.core._EQ_.call(null,akiee.fileoperations.process.platform,"win32")){
return (akiee.fileoperations.process.env["USERPROFILE"]);
} else {
return (akiee.fileoperations.process.env["HOME"]);
}
});
try{var values__4799__auto___4933 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.user_home.call(null));
var result__4800__auto___4934 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__4799__auto___4933);
if(cljs.core.truth_(result__4800__auto___4934)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__4799__auto___4933),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__4799__auto___4933)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4932){var t__4837__auto___4935 = e4932;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4935,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__4799__auto___4937 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/macco"),akiee.fileoperations.user_home.call(null));
var result__4800__auto___4938 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___4937);
if(cljs.core.truth_(result__4800__auto___4938)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___4937),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___4937)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4936){var t__4837__auto___4939 = e4936;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4939,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* String -> String
* consumes the home directory of the user and return the file path of task list,
* if file is not present, it get's created
*/
akiee.fileoperations.create_task_list_file = (function create_task_list_file(h){
var dir_path = akiee.fileoperations.path.join(h,akiee.fileoperations.dirname,"/");
var file_path = akiee.fileoperations.path.join(dir_path,akiee.fileoperations.filename);
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(dir_path))){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(file_path))){
return file_path;
} else {
akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
} else {
akiee.fileoperations.fs.mkdirSync(dir_path);

akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
});
try{var values__4799__auto___4941 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,[cljs.core.str("/home/macco/"),cljs.core.str(akiee.fileoperations.dirname),cljs.core.str("/"),cljs.core.str(akiee.fileoperations.filename)].join('')),akiee.fileoperations.create_task_list_file.call(null,"/home/macco"));
var result__4800__auto___4942 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___4941);
if(cljs.core.truth_(result__4800__auto___4942)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___4941),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___4941)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4940){var t__4837__auto___4943 = e4940;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4943,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* nil -> String
* produce the path of the task file
*/
akiee.fileoperations.task_file_path = (function task_file_path(){
return akiee.fileoperations.create_task_list_file.call(null,akiee.fileoperations.user_home.call(null));
});
try{var values__4799__auto___4945 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.task_file_path.call(null));
var result__4800__auto___4946 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__4799__auto___4945);
if(cljs.core.truth_(result__4800__auto___4946)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__4799__auto___4945),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__4799__auto___4945)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4944){var t__4837__auto___4947 = e4944;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4947,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* String -> String
* consumes the path p for a file and returns the content of the file
*/
akiee.fileoperations.load_task_file = (function load_task_file(p){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(p))){
return [cljs.core.str(akiee.fileoperations.fs.readFileSync(p,"utf8"))].join('');
} else {
return "";
}
});
try{var values__4799__auto___4949 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,""));
var result__4800__auto___4950 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___4949);
if(cljs.core.truth_(result__4800__auto___4950)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___4949),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___4949)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4948){var t__4837__auto___4951 = e4948;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4951,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__4799__auto___4953 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,"eurniate"));
var result__4800__auto___4954 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___4953);
if(cljs.core.truth_(result__4800__auto___4954)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___4953),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___4953)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e4952){var t__4837__auto___4955 = e4952;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___4955,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}akiee.fileoperations.save_task_file = (function save_task_file(c,p,changed_QMARK_,chfn_BANG_){

if(cljs.core.truth_(changed_QMARK_)){
akiee.fileoperations.fs.writeFileSync(p,c);

return chfn_BANG_.call(null,false);
} else {
return cljs.core.println.call(null,"not changed");
}
});

//# sourceMappingURL=fileoperations.js.map