'use strict';
/* global $ */

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

function fizzBuzzHTML(fizzBuzzOutput){
  if(typeof fizzBuzzOutput === 'string') {
    return `<div class="fizz-buzz-item ${fizzBuzzOutput}">
      <span>${fizzBuzzOutput}</span>
      </div>`;
  } else {
    return `<div class="fizz-buzz-item">
      <span>${fizzBuzzOutput}</span>
      </div>`;
  }
}

$('#number-chooser').submit(function(event) {
  event.preventDefault();
  let numClicks = $('#number-choice').val();
  const result = [];
  // console.log($('#number-choice').val());
  //fizzBuzzHTML(numClicks);
  for(let i=1; i <= numClicks; i++) {
    let fizzBuzzOutput = fizzbuzz(i);
    result.push(fizzBuzzOutput);
  }
  let HTMLstring = result.map(fizzBuzzHTML).join('');
  $('.js-results').html(HTMLstring);
  
  //console.log(result);
  //const map1 = result.map(fizzBuzzHTML());
  //console.log(map1);
});

