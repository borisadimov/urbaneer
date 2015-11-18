module.exports = (controller) ->


  get_started_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln9'), 2, {'height': '330px'}))
  .add(TweenMax.to($('.get_started.fadein'), 1, {'opacity': '0.9999'}))

  scene_get_started = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 200
    offset: 5400
  .triggerHook(0.2)
  .setTween(get_started_tween)
  .addTo(controller)





  get_started_tween = new TimelineMax()
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {'width': '130px'}),
    TweenMax.fromTo('.assessments', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {'width': '200px'}),
    TweenMax.to($('.assessments'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.get_started_iconset .black_block.b7'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.assessments', 0.5, {}))
  .add([
    TweenMax.to($('.assessments'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.get_started_iconset .black_block.b7'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {'width': '440px'}),
    TweenMax.fromTo('.workshops', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.workshops'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.get_started_iconset .black_block.b8'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.assessments', 0.5, {}))
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {'width': '460px'}),
    TweenMax.to($('.workshops'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.get_started_iconset .black_block.b8'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {'width': '680px'})
    TweenMax.fromTo('.speaking', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {'width': '750px'})
    TweenMax.to($('.speaking'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.get_started_iconset .black_block.b9'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.assessments', 0.5, {}))
  .add([
    TweenMax.to($('.speaking'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.get_started_iconset .black_block.b9'), 0.05, {'opacity': '0.0001'})])
  .add(TweenMax.to($('.guidelines .ln10'), 1, {'width': '940px'}))



  scene_get_started_tips = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 350
    offset: 5750
    tweenChanges: true
  .triggerHook(0.3)

  .setTween(get_started_tween)
  .addTo(controller)



  end_of_guideline_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln11'), 2, {'height': '550px'}))

  scene_end_of_guideline = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 200
    offset: 5960
  .triggerHook(0.2)
  .setTween(end_of_guideline_tween)
  .addTo(controller)





