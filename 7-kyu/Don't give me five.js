function dontGiveMeFive(start, end)
{
    var five = 0;
    for(var i = start; i <= end; i++) {
        i = i.toString();
        for (var j = 0; j < i.length; j++) {
            if(i[j] == 5) {
                five += 1;
                break;
            }
        }
    }
    return end - start + 1 - five;
}

// best practice

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) {
            count++
        }
    }
    return count
}