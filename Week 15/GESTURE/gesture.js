let element = document.documentElement;

element.addEventListener("mousedown", event => {

  start(event)

  let mousemove = event => {
    // console.log(event.clientX, event.clientY);
    move(event)
  }
  let mouseup = event => {
    end(event)
    element.addEventListener("mousemove", mousemove);
    element.addEventListener("mouseup", mouseup);
  }
  element.addEventListener("mousemove", mousemove);
  element.addEventListener("mouseup", mouseup);
})

element.addEventListener("touchstart", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('start', touch.clientX, touch.clientY);
    start(touch);
  }
})

element.addEventListener("touchmove", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('move', touch.clientX, touch.clientY);
    move(touch);
  }
})

element.addEventListener("touchend", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('end', touch.clientX, touch.clientY);
    end(touch)
  }
})

element.addEventListener("touchcancel", event => {
  // console.log(event.changedTouches)
  for(let touch of event.changedTouches) {
    // console.log('cancel', touch.clientX, touch.clientY);
    cancel(touch)
  }
})

let handler;
let startX, startY;
let isPan = false, isTap = true, isPress = false;

let start = (point) => {
  // console.log("start", point.clientX, point.clientY)
  startX = point.clientX, startY = point.clientY;

  isTap = false;
  isPan = false;
  isPress = true;

  handler = setTimeout(() => {
    isTap = true;
    isPan = false;
    isPress = false;
    handler = null;
    console.log("press")
  }, 500);
}

let move = (point) => {
  let dx = point.clientX - startX, dy = point.clientY - startY - startY;

  if(!isPan && dx ** 2 + dy ** 2 > 100) {
    isTap = false;
    isPan = true;
    isPress = false;
    console.log("panstart");
    clearTimeout(handler);
  }

  if(isPan) {
    console.log(dx, dy)
    console.log("pan");
  }

  // console.log("move", point.clientX, point.clientY)
}

let end = (point) => {
  if(isTap) {
    console.log("tapend")
    clearTimeout(handler);
  }
  if(isPan) {
    console.log("panend")
  }
  if(isPress) {
    console.log("pressend")
  }
  // console.log("end", point.clientX, point.clientY)
}

let cancel = (point) => {
  console.log("cancel", point.clientX, point.clientY)
  clearTimeout(handler);
}