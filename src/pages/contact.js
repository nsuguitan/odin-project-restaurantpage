function header(){
    const element = document.createElement('div');
    const title = document.createElement('h1');

    title.innerHTML = 'Contact Us';
    title.className = 'header';
    element.appendChild(title);
    return element;
}

function createContactCard(){
    const element = document.createElement('div');
    const child = document.createElement('div')

    element.classList.add('card-columns'); 
    child.classList.add('card','p-3','col-2')

    child.appendChild(addContact('Boba Fett', 'Manager', 'A0050', 'bobaBoi@fake.com'));
    element.appendChild(child)
    return element;
}

function addContact(name,job,phone,email){
    const element = document.createElement('div');
    element.classList.add('card-body');

    const bobaFettProfile = document.createElement('img');
    bobaFettProfile.src = '../src/images/bobafetthead.png';
    bobaFettProfile.alt = 'Boba Fett Lego Head';
    bobaFettProfile.id = 'bobaFett';

    const employeeInfo = document.createElement('p');
    employeeInfo.setAttribute('id','employeeInfoTitle');
    const title = document.createElement('h3');
    title.innerHTML = name;
    const para = document.createElement('p');
    para.setAttribute('id','employeeInfoParagraph');
    const br = document.createElement('br');
    const node1 = document.createTextNode("Title: "+job);
    const node2 = document.createTextNode("Phone Number: "+phone);
    const node3 = document.createTextNode("Email: "+email);
    const node4 = document.createTextNode("I'm hidden in 3 places in this website, you know what to do...");
    para.appendChild(node1);
    para.appendChild(br.cloneNode(true));
    para.appendChild(node2);
    para.appendChild(br.cloneNode(true));
    para.appendChild(node3);
    para.appendChild(br.cloneNode(true));
    para.appendChild(br.cloneNode(true));
    para.appendChild(node4);

    employeeInfo.appendChild(title);
    employeeInfo.appendChild(para);

    element.appendChild(bobaFettProfile);
    element.appendChild(employeeInfo);
    return element;
}

export default function createContactPage(){
    document.body.style.backgroundImage = "url('../src/images/background.jpg')";
    document.getElementById("content").appendChild(header());
    document.getElementById("content").appendChild(createContactCard());
    
}