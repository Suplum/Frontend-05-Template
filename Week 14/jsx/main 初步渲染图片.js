import {Component, createElement} from "./framework.js"

class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    console.log(this.attributes.src);
    this.root = document.createElement("div");
    for(let record of this.attributes.src) {
      let child = document.createElement("img");
      child.src = record;
      this.root.appendChild(child);
    }
    return this.root;
  }
  mountTo(parent) {
    parent.appendChild(this.render());
  }
}

let d = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
];

let a = <Carousel src={d} />

a.mountTo(document.body);
