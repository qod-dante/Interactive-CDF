// Card Outputs

const cvcOut = document.getElementById('cvcOutput');
const cardNumberOut = document.getElementById('cardNumberOutput');
const cardHolderOut = document.getElementById('cardHolderOutput');
const ExpDateOut = document.getElementById('ExpDateOutput');
const ExpDateMMOut = document.getElementById('ExpDateMMOutput');
const ExpDateYYOut = document.getElementById('ExpDateYYOutput');

// Form Inputs

const cardHolderIn = document.getElementById('cardHolder');
const cardNumberIn = document.getElementById('cardNumber');
const expDateMMIn = document.getElementById('expDateMM');
const expDateYYIn = document.getElementById('expDateYY');
const cvcIn = document.getElementById('cvc');
const CDSub = document.getElementById('cardDetailsSubmit');
const CDRst = document.getElementById('cardDetailsReset');

// cardHolderIn.addEventListener("input", realTimeUpdateCardHolder());
// cardNumberIn.addEventListener("input", realTimeUpdateCardNumber());
// expDateMMIn.addEventListener("input", realTimeUpdateExpDateMM());
// expDateYYIn.addEventListener("input", realTimeUpdateExpDateYY());
// cvcIn.addEventListener("input", realTimeUpdateCvc());

function realTimeUpdateCvc() {
    cvcOut.innerHTML = cvcIn.value;
}

function realTimeUpdateCardNumber() {
    cardNumberOut.innerHTML = cardNumberIn.value;
}

function realTimeUpdateCardHolder() {
    cardHolderOut.innerHTML = cardHolderIn.value;
}

function realTimeUpdateExpDateMM() {
    ExpDateMMOut.innerHTML = expDateMMIn.value;
}

function realTimeUpdateExpDateYY() {
    ExpDateYYOut.innerHTML = expDateYYIn.value;
}