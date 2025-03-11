// Take all the element
const userForm = document.getElementById("ticketForm");
const userNameInput = document.getElementById("userName");
const userSurnameInput = document.getElementById("userSurname");
const userMailInput = document.getElementById("mail");
const userWorkTipeInput = document.getElementById("workType");
const userInfoInput = document.getElementById("note");
const userPromoInput = document.getElementById("userPromo");
//take the element for print in page
const resultElement = document.getElementById("result");
const privacyCheckbox = document.getElementById("flexCheckDefault");
const codeElement = document.getElementById("error");


//here is the dinamic select

const optionsData = {
    "1": "Sviluppo backend",
    "2": "Sviluppo frontend",
    "3": "analisi progettuale"
};

const selectElement = document.getElementById('workType');

for (const[key, value] of Object.entries(optionsData)) {
    //create new element
    const option = document.createElement("option");
    //value of the option is 1, 2, 3 
    option.value = key;
    //text visible
    option.textContent = value;
    //add oprion to select
    selectElement.appendChild(option)
}


// here is the submit event
userForm.addEventListener("submit", handleUserForm);

//function
function handleUserForm(event) {
    event.preventDefault();


//Pryvacy check

if (!privacyCheckbox.checked){
    alert(" ricorda di accettare la privacy policy prima di procedere");
    return;
}

    const username = userNameInput.value;
    const usersurname = userSurnameInput.value;
    const usermail = userMailInput.value;
    const userwork = userWorkTipeInput.value.split(","); //split for array
    const userinfo = userInfoInput.value;
    //trim remove spaces
    const userpromo = userPromoInput.value.trim();

    console.log(`${username} ${usersurname} ${usermail} ${userwork} ${userinfo} ${userpromo}`);
    
   //working hours as written in the quest are 10
    const timeWork = 10;
    const price = {
        back: 20.50,
        front: 15.30,
        rev: 33.60
    };
    let totPrice = 0; 

    //control price

    if (userwork == "1") {
        totPrice = timeWork * price.back;
    } else if (userwork == "2") {
        totPrice = timeWork * price.front;
    } else if (userwork == "3") {
        totPrice = timeWork * price.rev;
    } else 
        console.log("seleziona voce valida");

    let officialPrice = parseFloat(totPrice.toFixed(2));
        
    console.log(`Costo totale: ${officialPrice}€`);

    const promoCodes = ["YHDNU32", "JANJC63",  "PWKCN25", "SJDPO96", "POCIE24"]

    let salePrice = officialPrice;
    let message = `€ ${officialPrice}`;
    //apply discount
    
if (userpromo !== "") {
    if (promoCodes.includes(userpromo)) {
        salePrice = officialPrice - (officialPrice * 0.25);
        ultimateSalePrice = parseFloat(salePrice.toFixed(2));
        console.log(ultimateSalePrice);
        
        message = `€ ${ultimateSalePrice}`;
    } else {
        codeElement.innerHTML = "Codice sconto errato";
    
    // // Auto-refresh the page after 2 seconds
    // setTimeout(() => location.reload(), 2000);

    // //stop the run
    // return;
        
    }
}
    //result in page
    //resultElement.innerHTML = message;

    //now the price is bold with decimal small
    let [integerPart, decimalPart] = message.split('.');

    let formattedMessage = `<span class="fw-bold">${integerPart}</span>`;

    if (decimalPart) {
        formattedMessage += `<span class="small">.${decimalPart}</span>`;
    }

    resultElement.innerHTML = formattedMessage;



    //clean the input
    userForm.reset();

}