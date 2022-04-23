import Food from './mod/food'
import $ from 'jquery'

const food = new Food('Hamburguer', 15.50, 0.50)


$('body').append(`<h3>${food.name}</h3>`)
$('body').append(`<h4>${food.discountPrice()}</h4>`)

// console.log(food.discountPrice())