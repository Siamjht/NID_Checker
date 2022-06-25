

const result = document.querySelector('#output p');
const form = document.getElementById("form");
const search = document.getElementById("search");
let nidNumber;

//NID Checker
form.addEventListener('submit', (e) => {
    e.preventDefault();
    nidNumber = search.value;
    if (isNaN(nidNumber)) {
        // console.log("Please input your NID Numbers! not string or others...");
        // result.textContent = "Please input your NID Numbers! not string or others...";
        result.innerHTML = "Please input your NID Number!<br /> not string or others...";
    }
    else {
        findYear(nidNumber);
    }
});

function findYear(n) {

    for (i = 0; i < n.length; i++){
        // console.log(n.slice(i+1, i+4));
        if (n[i] == '2' && n.slice(i + 1, i + 4) == '000') {
            let y = n.slice(i, i + 4);
            let x = i + 5;
            isLeapYear(y, x);
            break;
        }
        else if (n[i] == '1' && n[i + 1] == '9') {
            let y = n.slice(i, i + 4);
            let x = i + 4;
            console.log(x);
            isLeapYear(y, x);
            break;
        }
            
        else result.textContent = "Your NID is not valid! Try again.. "; 
    }
}

function isLeapYear(year, x) {

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        result.textContent = "Your NID is not valid! ";
    }
    else {
        let count = 0;
        for (let i = x; i <= nidNumber.length; i++){
            count += 1;
            if (count == 13) {
                let nidNo = year + nidNumber.slice(x, x + count);
                // console.log("Your NID is Valid. Your NID:", year + nidNumber.slice(x, x+count));
                result.innerHTML = `Your NID is Valid. <br/> NID no: ${nidNo}.`;
            }
        }
        if (count < 13) {
            result.textContent = "Your NID is imvalid!";
        }
    }
}

