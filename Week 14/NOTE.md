### 对象与组件

- 对象
  - Properties（属性）
  - Methods（方法）
  - Inherit(继承关系)
- 组件
  - Properties
  - Methods
  - Inherit
  - Attribute（属性）
  - Config & State（配置和状态）
  - Event（组件往外传递东西）
  - Lifecycle（生命周期）
  - Children（树形结构概念）
- Attribute vs Property
  - Attribute：
    ```html
    <my-component attribute="v" />
    myConponent.getAttribute("a")
    myComponent.setAttribute("a", "value");
    ```
  - Property：
    ```javascript
    myComponent.a = "value";
    ```
  - ```html
    <div class="cls1 cls2"></div>
    <script>
      var div = document.getElementByTagName('div');
      div.className // cls1 cls2
    </script>
    ```
  - react里，写className，自动就把class给设上了，不过现在js已经没有这个问题了，div.class也是可以的，但是html还是不支持class
  - ```html
    <a href="//m.taobao.com">
    <script>
    var a = document.getElementByTagName('a');
    a.href // "http://m.taobao.com"，这个URL是resolve过的结果
    a.getAttribute('href') // ”//m.taobao.com“，跟HTML代码中完全一致
    </script>
    ```
  - ```html
    <input value="cute" />
    <script>
    var input = document.getElementByTagName('input'); // 若property没有设置，则结果是attribute
    input.value // cute
    input.getAttribute('value'); // cute
    input.value = 'hello'; // 若value属性已经设置好，则attribute不变，property变化，元素上实际的效果是property优先
    input.value // hello
    input.getAttribute('value'); // cute
    </script>
    ```
- Children
  - Content型Children与Template型Children
    ```html
    <my-button><img src="{{icon}}"/>{{title}}</my-button>
    <my-list>
      <li><img src="icon"/>{{title}}</li>
    </my-list>
    ```
- JSX
  - `npm init`
  - `npm i -g webpack webpack-cli`
  - `webpack --version`
  - `npm install --save-dev webpack babel-loader`
  - `webpack`
  - `npm i --save-dev @babel/core @babelbabel/preset-env`
  - `npm install --save-dev @babel/plugin-transform-react-jsx`
  - 一个 class Div 我们到底有什么办法能够让他能够像普通的html元素一样操作呢
    - 在最新版的DOM的标准里面是有办法的，我们需要注册一些Div的名称和类型
    - 但是我们现行的比较安全的浏览器版本里面，不建议这样去做
  - `npm install webpack-dev-server --save-dev`
- 轮播
  - 16毫秒刚好是浏览器里一帧的时间
  - 不能用requestAnimationFrame
  - clientX、clientY：相当于整个浏览器的中间的可渲染区域的坐标，这个坐标不受任何因素影响
