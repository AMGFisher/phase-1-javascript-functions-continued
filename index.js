function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(fancySymbol = "*") {
    return function(word = "special") {
        return `You are ${fancySymbol}${word}${fancySymbol}!`
    }

}