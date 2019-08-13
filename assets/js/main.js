let the_body = document.querySelector('body');
let logan_brand = $('.logan-title');



let scroll_test = anime({
  targets: 'div.box.red',
  translateY: 250,
  direction: 'alternate',
  duration: 1000,
  autoplay: false
});

let scroll_top = anime({
  targets: '#logan-anderson-svg',
  duration: 2000,
  translateY: 150,
  autoplay: false,
  scale: {
    value: .01,
    duration: 2500,
  },

});
setInterval(() => {
  scroll_top.seek(window.scrollY);
  console.log(window.scrollY)
  if(window.scrollY < 990) {
    logan_brand.addClass('hidden')
  } else {
    logan_brand.removeClass('hidden')
  }
}, 25)



let logan_anime = anime({
  targets: '#svg-id .logan-lines .logan-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});
let logan_anderson_anime = anime({
  targets: '#logan-svg-id .logan-anderson-lines .logan-anderson-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});