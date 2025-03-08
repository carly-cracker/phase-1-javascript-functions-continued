// code your solution here
function saturdayFun(toDo='roller-skate'){
    return `This Saturday, I want to ${toDo}!`
}

function mondayWork (duties = 'go to the office'){
    return `This Monday, I will ${duties}.`
}

function wrapAdjective(symbol){
    return (function (ngori="special"){
        return `You are ${symbol}${ngori}${symbol}!` 
    })
}