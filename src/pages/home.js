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

function carousel(){

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

document.getElementById("content").appendChild(header())