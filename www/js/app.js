// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

    .run(function ($rootScope, $ionicPlatform, $cordovaToast, $cordovaPush, $cordovaNetwork) {
        var androidConfig = {
            "senderID": "528738463804"
        };

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

            //network work well
            if (window.cordova && window.cordova.plugins.Keyboard) {
                var type = $cordovaNetwork.getNetwork();
                var isOnline = $cordovaNetwork.isOnline();
                var isOffline = $cordovaNetwork.isOffline();
            }
            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                var onlineState = networkState;
                $cordovaToast.showShortCenter("online : " + onlineState);
            });
            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                var offlineState = networkState;
                $cordovaToast.showShortCenter("offline : " + offlineState);
            });

            $rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
                if(newUrl.indexOf('/tab/chats/')>0){
                    screen.lockOrientation('landscape');
                }
                if(oldUrl.indexOf('/tab/chats/')>0){
                    screen.unlockOrientation();
                }
            });
        });

        document.addEventListener("deviceready", function () {
            $cordovaPush.register(androidConfig).then(function (result) {
                // Success
                $cordovaToast.showShortCenter(result);
            }, function (err) {
                // Error
                $cordovaToast.showShortCenter(err);
            });
            //$cordovaPush:notificationReceived or pushNotificationReceived
            $rootScope.$on('pushNotificationReceived', function (event, notification) {
                $cordovaToast.showShortCenter(event + ',' + notification);
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
            });
        }, false);
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/tab-friends.html',
                        controller: 'FriendsCtrl'
                    }
                }
            })
            .state('tab.friend-detail', {
                url: '/friend/:friendId',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/friend-detail.html',
                        controller: 'FriendDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });