module.exports = (controller) ->


  scroller_tween1 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '33%'}))
  scroller1 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    duration: 3300
  .triggerHook(0)
  .on 'progress', (e) ->
    $('.active_icon').removeClass('active_icon')
    $('.disabled').removeClass('disabled')
    if e.target.controller().info("scrollDirection") is "FORWARD"
      $('.progress .icon').removeClass('reversed')
    else
      $('.progress .icon').addClass('reversed')

  .setTween(scroller_tween1)
  .addTo(controller)

  scroller_tween2 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '60%'}))
  scroller2 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    offset: 3301
    duration: 5800
  .triggerHook(0)
  .on 'progress', (e) ->
    $('.active_icon').removeClass('active_icon')
    $('.disabled').removeClass('disabled')
    if e.target.controller().info("scrollDirection") is "FORWARD"
      $('.progress .icon').removeClass('reversed')
    else
      $('.progress .icon').addClass('reversed')
  .setTween(scroller_tween2)
  .addTo(controller)

  scroller_tween3 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '110%'}))
  scroller2 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    offset: 9100
    duration: 1200
  .triggerHook(0)
  .on 'progress', (e) ->
    $('.active_icon').removeClass('active_icon')
    $('.disabled').removeClass('disabled')

    if e.target.controller().info("scrollDirection") is "FORWARD"
      $('.progress .icon').removeClass('reversed')
    else
      $('.progress .icon').addClass('reversed')
  .setTween(scroller_tween3)
  .addTo(controller)






