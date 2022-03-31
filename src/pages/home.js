import _ from 'lodash';
import '../style.css';


function header(){
    const element = document.createElement('div');
    const title = document.createElement('h1');

    title.innerHTML = 'Boba F&ecirc;te';
    title.className = 'header';
    element.appendChild(title);
    return element;
}

function intro(){
    console.log("We made it to the intro function");
    const element = document.createElement('div');
    element.setAttribute('class','paragraph');
    const para = document.createElement('p');
    const br = document.createElement('br');
    const node1 = document.createTextNode("Join the party!");
    const node2 = document.createTextNode("Bubble tea was invented in Taiwan in the 1980's and it has been a party ever since.\
     From milk teas to fruit teas, and popping boba to tapioca pearls, there is a drink out there for everyone. Let's find yours!");
    
    console.log("append to paragraph part");
    para.appendChild(node1);
    para.appendChild(br)
    para.appendChild(node2);
    console.log("append to paragraph complete");

    element.appendChild(para);
    
    console.log("append to paragraph div complete");

    return element;
}

function initCarousel(){

    const element = document.createElement('div');
    element.setAttribute('id','carousel');

    let farLeftImage = document.createElement('img');
    let leftImage = document.createElement('img');
    let centerImage = document.createElement('img');
    let rightImage = document.createElement('img');
    let farRightImage = document.createElement('img');
    
    farLeftImage.setAttribute('class','farLeftImage');
    leftImage.setAttribute('class','leftImage');
    centerImage.setAttribute('class','centerImage');
    rightImage.setAttribute('class','rightImage');
    farRightImage.setAttribute('class','farRightImage');

    farLeftImage.src = '../src/images/carousel1.jpeg';
    leftImage.src = '../src/images/carousel2.jpeg';
    centerImage.src = '../src/images/carousel3.jpeg';
    rightImage.src = '../src/images/carousel4.jpeg';
    farRightImage.src = '../src/images/carousel5.jpeg';

    element.appendChild(farLeftImage);
    element.appendChild(leftImage);
    element.appendChild(centerImage);
    element.appendChild(rightImage);
    element.appendChild(farRightImage);

    return element;
}
function button() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click then check console';
    btn.onclick = testPrint;

    element.appendChild(btn)

    return element;
}

document.body.style.backgroundImage = "url('../src/images/background.jpg')";
console.log("lets get this party started");
document.getElementById("content").appendChild(header());
console.log("header added");
document.getElementById("content").appendChild(intro());
console.log("paragraph added");
document.getElementById("content").appendChild(initCarousel());
console.log("carousel added")