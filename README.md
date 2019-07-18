## <%= answers.name%>
<%= answers.description %>

## Install

```
$ npm install <%= answers.name%> --save
```

## Import

```
import RaxTabPanel from '<%= answers.name%>';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### Function

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## Example

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
