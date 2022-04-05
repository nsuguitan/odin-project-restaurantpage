function header(){
    const element = document.createElement('div');
    const title = document.createElement('h1');

    title.innerHTML = 'Menu';
    title.className = 'header';
    element.appendChild(title);
    return element;
}

function createMenuBoxes(){
const element = document.createElement('div');
element.classList.add('grid2x2')

//adding item1
const blackTeaImageURL = '../src/images/blacktea.png';
const blackTeaName = 'Black Tea';
const blackTeaDescription = 'A true classic and founder favorite';
const blackTeaPrice = '$4.95';
element.appendChild(addMenuItem(blackTeaImageURL,blackTeaName, blackTeaDescription, blackTeaPrice));

return element;
}

function addMenuItem(menuImage, menuItem, menuDescription, menuPrice){
    const element = document.createElement('div');
    element.classList.add('box');
    element.style = 'clear: left;';

    const menuImageParagraph = document.createElement('p');
    menuImageParagraph.style = "float: left;";
    menuImageParagraph.classList.add('shake');
    const myImage = document.createElement('img');
    myImage.src = menuImage;

    const menuInfo = document.createElement('p');
    const title = document.createElement('h3');
    title.innerHTML = menuItem;
    const para = document.createElement('p');
    const br = document.createElement('br');
    const node1 = document.createTextNode(menuDescription);
    const node2 = document.createTextNode(menuPrice);
    
    para.appendChild(node1);
    para.appendChild(br);
    para.appendChild(node2);

    menuInfo.appendChild(title);
    menuInfo.appendChild(para);

    menuImageParagraph.appendChild(myImage);

    element.appendChild(menuImageParagraph);
    element.appendChild(menuInfo);

    return element;
}

export default function createMenuPage(){
    document.body.style.backgroundImage = "url('../src/images/background.jpg')";
    document.getElementById("content").appendChild(header());
    document.getElementById("content").appendChild(createMenuBoxes());

    
}

