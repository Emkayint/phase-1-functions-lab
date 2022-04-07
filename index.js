// Code your solution in this file!
 const distanceFromHqInBlocks = function(distance){
    return Math.abs(distance - 42);
 }

 const distanceFromHqInFeet = function(feet){
     let distanceInFeet = (Math.abs(feet -42) * 264);
     return distanceInFeet;
 }

 const distanceTravelledInFeet = function(start, stop){
     let distanceTravelledFeet = (Math.abs(start - stop) * 264);
     return distanceTravelledFeet;
 }