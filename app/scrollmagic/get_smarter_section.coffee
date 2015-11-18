module.exports = (controller) ->



  get_smarter_tween = new TimelineMax()
  .add(TweenMax.to($('.about_us .get_smarter_video .label'), 1, {'transform': 'translate3D(0,-250px,0)'}))

  scene_get_smarter = new ScrollMagic.Scene
    triggerElement: ".about_us"
    offset: 6560
    duration: '200%'
  .triggerHook(1)
  # .setClassToggle(".about_us_video, .about_us .overlay", "showed")
  .setTween(get_smarter_tween)
  .addTo(controller)



  contact_us_video_tween = new TimelineMax()
  .add(TweenMax.to($('.contact_us_video .label'), 1, {'transform': 'translate3D(0,-250px,0)'}))

  scene_get_smarter = new ScrollMagic.Scene
    triggerElement: ".about_us"
    offset: 7560
    duration: '200%'
  .triggerHook(1)
  # .setClassToggle(".about_us_video, .about_us .overlay", "showed")
  .setTween(contact_us_video_tween)
  .addTo(controller)



  $('.purchase_form svg path').each (i,e) ->
    pathPrepare($(e))

  # contact_tween = []
  $('.contact_form svg path').each (i,e) ->
    pathPrepare($(e))
    # contact_tween.push(TweenMax.to($(e), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))



















