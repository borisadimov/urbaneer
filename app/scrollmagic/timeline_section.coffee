module.exports = (controller) ->

  # # #
  # Timeline animation
  # # #

  scene_timeline = new ScrollMagic.Scene
    triggerElement: ".future"
    offset: 100
    duration: 450
  .triggerHook(0.7)
  .on "start", (e)->
    if e.target.controller().info("scrollDirection") is "FORWARD"
      $(".future .timeline").addClass("second_state")
    else
      $(".future .timeline").removeClass("second_state")
  .on "end", (e)->
    if e.target.controller().info("scrollDirection") is "FORWARD"
      $(".future .timeline").removeClass("second_state")
      $(".future .timeline").addClass("third_state")
    else
      $(".future .timeline").addClass("second_state")
      $(".future .timeline").removeClass("third_state")
  .addTo(controller)

  # # #
  # Population animation
  # # #

  population_tween = new TimelineMax()
  .add(TweenMax.to('.population .filler', 1, {width: '100%'}))


  scene_population = new ScrollMagic.Scene
    triggerElement: ".future"
    duration: 200
    # tweenChanges: true
  .triggerHook(0.4)
  .on "start", ->
    $(".population_background").addClass("showed")
    $(".textbox.t1").addClass("showed")
  .on "end", ->
    $(".population_background").addClass("showed")
    $(".textbox.t2").addClass("showed")
  .setTween(population_tween)
  .addTo(controller)


  # # #
  # money animation
  # # #

  money_tween = new TimelineMax()
  .add(TweenMax.staggerFromTo('.money .money_column', 1,{opacity: '0.0001'}, {opacity: '0.9999', ease: Back.easeOut}, 0.1))
  .add(TweenMax.to($('.point .vline'), 0.7, {height: '378px'}))
  .add(TweenMax.to($('.point .hline'), 0.3, {width: '30vw'}))

  scene_money = new ScrollMagic.Scene
    triggerElement: ".money"
    offset: 0
    duration: 350
    tweenChanges: true
  .triggerHook(0.7)
  .on "start", ->
    return
  .on "end", ->
    $('.future .total').addClass('showed')
  .setTween(money_tween)
  .addTo(controller)





