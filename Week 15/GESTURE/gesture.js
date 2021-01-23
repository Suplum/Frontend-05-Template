let element = document.documentElement;

let isListeningMouse = false;

element.addEventListener("mousedown", event => {
  // console.log(event.button)

  let context = Object.create(null);
  contexts.set("mouse" + (1 << event.button), context);
  console.log("start", (1 << event.button))

  start(event, context)

  let mousemove = event => {
    // console.log(event.clientX, event.clientY);
    let button = 1;
    // button << 1
    while(button <= event.buttons) {
      if(button & event.buttons) {
        // order of buttons & button property is not same
        let key;
        if(button  === 2) {
          key = 4;
        } else if (button  === 4) {
          key = 2;
        } else {
          key = button;
        }
        let context = contexts.get("mouse" + button);
        console.log("start", (button))
        move(event, context)
      }
      button = button << 1;
    }
    
  }
  let mouseup = event => {
    console.log("end", event.button);
    let context = contexts.get("mouse" + (1 << event.button));
    end(event, context)
    contexts.delete("mouse" + (1 << event.button))

    if(event.buttons === 0) {
      element.removeEventListener("mousemove", mousemove);
      element.removeEventListener("mouseup", mouseup);
      isListeningMouse = false;
    }
  }
  if(!isListeningMouse) {
    element.addEventListener("mousemove", mousemove);
    element.addEventListener("mouseup", mouseup);
    isListeningMouse = true;
  }
})

let contexts = new Map();

element.addEventListener("touchstart", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('start', touch.clientX, touch.clientY);
    let context = Object.create(null);
    contexts.set(touch.identifier, context);
    start(touch, context);
  }
})

element.addEventListener("touchmove", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('move', touch.clientX, touch.clientY);
    let context = contexts.get(touch.identifier);
    move(touch, context);
  }
})

element.addEventListener("touchend", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('end', touch.clientX, touch.clientY);
    let context = contexts.get(touch.identifier);
    end(touch, context)
    contexts.delete(touch.identifier)
  }
})

element.addEventListener("touchcancel", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('cancel', touch.clientX, touch.clientY);
    let context = contexts.get(touch.identifier);
    cancel(touch, context)
    contexts.delete(touch.identifier)
  }
})

let handler;
let startX, startY;
let isPan = false, isTap = true, isPress = false;

let start = (point, context) => {
  // console.log("start", point.clientX, point.clientY)
  context.startX = point.clientX, context.startY = point.clientY;

  context.isTap = false;
  context.isPan = false;
  context.isPress = true;

  context.handler = setTimeout(() => {
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;
    context.handler = null;
    console.log("press")
  }, 500);
}

let move = (point, context) => {
  let dx = point.clientX - context.startX, dy = point.clientY - context.startY;

  if(!context.isPan && dx ** 2 + dy ** 2 > 100) {
    context.isTap = false;
    context.isPan = true;
    context.isPress = false;
    console.log("panstart");
    clearTimeout(context.handler);
  }

  if(context.isPan) {
    console.log(dx, dy)
    console.log("pan");
  }

  // console.log("move", point.clientX, point.clientY)
}

let end = (point, context) => {
  if(context.isTap) {
    console.log("tapend")
    clearTimeout(context.handler);
  }
  if(context.isPan) {
    console.log("panend")
  }
  if(context.isPress) {
    console.log("pressend")
  }
  // console.log("end", point.clientX, point.clientY)
}

let cancel = (point, context) => {
  console.log("cancel", point.clientX, point.clientY)
  clearTimeout(context.handler);
}