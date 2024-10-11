let string = ""; // This string is blank there are input 
let button = document.querySelectorAll('.button'); // y sabhi buttons ko select kr le ga jis ki class button hai
Array.from(button).forEach((button) =>{ //value is for each
    button.addEventListener('click', (e) => { //jese hi koi kisi buton p click kre ga tabhi us button ki valu print hogi
        if(e.target.innerHTML == '='){// ager kisi ne(=) pe click kiya hai to uski valu ko evaluate er do
            string = eval(string); //string ko change ker ke
            document.querySelector('input').value = string; //is ki valu ko inner taxt m dale string ki form mai
            console.log(e.target)
        }
        else if(e.target.innerHTML == 'C'){ // ager C per click kiya jaye
            string = ""; //  to C  sab ki value clerar ker de ga
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target); //ager koi (=) p click krega to a9if a0 wala code chale ga werna else wala chlega
            string = string + e.target.innerHTML;//string ko change ker ke
            document.querySelector('input').value = string;//is ki valu ko inner taxt m dale string ki form mai
            
        }
    });
});  