window.notificationReceived = function (notification) {
    switch (notification.event) {
        case 'registered':
            if (notification.regid.length > 0) {
                alert('registration ID = ' + notification.regid);
            }
            break;
        case 'message':
            // this is the actual push notification. its format depends on the data model from the push server
            alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
            break;
        case 'error':
            alert('GCM error = ' + notification.msg);
            break;
        default:
            alert('An unknown GCM event has occurred');
            break;
    }
};
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'tabSlideBox'])

    .run(function ($rootScope, $ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'templates/tabs.html',
            controller: 'IndexCtrl'
        });
        $urlRouterProvider.otherwise("/");

    });