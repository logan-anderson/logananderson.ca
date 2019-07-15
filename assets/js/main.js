let the_body = document.querySelector('body')


let scroll_test = anime({
  targets: 'div.box.red',
  translateY: 250,
  direction: 'alternate',
  duration: 1000,
  autoplay: false
});
setInterval(() => {
  scroll_test.seek(window.scrollY);
}, 50)


let scroll_top = anime({
  targets: '#logan-svg',
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
}, 50)



var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});

var logan_anime = anime({
  targets: '#test .test-lines .test-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});