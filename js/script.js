//Take all the element

const userForm = document.getElementById("ticketForm");
console.log(userForm);

const userNameInput = document.getElementById("userName");
console.log(userNameInput);

const userSurnameInput = document.getElementById("userSurname");
console.log(userSurnameInput);

const userMailInput = document.getElementById("mail");
console.log(userMailInput);

const userWorkTipeInput = document.getElementById("workType");
console.log(userWorkTipeInput);

const userInfoInput = document.getElementById("note");
console.log(userInfoInput);

const userPromoInput = document.getElementById("userPromo");
console.log(userPromoInput);

//here is the submit event

userForm.addEventListener("submit", handleUserForm);


//////////////////////////////////////////////////////////
//function


function handleUserForm(event) {
    event.preventDefault();
    console.log("userform");
    const username = userNameInput.value;
    const usersurname = userSurnameInput.value;
    const usermail = userMailInput.value;
    const userwork = userWorkTipeInput.value;
    const userinfo = userInfoInput.value;
    const userpromo = userPromoInput.value;

    const allData = `${username} ${usersurname} ${usermail} ${userwork} ${userinfo} ${userpromo}`;
    console.log(allData);
    
    

}