### 盒

- 标签
- 元素
- 盒
  - HTML代码中可以书写开始“标签”，结束“标签”，和自封闭“标签”。

  - 一对起止“标签” ，表示一个“元素” 。
  - DOM树中存储的是“元素”和其它类型的节点（Node）。
  - CSS选择器选中的是“元素” 。
  - CSS选择器选中的“元素” ，在排版时可能产生多个“盒” 。
  - 排版和渲染的基本单位是“盒” 。

### 正常流

- 正常流排版
  - 收集盒进行
    - line-box
    - block-level-box
    - 如果没有block-level-box那就都是行盒，行盒从上到下，行盒内部从左到右
    - 排块级的叫BFC（block-level-formatting-context 块级格式化上下文），行内的叫IFC（inline-level-formatting-context 行内级格式化上下文）
    - 面试里经常问的“触发BFC”其实不太对，应该叫“设立”BFC
  - 计算盒在行中的排布
  - 计算行的排布

### 正常流的行级排布

- 基线（英文字母根据基线对其）
- Text（参考 freeType）
- 行模型
  - base-line 和文字的顶缘和底缘，分别叫做base-line text-top和text-bottom
  - 一旦设计到跟盒的混排，就涉及到line-top和line-bottom的偏移的问题
  - 当我们的盒足够大的时候，比如说我们的盒是从text-bottom去对齐的，那么它就有可能把高度撑开，这时候line-top就从虚线的位置，移到了白色实线的位置，这个现象就是正常流里面处理行模型非常麻烦的一个现象
  - 盒的先后顺序和盒的尺寸，都会影响line-top和line-bottom的位置，但是盒不会影响text-top和text-bottom
  - inline-block，它的基线是随着自己里面的文字去变化的，所以大部分情况下，不建议使用基线对齐，建议使用vertical-align

### 正常流的块级排布

- float与clear
  - clear：找一个干净的空间来执行浮动
  - float是不认br换行的，换行用clear:left，float主要是用在图文混排，现在基本上都可以用flexbox代替了
  - Margin Collapse（留白的折叠现象、边距折叠）：两个盒子堆叠，重合的部分margin高度跟最大的高度相等（只会发生在BFC里面）

### BFC合并

- Block
  - Block Container：里面有BFC的
    - 能容纳正常流的盒，里面就有BFC
  - Block-level Box：外面有BFC的
  - Block Box = Block Container + Block-level Box：里外都有BFC
- Block Container
  - block
  - inline-block
  - table-cell
  - flex item
  - grid cell
  - table-caption
- Block-level Box
  - Block level
    - display: block
    - display: flex
    - display: table
    - display: grid
  - Inline level
    - display: inline-block
    - display: inline-flex
    - display: inline-table
    - display: inline-grid
  - display: run-in（没用过）
- 设立
  - float
  - absolutely positioned elements
  - block containers(such as inline-blocks, table-cells, and table-captions) that are not block boxes,
    - flex items
    - grid cell
  - and block boxes with 'overflow' other than 'visible'
- BFC合并
  - block box && ovweflow:visible
    - BFC合并与float
    - BFC合并与边距折叠
- Flex排版
  - 收集盒进行
  - 计算盒在主轴方向的排布
  - 计算盒在交叉轴方向的排布
  - 分行
    - 根据主轴尺寸，把元素分进行
    - 若设置了no-wrap，则强行分配进第一行
  - 计算主轴方向
    - 找出所有Flex元素
    - 把主轴方向的剩余尺寸按比例分配给这些元素
    - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
  - 计算交叉轴方向
    - 根据每一行中最大元素尺寸计算行高
    - 根据行高flex-align和item-align，确定元素具体位置

### 动画与绘制

- Animation
  - @keyframes定义
  - animation:使用
    ```css
      @keyframes mykf
      {
        from{background:red;}
        to{background:yellow;}
      }
      div {
        animation:mykf 5s infinite;
      }
    ```
  - animation
    - animation-name 时间曲线
    - animation-duration 动画的时长
    - animation-timing-function 动画的时间曲线
    - animation-delay 动画开始前的延迟
    - animation-iteration-count 动画的播放次数
    - animation-direction 动画的方向
  - Transition
    - transition-property 要变换的属性
    - transition-duration 变换的时长
    - transition-timing-function 时间曲线
    - transition-delay 延迟
    - https://cubic-bezier.com/
- 颜色
> 视锥细胞
  - CMYK与RGB
  - HSL和HSV
    - HSL可以统一亮度，就算改变了颜色，亮度也不变，风格统一

### 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image
- 应用技巧(不建议用黑魔法，如border画五角星)
  - data uri + svg
