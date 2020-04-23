

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl =  document.querySelector('main');
let topMenuEl = document.getElementById('top-menu');
//Task 1
mainEl.style.backgroundColor=("var(--main-bg)");
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr");

//Task2
topMenuEl.style.height=('100%');
topMenuEl.style.backgroundColor=("var(--top-menu-bg)");
topMenuEl.classList.add("flex-around");
 //Task 3
menuLinks.forEach( function (aTag) {
   let aEl = document.createElement('a');    
  aEl.innerText = aTag.text
  aEl.setAttribute('href', aTag.href);
  topMenuEl.appendChild(aEl);
});

