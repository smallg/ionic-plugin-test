angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, $timeout, $cordovaGeolocation, $cordovaToast, $cordovaProgress) {
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $scope.getCurrentPostion = function () {
            //current version only support IOS
            //$cordovaProgress.showSuccess(true, "Success!");
            $scope.lat = null;
            $scope.long = null;
            $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                $scope.lat = position.coords.latitude;
                $scope.long = position.coords.longitude;
                //$cordovaToast.showShortCenter('current position: ' + $scope.lat + ',' + $scope.long);
                //current version only support IOS
                $cordovaProgress.hide();
            }, function (err) {
                $cordovaToast.showLongCenter(err);
                //current version only support IOS
                $cordovaProgress.hide();
            });
        };
        var watch = null;
        $scope.watchGeolocation = function () {
            $scope.lat = null;
            $scope.long = null;
            var watchOptions = {enableHighAccuracy: true, timeout: 5000, maximumAge: 3000};
            watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(
                null,
                function (err) {
                    $cordovaToast.showLongCenter(err);
                },
                function (position) {
                    $scope.lat = position.coords.latitude;
                    $scope.long = position.coords.longitude;
                    $cordovaToast.showShortCenter('watch : ' + $scope.lat + ',' + $scope.long);
                });
        };

        $scope.cleanPostion = function () {
            if (watch) {
                watch.clearWatch();
            }
            $scope.lat = null;
            $scope.long = null;
        };
    })

    .controller('ChatsCtrl', function ($scope, $location, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, $location, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);

        $scope.showNotification = function () {

        };
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $timeout, $stateParams, Friends, $cordovaSpinnerDialog) {
        $scope.friend = Friends.get($stateParams.friendId);

        $scope.showSpinnerDialog = function () {
            $cordovaSpinnerDialog.show("title", "message", true);
            $timeout(function () {
                $cordovaSpinnerDialog.hide();
            }, 5000);
        };
    })

    .controller('AccountCtrl', function ($scope, $cordovaCamera, $cordovaCapture) {
        $scope.settings = {
            enableFriends: true,
            enableCapture: false,
            enableTakePicture: false
        };

        $scope.takePicture = function () {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
                alert($scope.imgURI);
            }, function (err) {
                // An error occured. Show a message to the user
            });
        };

        $scope.captureAudio = function () {
            var options = {limit: 3, duration: 10};

            $cordovaCapture.captureAudio(options).then(function (audioData) {
                // Success! Audio data is here
                alert(audioData);
            }, function (err) {
                // An error occurred. Show a message to the user
            });
        };

        $scope.captureImage = function () {
            var options = {limit: 3};

            $cordovaCapture.captureImage(options).then(function (imageData) {
                // Success! Image data is here
                alert(imageData);
            }, function (err) {
                // An error occurred. Show a message to the user
            });
        };

        $scope.captureVideo = function () {
            var options = {limit: 3, duration: 15};

            $cordovaCapture.captureVideo(options).then(function (videoData) {
                // Success! Video data is here
                alert(videoData);
            }, function (err) {
                // An error occurred. Show a message to the user
            });
        }
    });
