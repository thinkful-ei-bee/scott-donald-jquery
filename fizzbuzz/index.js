'use strict';

function fizzbuzz(num) {
  if(num % 15 === 0) {
    return 'fizzbuzz';
  }
  if(num % 5 === 0) {
    return 'buzz';
  }
  if(num % 3 === 0) {
    return 'fizz';
  }
  else {
    return num;
  }
}

function fizzBuzzHTML(num){
  for(let i=1; i <= num; i++) {
    let fizzBuzzOutput = fizzbuzz(num);
    if(typeof fizzBuzzOutput === 'string') {
      $('.js-results').html(`<div class="fizz-buzz-item ${fizzBuzzOutput}">
      <span>${fizzBuzzOutput}</span>
      </div>`)
    } else {
      $('.js-results').html(`<div class="fizz-buzz-item">
      <span>${fizzBuzzOutput}</span>
      </div>`)
    }
  }
}

$('#number-chooser').submit(function(event) {
  event.preventDefault();
  let numClicks = $('#number-choice').val();
  // console.log($('#number-choice').val());
  fizzBuzzHTML(numClicks);
})

