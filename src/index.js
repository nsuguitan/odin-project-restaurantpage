import './style.css';
import createHomePage from './pages/home.js';
import createMenuPage from './pages/menu.js';
import createContactPage from './pages/contact.js';


function navbar(){
    const element = document.createElement('div');
    element.setAttribute('id','navigation')
    const navElement = document.createElement('nav')
    navElement.setAttribute('class','navbar navbar-expand-lg')
    const listStart = document.createElement('ul');
    listStart.classList.add("nav","tab-list")
    const listElement1 = document.createElement('li');
    listElement1.setAttribute('id','home');
    listElement1.setAttribute('class','nav-item');
    listElement1.innerHTML = 'Home'
    const listElement2 = document.createElement('li');
    listElement2.setAttribute('id','menu');
    listElement2.setAttribute('class','nav-item');
    listElement2.innerHTML = 'Menu'
    const listElement3 = document.createElement('li');
    listElement3.setAttribute('id','contact');
    listElement3.setAttribute('class','nav-item');
    listElement3.innerHTML = 'Contact Us'

    listStart.appendChild(listElement1);
    listStart.appendChild(listElement2);
    listStart.appendChild(listElement3);

    navElement.appendChild(listStart)

    element.appendChild(navElement);


    return element;

}

function clearPage(){
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(navbar());
    let homeTab = document.getElementById("home");
    homeTab.addEventListener('click',function(){clearPage(), createHomePage()})

    let menuTab = document.getElementById("menu");
    menuTab.addEventListener('click',function(){clearPage(), createMenuPage()});

    let contactTab = document.getElementById("contact");
    contactTab.addEventListener('click',function(){clearPage(), createContactPage()});
}

console.log("Hello Cruel World")
clearPage();
createHomePage();
console.log("Homepage created")

