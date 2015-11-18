window.pathPrepare = ($el) ->
  lineLength = $el[0].getTotalLength()
  $el.css("stroke-dasharray", lineLength)
  $el.css("stroke-dashoffset", lineLength)