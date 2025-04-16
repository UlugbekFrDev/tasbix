// let a = window.addEventListener("scroll", function() {
//     // if(window.scrollY > 200)
//     alert("Elektron tasbixga xush kelibsiz!")

// })





alert("Elektron tasbix dasturimizga hush kelibsiz!");
let salovat = prompt("1 - Allohumma solli 'ala Muhammad wa 'ala aali Muhammad\n2 - Allohumma solli 'ala Muhammadin nabiyyil ummiyyi wa 'ala aalihi wa sallim\n3 - Allohumma solli wa sallim 'ala nabiyyina Muhammad fi kulli waqtiw waheen\nQaysi salovatni tanlaysiz?");
let a = "";
if (salovat === "1") {
    a = "Allohumma solli 'ala Muhammad wa 'ala aali Muhammad";
} else if (salovat === "2") {
    a = " Allohumma solli 'ala Muhammadin nabiyyil ummiyyi wa 'ala aalihi wa sallim";
} else if (salovat === "3") {
    a = "Allohumma solli wa sallim 'ala nabiyyina Muhammad fi kulli waqtiw waheen";
} else {
    a = "Noto'g'ri tanlov";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("a").innerText = a;
});


let count = 0;
function incrementCount() {
    count++;
    document.getElementById('count').innerText = count;
}
function resetCount() {
    count = 0;
    document.getElementById('count').innerText = count;
}


