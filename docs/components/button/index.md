# Button 按钮
::: info
按钮类型
<div class="button-container">
    <u-button type="primary">primary</u-button>
    <u-button type="secondary">secondary</u-button>
    <u-button type="text">text</u-button>
</div>
:::

代码示例
```js
<div class="button-container">
    <u-button type="primary">primary</u-button>
    <u-button type="secondary">secondary</u-button>
    <u-button type="text">text</u-button>
</div>
```

<style>
  .button-container{
    display:grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
    .u-btn{
      margin:10px;
    }
  }
</style>