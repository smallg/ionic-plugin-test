var gcm = require('node-gcm');
var message = new gcm.Message();
  
//API Server Key
var sender = new gcm.Sender('AIzaSyAxfFxPr0Wv9tVfvnuSXI-DUe9zj0UVK9w');
var registrationIds = [];
  
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
message.timeToLive = 3;// Duration in seconds to hold and retry to deliver the message in GCM before timing out. Default 4 weeks if not specified
  
// At least one reg id required
registrationIds.push('bionic-path-854');
  
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});