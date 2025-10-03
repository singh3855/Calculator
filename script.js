let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML== '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string =string.substring(0, string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            // Handle percentage properly
            let lastNumberMatch = string.match(/(\d+)(?!.*\d)/); // get last number
            if (lastNumberMatch) {
                let lastNumber = lastNumberMatch[0];
                let percentValue = (parseFloat(lastNumber) / 100);

                // Replace the last number with its percent value
                string = string.substring(0, string.length - lastNumber.length) + percentValue;
                input.value = string;
            }
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})