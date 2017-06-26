// Creates new array with numbers only
function numbersOnly(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var myArr = [17, "dog", "frog", 10, 8, "cat", 329, "tree"];
console.log(numbersOnly(myArr));


// Removes numbers, returns the same array
function removeNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

var myArr = [17, "dog", "frog", 10, 8, "cat", 329, "tree"];
console.log(removeNumbers(myArr));