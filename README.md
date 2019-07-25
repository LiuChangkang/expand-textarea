# expand-textarea
## 基于vue的自适应textarea 文本域
## [github](https://github.com/LiuChangkang/expand-textarea)

## install
```
npm install expand-textarea --save

or

yarn add expand-textarea
```

## How to use
```
import Vue from 'vue'

import ExpandTextarea from 'expand-textarea';
Vue.use(ExpandTextarea);

or

import ExpandTextarea from 'expand-textarea';
new Vue({
  components: {
    'expand-textarea': ExpandTextarea
  }
});
```

```
css样式可直接加在组件上，内部文本域会继承部分需要的样式。
textarea符合标准的属性值也可直接添加在组件上，会以传参的形式继承，可用的属性详见w3c文档。
```
