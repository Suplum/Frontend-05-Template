# CSS语法
> w3.org/TR/CSS21/grammar.html#q25.0

### 第一步 CSS总体结构

- @charset
- @import
- rules
  - @media
  - @page
  - rule

### 第二步 CSS @规则的研究

- @charset https://www.w3.org/TR/css-syntax-3
- @import
- @media
- @page
- counter-style
- @keyframes
- @fontface
- @supports(不推荐用o)
- @namespace

### CSS规则

- 选择器
  - https://www.w3.org/TR/selectors-3/
  - https://www.w3.org/TR/selectors-4/
- 声明
  - Key
    - Properties
    - Variables: https://www.w3.org/TR/css-variables/
  - Value
    - https://www.w3.org/TR/css-values-4/

### 收集标准

> https://www.w3.org/TR/?tag=css

-
  ```javascript
  Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e => ({name:e.children[1].innerText, url:e.children[0].href}))
  ```

### 选择器语法

- 简单选择器
  - \*
  - div svg|a
  - .class
  - #id
  - \[attr=value\]
  - :hover
  - ::before
- 复合选择器
  - <简单选择器> <简单选择器> <简单选择器>
  - \* 或者 div必须卸载最前面
- 复杂选择器
  - <复合选择器> <sp> <复合选择器>
  - <复合选择器> ">" <复合选择器>
  - <复合选择器> "~" <复合选择器>
  - <复合选择器> "+" <复合选择器>
  - <复合选择器> "||" <复合选择器>

### 选择器计数

- 简单选择器计数

### 伪类

- 链接/行为
  - :any-link（还没访问过的超链接）
  - :link :visited
    - 如果用了这两个，就再也没办法对这个元素更改文字颜色之外的属性了
    - 因为一旦使用了layout相关的属性，比如，用visited把尺寸变得大一点，那么就会影响排版，这样我们就可以通过JavaScript API去获取你这个链接它不是visited了，一旦获取到visited，你就知道用户访问过哪些网站了
  - :hover
  - :active
  - :focus
  - :target
- 树结构
  - :empty
  - :nth-child()
  - :nth-last-child()
  - :first-child :last-child :only-child
- 逻辑型
  - :not味蕾
  - :where :has

### 微元素

- ::before
- ::after
- ::first-line
- ::first-letter

```javascript
  function match(selector, element) {
    return true;
  }
  mathc('div #id.class', document.getElementById('id'));

```
