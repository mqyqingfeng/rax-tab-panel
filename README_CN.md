## <%= answers.name%>
<%= answers.description %>

## 安装

```
$ npm install <%= answers.name%> --save
```

## 引用

```
import RaxTabPanel from '<%= answers.name%>';
```

## API说明

### 属性

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### 组件方法

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## 实例

```
import {createElement, Component, render} from 'rax';
import RaxTabPanel from 'rax-rax-tab-panel';

class App extends Component {
  render() {
    return (
      <RaxTabPanel>
      	{ /* your code */ } 
      </RaxTabPanel>
    );
  }
}

render(<App />);
```
