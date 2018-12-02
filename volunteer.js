"use strict";
const Alexa = require('alexa-sdk');

var allEvents = [];

exports.addToFullList = function(event){
    allEvents.push(event)
}

exports.clear = function(){
    if(allEvents.length != 0){
        allEvents.length = 0;
    }else{
        this.emit(":ask", "List already empty!","List already empty!")
    }


}

exports.getTotalHours = function(){
    var i;
    var total = 0;
    
    if(allEvents.length == 0){
        return "zero"
    }else{
        for (i = 0; i < allEvents.length; i++) { 
        let hours = parseInt(allEvents[i][1])
        total += hours;
        }
    return total;
    }
}

exports.getLastEvent = function(){
    return allEvents[allEvents.length-1]
}
 exports.getNumberOfEvents = function(){
     return allEvents.length
 }