        //dark mode lite mode
let themeBtn = document.getElementById("icon");
// let icon = document.getElementById("icon");
// let logo = document.getElementById("logo");

let count = 0;

const changeTheme = () => {
    if (count % 2 === 0) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        // document.nav.style.backgroundColor = "white";
        icon.src = "img/moon.png"
        document.querySelector('nav').style.backgroundColor = "white";
        // document.querySelector('nav,nav ul li a').style.color = "black";
        document.querySelectorAll('nav, nav ul li a').forEach(element => {
            element.style.color = "black";
        });

        document.querySelector('footer').style.backgroundColor = "white"
        document.querySelector('footer').style.color = "black"
        logo.src = "img/logo1.jpg"
        document.body.style.transition = "all 0.5s";

        

        
        
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        // document.nav.style.backgroundColor = "black";
        icon.src = "img/sun.png"
        document.querySelector('nav').style.backgroundColor = "rgb(31, 31, 31)";
        document.querySelectorAll('nav, nav ul li a').forEach(element => {
            element.style.color = "white";
        });

        document.querySelector('footer').style.backgroundColor = "#14191b"
        document.querySelector('footer').style.color = "white"
        logo.src = "img/logo-removebg-preview.png"
        document.body.style.transition = "all 0.5s";


    }
    count++;
}

themeBtn.addEventListener("click", changeTheme);



        //form submit
var submitted = false;

window.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById("hiddenConfirm");
    var form = document.querySelector(".form");

    function handleIframeLoad() {
        if (submitted) {
            form.reset();
            alert("Thankyou for your message! We will get back to you soon!"); 
        }
    }
    iframe.addEventListener("load", handleIframeLoad);
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            link.classList.add('active');
        });
    });
});

