// make sure from terminal in folder only containing app.js (this)
// npm init from inside the folder this is saved
// npm install tmi.js --save
// node app.js to start

var tmi = require('tmi.js');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      recconect: true
    }, //enter twitch username & PW from https://twitchapps.com/tmi/
    identity: {PLACE USER NAME HERE",
      password: "oauth:TOKEN HERE"
    }, // chage the channel name here and below! Highlight&CTRL+CMD+G
    channels: ["CHANNEL NAME"]
};

var client = new tmi.client(options);
client.connect();

var ezchannel = "CHANNEL NAME"
//------------------------------------
//          JOINS CHAT
// below is what happens when bot joins chat!
client.on('connected', function(address, port){
    client.action(ezchannel, "The Ghost of Leon_Trolltksy is here!");
});

// below is response to found in user msgs words ".includes"
// Remove if statement line to respond to any msg in chat! --------------
client.on('chat', function(channel, user, message, self){
    if(message.includes("Kappa")) {
      client.action(ezchannel, user['display-name'] +
          " the Ghost of Trolltsky comes for you!..");
    }
});


// below is what happens when there is a 'Cheer!'
client.on('cheer', function(channel, user, message) {
    client.action(ezchannel, user['display-name'] +
          " Yes! Give'm them bitties!! TwitchRPG")
});

// sub to channel

client.on("subscription", function (channel, username, method, message, userstate) {
    client.action(ezchannel, user['display-name'] +
          " has joined the cult. Another soul")
});
