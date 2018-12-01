"use strict";
const Alexa = require('alexa-sdk');
 var volunteer = require('./volunteer')

var fullEvent = [];

var myEvent = "";
var myHours = 0;
var myDate = "";

exports.addEvent = function (event, hours, date){
    myEvent = event
    myHours = hours
    myDate = date
    this.toArray();
    volunteer.addToFullList(fullEvent)
   console.log("Loaded event")
}

exports.toArray = function(){
    fullEvent.push(myEvent)
    fullEvent.push(myHours.toString())
    fullEvent.push(myDate)
}
