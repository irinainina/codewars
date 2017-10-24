function solution(input, markers) {
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < markers.length; j++) {
            if (input[i] == markers[j]) {
                input = input.replace(input[i], '*');
            }
        }
    }
    input = input.replace(/[ ]*[*][a-z ]*/ig, "");

    return input;
}

// best practice

function solution(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}