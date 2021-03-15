function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function addition() 
{ 
        var  num1 = document.getElementById("firstNumber").value;
        var  num2 = document.getElementById("secondNumber").value;
		var sum = 0;
   sum = document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function subtraction() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}

