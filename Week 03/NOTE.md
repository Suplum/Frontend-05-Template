### 四则运算

1. AST 抽象语法树
1. 先把编程语言去分词 -> 把这些词构成层层相嵌套的语法树的树形结构 -> 解析代码去执行
1. 构建 AST 抽象语法树的过程又被叫做语法分析
1. 最著名的语法分析 核心算法有两种 一种是 LL 算法，一种是 LR 算法（L是left）
1. LL算法是从左到右扫描，从左到右规约的缩写
1. 四则运算词法的定义
    - `TokenNumber`：
      - 1 2 3 4 5 6 7 8 9 0 的组合
    - `Operator`：
      - +、-、*、/ 之一
    - `Whitespace`：`<SP>`
    - `LineTerminator`：`<LF><CR>`
1. 四则运算语法的定义：
    ```xml
    <Expression>::=
      <AdditiveExpression><EOF>

    <AdditiveExpression>::=
      <MultiplicativeExpression>
      <AdditiveExpression><+><MultiplicativeExpression>
      <AdditiveExpression><-><MultiplicativeExpression>

    <MultiplicativeExpression>::=
      <Number>
      <MultiplicativeExpression><*><Number>
      <MultiplicativeExpression></><Number>
    ```
1. 因为加法和乘法是有优先级的关系的，所以说我们需要用js部分的产生式去定义加法和乘法运算，所以需要把加减乘除做成一个嵌套的结构，我们认为递归加法是由左右两个乘法组成的，并且加法是可以进行连加的，所以加法是一个可以重复自身的序列，所以定义里会有递归的产生式的结构，也是产生式里处理无限列表的常用的手法
1. `MultiplicativeExpression`是乘法运算的，我们认为一个单独的数字也是一种特殊的乘法，它是一个只有一项的乘法，那么我们把只有乘号的认为是一种特殊的加法，只有一项的加法，这样方便我们递归的定义表达式
1. 最低层级的`MultiplicativeExpression`，定义是一个用乘号或除号连接的`Number`的序列
1. 规定它可以是一个单独的Number，也可以是乘法表达式后边缀上一个乘号再加上一个`Number`
1. 蓝绿背景的（包括`<EOF>、<+>、<->、<Number>、<*>、</>`）是我们定义里面的终结符，就是`TerminalSymbol`，就是直接从词法里面扫描出来的，白色的没有标出来的部分就是 `NoneTerminalSymbol` 非终结符，非终结符就是我们拿终结符的组合定义出来的，我们看到我们定义乘法表达式的非终结符，可以是一个单独的`Number`，也可以是它自身加上一个乘号然后再加上一个`Number`，也可以是除号加上一个`Number`
1. 加法的结构类似，只是基本单元换成了一个非终结符`MultiplicativeExpression`，就是数个乘法用加号或者减号连接在一起，就是加法的结构
1. `EOF`不是真实可见的字符，但我们的结构需要一个结束的符号，End of file
1. ```xml
    <AdditiveExpression>::=
      <MultiplicativeExpression> // （需要展开）
      <AdditiveExpression><+><MultiplicativeExpression>
      <AdditiveExpression><-><MultiplicativeExpression>
    ```
    ```xml
    <AdditiveExpression>::=
      <Number>
      <MultiplicativeExpression><*><Number>
      <MultiplicativeExpression></><Number>
      <AdditiveExpression><+><MultiplicativeExpression>
      <AdditiveExpression><-><MultiplicativeExpression>
    ```
1. 正则表达式里圆括号表示捕获
1. lastIndex 长度进行比较
1. js的新特性，当我们要返回一个序列的时候，就用`yield`
1. 要把这个函数改成一个`generator`函数（function后加*）
