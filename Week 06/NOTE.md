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

