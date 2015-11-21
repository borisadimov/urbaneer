module.exports = (controller) ->

  # # #
  # Largest box animation
  # # #
  largest_tween = new TimelineMax()
  $('.earth .path path').each (i,e) ->
    pathPrepare($(e))
    largest_tween.add(TweenMax.to($(e), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))


  scene_largest = new ScrollMagic.Scene
    triggerElement: "#content_start"
    duration: 180
    tweenChanges: true
  .on "start", ->
    $(".earth .logo").addClass("showed")
    $(".why_video .play").addClass("rotated")
  .on "end", ->
    $(".earth .largest").addClass("showed")
    $(".earth .call_to_action").addClass("showed")
  .triggerHook(0)
  .setTween(largest_tween)
  .addTo(controller)


  # # #
  # Earth animation
  # # #
  scene_earth = new ScrollMagic.Scene
    triggerElement: ".earth .largest"
    duration: '120%'
    offset: -200
  .triggerHook(0.7)
  .setClassToggle(".earth .globe", "animated")
  .addTo(controller)

  scene_over = new ScrollMagic.Scene
    triggerElement: ".earth .over"
  .triggerHook(0.7)
  .on "start", ->
    $(".earth .over").addClass("showed")
  .addTo(controller)





