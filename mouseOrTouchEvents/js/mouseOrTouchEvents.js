$(function() {
  var isTouch = (Modernizr.touch),
      downEvent = isTouch ? 'touchstart' : 'mousedown',
      upEvent = isTouch ? 'touchend' : 'mouseup',
      moveEvent = isTouch ? 'touchmove' : 'mousemove',
      $body = $(document.body),
      $log = $('#logContainer');

  // Prevents scrolling of page, useful for full screen apps
  document.ontouchstart = function(e) {
    e.preventDefault();
  }

  $body.on(downEvent, function(e) {
    // Touch returns array of touch points
    // One point might be sufficient
    var pos = getPos(e),
        currPos = ($.isArray(pos)) ? pos[0] : pos;

    $log.html('<p>Down event at x:' + currPos.x + '; y:' + currPos.y);
  });

  $body.on(moveEvent, function(e) {
    // Touch returns array of touch points
    // One point might be sufficient
    var pos = getPos(e),
        currPos = ($.isArray(pos)) ? pos[0] : pos;

    $log.html('<p>Move event at x:' + currPos.x + '; y:' + currPos.y);
  });

  $body.on(upEvent, function(e) {
    // Touch returns array of touch points
    // One point might be sufficient
    var pos = getPos(e),
        currPos = ($.isArray(pos)) ? pos[0] : pos;

    $log.html('<p>Up event at x:' + currPos.x + '; y:' + currPos.y);
  });

  function getPos(e) {
    var pos;

    if (e.type.indexOf('mouse') !== -1) {
      pos = {
        'x': e.clientX,
        'y': e.clientY
      }
    } else if (e.type.indexOf('touch') !== -1) {
      var touches = (e.originalEvent.touches.length > 0) ? e.originalEvent.touches : e.originalEvent.changedTouches,
          pos = [];

      $.each(touches, function (i, touchVal) {
        pos.push({
          'x': touchVal.pageX,
          'y': touchVal.pageY
        });
      });
    }

    return pos;
  }
});