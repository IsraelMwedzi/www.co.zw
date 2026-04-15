
//time
{
    const root = document.getElementById("root");
    root.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    setInterval(() => {
        root.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }                   , 500);
}   

document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;

                // Simple validation for demo purposes
                if (username === 'Israel' && password === '#@Easz2006') {
                    open("./welcome.html")
                    
                } else {
                    document.getElementById('error-message').style.display = 'block';
                }
                this.reset();
            });
            function about(){
             alert("Page under construction");
               // alert("We are a fintech company aimed to provide digital and financial solutions throughout the world. This company is working to bridge the gap with in crypto industry. We are working to create a system that enable users to deposit and withdraw crypto currences using local mobile payment methods like Ecocash, OneMoney and others.");
            }

            let text = "Do not try to log in if you are not the owner of this system.";
let index = 0;
let cursor = "|";
let typingSpeed = 100; // adjust typing speed (ms)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("header-text").innerHTML = text.substring(0, index) + cursor;
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    document.getElementById("header-text").innerHTML = text; // remove cursor at the end
  }
}

typeWriter();
        
