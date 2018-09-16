import _ from 'lodash'
import 'style.css'

function component(className) {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add(className)
  
  return element;
}

document.body.appendChild(component('red'));
document.body.appendChild(component('same-icon-name'));

