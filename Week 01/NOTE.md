# TicTacToe
1. 用二维数组或二维数组表示棋盘
2. 克隆用 JSON.parse(JSON.stringify(pattern)); 或 Object.create(pattern);（节省内存空间）
3. bestChoice 一般会设置最大深度，如果到最大深度还没有结束，就会给一个估值
4. 多个 for 嵌套，可用 outer: 区分，break outer;

# 异步编程（红绿灯）
1. classList.remove / add操作class
2. 多层回调嵌套会形成回调地狱
3. Promise 解决回调地狱的问题
4. async await 相当于封装了Promise，其原理还是 Promise
5. generator 现在一般不这样用了，也是类似于 async await
