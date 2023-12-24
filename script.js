//your JS code here. If required.
let num1 = 1;
let num2 = 20;

	for(let i = num1; i<=num2.length; i++){
		if(arr[i]%3 == 0){
			output="Fizz";
		}
		else if(arr[i]%5 == 0){
			output="Buzz";
		}
		else if(arr[i]%3 == 0 && arr[i]%5 == 0){
			output="FizzBuzz";
		}
	}
let result = output;
console.log(result);
