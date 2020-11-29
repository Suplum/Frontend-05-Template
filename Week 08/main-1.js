// 找到字符a
function match1(string) {
  for(let c of string) {
    if(c == 'a') {
      return true;
    }
  }
  return false;
}
match1('I am groot');

// 在一个字符串中，找到字符'ab'
function match2(string) {
  let foundA = false;
  for(let c of string) {
    if(c == 'a') {
      foundA = true;
    } else if(foundA && c == 'b') {
      return true;
    } else {
      foundA = false;
    }
  }
  return false;
}
console.log(match2('I acbm groot'));

// 在一个字符串中，找到字符'abcdef'
function match3(string) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  for(let c of string) {
    if(c == 'a') {
      foundA = true;
    } else if(foundA && c == 'b') {
      foundB = true;
    } else if(foundB && c == 'c') {
      foundC = true;
    } else if(foundC && c == 'd') {
      foundD = true;
    } else if(foundD && c == 'e') {
      return true;
    } else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}
console.log(match3('abcdefs'))

// 使用状态机
function match4(string) {
  let state = start;
  for(let c of string) {
    state = state(c);
  }
  return state === end;
}
function start(c) {
  if(c === 'a') {
    return foundA;
  } else {
    return start;
  }
}
function end(c) {
  return end;
}
function foundA(c) {
  if(c === 'b') {
    return foundB;
  } else {
    return start(c); // 加c相当于reConsume，重新使用
  }
}
function foundB(c) {
  if(c === 'c') {
    return foundC;
  } else {
    return start;
  }
}
function foundC(c) {
  if(c === 'd') {
    return foundD;
  } else {
    return start;
  }
}
function foundD(c) {
  if(c === 'e') {
    return foundE;
  } else {
    return start(c);
  }
}
function foundE(c) {
  if(c === 'f') {
    return end;
  } else {
    return start(c);
  }
}
console.log(match4('I mabcdefgroot'));

// 用状态机处理如“abcabx”这样的字符串
