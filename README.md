# ionic-plugin-test
test ionic plugins
* org.apache.cordova.geolocation
* nl.x-services.plugins.toast
* com.phonegap.plugins.PushPlugin
* org.apache.cordova.network-information
* org.pbernasconi.progressindicator
* org.apache.cordova.camera
* org.apache.cordova.media-capture
* hu.dpal.phonegap.plugins.SpinnerDialog
* net.yoik.cordova.plugins.screenorientation
* de.appplant.cordova.plugin.local-notification

# How to run this app
* ionic platform ios/android
* ionic build ios/android
* C:\Users\wpguo\AppData\Roaming\npm\ionic.cmd run android

# Documents
* Google Developers Console: https://console.developers.google.com/project


# test
//document.addEventListener("deviceready", function () {
        //    $cordovaPush.register(androidConfig).then(function (result) {
        //        // Success
        //        $cordovaToast.showShortCenter(result);
        //    }, function (err) {
        //        // Error
        //        $cordovaToast.showShortCenter(err);
        //    });
        //    //$cordovaPush:notificationReceived or pushNotificationReceived
        //    $rootScope.$on('pushNotificationReceived', function (event, notification) {
        //        $cordovaToast.showShortCenter(event + ',' + notification);
        //        switch (notification.event) {
        //            case 'registered':
        //                if (notification.regid.length > 0) {
        //                    alert('registration ID = ' + notification.regid);
        //                }
        //                break;
        //
        //            case 'message':
        //                // this is the actual push notification. its format depends on the data model from the push server
        //                alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
        //                break;
        //
        //            case 'error':
        //                alert('GCM error = ' + notification.msg);
        //                break;
        //
        //            default:
        //                alert('An unknown GCM event has occurred');
        //                break;
        //        }
        //    });
        //}, false);
