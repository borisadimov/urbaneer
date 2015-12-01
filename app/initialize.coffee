isiPad = false
ipadCheck = ->
  isiPad = navigator.userAgent.match(/iPad/i) != null
  unless isiPad
    $('body').addClass('not-ipad')

send_mail = (theme, text, cb = false, success_message = false) ->
    Parse.Cloud.run 'sendmail', {
      target: 'info@urbaneercreative.com'
      originator: 'urbaneer@landing.com'
      subject: theme
      text: text
    } ,
    success: (success) ->
      if success_message
        swal('Thank you!', success_message, 'success')
      else
        swal('Thank you!', 'We will reply soon', 'success')
      unless cb is false
        try
          cb()
    error: (error) ->
      swal('Oops...', 'Something went wrong!', 'error')


validateEmail = (email) ->
    re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return re.test(email)

validateContact = ->
  valid = true
  unless $('.contact_form [name=name]').val().length
    $('.contact_form [name=name]').addClass('error').one 'keyup', ->
      $('.contact_form [name=name]').removeClass('error')
    valid = false
  else
    $('.contact_form [name=name]').removeClass('hasError')

  unless $('.contact_form [name=phone]').val().length
    $('.contact_form [name=phone]').addClass('error').one 'keyup', ->
      $('.contact_form [name=phone]').removeClass('error')
    valid = false
  else
    $('.contact_form [name=phone]').removeClass('hasError')

  unless $('.contact_form [name=message]').val().length
    $('.contact_form [name=message]').addClass('error').one 'keyup', ->
      $('.contact_form [name=message]').removeClass('error')
    valid = false
  else
    $('.contact_form [name=message]').removeClass('hasError')


  unless validateEmail($('.contact_form [name=email]').val())
    $('.contact_form [name=email]').addClass('error').on 'keyup', ->
      if validateEmail($('.contact_form [name=email]').val())
        $('.contact_form [name=email]').removeClass('error')
    valid = false
  else
    $('.contact_form [name=email]').removeClass('hasError')

   return valid


validatePurchase = ->
  valid = true
  unless $('.first_form .name input').val().length
    $('.first_form .name input').addClass('error').one 'keyup', ->
      $('.first_form .name input').removeClass('error')
    valid = false
  else
    $('.first_form .name input').removeClass('hasError')

  unless $('.first_form .message textarea').val().length
    $('.first_form .message textarea').addClass('error').one 'keyup', ->
      $('.first_form .message textarea').removeClass('error')
    valid = false
  else
    $('.first_form .message textarea').removeClass('hasError')


  unless validateEmail($('.first_form .email input').val())
    $('.first_form .email input').addClass('error').on 'keyup', ->
      if validateEmail($('.first_form .email input').val())
        $('.first_form .email input').removeClass('error')
    valid = false
  else
    $('.first_form .email input').removeClass('hasError')

   return valid







initShowWhyVideo = =>
  $('.why_video .play').click ->
    $('.why_video').addClass('step1')
    setTimeout ->
      $('.why_video').removeClass('step1')
      $('.why_video').addClass('step2')
    ,501

initScrollMaigic = =>



  require('scrollmagic/earth_section')(controller)
  require('scrollmagic/timeline_section')(controller)
  unless isiPad
    require('scrollmagic/about_section')(controller)
    require('scrollmagic/get_started_section')(controller)
    require('scrollmagic/custom_scrollbar')(controller)
    require('scrollmagic/smooth_scroll')(controller)
  else
    require('scrollmagic/about_section_ipad')(controller)
    require('scrollmagic/get_started_section_ipad')(controller)
    require('scrollmagic/custom_scrollbar_ipad')(controller)
    require('scrollmagic/smooth_scroll_ipad')(controller)

  require('scrollmagic/get_smarter_section')(controller)


  scene_footer = new ScrollMagic.Scene
    triggerElement: ".footer"
    duration: 900
    offset: 0
  .triggerHook(0.7)
  .addTo(controller)

  setFooterTween = (height) ->
    footer_tween = new TimelineMax()
    .add(TweenMax.to($('.guidelines_footer .ln12'), 1, {'height': '350px'}))
    .add(TweenMax.to($('.guidelines_footer .ln13'), 0.1, {'width': '40px'}))
    .add([
      TweenMax.to($('.guidelines_footer .ln14'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.guidelines_footer .ln15'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.guidelines_footer .ln16'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.guidelines_footer .ln17'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.footer_items .i1'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.footer_items .i2'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.footer_items .i3'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.guidelines_footer .ln18'), 1, {'opacity': '0.9999'})
      TweenMax.to($('.guidelines_footer .ln19'), 1, {'opacity': '0.9999'})
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
    $('.footer_items').addClass('disabled_important')
    $('.purchase_form').addClass('showed')
    $('.contact_form').addClass('down')
    setTimeout ->
      $('.purchase_form').addClass('drawn')
    , 10



  $('.footer_item.show_gbrief').click ->

    setFooterTween(500)
    $('.footer').addClass('extended')
    $('.footer_items').addClass('disabled_important')
    $('.footer_item_ext.gbrief').addClass('showed')
    setTimeout ->
      $('.footer_item_ext.gbrief').addClass('drawn')
    , 10



  $('.footer_item.show_frontier').click ->
    setFooterTween(500)
    $('.footer').addClass('extended')
    $('.footer_items').addClass('disabled_important')
    $('.footer_item_ext.frontier').addClass('showed')
    $('.footer_item_ext.frontier .illustration').append(require('frontier'))
    setTimeout ->
      $('.footer_item_ext.frontier').addClass('drawn')
    , 10





  $('.purchase_form .content_item .close').click ->

    $('.purchase_form').removeClass('drawn')

    setTimeout ->
      setFooterTween(0)
      $('.footer_items').removeClass('disabled_important')
      $('.purchase_form').removeClass('showed')
      $('.footer').removeClass('extended')
    , 2100


  $('.footer_item_ext.gbrief .content_item .close').click ->

    $('.footer_item_ext.gbrief').removeClass('drawn')

    setTimeout ->
      setFooterTween(0)
      $('.footer_items').removeClass('disabled_important')
      $('.footer_item_ext.gbrief').removeClass('showed')
      $('.footer').removeClass('extended')
    , 400


  $('.footer_item_ext.frontier .content_item .close').click ->

    $('.footer_item_ext.frontier').removeClass('drawn')
    $('.illustration iframe').remove()
    setTimeout ->
      setFooterTween(0)
      $('.footer_items').removeClass('disabled_important')
      $('.footer_item_ext.frontier').removeClass('showed')
      $('.footer').removeClass('extended')
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
  Parse.initialize('cYShbzU7vF1CCtx3r11fQcYFd7vxCNu8ESMBYNq9','9edRFzvAVLNm8lS39szU3AiTmrBrdP8anIidjg56')
  window.controller = controller = new ScrollMagic.Controller({container: ".inner"})

  $('.contact_form .btn_submit').click ->
    if validateContact()
      text = "Name: #{$('.contact_form [name=name]').val()}\n"+
      "Phone: #{$('.contact_form [name=phone]').val()}\n"+
      "Email: #{$('.contact_form [name=email]').val()}\n\n"+
      "#{$('.contact_form [name=message]').val()}"

      send_mail 'Message from contact form',text, ->
        $('.contact_form .input').val('')
    else
      console.log('invalid')

  $('.first_form .submit').click ->
    if validatePurchase()
      text = "Name: #{$('.first_form .name input').val()}\n"+
      "Email: #{$('.first_form .email input').val()}\n\n"+
      "#{$('.first_form .message textarea').val()}"

      send_mail 'Message from purchase form',text, ->
        $('.first_form input, .first_form textarea').val('')
    else
      console.log('invalid')

  # controller.scrollTo (newpos) ->
  #   TweenMax.to window, 0.5, {scrollTo: {y: newpos, autoKill:false}}


