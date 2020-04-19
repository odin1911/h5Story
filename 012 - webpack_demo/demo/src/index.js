import './css/style.css';
// import './less/reset.css';
// import './less/reset.less'// 拆分css

const str = 'es6';
console.log(str);
console.log('hello index!!');

let a = 'hello world';
document.body.innerHTML = a;
console.log('这是webpack打包的入口文件!');

if (module.hot) {
  module.hot.accept();
}