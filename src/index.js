import _ from 'lodash';
import './style.css';
import createHomePage from './pages/home.js';
import createMenuPage from './pages/menu.js';


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
    listElement3.setAttribute('id','contactUs');
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
}

console.log("Hello Cruel World")
document.getElementById("content").appendChild(navbar());
createHomePage();
console.log("Homepage created")

//let menuTab = document.getElementById("menu");

//menuTab.addEventListener('click',function(){clearPage();createMenuPage()});