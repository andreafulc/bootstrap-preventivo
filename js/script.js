// Take all the elements
const userForm = document.getElementById("ticketForm");
const userNameInput = document.getElementById("userName");
const userSurnameInput = document.getElementById("userSurname");
const userMailInput = document.getElementById("mail");
const userWorkTipeInput = document.getElementById("workType");
const userInfoInput = document.getElementById("note");
const userPromoInput = document.getElementById("userPromo");

// Elements for displaying results
const resultElement = document.getElementById("result");
const privacyCheckbox = document.getElementById("flexCheckDefault");
const codeElement = document.getElementById("error");

// Work types
const optionsData = {
    "1": "Sviluppo backend",
    "2": "Sviluppo frontend",
    "3": "Analisi progettuale"
};

// Prices per hour
const timeWork = 10;
const priceList = {
    "1": 20.50,  // Backend
    "2": 15.30,  // Frontend
    "3": 33.60   // Analysis
};

// Promo codes
const promoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// Event listener
userForm.addEventListener("submit", handleUserForm);

// Function to handle form submission
function handleUserForm(event) {
    event.preventDefault();

    if (!validatePrivacy()) return;

    const { username, usersurname, usermail, userwork, userinfo, userpromo } = getUserData();
    let totalPrice = calculatePrice(userwork);
    let finalPrice = applyDiscount(totalPrice, userpromo);

    resultElement.innerHTML = formatPrice(finalPrice);

    userForm.reset();
}

// Validate privacy checkbox
function validatePrivacy() {
    if (!privacyCheckbox.checked) {
        alert("Ricorda di accettare la privacy policy prima di procedere");
        return false;
    }
    return true;
}

// Get and clean user data
function getUserData() {
    return {
        username: userNameInput.value,
        usersurname: userSurnameInput.value,
        usermail: userMailInput.value,
        userwork: userWorkTipeInput.value,  // Directly gets selected value
        userinfo: userInfoInput.value.trim(),
        userpromo: userPromoInput.value.trim()
    };
}

// Calculate price based on work type
function calculatePrice(userwork) {
    return timeWork * (priceList[userwork] || 0);
}

// Apply discount if promo code is valid
function applyDiscount(price, userpromo) {
    if (userpromo !== "" && promoCodes.includes(userpromo)) {
        return parseFloat((price * 0.75).toFixed(2));
    } else if (userpromo !== "") {
        codeElement.innerHTML = "Codice sconto errato";
    }
    return price;
}

// Format price display
function formatPrice(price) {
    let formattedPrice = price.toFixed(2);
    let [integerPart, decimalPart] = formattedPrice.split('.');
    return `<span class="fw-bold">${integerPart}</span><span class="small">.${decimalPart}</span>`;
}

// Generate select options dynamically
function generateSelectOptions(optionsData, selectElementId) {
    const selectElement = document.getElementById(selectElementId);
    Object.entries(optionsData).forEach(([key, value]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

// Call function to populate select
generateSelectOptions(optionsData, 'workType');