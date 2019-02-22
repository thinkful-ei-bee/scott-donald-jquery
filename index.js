/* eslint-disable no-console */
/* global $ */
'use strict';

$('.thumbnail').on('click', function(event) {
  const targetImage = $(event.currentTarget);
  const otherImages = $('.thumbnail').not(targetImage);
  const sourceImg = $(event.currentTarget).find('img').attr('src');
  const sourceAlt = $(event.currentTarget).find('img').attr('alt');
  //console.log(sourceAlt);
  $('.hero').find('img').attr('src', sourceImg);
  $('.hero').find('img').attr('alt', sourceAlt);
  const pressedBool = $(event.currentTarget).find('img').attr('aria-pressed') === 'true';
  otherImages.attr('aria-pressed', false);
  targetImage.attr('aria-pressed', !pressedBool);
});