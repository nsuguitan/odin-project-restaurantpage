import _, { isBuffer } from 'lodash';
import '../style.css';

//carousel vanilla javascript reference: https://codepen.io/tnobrega/pen/GYOywQ


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

    // farLeftImage.onclick = 'moveToSelected(farLeftImage)'
    // leftImage.onclick = 'moveToSelected(leftImage)'
    // centerImage.onclick = 'moveToSelected(centerImage)'
    // rightImage.onclick = 'moveToSelected(rightImage)'
    // farRightImage.onclick = 'moveToSelected(farRightImage)'

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

function moveToSelected(){
    console.log("carousel time!!!")
    let temp = [];
    temp.push(document.getElementsByClassName("farLeftImage")[0]);
    temp.push(document.getElementsByClassName("leftImage")[0]);
    temp.push(document.getElementsByClassName("centerImage")[0]);
    temp.push(document.getElementsByClassName("rightImage")[0]);
    temp.push(document.getElementsByClassName("farRightImage")[0]);
    console.log(temp);
    const selectedIndex = 1;//temp.indexOf(element);
    console.log("index: ",selectedIndex);
    if(selectedIndex == 2){console.log("no change, selected in center")}
    else{
        console.log("selected element in array:",temp[selectedIndex]);
        console.log("class name to be removed: ", temp[selectedIndex].className)

        temp[selectedIndex].setAttribute('class', 'centerImage');
        let leftImageIndex = selectedIndex - 1
        if(selectedIndex == 0){leftImageIndex = 4}
        console.log("next selected element in array:",temp[(leftImageIndex)]);
        temp[(leftImageIndex)].setAttribute('class', 'leftImage');
        let farLeftImageIndex = selectedIndex -2
        if (farLeftImageIndex < 0){farLeftImageIndex = selectedIndex + 3}
        console.log("3rd selected element in array:",temp[(farLeftImageIndex)]);
        temp[farLeftImageIndex].setAttribute('class', 'farLeftImage');
        
        let farRightImageIndex = selectedIndex - 3
        if(farRightImageIndex<0){farRightImageIndex = selectedIndex + 2}
        console.log("4th selected element in array:",temp[(farRightImageIndex)]);
        temp[farRightImageIndex].setAttribute('class', 'farRightImage');

        console.log("5th selected element in array:",temp[(farRightImageIndex-1)]);
        temp[farRightImageIndex-1].setAttribute('class', 'rightImage');

        console.log("Yay! You moved selected image to center")
    }
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
console.log("carousel added");
moveToSelected();
// let img1 = document.getElementsByClassName("farLeftImage");
// let img2 = document.getElementsByClassName("leftImage");
// let img3 = document.getElementsByClassName("centerImage");
// let img4 = document.getElementsByClassName("rightImage");
// let img5 = document.getElementsByClassName("farRightImage");

// img1.addEventListener('click',moveToSelected(img1))
// img2.addEventListener('click',moveToSelected(img2))
// img3.addEventListener('click',moveToSelected(img3))
// img4.addEventListener('click',moveToSelected(img4))
// img5.addEventListener('click',moveToSelected(img5))