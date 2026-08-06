/* ==========================================
   VELOXA - app.js
   Main JavaScript
========================================== */

// ==============================
// Dark Mode Toggle
// ==============================

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeButton.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("veloxa-theme","dark");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("veloxa-theme","light");
        }

    });

}

window.addEventListener("load",()=>{

    const saved = localStorage.getItem("veloxa-theme");

    if(saved==="dark"){

        document.body.classList.add("dark");

        if(themeButton){

            themeButton.innerHTML='<i class="fa-solid fa-sun"></i>';

        }

    }

});


// ==============================
// Animated Counters
// ==============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.getAttribute("data-target");

        const current=+counter.innerText;

        const increment=Math.ceil(target/100);

        if(current<target){

            counter.innerText=current+increment;

            setTimeout(update,20);

        }else{

            counter.innerText=target;

        }

    };

    update();

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements=document.querySelectorAll(".card,.price-card,.testimonial,.stat,.contact,.newsletter");

function reveal(){

    revealElements.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        if(revealTop<windowHeight-100){

            item.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);


// ==============================
// Navbar Background
// ==============================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.style.background="rgba(0,20,60,.92)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }else{

        nav.style.background="rgba(0,0,0,.15)";
        nav.style.boxShadow="none";

    }

});


// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ==============================
// Newsletter Form
// ==============================

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing to VELOXA!");

newsletter.reset();

});

}


// ==============================
// Contact Form
// ==============================

const contact=document.querySelector(".contact form");

if(contact){

contact.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=contact.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

}

});

if(!valid){

alert("Please complete all fields.");

return;

}

alert("Your message has been sent successfully.");

contact.reset();

});

}


// ==============================
// Back To Top Button
// ==============================

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#008CFF";
topButton.style.color="white";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="18px";
topButton.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";
topButton.style.zIndex="1000";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==============================
// Card Hover Sound (Optional)
// ==============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


// ==============================
// Console Welcome
// ==============================

console.log(
"%cWelcome to VELOXA",
"color:#00A2FF;font-size:24px;font-weight:bold;"
);

console.log(
"%cPowered by Artificial Intelligence",
"color:white;font-size:16px;"
);
