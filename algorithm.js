
function numbersOnly(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var myArr = [1, "dog", 8, "cat", 329, "tree"];
console.log(numbersOnly(myArr));