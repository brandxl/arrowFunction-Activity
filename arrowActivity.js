
//first basic for loop
function doubles (arr){
    let newArr = [];
     for (let i = 0; i < arr.length; i++){
      newArr.push(arr[i]*2);
    }
    return newArr;
}
//1. ES5 Callback
function double (arr) {
    return arr.map(function(val) {
        return val * 2;
    })
}

// ES2015 Arrow Function Shorthand (ONE LINE)
function doubled (arr){return arr.map((n) => (n * 2))}
     

//2. Replace all functions with arrow functions

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  //function squareAndEven (numbers){return numbers.map((n) => (n ** 2))}

  //function squareAndEven (numbers){return numbers.filter((n) => (n % 2 === 0))}

  function squareAndEven (numbers){return numbers.map((n) => (n % 2 === 0? n ** 2 : ''))};