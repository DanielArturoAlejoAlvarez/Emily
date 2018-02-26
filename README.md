# Emily
## Description

Application of Development in JavaScript, created with Nodejs, Express, Webpack and ReactJS. With which you can start to develop in React immediately. He also added Bootstrap, Sass and Jquery to the design.

## Installation

Install packages:
```html
$ npm install
```

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/Emily.git [NAME APP]
```
Follow the following steps and you're good to go! Important:


Start server to our API (includes auto refreshing):

```html
$ cd [NAME APP]
$ npm run dev (Development)
```
Generate files to production of Client:

``` html
$ cd [NAME APP]
$ npm run build (Production)
```



![alt text](https://i.stack.imgur.com/qFwJC.gif)

## Coding

### APP

```javascript
import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

componentWillMount() {
  $('div').hover(()=>{
    $('h1').addClass('textLight')
    $('body').addClass('bg')
  },()=>{
    $('h1').removeClass('textLight')
    $('body').removeClass('bg')
  })
}

  render() {
    return (
      <div className="container">
        <h1 className="intro">React JS</h1>
      </div>
    );
  }

}
```

### SASS
```scss
$cubicTransitions: cubic-bezier(.65,.81,.5,.14);
$redhot: #e20a0a;
$blueSnow: #0a81e2;
body {
  background: $redhot!important;
  font-size: 20px;
  font-family: 'Fira Sans',sans-serif!important;
  transition: all .5s $cubicTransitions;
}

.bg {
  background: $blueSnow!important;
}
...
```



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/Emily. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
