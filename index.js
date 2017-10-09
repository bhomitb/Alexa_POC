//####### IMPORTS  #######//
/* Importing Alexa SDK 
~@BhomitB*/
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    /*Registering Handlers 
    ~BhomitB*/
    alexa.registerHandlers(handlers);
    alexa.execute();
};


/*Intent Functions 
~@BhomitB*/
var handlers = {

    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

        'HelloWorldIntent': function () {
            this.emit(':tell', 'Hello World!');
        }
    
    };