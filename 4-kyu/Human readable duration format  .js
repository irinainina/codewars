function formatDuration(seconds) {
    var s = seconds % 60;
    var minutes = (seconds - s) / 60;
    var m = minutes % 60;
    var hours = (seconds - s - 60 * m) / 3600;
    var h = hours % 24;
    var days = (seconds - s - 60 * m - 3600 * h) / 86400;
    var d = days % 365;
    var y = (seconds - s - 60 * m - 3600 * h - 86400 * d) / 86400 / 365;
    if (s <= 0) {
        s = '';
    } 
    else if (s == 1) {
        s = '1 second';
    } 
    else if (s > 1) {
        s = s + ' seconds';
    }
    if (m <= 0) {
        m = '';
    } 
    else if (m == 1) {
        m = '1 minute';
    } 
    else if (m > 1) {
        m = m + ' minutes';
    }
    if (h <= 0) {
        h = '';
    } 
    else if (h == 1) {
        h = '1 hour';
    } 
    else if (h > 1) {
        h = h + ' hours';
    }
    if (d <= 0) {
        d = '';
    } 
    else if (d == 1) {
        d = '1 day, ';
    } 
    else if (d > 1) {
        d = d + ' days';
    }
    if (y <= 0) {
        y = '';
    } 
    else if (y == 1) {
        y = '1 year';
    } 
    else if (y > 1) {
        y = y + ' years';
    }
    var arr = [y,d,h,m,s];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '') {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    if (seconds == 0) {
        return 'now';
    }
    if (arr.length == 1 && arr[0] != '') {
        return arr.join();
    } 
    else if (arr.length == 2) {
        return arr.join(' and ');
    } 
    else if (arr.length > 2) {
        var a = arr.slice(arr.length - 1);
        arr.splice(arr.length - 1, 1)
        return arr.join(', ') + ' and ' + a;
    }
}