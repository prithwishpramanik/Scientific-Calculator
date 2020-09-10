$(document).ready(function (){
    let firstNumber;
    let secondNumber;
    let operator;

    $('.number').click(function (){
        let result = $('#result').text();
        let currentNumber = $(this).text();

        let newREsult = Number(result + currentNumber);

        $('#num1').text(newREsult);

        $('#result').text(newREsult);
    });

    $('.operator').click(function (){
        firstNumber = Number($('#result').text());

        operator = $(this).text();



        $('#result').text(0);
    })
    
    $('#clear').click(function (){
        $('#result').text(0);
        $('#num1').text(0);
    })

    $('#equal').click(function (){
        secondNumber = Number($('#result').text());
        if (operator==="+"){
            $('#result').text(firstNumber + secondNumber);
            $('#num1').text(firstNumber + secondNumber);
        }
        else if (operator==="-"){
            $('#result').text(firstNumber - secondNumber);
        }
        else if (operator==="*"){
            $('#result').text(firstNumber * secondNumber);
        }
        else if  (operator ==="/")
        {
            $('#result').text(firstNumber / secondNumber);
        }
        else if  (operator ==="log")
        {
            $('#result').text(Math.log(firstNumber));
        }
        else if  (operator ==="ln")
        {
            $('#result').text(Math.log(firstNumber));
        }
        else if  (operator === "x^y")
        {
            $('#result').text(Math.pow(firstNumber,secondNumber));

        }
    })

$('#euler').click(function (){
    $('#result').text(Math.E);
    $('#num1').text(Math.E);
})
    $('#sqrt').click(function (){
        $('#result').text(Math.sqrt(firstNumber));
        $('#num1').text(Math.sqrt(firstNumber));
    })

    $('#fact').click(function (){
        function factorial(firstNumber)
        {

            if (firstNumber === 0)
            {
                return 1;
            }
            return firstNumber * factorial(firstNumber-1);

        }
        console.log(factorial(firstNumber));

        $('#result').text(factorial(firstNumber));
        $('#num1').text(factorial(firstNumber));
    })

    $('#xsquare').click(function (){
        $('#result').text(Math.pow(firstNumber,2));
        $('#num1').text(Math.pow(firstNumber,2));
    })

    $('#cbrt').click(function (){
        $('#result').text(Math.cbrt(firstNumber));
        $('#num1').text(Math.cbrt(firstNumber));
    })

    $('#sinx').click(function (){
        $('#result').text(Math.sin(firstNumber));
        $('#num1').text(Math.sin(firstNumber));
    })

    $('#cosx').click(function (){
        $('#result').text(Math.cos(firstNumber));
        $('#num1').text(Math.cos(firstNumber));
    })

    $('#tanx').click(function (){
        $('#result').text(Math.tan(firstNumber));
        $('#num1').text(Math.tan(firstNumber));
    })

    $('#pie').click(function (){
        $('#result').text(Math.PI);
        $('#num1').text(Math.PI);
    })
    $('#exp').click(function (){
        $('#result').text(Math.exp(firstNumber));
        $('#num1').text(Math.exp(firstNumber));
    })


})