### Mocha

- `npm i -g mocha`
- `npm i --save-dev mocha`
- [https://mochajs.org/]
- ```javascript
    function add(a, b) {
      return a + b;
    }

    module.exports = add;
  ```
  改成
  ```javascript
  export function add(a, b) {
    return a + b;
  }
  ```
  是不能用的。因为export在Node.js里，默认是不能用的，除非我们把package.json给改成type module，或者我们使用babel来做。一般来说，改成module问题比较多，所以我们很少会在package.json里面去该module，所以我们接下来要引入babel

  ### babel

  - `npm i --save-dev @babel/core @babel/register`
  - mocha会出错，然后我们就直接用一个mocha的参数 `mocha --require @babel/register`
  - 因为用的是global的mocha，所以会出现MODULE_NOT_FOUND的错误，其实我们只需要调local的register就行了`./node_modules/.bin/mocha --require @babel/register`