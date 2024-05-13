# Button 按钮
::: info
按钮类型
<div class="button-container">
    <u-button type="primary">Primary</u-button>
    <u-button type="secondary">Secondary</u-button>
    <u-button type="text">Text</u-button>
    <u-button size="small">Small</u-button>
    <u-button size="medium">Medium</u-button>
    <u-button size="large">Large</u-button>
</div>
:::

代码示例
```js
<div class="button-container">
    <u-button type="primary">Primary</u-button>
    <u-button type="secondary">Secondary</u-button>
    <u-button type="text">Text</u-button>
    <u-button size="small">Small</u-button>
    <u-button size="medium">Medium</u-button>
    <u-button size="large">Large</u-button>
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
</style>