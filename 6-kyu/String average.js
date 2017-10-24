function averageString(str) {
    var arr = str.split(' ');
    if(arr.length == 0)
        return "n/a";
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'zero':
                break;
            case 'one':
                sum += 1;
                break;
            case 'two':
                sum += 2;
                break;
            case 'three':
                sum += 3;
                break;
            case 'four':
                sum += 4;
                break;
            case 'five':
                sum += 5;
                break;
            case 'six':
                sum += 6;
                break;
            case 'seven':
                sum += 7;
                break;
            case 'eight':
                sum += 8;
                break;
            case 'nine':
                sum += 9;
                break;
            default:
                return "n/a";
                      }
    }
    var result = Math.floor(sum / arr.length);

    switch (result) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
                  }
}

\\ best practice

const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

const averageString = (str) => {
    const nums = str.split(' ').map(v => numbers.indexOf(v));
    if (nums.includes(-1)) return 'n/a'
    const sum = nums.reduce((prev, cur) => prev + cur);
    const average = Math.floor(sum / nums.length)
    return numbers[average]
}
