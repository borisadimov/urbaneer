module.exports = (controller) ->

  scrolling = false

  $('.spacer .scrolldown').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    scrollTo $(".inner")[0], $('#hero').height()+40, ->
      $('body').removeClass('disable-hover')
      scrolling = false

  $('.to_about_us').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    scrollTo $(".inner")[0], 3150, ->
      $('body').removeClass('disable-hover')
      scrolling = false
  $('.to_home').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    scrollTo $(".inner")[0], 0 , ->
      $('body').removeClass('disable-hover')
      scrolling = false

  $('.to_get_smarter').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    scrollTo $(".inner")[0], 8650, ->
      $('body').removeClass('disable-hover')
      scrolling = false

  $('.to_contact').click ->
    if scrolling then return
    scrolling = true
    $('body').addClass('disable-hover')
    scrollTo $(".inner")[0],9600, ->
      $('body').removeClass('disable-hover')
      scrolling = false


  scrollDown = new ScrollMagic.Scene
    triggerElement: "#scrolltrigger"
    duration: "100%"
  .triggerHook(0)
  .on 'progress', (e) ->
    if e.target.controller().info("scrollDirection") is "FORWARD"
      $('.progress .icon').removeClass('reversed')
    else
      $('.progress .icon').addClass('reversed')
  .on "start end", (e) ->
    if e.type is "start"
      if e.target.controller().info("scrollDirection") is "FORWARD"
        if scrolling then return
        scrolling = true
        $('body').addClass('disable-hover')
        scrollTo $(".inner")[0], $('#hero').height()+40, ->
          $('body').removeClass('disable-hover')
          scrolling = false


      else
    else
      if e.target.controller().info("scrollDirection") is "REVERSE"
        $('.hero .bg').append(require('hero_video'))
        $(".inner")[0].scrollTop = $('#hero').height()+40
        setTimeout ->
          if scrolling then return
          scrolling = true
          $('body').addClass('disable-hover')
          scrollTo $(".inner")[0], 0, ->
            $('body').removeClass('disable-hover')
            scrolling = false
        , 200

      else
        setTimeout ->
          $('.hero_video').remove()
        , 500

  .addTo(controller)




