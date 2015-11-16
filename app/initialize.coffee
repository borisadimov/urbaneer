$( window ).load ->
  setTimeout ->
    $('body').toggleClass('opening loading')
    setTimeout ->
      $('body').removeClass('opening')
    , 399
  , 500

$(document).ready ->


  window.controller = controller = new ScrollMagic.Controller({container: ".inner"})

  controller.scrollTo (newpos) ->
    TweenMax.to window, 0.5, {scrollTo: {y: newpos, autoKill:false}}

  # # # # # #
  # Hero Scroll
  # # # # # #
  scrolling = false
  $('.to_about_us').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    $(".inner").scrollTop(3150)
    setTimeout ->
      $('body').removeClass('disable-hover')
      scrolling = false
    ,60
  $('.to_home').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    $(".inner").scrollTop(0)
    setTimeout ->
      $('body').removeClass('disable-hover')
      scrolling = false
    ,60
  $('.to_get_smarter').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    $(".inner").scrollTop(7540)
    setTimeout ->
      $('body').removeClass('disable-hover')
      scrolling = false
    ,60
  $('.to_contact').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    $(".inner").scrollTop(8840)
    setTimeout ->
      $('body').removeClass('disable-hover')
      scrolling = false
    ,60


  scrollDown = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    duration: "100%"
  .triggerHook(0)
  .on "start end", (e) ->
    if e.type is "start"
      if e.target.controller().info("scrollDirection") is "FORWARD"
        if scrolling then return
        scrolling = true
        $('body').addClass('disable-hover')
        $(".inner").stop().animate {scrollTop: $('#hero').height()+40}, ->
          $('body').removeClass('disable-hover')
          scrolling = false


      else
    else
      if e.target.controller().info("scrollDirection") is "REVERSE"
        $('.hero_video').removeClass('hidden')
        setTimeout ->
          if scrolling then return
          scrolling = true
          $('body').addClass('disable-hover')
          $(".inner").stop().animate({scrollTop: 0}, ->
            $('body').removeClass('disable-hover')
            scrolling = false)
        , 20

      else
        setTimeout ->
          $('.hero_video').addClass('hidden')
        , 20

  .addTo(controller)

  scroller_tween1 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '33%'}))
  scroller1 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    duration: 3300
  .triggerHook(0)
  .setTween(scroller_tween1)
  .addTo(controller)

  scroller_tween2 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '60%'}))
  scroller2 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    offset: 3301
    duration: 4200
  .triggerHook(0)
  .setTween(scroller_tween2)
  .addTo(controller)

  scroller_tween3 = new TimelineMax()
  .add(TweenMax.to($('.scroller .progress'), 1, {height: '120%'}))
  scroller2 = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    offset: 7501
    duration: 2000
  .triggerHook(0)
  .setTween(scroller_tween3)
  .addTo(controller)





  # $('body').bind 'mousewheel', (e) ->
  #   unless $(".wrapper").scrollTop()
  #     $(".wrapper").animate({scrollTop: $(window).height()});


  # # #
  #  SVG PATH REMOVER
  # # #
  pathPrepare = ($el) ->
    lineLength = $el[0].getTotalLength()
    $el.css("stroke-dasharray", lineLength)
    $el.css("stroke-dashoffset", lineLength)


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
  .on "end", ->
    $(".earth .largest").addClass("showed")
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

  # # #
  # Timeline animation
  # # #

  scene_timeline = new ScrollMagic.Scene
    triggerElement: ".future"
    offset: 100
    duration: 450
  .triggerHook(0.7)
  .on "start", ->
    $(".future .timeline").addClass("second_state")
  .on "end", ->
    $(".future .timeline").removeClass("second_state")
    $(".future .timeline").addClass("third_state")
  .addTo(controller)

  # # #
  # Population animation
  # # #

  population_tween = new TimelineMax()
  $('.population .path path').each (i,e) ->
    pathPrepare($(e))
    population_tween.add(TweenMax.to($(e), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))


  scene_population = new ScrollMagic.Scene
    triggerElement: ".population_background"
    duration: 200
    tweenChanges: true
  .triggerHook(0.7)
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
  .add(TweenMax.to($('.point .vline'), 1, {height: '378px'}))

  scene_money = new ScrollMagic.Scene
    triggerElement: ".money"
    offset: 0
    duration: 350
    tweenChanges: true
  .triggerHook(0.7)
  .on "start", ->
    return
  .on "end", ->
    $('.end .vline, .end .hline, .future .total').addClass('showed')
  .setTween(money_tween)
  .addTo(controller)


  about_us_tween = new TimelineMax()
  .add(TweenMax.to($('.about_us .video_section_about_us .label'), 1, {'transform': 'translate3D(0,-250px,0)'}))


  scene_about_us = new ScrollMagic.Scene
    triggerElement: ".about_us"
    offset: 0
    duration: '200%'
  .triggerHook(1)
  .setClassToggle(".about_us_video, .about_us .overlay", "showed")
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
  .on "end", ->
    $('.jessica_video').addClass('showed')

  .addTo(controller)




  jessica_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln3'), 2, {'height': '550px'}))
  .add(TweenMax.to($('.guidelines .ln4'), 0.5, {'height': '254px'}))
  .add([
    TweenMax.to($('.jessica .fadein'), 1, {'opacity': '0.9999'}),
    TweenMax.to($('.guidelines .ln4'), 2, {'height': '250px'})])
  .add(()->$('.jessica_video')[0].play())
  .add(TweenMax.to($('.guidelines .ln4'), 3, {'height': '1079px'}))

  scene_jessica = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 600
    offset: 1400
  .triggerHook(0.3)

  .setTween(jessica_tween)
  .addTo(controller)





  how_we_do_it_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln5'), 2, {'height': '330px'}))
  .add(TweenMax.to($('.how.fadein'), 1, {'opacity': '0.9999'}))

  scene_how_we_do_it = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 400
    offset: 1900
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
    offset: 2300
    tweenChanges: true
  .triggerHook(0.3)

  .setTween(how_we_do_it_icons_tween)
  .on "start", ->
    $('.jessica_video').removeClass('showed')
  .on "end", ->
    $('.jessica_video2').addClass('showed')

  .addTo(controller)




  jessica_tween2 = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln7'), 2, {'height': '550px'}))
  .add(TweenMax.to($('.guidelines .ln8'), 0.5, {'height': '254px'}))
  .add([
    TweenMax.to($('.jessica2 .fadein'), 1, {'opacity': '0.9999'}),
    TweenMax.to($('.guidelines .ln8'), 2, {'height': '250px'})])
  .add(()->$('.jessica_video2')[0].play())
  .add(TweenMax.to($('.guidelines .ln8'), 1, {'height': '1079px'}))

  scene_jessica2 = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 600
    offset: 2750
  .triggerHook(0.3)

  .setTween(jessica_tween2)
  .addTo(controller)




  get_started_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln9'), 2, {'height': '330px'}))
  .add(TweenMax.to($('.get_started.fadein'), 1, {'opacity': '0.9999'}))

  scene_get_started = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 200
    offset: 3400
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
    offset: 3750
    tweenChanges: true
  .triggerHook(0.3)

  .setTween(get_started_tween)
  .on "start", ->
    $('.jessica_video2').removeClass('showed')
  .on "end", ->
    $('.get_smarter').addClass('showed')

  .addTo(controller)



  end_of_guideline_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines .ln11'), 2, {'height': '550px'}))

  scene_end_of_guideline = new ScrollMagic.Scene
    triggerElement: ".about_us"
    duration: 200
    offset: 3960
  .triggerHook(0.2)
  .setTween(end_of_guideline_tween)
  .addTo(controller)



  get_smarter_tween = new TimelineMax()
  .add(TweenMax.to($('.about_us .get_smarter_video .label'), 1, {'transform': 'translate3D(0,-250px,0)'}))

  scene_get_smarter = new ScrollMagic.Scene
    triggerElement: ".about_us"
    offset: 4560
    duration: '200%'
  .triggerHook(1)
  .setClassToggle(".about_us_video, .about_us .overlay", "showed")
  .setTween(get_smarter_tween)
  .addTo(controller)



  $('.purchase_form svg path').each (i,e) ->
    pathPrepare($(e))

  # contact_tween = []
  $('.contact_form svg path').each (i,e) ->
    pathPrepare($(e))
    # contact_tween.push(TweenMax.to($(e), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))



  footer_tween = new TimelineMax()
  .add(TweenMax.to($('.guidelines_footer .ln12'), 0.1, {'height': '350px'}))
  .add(TweenMax.to($('.guidelines_footer .ln13'), 0.1, {'width': '40px'}))
  .add([
    TweenMax.to($('.guidelines_footer .ln14'), 0.1, {'height': '40px'})
    TweenMax.to($('.guidelines_footer .ln15'), 0.1, {'height': '40px'})])

  .add([
    TweenMax.to($('.guidelines_footer .ln16'), 1, {'width': '860px'})
    TweenMax.to($('.guidelines_footer .ln17'), 1, {'width': '860px'})
    TweenMax.to($('.footer_items .i1'), 0.1, {'opacity': '0.9999'})
    TweenMax.to($('.footer_items .i2'), 0.1, {'opacity': '0.9999', delay: 0.3})
    TweenMax.to($('.footer_items .i3'), 0.1, {'opacity': '0.9999', delay: 0.63})
    ])
  .add([
    TweenMax.to($('.guidelines_footer .ln18'), 0.1, {'height': '40px'})
    TweenMax.to($('.guidelines_footer .ln19'), 0.1, {'height': '40px'})
    ])
  .add(TweenMax.to($('.guidelines_footer .ln20'), 0.1, {'width': '40px'}))
  .add(TweenMax.to($('.guidelines_footer .ln21'), 0.5, {'height': "500px"}))
  .add(TweenMax.to($('.guidelines_footer .ln22'), 0.1, {'width': '481px'}))




  scene_footer = new ScrollMagic.Scene
    triggerElement: ".footer"
    duration: 900
    offset: 0
  .triggerHook(0.7)
  .setTween(footer_tween)
  .addTo(controller)




  contact_form_scene = new ScrollMagic.Scene
    triggerElement: ".footer"
    duration: '200%'
    offset: 900
  .triggerHook(0.7)
  .setClassToggle(".contact_form", "showed")
  .addTo(controller)











  $('.footer_item.content_item').click ->

    footer_extended_tween = new TimelineMax()
    .add(TweenMax.to($('.guidelines_footer .ln12'), 0.1, {'height': '350px'}))
    .add(TweenMax.to($('.guidelines_footer .ln13'), 0.1, {'width': '40px'}))
    .add([
      TweenMax.to($('.guidelines_footer .ln14'), 0.1, {'height': '40px'})
      TweenMax.to($('.guidelines_footer .ln15'), 0.1, {'height': '40px'})])

    .add([
      TweenMax.to($('.guidelines_footer .ln16'), 1, {'width': '860px'})
      TweenMax.to($('.guidelines_footer .ln17'), 1, {'width': '860px'})
      TweenMax.to($('.footer_items .i1'), 0.1, {'opacity': '0.9999'})
      TweenMax.to($('.footer_items .i2'), 0.1, {'opacity': '0.9999', delay: 0.3})
      TweenMax.to($('.footer_items .i3'), 0.1, {'opacity': '0.9999', delay: 0.63})
      ])
    .add([
      TweenMax.to($('.guidelines_footer .ln18'), 0.1, {'height': '40px'})
      TweenMax.to($('.guidelines_footer .ln19'), 0.1, {'height': '40px'})
      ])
    .add(TweenMax.to($('.guidelines_footer .ln20'), 0.1, {'width': '40px'}))
    .add(TweenMax.to($('.guidelines_footer .ln21'), 0.5, {'height': "900px"}))
    .add(TweenMax.to($('.guidelines_footer .ln22'), 0.1, {'width': '481px'}))




    $('.guidelines_footer .ln22').css('top','1250px')
    scene_footer.setTween(footer_extended_tween)
    $('.footer').addClass('extended')
    $('.footer_items').addClass('disabled')
    $('.purchase_form').addClass('showed')
    $('.contact_form').addClass('down')
    setTimeout ->
      $('.purchase_form').addClass('drawn')
    , 10


  # $('.purchase_form').click ->

  #   $('.purchase_form').removeClass('drawn')
  #   setTimeout ->
  #     $('.footer_items').removeClass('disabled')
  #     $('.purchase_form').removeClass('showed')
  #   , 2100
