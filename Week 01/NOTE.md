## TicTacToe

> 简介：三子棋、一条龙

1. 用二维数组表示棋盘

2. 问号表达式，多个条件

   ```
    cell.innerText =
              pattern[i][j] == 2 ? "♠️" :
              pattern[i][j] == 1 ? "♥️" : '';
   ```

3. 如果 for 里不是用 let (因为 let 会创建一个词法的作用域)，如果用的是 var，就不能直接这样用，就需要在 addEventListener 外面加一个iife（问：iife 是啥？答：立即调用函数，也叫自执行函数）
    ```
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          let cell = document.createElement('div');
          cell.classList.add('cell');
          cell.innerText =
              pattern[i][j] == 2 ? "♠️" :
              pattern[i][j] == 1 ? "♥️" : '';
          cell.addEventListener('click', () => move(j, i));
          board.appendChild(cell);
        }
        board.appendChild(document.createElement('br'));
      }
    ```

4. 注意：move 的参数这里设置的是x、y，但是 patten 去取的时候一定是先 y 后 x。
    因为紧靠着 pattern 取的是更外层的那个数组的位置，x 是更里层的数组的位置（问：？）
  ```
    function move(x, y) {
      pattern[y][x] = color;
      if(check(pattern, color)) {
        alert(color == 2 ? "♠️ is winner" : "♥️ is winner");
      }
      color = 3 - color; // 让 color 在 1 和 2 来回变换
      show();
      if(willWin(pattern, color)) {
        console.log(color == 2 ? "♠️ will win!" : "♥️ will win!");
      }
    }
  ```




5. 克隆用 ```JSON.parse(JSON.stringify(pattern));``` 或 ```Object.create(pattern);```（节省内存空间）

6. bestChoice 一般会设置最大深度，如果到最大深度还没有结束，就会给一个估值

7. 多个 for 嵌套，可用 outer: 区分，```break outer;```

8. 将二维数组转成一维数组




## 异步编程（红绿灯）
1. classList.remove / add 操作 class
2. 多层回调嵌套会形成回调地狱
3. Promise 解决回调地狱的问题
4. async await 相当于封装了Promise，其原理还是 Promise
5. generator 现在一般不这样用了，也是类似于 async await
