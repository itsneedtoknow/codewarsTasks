// You've purchased a ready-meal from the supermarket.

// The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

// Oh no, your microwave is 800W! How long should you cook this for?!

function cookingTime(neededPower, minutes, seconds, power) {
    let neededPowerInt;
    let powerInt;
    // проверить, передан аргумент строкой или цифрами
    if(Number.isNaN(Number(neededPower))){
        neededPowerInt = neededPower.replace(/([^\d]+)/g,'');
    }else(
        neededPowerInt = Number(neededPower)
    );
    // проверить, передан аргумент строкой или цифрами
    if(Number.isNaN(Number(power))){
        powerInt = power.replace(/([^\d]+)/g,'');
    }else(
        powerInt = Number(power)
    );
    
    let powerPercentage = neededPowerInt / powerInt;
    
    
    let requiredTime = ((minutes * 60) + seconds) * powerPercentage;
   
    let mins = Math.trunc(requiredTime/60);
    let secs = Math.ceil(requiredTime%60);
    let finalMins;
    let finalSecs;
if(secs >= 60){
    finalMins = mins + Math.trunc(secs / 60);
    finalSecs = secs % 60;
}else{
    finalMins = mins;
    finalSecs = secs;
}
    let result = finalMins + " minutes " + finalSecs + " seconds";
    
    return result
}

  cookingTime("21W", 64, 88, "25W")