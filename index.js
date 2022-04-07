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

 const calculatesFarePrice = function(start, destination){
     let feetToPay = distanceTravelledInFeet (start, destination);

     if(feetToPay < 400){
        return 0;
     } else if(feetToPay > 400 && feetToPay < 2000){
         return (feetToPay - 400) * 0.02;
     } else if(feetToPay > 2000 && feetToPay < 2500){
         return 25;
     } else {
         return "cannot travel that far"
     }
 }