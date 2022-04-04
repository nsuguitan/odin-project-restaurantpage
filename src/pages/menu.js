function header(){
    const element = document.createElement('div');
    const title = document.createElement('h1');

    title.innerHTML = 'Menu';
    title.className = 'header';
    element.appendChild(title);
    return element;
}

function createMenuPage(){
    document.body.style.backgroundImage = "url('../src/images/background.jpg')";
    document.getElementById("content").appendChild(header());
}

