module.exports = (controller) ->

  about_us_tween = new TimelineMax()
  .add(TweenMax.to($('.about_us .video_section_about_us .label'), 1, {'transform': 'translate3D(0,-250px,0)'}))


  scene_about_us = new ScrollMagic.Scene
    triggerElement: ".about_us"
    offset: 0
    duration: '200%'
  .triggerHook(1)
  .setTween(about_us_tween)
  .addTo(controller)


  who_we_are_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln1'), 2, {'height': '750px'}))


  scene_who_we_are = new ScrollMagic.Scene
    triggerElement: ".about_us .container"
    duration: '600px'
  .triggerHook(0.5)
  .setTween(who_we_are_tween)
  .addTo(controller)

  scene_who_we_are_text = new ScrollMagic.Scene
    triggerElement: ".about_us .who"
  .triggerHook(0.6)
  .on "start", ->
    $('.about_us .who .h1, .about_us .who .col').addClass('showed')
  .addTo(controller)





  scene_what_we_do_text = new ScrollMagic.Scene
    triggerElement: ".about_us .h2"
    offset: 0
  .triggerHook(0.3)
  .on "start", ->
    $('.about_us .h2').addClass('showed')
  .addTo(controller)


  what_we_do_tips_tween = new TimelineMax()
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {'width': '130px'}),
    TweenMax.fromTo('.insights', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {'width': '200px'}),
    TweenMax.to($('.insights'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.what_we_do .black_block.b1'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.insights', 0.5, {}))
  .add([
    TweenMax.to($('.insights'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.what_we_do .black_block.b1'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {'width': '440px'}),
    TweenMax.fromTo('.strategy', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.strategy'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.what_we_do .black_block.b2'), 0.2, {'opacity': '0.9999'}),
    ])


  .add(TweenMax.to('.insights', 0.5, {}))
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {'width': '460px'}),
    TweenMax.to($('.strategy'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.what_we_do .black_block.b2'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {'width': '680px'})
    TweenMax.fromTo('.execution', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {'width': '750px'})
    TweenMax.to($('.execution'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.what_we_do .black_block.b3'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.insights', 0.5, {}))
  .add([
    TweenMax.to($('.execution'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.what_we_do .black_block.b3'), 0.05, {'opacity': '0.0001'})])
  .add(TweenMax.to($('.guidelines .ln2'), 0.1, {'width': '940px'}))


  scene_what_we_do_tips = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 350
    offset: 900
    tweenChanges: true
  .triggerHook(0.3)
  .setTween(what_we_do_tips_tween)
  .addTo(controller)




  jessica_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln3'), 0.1, {'height': '550px'}))

  .add([
    TweenMax.to($('.stories .story1'), 4, {'transform': 'translate3D(0,-900px,0)'}),
    TweenMax.to($('.stories .story2'), 2.5, {'transform': 'translate3D(0,-900px,0)'}),
    TweenMax.to($('.stories .story3'), 2, {'transform': 'translate3D(0,-1100px,0)', delay: 0.1}),
    TweenMax.to($('.stories .story4'), 3, {'transform': 'translate3D(0,-1100px,0)', delay: 0.3}),
    TweenMax.to($('.stories .story5'), 3.5, {'transform': 'translate3D(0,-1200px,0)', delay: 0.6}),
    TweenMax.to($('.stories .story1 .quote'), 4.5, {'transform': 'translate3D(0,-50px,0)'}),
    TweenMax.to($('.stories .story2 .quote'), 5, {'transform': 'translate3D(0,-200px,0)'}),
    TweenMax.to($('.stories .story3 .quote'), 5, {'transform': 'translate3D(0, 100px,0)', delay: 0.1}),
    TweenMax.to($('.stories .story4 .quote'), 4.3, {'transform': 'translate3D(0,-250px,0)', delay: 0.3}),
    TweenMax.to($('.stories .story5 .quote'), 4.8, {'transform': 'translate3D(0,-200px,0)', delay: 0.6}),
    TweenMax.to($('.guidelines .ln4'), 2, {'height': '1532px'})])
  .add(TweenMax.to($('.guidelines .ln4_1'), 0.2, {'width': '940px'}))

  scene_jessica = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 1800
    offset: 1200
  .triggerHook(0.3)
  .setTween(jessica_tween)
  .addTo(controller)





  how_we_do_it_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln5'), 2, {'height': '330px'}))
  .add(TweenMax.to($('.how.fadein'), 1, {'opacity': '0.9999'}))

  scene_how_we_do_it = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 400
    offset: 2900
  .triggerHook(0.2)
  .setTween(how_we_do_it_tween)
  .addTo(controller)



  how_we_do_it_icons_tween = new TimelineMax()
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {'width': '130px'}),
    TweenMax.fromTo('.culture', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {'width': '200px'}),
    TweenMax.to($('.culture'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.how_we_do_it .black_block.b4'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.culture', 0.5, {}))
  .add([
    TweenMax.to($('.culture'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.how_we_do_it .black_block.b4'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {'width': '440px'}),
    TweenMax.fromTo('.communication', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.communication'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.how_we_do_it .black_block.b5'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.culture', 0.5, {}))
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {'width': '460px'}),
    TweenMax.to($('.communication'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.how_we_do_it .black_block.b5'), 0.15, {'opacity': '0.0001'})])
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {'width': '680px'})
    TweenMax.fromTo('.content', 0.2, {opacity: '0.001'}, {opacity: '0.9999', delay: 0.1})])
  .add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {'width': '750px'})
    TweenMax.to($('.content'), 0.5, {'transform': 'scale(1.3)', 'color': '#000'}),
    TweenMax.to($('.how_we_do_it .black_block.b6'), 0.2, {'opacity': '0.9999'})])
  .add(TweenMax.to('.culture', 0.5, {}))
  .add([
    TweenMax.to($('.content'), 0.2, {'transform': 'scale(1)'}),
    TweenMax.to($('.how_we_do_it .black_block.b6'), 0.05, {'opacity': '0.0001'})])
  .add(TweenMax.to($('.guidelines .ln6'), 0.1, {'width': '940px'}))



  scene_what_we_do_tips = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 300
    offset: 3300
    tweenChanges: true
  .triggerHook(0.3)
  .setTween(how_we_do_it_icons_tween)

  .addTo(controller)




  jessica_tween2 = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln7'), 0.1, {'height': '550px'}))

  .add([
    TweenMax.to($('.stories2 .story1'), 4, {'transform': 'translate3D(0,-900px,0)'}),
    TweenMax.to($('.stories2 .story2'), 2.5, {'transform': 'translate3D(0,-900px,0)'}),
    TweenMax.to($('.stories2 .story3'), 2, {'transform': 'translate3D(0,-1100px,0)', delay: 0.1}),
    TweenMax.to($('.stories2 .story4'), 3, {'transform': 'translate3D(0,-1100px,0)', delay: 0.3}),
    TweenMax.to($('.stories2 .story5'), 3.5, {'transform': 'translate3D(0,-1200px,0)', delay: 0.6}),
    TweenMax.to($('.stories2 .story1 .quote'), 4.5, {'transform': 'translate3D(0,-50px,0)'}),
    TweenMax.to($('.stories2 .story2 .quote'), 5, {'transform': 'translate3D(0,-200px,0)'}),
    TweenMax.to($('.stories2 .story3 .quote'), 5, {'transform': 'translate3D(0, 100px,0)', delay: 0.1}),
    TweenMax.to($('.stories2 .story4 .quote'), 4.3, {'transform': 'translate3D(0,-250px,0)', delay: 0.3}),
    TweenMax.to($('.stories2 .story5 .quote'), 4.8, {'transform': 'translate3D(0,-200px,0)', delay: 0.6}),
    TweenMax.to($('.guidelines .ln8'), 2, {'height': '1532px'})])
  .add(TweenMax.to($('.guidelines .ln8_1'), 0.2, {'width': '940px'}))

  scene_jessica2 = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 1600
    offset: 3750
  .triggerHook(0.3)
  .setTween(jessica_tween2)
  .addTo(controller)





