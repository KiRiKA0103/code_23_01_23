import $ from 'jquery'

// 导入样式在webpack中 一切皆模块 都可以通过ES6导入语法进行导入和

import './css/index.css'

import './less/style.less'

import pic from './images/aka.jpg'


$(function () {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'yellow')


    $('.box').attr('src', pic)


});

function info(target) {
    target.info = 'Person info'
}

@info
class Person{
}
console.log(Person.info)


