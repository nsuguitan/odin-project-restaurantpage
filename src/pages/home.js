import _ from 'lodash';
import '../style.css';
import testPrint from './menu.js'

function button() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click then check console';
    btn.onclick = testPrint;

    element.appendChild(btn)

    return element;
}

document.body.appendChild(button())