// Burger button animation and side menu open

const btn = document.getElementById('nav-icon1'); //get burger button
var sideMenu = document.getElementById("side-menu"); // get side-menu block

btn.addEventListener('click', () =>{  //when burger is clicked
  btn.classList.toggle('open');       // open/ close burger animation
  sideMenu.classList.toggle("translate"); // open/ close side-menu
  
});



let link = document.querySelectorAll('.menuLink');
  

  Array
  .from(link)
  .forEach(element => element.addEventListener('click', () =>{
    btn.classList.toggle('open');       // open/ close burger animation
    sideMenu.classList.toggle("translate"); // open/ close side-menu

  }))


  // Hello display in different languages


  const hello = ['Hello', 'Sveiki', 'God dag', 'Bonjour', 'Guten tag', 'Salve', 'Cześć', 'Olá', 'Hola', 'Aloha'];
  let helloIndex = 0
  let changeHello = document.getElementById('hello');

  setInterval(function() {
    ++helloIndex;
    if (helloIndex >= hello.length) {
        helloIndex = 0;
    }
    changeHello.innerText = hello[helloIndex]
}, 3000);



// after submiting a form

//  let submit = document.getElementById('submitButton');
//  let thanks = document.getElementById('thanks');

//  submit.addEventListener('click', () =>{
   
//     thanks.style.display = "block";
//  });

 const form = document.forms.contactMe;

 form.addEventListener("submit", (e)=> {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const email = e.target.elements.email.value.trim().toLowerCase();
  const message = e.target.elements.message.value.trim();

  const toSend = { name, email, message };

  sendEmail(toSend);
 });

 const sendEmail = async (toSend) => {
  try {
    const res = await fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSend),
    });

    const data = await res.json();
  } catch (error) {
    alert(err.message || "An error has happened. Try again later.");
  }
 }

