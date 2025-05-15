let Tbalance = rankedMatchC(123, 39)
let rank = rankedMatchL(123)
console.log(`O héroi tem um saldo de ${Tbalance} e esta no nivel ${rank}`)

function rankedMatchC(wins, defeats){
    rmBalance = wins - defeats
    return rmBalance
}
function rankedMatchL(wins){
    let r
    if (wins <= 10){
        r = "Ferro"
    }
    if (wins >= 11 && wins <= 20){
        r = "Bronze"
    }
    if (wins >= 21 && wins <= 50){
        r = "Prata"
    }
    if (wins >= 51 && wins <= 80){
        r = "Ouro"
    }
    if (wins >= 81 && wins <= 90){
        r = "Diamante"
    }
    if (wins >= 91 && wins <= 100){
        r = "Lendário"
    }
    if (wins >= 101){
        r = "Imortal"
    }
    return r
}