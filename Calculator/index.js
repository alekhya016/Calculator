let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = string.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
            try {
                string = eval(string).toString();
            } catch {
                string = "Null";
            }
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML === 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'DE') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '%') {
            string += "%";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.terget);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})