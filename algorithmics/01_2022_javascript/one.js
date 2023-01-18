
function checkInput(L, M){
    if (L.constructor !== Array)
        return 1;
    if (typeof(M) !== 'number')
        return 1;
    for (const i in L)
        if (typeof(L[i]) !== 'number')
            return 1;
    let tmp = L[0]
    for (const i in L)
    {
        if (tmp < L[i] && i !== 0)
            return 1;
        tmp = L[i]
    }
    return 0;
}

function moneyBack(L, M){
    if (checkInput(L, M) === 1)
        return -2;
    let P = 0;
    let tmp = M;
    for (const i in L)
    {
        while (tmp >= L[i])
        {
            ++P;
            tmp = tmp - L[i];
        }
    }
    if (tmp > 0)
        return -1;
    return P;
}

module.exports = moneyBack;
