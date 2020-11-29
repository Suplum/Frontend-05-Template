
###

- 浏览器完成渲染的步骤
  - URL(HTTP)
  - HTML(parse)
  - DOM(css computing)
  - DOM with CSS(layout)
  - DOM with position(render)（其实获得位置的不是dom本身，而是CSS最后生成的盒）
  - Bitmap(这个东西最后传给我们的显卡驱动设备，它才能转换成我们人眼可识别的光信号)
- 状态机
  - 有限状态机处理字符串
    - 每一个状态都是一个机器
      - 在每一个机器里，我们可以做机器、存储、输出......
      - 所有的这些机器接受的输入是一致的
      - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
    - 每一个机器知道下一个状态
      - 每个机器都有确定的下一个状态（Moore）
      - 每个机器根据输入决定下一个状态（Mealy）
  - JS中的有限状态机（Mealy）
    ```javascript
      // 每个函数是一个状态
      function state(input) // 函数参数就是输入
      {
        // 在函数中，可以自由地编写代码，处理每个状态的逻辑
        return next; // 返回值作为下一个状态
      }

      ///////以下是调用///////
      while(input) {
        // 获取输入
        state = state(input); // 把状态机的返回值作为下一个状态
      }
    ```
  - 参考资料：字符串KMP算法
    https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Partt_algorithm
- ISO-OSI七层网络模型
  - 应用
  - 表示
  - 会话
  - 传输
    - TCP与IP 的一些基础知识
      - 流
      - 端口
      - require('net');
      - 包
      - IP地址
      - libnet/libpcap
        - libnet负责构造IP包并且发送
        - libpcap负责从网卡抓所有流经你的网卡的IP包
  - 网络
  - 数据链路
  - 物理层
- HTTP
  - Request
  - Response
- 总结
  - 第一步 HTTP请求总结
    - 设计一个HTTP请求的类
    - content type是一个必要的字段，要有默认值
    - body是KV格式
    - 不同的content-type影响body的格式
  - 第二步 send函数总结
    - 在Request的构造器中收集必要的信息
    - 在设计一个send函数，把请求真实发送到服务器
    - send函数应该是异步的，所以返回Promise
  - 第三步 发送请求
    - 设计支持已有的connection或者自己新建connection
    - 收到数据传给parser
    - 根据parser的状态resolve Promise
  - 第四步 ResponseParser总结
    - Response必须分段构造，所以我们要用一个ResponseParser来“装配”
    - ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构
  - 第五步 bodyParser总结
    - Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parse的结构来解决问题
    - 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式
