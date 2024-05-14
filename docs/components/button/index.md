# Button 按钮
::: info
根据按钮类型、尺寸、禁用状态、块级属性得到如下组件
<div class="button-container">
    <u-button type="primary">Primary</u-button>
    <u-button>Default</u-button>
    <u-button type="text">Text</u-button>
    <u-button size="small">Small</u-button>
    <u-button>Default</u-button>
    <u-button size="large">Large</u-button>
    <u-button disabled type="primary" > Primary Disabled</u-button>
    <u-button disabled >Default Disabled</u-button>
    <u-button disabled type="text" >Text Disabled</u-button>
    <u-button block type="primary">Block primary</u-button>
    <u-button block >Block default</u-button>
</div>
:::

代码示例
```js
<div class="button-container">
    <u-button type="primary">Primary</u-button>
    <u-button>Default</u-button>
    <u-button type="text">Text</u-button>
    <u-button size="small">Small</u-button>
    <u-button>Default</u-button>
    <u-button size="large">Large</u-button>
    <u-button disabled type="primary" > Primary Disabled</u-button>
    <u-button disabled >Default Disabled</u-button>
    <u-button disabled type="text" >Text Disabled</u-button>
    <u-button block type="primary">Block primary</u-button>
    <u-button block >Block default</u-button>
</div>
```

<style>
  .button-container{
    display:grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
    align-items: end; /* 将行内元素底部对齐 */

    .u-btn{
      margin:10px;
    }
  }
  .button-container .u-btn:nth-child(10) {
    grid-column: 1 / span 3; /* 让第*个元素跨越三列，占满整行 */
  }
  .button-container .u-btn:nth-child(11) {
    grid-column: 1 / span 3;
  }
</style>