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

// here is the submit event
userForm.addEventListener("submit", handleUserForm);

//function
function handleUserForm(event) {
    event.preventDefault();

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

    let officialPrice = totPrice.toFixed(2);
        
    console.log(`Costo totale: ${officialPrice}€`);

    const promoCodes = ["YHDNU32", "JANJC63",  "PWKCN25", "SJDPO96", "POCIE24"]

    let salePrice = officialPrice;

    //apply discount

    if (promoCodes.includes(userpromo)) {
        salePrice = officialPrice - (officialPrice * 0.25);
        ultimateSalePrice = salePrice.toFixed(2);
        console.log(ultimateSalePrice);
        
        message = `€ ${ultimateSalePrice}`;
    } else {
        message = `€ ${officialPrice}`;
    }

    //result in page
    resultElement.innerHTML = message;




    //clean the input
    userForm.reset();

}