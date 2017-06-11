function solution(number) {
    var font_ar = [
        1,
        4,
        5,
        9,
        10,
        40,
        50,
        90,
        100,
        400,
        500,
        900,
        1000
    ];
    var font_rom = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M'
    ];
    var rezult = '';
    var n = font_ar.length - 1;
    while (number > 0) {
        if (number >= font_ar[n]) {
            rezult += font_rom[n];
            number -= font_ar[n];
        } 
        else n--;
    }
    return rezult;
}