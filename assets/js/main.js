


anime({
    targets: 'div.box.red',
    translateY: 250,
    direction: 'alternate',
    duration: 1000,
    loop: true,
});
var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  var logan_anime = anime({
    targets: '#test .test-lines .test-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });