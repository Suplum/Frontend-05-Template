### proxy与双向绑定

1. ```javascript
    let object = {
      a: 1,
      b: 2
    }
    ```
    这个object，如果我们去访问它的a属性和访问b属性，这是一个写死的过程，无法在中间加任何监听的代码，其实这个object就是一个不可observe的对象，它就是一个单纯的数据存储，这也是js的最底层机制，无法改变。
1. 如果我们有一个对象，我们既想要去让它设置起来，像一个普通对象一样，又想让它能够被监听，我们可以通过proxy来把object做一层包裹
1. 参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy


### 模仿reactive实现原理

1. 如何去监听？当然我们可以在object上去加`addEventListener`类似这样的一个操作，但是在vue当中，用了一个特别有意思的API`effect`
1. 在js里，其实没有任何办法，让我们能获取一个函数能访问到的所有的变量，实际上即使我们能获得它能访问到哪些变量，我们也没有任何的数据结构可以访问到它


### reactivity响应式对象

1. `reactivity`有什么用？它是一个半成品的双向绑定，负责从数据到我们的DOM元素的一条线的监听。
1. 从DOM元素到数据的这一条线的监听其实很简单，因为DOM元素本来就有事件，然后它也可以不一定是DOM元素，它可以是任何的native的输入，它都可以去代理到reactive里面
1. 如果我们再配合一定的语法糖，比如build compiler，我们就完全可以把它最后变成一个零代码的双向绑定模式，这也是MVVM模式的一个经典案例


### 基本拖拽

> 使用Range和CSSOM做的一个综合练习
