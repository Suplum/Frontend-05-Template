### 泛用语言分类方法


- 非形式语言
  - 中文，英文
- 形式语言（乔姆斯基谱系）
  > 在乔姆斯基谱系里，0123型文法是一种上下包含关系，一个上下文相关文法，他一定也属于0型，但是反过来就不一定了
  - 0型 无限制文法
  - 1型 上下文相关文法
  - 2型 上下文无关文法
  - 3型 正则文法

### 什么是产生式

- 产生式（我们这里选巴科斯-诺尔范式 简称BNF）
  - 用尖括号括起来的名称来表示语法结构名
  - 语法结构分成基础结构和需要用其他语法结构定义的复合结构
    - 基础结构称终结符
    - 复合结构称非终结符
  - 引号和中间的字符表示终结符
  - 可以有括号
  - `*` 表示重复多次
  - `|` 表示或
  - `+` 表示至少一次
- 例子
  - 四则运算：
    - 1 + 2 * 3
  - 终结符：
    - Number
    - `+` `-` `*` `/`
  - 非终结符
    - MultiplicativeExpression
    - AddtiveExpression
  - ```BNF
    <MultiplicativeExpression>::=<Number>|
      <MultiplicativeExpression>"*"<Number>|
      <MultiplicativeExpression>"/"<Number>|
    <AddtiveExpression>::=<MultiplicativeExpression>|
      <AddtiveExpression>"+"<MultiplicativeExpression>|
      <AddtiveExpression>"-"<MultiplicativeExpression>|
    ```






### 通过产生式理解乔姆斯基谱系

- 0型 无限制文法
  - ？：：=？
- 1型 上下文相关文法
  - ?<A>?::=?<B>?
- 2型 上下文无关文法
  - <A>::=?
- 3型 正则文法
  - <A>::=<A>?
  - <A>::=?<A> X

### 现代语言的分类

  - 现代语言的特例
    - C++中，*可能表示乘号或指针，具体是哪个，取决于星号前面的标识符是否被声明为类型
    - VB中，<可能是小于号，也可能是XML直接量的开始，取决于当前位置是否可以接受XML直接量
    - Python中，行首的tab符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符indent或者dedent
    - JavaScript中，/可能是除号，也可能是正则表达式开头，处理方式类似于VB，字符串模板中也需要特殊处理}，还要自动插入分号规则
  - 语言的分类
    - 形式语言——用途
      - 数据描述语言
      - 编程语言
    - 形式语言——表达方式
      - 声明式语言
      - 命令式语言

### 图灵完备性

- 图灵完备性
  - 命令机——图灵机
    - goto
    - if和while
  - 声明式——lambda
    - 递归
- 动态与静态
  - 动态
    - 再用户的设备/在线服务器上
    - 产品实际运行时
    - Runtime
  - 静态
    - 在程序员的设备上
    - 产品开发时
    - Compiletime
- 类型系统
  - 动态类型系统与静态类型系统
  - 强类型与弱类型
    - String + Number
    - String == Boolean
  - 复合类型
    - 结构体
    - 函数签名
  - 子类型
  - 泛型
    - 逆变/协变

### 一般命令式编程语言

- Atom
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
- Program
  - Program
  - Module
  - Package
  - Library


### Number

- Atom
  - Grammar
    - Literal
    - Variable
    - keywords
    - Whitespace
    - Line Terminator
  - Runtime
    - Types
    - Execution Context
- Types
  - Number
  - String
  - Boolean
  - Object
  - Null
  - Undefined
  - Symbol
- Number
  > 双精度浮点数
  - IEEE 754 Double Float
    - Sign(1)
    - Exponent(11)
    - Fraction(52)
- Number——Grammer
> 0.toString(); 0 .toString();(要加空格)
  - DecimalLiteral
    - 0
    - 0.
    - .2
    - 1e3
  - BinaryIntegerLiteral
    - Ob111
  - OctallntegerLiteral
    - 0o10
  - HexIntegerLiteral
    - 0xFF

### String

- String
  - Character
  - Code Point
  - Encoding

  - ASCII
  - Unicode
  - UCS
  - GB
    - GB2312
    - GBK(GB13000)
    - GB18030
  - ISO-8859
  - BIG5
- String_Encoding
  - UTF
    - UTF8
    - UTF16
- String——Grammar
  - "abc"
  - 'abc'
  - \`abc\`
- String——Grammar——Template、
  - \`ab${x}abc${y}abc\`
    - \`ab${
    - }abc${
    - }abc\`

### Boolean

- Boolean
  - true
  - false
- Null $ Undefined
  - null
  - undefined
  - void 0;
- Types
  - Number: IEEE 754 float表示方法
  - String：1.ASCII、Unicode字符集 2.UTF编码方式
  - Object
  - Symbol

### Object

- Object——Prototype
  - 原型是一种更接近人类原始认知的描述对象的方法
  - 我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象
  - 任何对象仅仅需要描述自己与原型的区别即可。
- Object Exercise
  - 狗咬人
  - 咬这个行为该如何使用对象抽象
- Object in JavaScript
  - 在JavaScript运行时，原生对象的描述方式非常简单，我们只需要关心原型和属性两个部分
  - JavaScript用属性来统一抽象对象状态和行为
  - 一般来说，数据属性用于描述状态，访问器属性则用于描述行为
  - 数据属性中如果存储函数，也可以用于描述行为
  - 原型
    - 当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名字的属性，而原型对象还可能有原型，因此，会有“原型链”这一说法
    - 这一算法保证了，每个对象只需要描述自己和原型的区别即可
- Object API/Grammar
  - {} . [] Object.defineProperty
  - Object.create / Object.setPrototypeOf / Object.getPrototypeOf
  - new / class / extends
  - new /function / prototype
