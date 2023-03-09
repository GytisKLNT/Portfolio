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

 let submit = document.getElementById('submitButton');
 let thanks = document.getElementById('thanks');

 submit.addEventListener('click', () =>{
   
    thanks.style.display = "block";
 });

