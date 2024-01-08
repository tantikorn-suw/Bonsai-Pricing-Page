let paragraph1 = document.getElementById("paragraph1");
let showHide = document.getElementById("showHide")
let paragraph2 = document.getElementById("paragraph2");
let showHide2 = document.getElementById("showHide2")
let paragraph3 = document.getElementById("paragraph3");
let showHide3 = document.getElementById("showHide3")
let paragraph4 = document.getElementById("paragraph4");
let showHide4 = document.getElementById("showHide4")
function toggleBillingCycle() {
    let monthlyCheckbox = document.getElementById("monthlyCheckbox");
    let priceElements = document.querySelectorAll(".price");
    let billDisplay1 = document.getElementById("billed1");
    let billDisplay2 = document.getElementById("billed2");
    let billDisplay3 = document.getElementById("billed3");
    let monthlytxt = document.getElementById("monthlytxt");
    let yearlytxt = document.getElementById("yearlytxt");
    if (monthlyCheckbox.checked) {
        // Change text to yearly
        priceElements.forEach(function (element) {
            element.innerHTML = element.innerHTML.replace("24", "17");
            element.innerHTML = element.innerHTML.replace("39", "32");
            element.innerHTML = element.innerHTML.replace("79", "52");
            billDisplay1.classList.remove("d-none");
            billDisplay1.classList.add("d-block");
            billDisplay2.classList.remove("d-none");
            billDisplay2.classList.add("d-block");
            billDisplay3.classList.remove("d-none");
            billDisplay3.classList.add("d-block");
            monthlytxt.classList.add('opacity-50');
            yearlytxt.classList.remove('opacity-50');
        });
    } else {
        // Change text to monthly
        priceElements.forEach(function (element) {
            element.innerHTML = element.innerHTML.replace("17", "24");
            element.innerHTML = element.innerHTML.replace("32", "39");
            element.innerHTML = element.innerHTML.replace("52", "79");
            billDisplay1.classList.remove("d-block");
            billDisplay1.classList.add("d-none");
            billDisplay2.classList.remove("d-block");
            billDisplay2.classList.add("d-none");
            billDisplay3.classList.remove("d-block");
            billDisplay3.classList.add("d-none");
            monthlytxt.classList.remove('opacity-50');
            yearlytxt.classList.add('opacity-50');
        });
    }
}
showHide.onclick = function() {
    if (paragraph1.style.display == "block") {
        paragraph1.style.display = "none";
    } else {
        paragraph1.style.display = "block";
    }
  }
showHide2.onclick = function() {
    if (paragraph2.style.display == "block") {
        paragraph2.style.display = "none";
    } else {
        paragraph2.style.display = "block";
    }
}
showHide3.onclick = function() {
    if (paragraph3.style.display == "block") {
        paragraph3.style.display = "none";
    } else {
        paragraph3.style.display = "block";
    }
}
showHide4.onclick = function() {
    if (paragraph4.style.display == "block") {
        paragraph4.style.display = "none";
    } else {
        paragraph4.style.display = "block";
    }
}