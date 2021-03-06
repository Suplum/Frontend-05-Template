function createElement(type, attributes, ...children) {
  let element = document.createElement(type);
  for(let name in attributes) {
    element.setAttribute(name, attributes[name]);
  }
  for(let child of children) {
    if(typeof child === 'string') {
      child = document.createTextNode(child);
    }
    element.appendChild(child);
  }
  return element;
}

let a = <div id="a">
      <span></span>
      <span></span>
      <span></span>
      Hello
    </div>

document.body.appendChild(a);
