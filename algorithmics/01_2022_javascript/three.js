
function checkInput(E){
    if (E.constructor !== Array)
        return 1;
    for (const i in E)
    {
        for (const j in E[i])
            if (typeof(E[i][j]) !== 'number')
                return 1;
    }
    return 0;
}

function singleArrayCase(E){
    let count = 0;
    for (const i in E)
        count += E[i];
    return count;
}

function countingGrains(E, width, height, x, y, count) {
    count += E[y][x]
    if (x + 1 < width && y + 1 < height)
    {
        const x_recurs = countingGrains(E, width, height, x + 1, y, count);
        const y_recurs = countingGrains(E, width, height, x, y + 1, count);
        if (x_recurs > y_recurs)
            return x_recurs;
        else
            return y_recurs;
    }
    else if (x + 1 < width)
    {
        return countingGrains(E, width, height, x + 1, y, count);
    }
    else if (y + 1 < height)
        return countingGrains(E, width, height, x, y + 1, count);
    else
        return count;
}

function Picpicpic (E) {
    if (checkInput(E))
        return (-1);
    let height = 0;
    for (const i in E)
        ++height;
    let width = 0;
    for (const i in E[0])
        ++width;
    if (width === 0)
        return singleArrayCase(E);
    if (height === 0)    
        height = 1;
    const M = countingGrains(E, width, height, 0, 0, 0);
    return M;
}

module.exports = Picpicpic;