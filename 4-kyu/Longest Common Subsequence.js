function LCS(x, y) {
    var arr = [];
    for (var i = 0; i < y.length; i++) {
        for (var j = 0; j < x.length; j++) {
            if (y[i] == x[j]) {
                arr.push(y[i]);
                x = x.slice(j+1);
                y = y.slice(i+1);
                j = -1;
                i = -1;
                break;
            }
        }
    }
    return arr.join('');
}

// best practice

function LCS( xstr, ystr ) {
    if( xstr == '' || ystr == '' ) return '';

    var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
        yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );

    if( xp == yp )
        return xp + LCS( xrest, yrest );

    var lcs1 = LCS( xstr, yrest ),
        lcs2 = LCS( xrest, ystr );

    return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}