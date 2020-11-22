### Atom

#### Grammar

- Grammar Tree vs Priority(语法树与运算符)
  - 运算顺序 ：
    - \+ \-
    - \* \/
    - ()
  - js用产生式来描述运算符优先级
  - Expression
  - Left hand side & Right hand side
  > Example: a.b = c; a+b=c
  - Update
    > Example: 1) ++a++ 2) ++(a++)
    - a++
    - a--
    - --a
    - ++a
  - Unary(单目运算)
    - delete a.b
    - void foo()
    - typeof a
    - +a
    - -a
    - ~a
    - !a
    - await a
  - Exponental
    - **
      - Example
        - 3 ** 2 ** 3
        - 3 ** (2 ** 3)
  - Multiplicative
    - \* / %
  - Additive
    - \+ \-
  - Shift（位运算）
    - << >> >>>
  - Relationship（关系比较）
    - < > <= >= instanceof in
  - Equality
    - ==
      - 优先把布尔型的变量转换成Number型，建议不用，用的话要对两边类型有信心才行
    - !=
    - ===
    - !==
  - Bitwise
    - & ^ |
  - Logical（逻辑运算）
    - &&
    - ||
    - (短路原则，如果&&前面部分是false，那么后面部分不会被执行，||前面是true，那么后面不会执行)
  - Conditional
    - ?:
    - 短路逻辑：跟C语言是不一致的，如果条件部分为true时，冒号后面部分是不会被执行的

#### Runtime

- Type Convertion（类型转换）
  - a+b
  - "false"==false
  - a\[o\]=1;
  - |  | Number | String | Boolean | Undefined | Null | Object | Symol |
    | ------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
    | Number | - |  | 0 false | x | x | Boxing | x |
    | String | | - | "" false | x | x | Boxing | x |
    | Boolean | true 1 false 0 | 'true' 'false' | - | x | x | Boxing | x |
    | Undefined | NaN | 'Undefined' | false | - | x | x | x |
    | Null | = | 'null' | false | x | - | x | x |
    | Object | valueOf | valueOf toString | true | x | x | - | x |
    | Symbol | x | x | x | x | x | Boxing | - |
- Unboxing(拆箱转换)
  - ToPremitive
  - toString vs valueOf
  - Symbol.toPrimitive
- Boxing（装箱转换）
  - | 类型 | 对象 | 值 |
    | -- | :-: | -: |
    | Number | new Number(1) | 1 |
    | String | new String('a') | "a" |
    | Boolean | new Boolean(true) | true |
    | Symbol | new Object(Symbol("a")) | Symbol("a") |
  - 如果点和方括号之前的变量或者是表达式，得到的是一个基础类型，那么就会自动调用装箱的过程
- Reference
  - 类型
    - Object
    - Key
  - 基础设施
    - delete
    - assign

### Expression
- Member
  - a.b
  - a\[b\]
  - foo\`string\`
  - super.b
  - super\['b'\]
  - new.target
  - new Foo()
- New
  - new Foo
  - Example:
    - new a()()
    - new new a()
- Call
  > Example:new a()\['b'\]
  - foo()
  - super()
  - foo()\['b'\]
  - foo().b
  - foo()\`abc\`

### Statement（语句）

- Grammar
  - 简单语句
    - ExpressionStatement
    - EmptyStatement
    - DebuggerStatement
    - ThrowStatement
    - ContinueStatement
    - BreakStatement
    - ReturnStatement
    - 还要比较新的 yeid
  - 组合语句
    - BlockStatement
      - \[\[type\]\]: normal
      - \[\[value\]\]: --
      - \[\[target\]\]: --
    - IfStatement
    - SwitchStatement（建议用if代替switch，因为容易写错）
    - IterationStatement
      - while()
      - do while();
      - for(;;;)
      - for( in )
      - for( of )
      - for await( of )
    - LabelledStatement
    - TryStatement（try、catch、finaly）
  - 声明
    - FunctionDeclaration
    - GeneratorDeclaration
    - AsyncFunctionDeclaration
    - AsyncGeneratorDeclaration
    - VariableStatement
    - ClassDeclaration
    - LexicalDeclaration
  - 预处理（pre-process）
    - ```javascript
        var a = 2;
        void function () {
          a = 1;
          return;
          var a;
        }();
        console.log(a)
      ```
      ```javascript
        var a = 2;
        void function () {
          a = 1;
          return;
          const a;
        }();
        console.log(a)
      ```
    - 作用域
      - 作用域链可以忘记了。。。
      - ```javascript
          var a = 2;
          void function() {
            a = 1;
            {
              var a;
            }
          }();
          console.log(a);
        ```
        ```javascript
          var a = 2;
          void function() {
            a = 1;
            {
              const a;
            }
          }();
          console.log(a);
        ```

- Runtime
  - Completion Record
    - ```javascript
        if(x==1)
        return 10;
      ```
    - 我们需要一个数据结构来描述语句的执行结果：是否返回了？返回值是啥？等等。。。
    - \[\[type\]\]:normal, break, continue, return, or throw
    - \[\[value\]\]: 基本类型
    - \[\[target\]\]: label
  - Lexical Environment


### Structure（结构化）
- JS执行粒度（运行时）
  - 宏任务
  - 微任务（Promise）
  - 函数调用（Execution Context）
  - 语句/声明（Completion Record）
  - 表达式（Reference）
  - 直接量/变量/this...
- 宏任务和微任务
- 事件循环
- 函数调用
  - ```javascript
      import {foo} from "foo.js"
      var  i = 0;
      console.log(i);
      foo();
      console.log(i);
      i++;
    ```
    ```javascript
      function foo() {
        console.log(i);
      }
      export foo;
    ```
### Program/Module
