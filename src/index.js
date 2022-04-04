import _ from 'lodash';
import './style.css';
import createHomePage from './pages/home.js';
import createMenuPage from './pages/menu.js';


function navbar(){
    const element = document.createElement('div');
    element.setAttribute('id','navigation')
    const listStart = document.createElement('ul');
    listStart.className = 'tab-list'
    const listElement1 = document.createElement('li');
    listElement1.setAttribute('id','home');
    listElement1.innerHTML = 'Home'
    const listElement2 = document.createElement('li');
    listElement2.setAttribute('id','menu');
    listElement2.innerHTML = 'Menu'
    const listElement3 = document.createElement('li');
    listElement3.setAttribute('id','contactUs');
    listElement3.innerHTML = 'Contact Us'

    listStart.appendChild(listElement1);
    listStart.appendChild(listElement2);
    listStart.appendChild(listElement3);

    element.appendChild(listStart);

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