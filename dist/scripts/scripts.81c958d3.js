"use strict";angular.module("notesApp",["ngAnimate","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("frame",{"abstract":!0,url:"/",templateUrl:"views/frame.html"}).state("navigation",{"abstract":!0,parent:"frame",templateUrl:"views/navigation.html"}).state("main",{url:"",parent:"frame",templateUrl:"views/main.html",controller:"MainCtrl"})}]).run(["$rootScope",function(a){a.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}]),angular.module("notesApp").controller("MainCtrl",["$scope",function(a){a.notes=[{title:"Note 1",message:"this is note #1"},{title:"Note 2",message:"this is note #2"}],a.submit=function(){a.notes.title&&a.notes.message&&(a.notes.push({title:a.notes.title,message:a.notes.message}),a.notes.title="",a.notes.message="",a.toogleCreate=!1,a.form.$setPristine())},a["delete"]=function(b){a.notes.splice(b,1)},console.log("Main controller loaded")}]),angular.module("notesApp").controller("CreateNewNoteCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);