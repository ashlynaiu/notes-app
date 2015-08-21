"use strict";angular.module("notesApp",["ngAnimate","ngSanitize","ngTouch","ui.router","ngAnimate"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("frame",{"abstract":!0,url:"/",templateUrl:"views/frame.html"}).state("navigation",{"abstract":!0,parent:"frame",templateUrl:"views/navigation.html"}).state("main",{url:"",parent:"frame",templateUrl:"views/main.html",controller:"MainCtrl"})}]).run(["$rootScope",function(a){a.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}]),angular.module("notesApp").factory("notesData",function(){var a=[{id:1,title:"Note 1",message:"this is note #1"},{id:2,title:"Note 2",message:"this is note #2"}];return a}),angular.module("notesApp").directive("createNote",["notesData",function(a){return{templateUrl:"views/main.create.html",link:function(b){b.notes=a,b.submit=function(){var a=b.notes.length+1;b.notes.title&&b.notes.message&&(b.notes.push({id:a,title:b.notes.title,message:b.notes.message}),b.notes.title="",b.notes.message="",b.toogleCreate=!1,b.form.$setPristine())}}}}]),angular.module("notesApp").controller("MainCtrl",["$scope","notesData",function(a,b){a.notes=b,a.toogleModel=!1,a["delete"]=function(b){a.notes.splice(b,1)},a.toogleButton=function(){a.toogleModel===!1?a.toogleModel=!0:a.toogleModel=!1}}]),angular.module("notesApp").filter("reverse",function(){return function(a){return a.slice().reverse()}});