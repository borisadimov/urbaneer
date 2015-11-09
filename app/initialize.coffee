$(document).ready ->
  #write your code here!
  $('.point.current').click ->
    $('.timeline').toggleClass('second_state')
    $('.timeline').removeClass('third_state')
  $('.timeline .line').click ->
    $('.timeline').removeClass('second_state')
    $('.timeline').toggleClass('third_state')


  $('.population').click ->
    $('.population_background').toggleClass('showed')



  body = document.body
  timer = null

  window.addEventListener 'scroll', ->
    clearTimeout(timer)
    if !body.classList.contains('disable-hover')
      body.classList.add('disable-hover')


    timer = setTimeout ->
      body.classList.remove('disable-hover')
    , 300
  , false