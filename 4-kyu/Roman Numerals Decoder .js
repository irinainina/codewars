function solution(roman){
    var font_ar = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

    var roman = roman.toUpperCase();
    var rezult = 0;
    var posit = 0;
    var n = font_ar.length - 1;
    while (n >= 0 && posit < roman.length) {
        if (roman.substr(posit, font_rom[n].length) == font_rom[n]) {
            rezult += font_ar[n];
            posit += font_rom[n].length;
        }
        else n--;
    }
    return rezult;
}