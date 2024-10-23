document.getElementById("t-one").style.backgroundColor = "#3B77BC";
document.getElementById("t-one").style.padding = "60px";
document.body.style.backgroundColor = "#81C046";

document.getElementById("p-one").style.backgroundColor = "#DE482B";
document.getElementById("p-one").style.padding = "400px";

document.getElementById("p-two").style.backgroundColor = "#FCCF03";
document.getElementById("p-two").style.padding = "400px";

document.getElementById("foot").style.backgroundColor = "#3B77BC";
document.getElementById("foot").style.padding = "60px";

document.body.style.fontFamily = "Helvetica";
document.body.style.textAlign = "center";

const fontSizing = document.getElementById("p-one");
fontSizing.style.fontSize = "40px";

const fontSizing2 = document.getElementById("t-one");
fontSizing2.style.fontSize = "60px";

const fontSizing3 = document.getElementById("p-two");
fontSizing3.style.fontSize = "40px";

const fontSizing4 = document.getElementById("foot");
fontSizing4.style.fontSize = "60px";
// STYLING USING JAVASCRIPT


//CONTENTS OF THE WEBSITE USING JAVASCRIPT INSTEAD EDITING IN HTML
const sampleTitle = document.getElementById("t-one");
sampleTitle.innerHTML = "<h1>Welcome to EcoGoods!</h1>";

const sampleDescription1 = document.getElementById("p-one");
sampleDescription1.innerHTML = "At EcoGoods, we believe that small changes lead to big impacts. That’s why we curate a wide range of eco-friendly, sustainable products to help you reduce your carbon footprint without compromising on quality. From biodegradable kitchen essentials to stylish, ethically sourced clothing, we’ve got everything you need to make eco-conscious choices every day.";

const sampleDescription2 = document.getElementById("p-two");
sampleDescription2.innerHTML = "Join us on our mission to protect the planet, one product at a time. Shop sustainably. Live consciously. Together, we can make a difference.";

const sampleFooter = document.getElementById("foot");
sampleFooter.innerHTML = "<h1>EcoGoods</h1>"
//CONTENTS OF THE WEBSITE USING JAVASCRIPT INSTEAD EDITING IN HTML