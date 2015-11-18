isiPad = false
ipadCheck = ->
  isiPad = navigator.userAgent.match(/iPad/i) != null
  if isiPad
    $('body').addClass('is-ipad')


initShowWhyVideo = =>
  $('.why_video .play').click ->
    $('.why_video').addClass('step1')
    setTimeout ->
      $('.why_video').removeClass('step1')
      $('.why_video').addClass('step2')
    ,501

initScrollMaigic = =>

  require('scrollmagic/smooth_scroll')(controller)
  require('scrollmagic/custom_scrollbar')(controller)
  require('scrollmagic/earth_section')(controller)
  require('scrollmagic/timeline_section')(controller)
  require('scrollmagic/about_section')(controller)
  require('scrollmagic/get_started_section')(controller)
  require('scrollmagic/get_smarter_section')(controller)


  scene_footer = new ScrollMagic.Scene
    triggerElement: ".footer"
    duration: 900
    offset: 0
  .triggerHook(0.7)
  .addTo(controller)

  setFooterTween = (height) ->
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
    .add(TweenMax.to($('.guidelines_footer .ln21'), 0.5, {'height': "#{400+height}px"}))
    .add(TweenMax.to($('.guidelines_footer .ln22'), 0.1, {'width': '481px'}))



    $('.guidelines_footer .ln22').css('top',"#{750+height}px")
    scene_footer.setTween(footer_tween)



  setFooterTween(0)

  contact_form_scene = new ScrollMagic.Scene
    triggerElement: ".footer"
    duration: '200%'
    offset: 900
  .triggerHook(0.7)
  .setClassToggle(".contact_form", "showed")
  .addTo(controller)




  $('.footer_item.show_purchase').click ->

    setFooterTween(500)
    $('.footer').addClass('extended')
    $('.footer_items').addClass('disabled')
    $('.purchase_form').addClass('showed')
    $('.contact_form').addClass('down')
    setTimeout ->
      $('.purchase_form').addClass('drawn')
    , 10



  $('.footer_item.show_gbrief').click ->

    setFooterTween(500)
    $('.footer').addClass('extended')
    $('.footer_items').addClass('disabled')
    $('.footer_item_ext.gbrief').addClass('showed')
    setTimeout ->
      $('.footer_item_ext.gbrief').addClass('drawn')
    , 10



  $('.footer_item.show_frontier').click ->

    $('.footer_items').addClass('disabled')
    $('.footer_item_ext.frontier').addClass('showed')
    $('.footer_item_ext.frontier .illustration').append(require('frontier'))
    setTimeout ->
      $('.footer_item_ext.frontier').addClass('drawn')
    , 10





  $('.purchase_form .content_item .close').click ->

    $('.purchase_form').removeClass('drawn')

    setTimeout ->
      setFooterTween(0)
      $('.footer_items').removeClass('disabled')
      $('.purchase_form').removeClass('showed')
      $('.footer').removeClass('extended')
    , 2100


  $('.footer_item_ext.gbrief .content_item .close').click ->

    $('.footer_item_ext.gbrief').removeClass('drawn')

    setTimeout ->
      setFooterTween(0)
      $('.footer_items').removeClass('disabled')
      $('.footer_item_ext.gbrief').removeClass('showed')
      $('.footer').removeClass('extended')
    , 400


  $('.footer_item_ext.frontier .content_item .close').click ->

    $('.footer_item_ext.frontier').removeClass('drawn')
    $('.illustration iframe').remove()
    setTimeout ->
      $('.footer_items').removeClass('disabled')
      $('.footer_item_ext.frontier').removeClass('showed')
    , 400





$( window ).load ->
  setTimeout ->
    $('body').toggleClass('opening loading')
    setTimeout ->
      $('body').removeClass('opening')
      initScrollMaigic()
      initShowWhyVideo()
    , 399
  , 500

$(document).ready ->
  ipadCheck()

  window.controller = controller = new ScrollMagic.Controller({container: ".inner"})

  # controller.scrollTo (newpos) ->
  #   TweenMax.to window, 0.5, {scrollTo: {y: newpos, autoKill:false}}


