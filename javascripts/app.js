(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var _cmp = 'components/';
  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf(_cmp) === 0) {
        start = _cmp.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return _cmp + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("about_us_video", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"overlay\"></div>\n<video autoplay=\"autoplay\" preload=\"true\" loop=\"loop\" class=\"about_us_video\">\n  <source src=\"./video/noah.mp4\" type=\"video/mp4\"/>\n  <source src=\"./video/noah.webm\" type=\"video/webm\"/>\n</video>");;return buf.join("");
};
});

require.register("contact_form", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"contacts-table table js-table is-animate\">\n  <div class=\"table__border js-border\">\n    <svg width=\"940\" height=\"430\" viewbox=\"0 0 1080 494\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>contacts-table</title>\n      <g stroke-linecap=\"square\" stroke=\"#333\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M452.5 1.5v421h626\" class=\"inner-border\"></path>\n        <path d=\"M452.5 1.5v259h626\" class=\"inner-border\"></path>\n        <path d=\"M452.5 1.5v207h626\" class=\"inner-border\"></path>\n        <path d=\"M452.5 1.5v155h626\" class=\"inner-border\"></path>\n        <path d=\"M452.5 1.5v103h626\" class=\"inner-border\"></path>\n        <g stroke-width=\"3\">\n          <path d=\"M1.5 1.5v207h451\" class=\"outer-border\"></path>\n          <path d=\"M1.5 1.5h451v491\" class=\"outer-border\"></path>\n          <path d=\"M1.5 1.5v491h1077\" class=\"outer-border\"></path>\n          <path d=\"M1.5 1.5h1077v491\" class=\"outer-border\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n  <div class=\"table_content\">\n    <div class=\"col col_1\">\n      <div class=\"cell cell1\">\n        <div class=\"contact-item\"><small class=\"contact-item__label\">E-mail</small><a href=\"mailto:ohhey@urbaneercreative.com\">info@urbaneercreative.com</a></div>\n      </div>\n      <div class=\"cell cell2\">\n        <div class=\"contact-item\"><small class=\"contact-item__label\">Address</small>Urbaneer Creative<br/>63 Melcher<br/>Boston, MA 02210</div>\n      </div>\n    </div>\n    <div class=\"col col_2\">\n      <div class=\"cell\"><strong class=\"heading1\">Still have<br/>questions?</strong></div>\n      <div class=\"cell\">\n        <form name=\"question\" data-subject=\"Вопрос\" class=\"form\">\n          <div class=\"form__message\">\n            <div class=\"form__message-inner\"><strong>Thanks</strong><span>We call you back soon</span></div>\n          </div>\n          <input type=\"text\" name=\"name\" placeholder=\"Your name\" class=\"input\"/>\n          <input type=\"tel\" name=\"phone\" placeholder=\"Your phone\" class=\"input\"/>\n          <input type=\"email\" name=\"email\" placeholder=\"Your email\" class=\"input\"/>\n          <textarea name=\"message\" placeholder=\"Message\" class=\"input\"></textarea>\n          <div type=\"submit\" class=\"btn btn_submit\">Send</div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");;return buf.join("");
};
});

require.register("frontier", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<iframe src=\"https://player.vimeo.com/video/123991563\" width=\"600\" height=\"337\" frameborder=\"0\" webkitallowfullscreen=\"webkitallowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" allowfullscreen=\"allowfullscreen\"></iframe>");;return buf.join("");
};
});

require.register("get_smarter_video", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<video autoplay=\"autoplay\" preload=\"true\" loop=\"loop\" class=\"get_smarter\">\n  <source src=\"./video/kathy.mp4\" type=\"video/mp4\"/>\n  <source src=\"./video/kathy.webm\" type=\"video/webm\"/>\n</video>");;return buf.join("");
};
});

require.register("guidelines", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"guidelines\">\n  <div class=\"guide_line ln1\"></div>\n  <div class=\"guide_line ln2\"></div>\n  <div class=\"guide_line ln3\"></div>\n  <div class=\"guide_line ln4\"></div>\n  <div class=\"guide_line ln4_1\"></div>\n  <div class=\"guide_line ln5\"></div>\n  <div class=\"guide_line ln6\"></div>\n  <div class=\"guide_line ln7\"></div>\n  <div class=\"guide_line ln8\"></div>\n  <div class=\"guide_line ln8_1\"></div>\n  <div class=\"guide_line ln9\"></div>\n  <div class=\"guide_line ln10\"></div>\n  <div class=\"guide_line ln11\"></div>\n</div>");;return buf.join("");
};
});

require.register("guidelines_footer", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"guidelines_footer\">\n  <div class=\"guide_line ln12\"></div>\n  <div class=\"guide_line ln13\"></div>\n  <div class=\"guide_line ln14\"></div>\n  <div class=\"guide_line ln15\"></div>\n  <div class=\"guide_line ln16\"></div>\n  <div class=\"guide_line ln17\"></div>\n  <div class=\"guide_line ln18\"></div>\n  <div class=\"guide_line ln19\"></div>\n  <div class=\"guide_line ln20\"></div>\n  <div class=\"guide_line ln21\"></div>\n  <div class=\"guide_line ln22\"></div>\n  <div class=\"guide_line ln23\"></div>\n</div>");;return buf.join("");
};
});

require.register("hero_video", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<video autoplay=\"autoplay\" preload=\"true\" loop=\"loop\" class=\"hero_video\">\n  <source src=\"./video/hero.mp4\" type=\"video/mp4\"/>\n  <source src=\"./video/hero.webm\" type=\"video/webm\"/>\n</video>");;return buf.join("");
};
});

require.register("initialize", function(exports, require, module) {
var initScrollMaigic, initShowWhyVideo, ipadCheck, isiPad, send_mail, validateContact, validateEmail, validatePurchase;

isiPad = false;

ipadCheck = function() {
  isiPad = navigator.userAgent.match(/iPad/i) !== null;
  if (!isiPad) {
    return $('body').addClass('not-ipad');
  }
};

send_mail = function(theme, text, cb, success_message) {
  if (cb == null) {
    cb = false;
  }
  if (success_message == null) {
    success_message = false;
  }
  return Parse.Cloud.run('sendmail', {
    target: 'info@urbaneercreative.com',
    originator: 'urbaneer@landing.com',
    subject: theme,
    text: text
  }, {
    success: function(success) {
      if (success_message) {
        swal('Thank you!', success_message, 'success');
      } else {
        swal('Thank you!', 'We will reply soon', 'success');
      }
      if (cb !== false) {
        try {
          return cb();
        } catch (undefined) {}
      }
    },
    error: function(error) {
      return swal('Oops...', 'Something went wrong!', 'error');
    }
  });
};

validateEmail = function(email) {
  var re;
  re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};

validateContact = function() {
  var valid;
  valid = true;
  if (!$('.contact_form [name=name]').val().length) {
    $('.contact_form [name=name]').addClass('error').one('keyup', function() {
      return $('.contact_form [name=name]').removeClass('error');
    });
    valid = false;
  } else {
    $('.contact_form [name=name]').removeClass('hasError');
  }
  if (!$('.contact_form [name=phone]').val().length) {
    $('.contact_form [name=phone]').addClass('error').one('keyup', function() {
      return $('.contact_form [name=phone]').removeClass('error');
    });
    valid = false;
  } else {
    $('.contact_form [name=phone]').removeClass('hasError');
  }
  if (!$('.contact_form [name=message]').val().length) {
    $('.contact_form [name=message]').addClass('error').one('keyup', function() {
      return $('.contact_form [name=message]').removeClass('error');
    });
    valid = false;
  } else {
    $('.contact_form [name=message]').removeClass('hasError');
  }
  if (!validateEmail($('.contact_form [name=email]').val())) {
    $('.contact_form [name=email]').addClass('error').on('keyup', function() {
      if (validateEmail($('.contact_form [name=email]').val())) {
        return $('.contact_form [name=email]').removeClass('error');
      }
    });
    valid = false;
  } else {
    $('.contact_form [name=email]').removeClass('hasError');
  }
  return valid;
};

validatePurchase = function() {
  var valid;
  valid = true;
  if (!$('.first_form .name input').val().length) {
    $('.first_form .name input').addClass('error').one('keyup', function() {
      return $('.first_form .name input').removeClass('error');
    });
    valid = false;
  } else {
    $('.first_form .name input').removeClass('hasError');
  }
  if (!$('.first_form .message textarea').val().length) {
    $('.first_form .message textarea').addClass('error').one('keyup', function() {
      return $('.first_form .message textarea').removeClass('error');
    });
    valid = false;
  } else {
    $('.first_form .message textarea').removeClass('hasError');
  }
  if (!validateEmail($('.first_form .email input').val())) {
    $('.first_form .email input').addClass('error').on('keyup', function() {
      if (validateEmail($('.first_form .email input').val())) {
        return $('.first_form .email input').removeClass('error');
      }
    });
    valid = false;
  } else {
    $('.first_form .email input').removeClass('hasError');
  }
  return valid;
};

initShowWhyVideo = (function(_this) {
  return function() {
    return $('.why_video .play').click(function() {
      $('.why_video').addClass('step1');
      return setTimeout(function() {
        $('.why_video').removeClass('step1');
        return $('.why_video').addClass('step2');
      }, 501);
    });
  };
})(this);

initScrollMaigic = (function(_this) {
  return function() {
    var contact_form_scene, scene_footer, setFooterTween;
    require('scrollmagic/earth_section')(controller);
    require('scrollmagic/timeline_section')(controller);
    require('scrollmagic/about_section_ipad')(controller);
    require('scrollmagic/get_started_section_ipad')(controller);
    require('scrollmagic/custom_scrollbar_ipad')(controller);
    require('scrollmagic/smooth_scroll_ipad')(controller);
    require('scrollmagic/get_smarter_section')(controller);
    scene_footer = new ScrollMagic.Scene({
      triggerElement: ".footer",
      duration: 900,
      offset: 0
    }).triggerHook(0.7).addTo(controller);
    setFooterTween = function(height) {
      var footer_tween;
      footer_tween = new TimelineMax().add(TweenMax.to($('.guidelines_footer .ln12'), 1, {
        'height': '350px'
      })).add(TweenMax.to($('.guidelines_footer .ln13'), 0.1, {
        'width': '40px'
      })).add([
        TweenMax.to($('.guidelines_footer .ln14'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.guidelines_footer .ln15'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.guidelines_footer .ln16'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.guidelines_footer .ln17'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.footer_items .i1'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.footer_items .i2'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.footer_items .i3'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.guidelines_footer .ln18'), 1, {
          'opacity': '0.9999'
        }), TweenMax.to($('.guidelines_footer .ln19'), 1, {
          'opacity': '0.9999'
        })
      ]).add(TweenMax.to($('.guidelines_footer .ln20'), 0.1, {
        'width': '40px'
      })).add(TweenMax.to($('.guidelines_footer .ln21'), 0.5, {
        'height': (400 + height) + "px"
      })).add(TweenMax.to($('.guidelines_footer .ln22'), 0.1, {
        'width': '481px'
      }));
      $('.guidelines_footer .ln22').css('top', (750 + height) + "px");
      return scene_footer.setTween(footer_tween);
    };
    setFooterTween(0);
    contact_form_scene = new ScrollMagic.Scene({
      triggerElement: ".footer",
      duration: '200%',
      offset: 900
    }).triggerHook(0.7).setClassToggle(".contact_form", "showed").addTo(controller);
    $('.footer_item.show_purchase').click(function() {
      setFooterTween(500);
      $('.footer').addClass('extended');
      $('.footer_items').addClass('disabled_important');
      $('.purchase_form').addClass('showed');
      $('.contact_form').addClass('down');
      return setTimeout(function() {
        return $('.purchase_form').addClass('drawn');
      }, 10);
    });
    $('.footer_item.show_gbrief').click(function() {
      setFooterTween(500);
      $('.footer').addClass('extended');
      $('.footer_items').addClass('disabled_important');
      $('.footer_item_ext.gbrief').addClass('showed');
      return setTimeout(function() {
        return $('.footer_item_ext.gbrief').addClass('drawn');
      }, 10);
    });
    $('.footer_item.show_frontier').click(function() {
      setFooterTween(500);
      $('.footer').addClass('extended');
      $('.footer_items').addClass('disabled_important');
      $('.footer_item_ext.frontier').addClass('showed');
      $('.footer_item_ext.frontier .illustration').append(require('frontier'));
      return setTimeout(function() {
        return $('.footer_item_ext.frontier').addClass('drawn');
      }, 10);
    });
    $('.purchase_form .content_item .close').click(function() {
      $('.purchase_form').removeClass('drawn');
      return setTimeout(function() {
        setFooterTween(0);
        $('.footer_items').removeClass('disabled_important');
        $('.purchase_form').removeClass('showed');
        return $('.footer').removeClass('extended');
      }, 2100);
    });
    $('.footer_item_ext.gbrief .content_item .close').click(function() {
      $('.footer_item_ext.gbrief').removeClass('drawn');
      return setTimeout(function() {
        setFooterTween(0);
        $('.footer_items').removeClass('disabled_important');
        $('.footer_item_ext.gbrief').removeClass('showed');
        return $('.footer').removeClass('extended');
      }, 400);
    });
    return $('.footer_item_ext.frontier .content_item .close').click(function() {
      $('.footer_item_ext.frontier').removeClass('drawn');
      $('.illustration iframe').remove();
      return setTimeout(function() {
        setFooterTween(0);
        $('.footer_items').removeClass('disabled_important');
        $('.footer_item_ext.frontier').removeClass('showed');
        return $('.footer').removeClass('extended');
      }, 400);
    });
  };
})(this);

$(window).load(function() {
  return setTimeout(function() {
    $('body').toggleClass('opening loading');
    return setTimeout(function() {
      $('body').removeClass('opening');
      initScrollMaigic();
      return initShowWhyVideo();
    }, 399);
  }, 500);
});

$(document).ready(function() {
  var controller;
  ipadCheck();
  Parse.initialize('cYShbzU7vF1CCtx3r11fQcYFd7vxCNu8ESMBYNq9', '9edRFzvAVLNm8lS39szU3AiTmrBrdP8anIidjg56');
  window.controller = controller = new ScrollMagic.Controller({
    container: ".inner"
  });
  $('.contact_form .btn_submit').click(function() {
    var text;
    if (validateContact()) {
      text = ("Name: " + ($('.contact_form [name=name]').val()) + "\n") + ("Phone: " + ($('.contact_form [name=phone]').val()) + "\n") + ("Email: " + ($('.contact_form [name=email]').val()) + "\n\n") + ("" + ($('.contact_form [name=message]').val()));
      return send_mail('Message from contact form', text, function() {
        return $('.contact_form .input').val('');
      });
    } else {
      return console.log('invalid');
    }
  });
  return $('.first_form .submit').click(function() {
    var text;
    if (validatePurchase()) {
      text = ("Name: " + ($('.first_form .name input').val()) + "\n") + ("Email: " + ($('.first_form .email input').val()) + "\n\n") + ("" + ($('.first_form .message textarea').val()));
      return send_mail('Message from purchase form', text, function() {
        return $('.first_form input, .first_form textarea').val('');
      });
    } else {
      return console.log('invalid');
    }
  });
});
});

;require.register("jessica_video", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<video autoplay=\"autoplay\" preload=\"true\" loop=\"loop\" class=\"jessica_video\">\n  <source src=\"./video/elli.mp4\" type=\"video/mp4\"/>\n  <source src=\"./video/elli.webm\" type=\"video/webm\"/>\n</video>");;return buf.join("");
};
});

require.register("jessica_video2", function(exports, require, module) {
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<video autoplay=\"autoplay\" preload=\"true\" loop=\"loop\" class=\"jessica_video2\">\n  <source src=\"./video/elli.mp4\" type=\"video/mp4\"/>\n  <source src=\"./video/elli.webm\" type=\"video/webm\"/>\n</video>");;return buf.join("");
};
});

require.register("scrollmagic/about_section", function(exports, require, module) {
module.exports = function(controller) {
  var about_us_tween, box_tween1, box_tween2, how_we_do_it_icons_tween, how_we_do_it_tween, jessica_tween, jessica_tween2, scene_about_us, scene_box1, scene_box2, scene_how_we_do_it, scene_jessica, scene_jessica2, scene_what_we_do_text, scene_what_we_do_tips, scene_who_we_are, scene_who_we_are_text, what_we_do_tips_tween, who_we_are_tween;
  about_us_tween = new TimelineMax().add(TweenMax.to($('.about_us .video_section_about_us .label'), 1, {
    'transform': 'translate3D(0,-250px,0)'
  }));
  scene_about_us = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    offset: 0,
    duration: '200%'
  }).triggerHook(1).setTween(about_us_tween).addTo(controller);
  who_we_are_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln1'), 2, {
    'height': '750px'
  }));
  scene_who_we_are = new ScrollMagic.Scene({
    triggerElement: ".about_us .container",
    duration: '600px'
  }).triggerHook(0.5).setTween(who_we_are_tween).addTo(controller);
  scene_who_we_are_text = new ScrollMagic.Scene({
    triggerElement: ".about_us .who"
  }).triggerHook(0.6).on("start", function() {
    $('.about_us .who .h1, .about_us .who .col').addClass('showed');
    return $('.illustration video').each(function(i, e) {
      return e.play();
    });
  }).addTo(controller);
  scene_what_we_do_text = new ScrollMagic.Scene({
    triggerElement: ".about_us .h2",
    offset: 0
  }).triggerHook(0.3).on("start", function() {
    return $('.about_us .h2').addClass('showed');
  }).addTo(controller);
  what_we_do_tips_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.insights', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.insights'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b1'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.insights'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b1'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.strategy', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.strategy'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b2'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.strategy'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b2'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.execution', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.execution'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b3'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.execution'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b3'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln2'), 0.1, {
    'width': '940px'
  }));
  scene_what_we_do_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1350,
    offset: 900,
    tweenChanges: true
  }).triggerHook(0.1).setPin('.about_us .container.long').setTween(what_we_do_tips_tween).addTo(controller);
  box_tween1 = new TimelineMax().add(TweenMax.to($('.guidelines .ln3'), 0.3, {
    'height': '490px',
    delay: 0.5
  })).add(TweenMax.to($('.perspectives .lnp1'), 0.2, {
    'width': '150px'
  })).add([
    TweenMax.to($('.perspectives .lnp2'), 0.1, {
      'height': '41px'
    }), TweenMax.to($('.perspectives .lnp3'), 0.1, {
      'height': '37px'
    })
  ]).add([
    TweenMax.to($('.perspectives .lnp4'), 0.1, {
      'width': '640px'
    }), TweenMax.to($('.perspectives .text_box'), 0.1, {
      'opacity': '0.9999'
    }), TweenMax.to($('.perspectives .lnp5'), 0.1, {
      'width': '640px'
    })
  ]).add([
    TweenMax.to($('.perspectives .lnp6'), 0.1, {
      'height': '37px'
    }), TweenMax.to($('.perspectives .lnp7'), 0.1, {
      'height': '41px'
    })
  ]).add(TweenMax.to($('.perspectives .lnp8'), 0.2, {
    'width': '150px'
  }));
  scene_box1 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 300,
    offset: 2400
  }).triggerHook(0.3).setTween(box_tween1).addTo(controller);
  jessica_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln4'), 4, {
      'height': '1195px',
      delay: 0.6
    }), TweenMax.to($('.stories .story1'), 2, {
      'transform': 'translate3D(0,-600px,0)'
    }), TweenMax.to($('.stories .story2'), 2.5, {
      'transform': 'translate3D(0,-900px,0)'
    }), TweenMax.to($('.stories .story3'), 2, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories .story4'), 3, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories .story5'), 3.5, {
      'transform': 'translate3D(0,-1200px,0)',
      delay: 0.6
    }), TweenMax.to($('.stories .story1 .quote'), 4.5, {
      'transform': 'translate3D(0,-50px,0)'
    }), TweenMax.to($('.stories .story2 .quote'), 5, {
      'transform': 'translate3D(0,-200px,0)'
    }), TweenMax.to($('.stories .story3 .quote'), 5, {
      'transform': 'translate3D(0, 100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories .story4 .quote'), 4.3, {
      'transform': 'translate3D(0,-250px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories .story5 .quote'), 4.8, {
      'transform': 'translate3D(0,-200px,0)',
      delay: 0.6
    })
  ]);
  scene_jessica = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1400,
    offset: 2600
  }).triggerHook(0.3).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln2').addClass('complete');
    } else {
      return $('.ln2').removeClass('complete');
    }
  }).setTween(jessica_tween).addTo(controller);
  how_we_do_it_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln5'), 2, {
    'height': '330px'
  })).add(TweenMax.to($('.how.fadein'), 1, {
    'opacity': '0.9999'
  }));
  scene_how_we_do_it = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 400,
    offset: 3950
  }).triggerHook(0.2).setTween(how_we_do_it_tween).addTo(controller);
  how_we_do_it_icons_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.culture', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.culture'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b4'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.culture'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b4'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.communication', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.communication'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b5'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.communication'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b5'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.content', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.content'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b6'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.content'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b6'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln6'), 0.1, {
    'width': '940px'
  }));
  scene_what_we_do_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1300,
    offset: 4400,
    tweenChanges: true
  }).triggerHook(0.3).setTween(how_we_do_it_icons_tween).setPin('.about_us .container.long').addTo(controller);
  box_tween2 = new TimelineMax().add(TweenMax.to($('.guidelines .ln7'), 0.3, {
    'height': '490px',
    delay: 0.5
  })).add(TweenMax.to($('.perspectives2 .lnp1'), 0.2, {
    'width': '150px'
  })).add([
    TweenMax.to($('.perspectives2 .lnp2'), 0.1, {
      'height': '41px'
    }), TweenMax.to($('.perspectives2 .lnp3'), 0.1, {
      'height': '37px'
    })
  ]).add([
    TweenMax.to($('.perspectives2 .lnp4'), 0.1, {
      'width': '640px'
    }), TweenMax.to($('.perspectives2 .text_box'), 0.1, {
      'opacity': '0.9999'
    }), TweenMax.to($('.perspectives2 .lnp5'), 0.1, {
      'width': '640px'
    })
  ]).add([
    TweenMax.to($('.perspectives2 .lnp6'), 0.1, {
      'height': '37px'
    }), TweenMax.to($('.perspectives2 .lnp7'), 0.1, {
      'height': '41px'
    })
  ]).add(TweenMax.to($('.perspectives2 .lnp8'), 0.2, {
    'width': '150px'
  }));
  scene_box2 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 300,
    offset: 5900
  }).triggerHook(0.3).setTween(box_tween2).addTo(controller);
  jessica_tween2 = new TimelineMax().add([
    TweenMax.to($('.stories2 .story1'), 4, {
      'transform': 'translate3D(0,-600px,0)'
    }), TweenMax.to($('.stories2 .story2'), 2.5, {
      'transform': 'translate3D(0,-900px,0)'
    }), TweenMax.to($('.stories2 .story3'), 2, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories2 .story4'), 3, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories2 .story5'), 3.5, {
      'transform': 'translate3D(0,-1200px,0)',
      delay: 0.6
    }), TweenMax.to($('.stories2 .story1 .quote'), 4.5, {
      'transform': 'translate3D(0,-50px,0)'
    }), TweenMax.to($('.stories2 .story2 .quote'), 5, {
      'transform': 'translate3D(0,-200px,0)'
    }), TweenMax.to($('.stories2 .story3 .quote'), 5, {
      'transform': 'translate3D(0, 100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories2 .story4 .quote'), 4.3, {
      'transform': 'translate3D(0,-250px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories2 .story5 .quote'), 4.8, {
      'transform': 'translate3D(0,-200px,0)',
      delay: 0.6
    }), TweenMax.to($('.guidelines .ln8'), 2, {
      'height': '1100px',
      delay: 1
    })
  ]);
  scene_jessica2 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1100,
    offset: 6000
  }).triggerHook(0.3).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln6').addClass('complete');
    } else {
      return $('.ln6').removeClass('complete');
    }
  }).setTween(jessica_tween2).addTo(controller);
  return $('.iconset .item').click(function() {
    var id;
    $('.active_icon').removeClass('active_icon');
    $('.iconset .item').addClass('disabled');
    $('.iconset .black_block').addClass('disabled');
    id = $(this).data('id');
    $(this).addClass('active_icon').removeClass('disabled');
    return $('.' + id).addClass('active_icon').removeClass('disabled');
  });
};
});

;require.register("scrollmagic/about_section_ipad", function(exports, require, module) {
module.exports = function(controller) {
  var about_us_tween, box_tween1, box_tween2, how_we_do_it_icons_tween, how_we_do_it_tween, jessica_tween, jessica_tween2, scene_about_us, scene_box1, scene_box2, scene_how_we_do_it, scene_jessica, scene_jessica2, scene_what_we_do_text, scene_what_we_do_tips, scene_who_we_are, scene_who_we_are_text, what_we_do_tips_tween, who_we_are_tween;
  about_us_tween = new TimelineMax().add(TweenMax.to($('.about_us .video_section_about_us .label'), 1, {
    'transform': 'translate3D(0,-250px,0)'
  }));
  scene_about_us = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    offset: 0,
    duration: '200%'
  }).triggerHook(1).setTween(about_us_tween).addTo(controller);
  who_we_are_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln1'), 2, {
    'height': '750px'
  }));
  scene_who_we_are = new ScrollMagic.Scene({
    triggerElement: ".about_us .container",
    duration: '600px'
  }).triggerHook(0.5).setTween(who_we_are_tween).addTo(controller);
  scene_who_we_are_text = new ScrollMagic.Scene({
    triggerElement: ".about_us .who"
  }).triggerHook(0.6).on("start", function() {
    return $('.about_us .who .h1, .about_us .who .col').addClass('showed');
  }).addTo(controller);
  scene_what_we_do_text = new ScrollMagic.Scene({
    triggerElement: ".about_us .h2",
    offset: 0
  }).triggerHook(0.3).on("start", function() {
    return $('.about_us .h2').addClass('showed');
  }).addTo(controller);
  what_we_do_tips_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.insights', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.insights'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b1'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.insights'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b1'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.strategy', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.strategy'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b2'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.strategy'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b2'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.execution', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln2'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.execution'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.what_we_do .black_block.b3'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.insights', 0.5, {})).add([
    TweenMax.to($('.execution'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.what_we_do .black_block.b3'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln2'), 0.1, {
    'width': '940px'
  }));
  scene_what_we_do_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 350,
    offset: 900,
    tweenChanges: true
  }).triggerHook(0.3).setTween(what_we_do_tips_tween).addTo(controller);
  box_tween1 = new TimelineMax().add(TweenMax.to($('.guidelines .ln3'), 0.3, {
    'height': '490px',
    delay: 0.5
  })).add(TweenMax.to($('.perspectives .lnp1'), 0.2, {
    'width': '150px'
  })).add([
    TweenMax.to($('.perspectives .lnp2'), 0.1, {
      'height': '41px'
    }), TweenMax.to($('.perspectives .lnp3'), 0.1, {
      'height': '37px'
    })
  ]).add([
    TweenMax.to($('.perspectives .lnp4'), 0.1, {
      'width': '640px'
    }), TweenMax.to($('.perspectives .text_box'), 0.1, {
      'opacity': '0.9999'
    }), TweenMax.to($('.perspectives .lnp5'), 0.1, {
      'width': '640px'
    })
  ]).add([
    TweenMax.to($('.perspectives .lnp6'), 0.1, {
      'height': '37px'
    }), TweenMax.to($('.perspectives .lnp7'), 0.1, {
      'height': '41px'
    })
  ]).add(TweenMax.to($('.perspectives .lnp8'), 0.2, {
    'width': '150px'
  }));
  scene_box1 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 300,
    offset: 1000
  }).triggerHook(0.3).setTween(box_tween1).addTo(controller);
  jessica_tween = new TimelineMax().add([
    TweenMax.to($('.stories .story1'), 4, {
      'transform': 'translate3D(0,-600px,0)'
    }), TweenMax.to($('.stories .story2'), 2.5, {
      'transform': 'translate3D(0,-900px,0)'
    }), TweenMax.to($('.stories .story3'), 2, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories .story4'), 3, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories .story5'), 3.5, {
      'transform': 'translate3D(0,-1200px,0)',
      delay: 0.6
    }), TweenMax.to($('.stories .story1 .quote'), 4.5, {
      'transform': 'translate3D(0,-50px,0)'
    }), TweenMax.to($('.stories .story2 .quote'), 5, {
      'transform': 'translate3D(0,-200px,0)'
    }), TweenMax.to($('.stories .story3 .quote'), 5, {
      'transform': 'translate3D(0, 100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories .story4 .quote'), 4.3, {
      'transform': 'translate3D(0,-250px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories .story5 .quote'), 4.8, {
      'transform': 'translate3D(0,-200px,0)',
      delay: 0.6
    }), TweenMax.to($('.guidelines .ln4'), 2, {
      'height': '1219px',
      delay: 1
    })
  ]);
  scene_jessica = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1400,
    offset: 1200
  }).triggerHook(0.3).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln2').addClass('complete');
    } else {
      return $('.ln2').removeClass('complete');
    }
  }).setTween(jessica_tween).addTo(controller);
  how_we_do_it_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln5'), 2, {
    'height': '330px'
  })).add(TweenMax.to($('.how.fadein'), 1, {
    'opacity': '0.9999'
  }));
  scene_how_we_do_it = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 400,
    offset: 2500
  }).triggerHook(0.2).setTween(how_we_do_it_tween).addTo(controller);
  how_we_do_it_icons_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.culture', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.culture'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b4'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.culture'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b4'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.communication', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.communication'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b5'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.communication'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b5'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.content', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln6'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.content'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.how_we_do_it .black_block.b6'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.culture', 0.5, {})).add([
    TweenMax.to($('.content'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.how_we_do_it .black_block.b6'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln6'), 0.1, {
    'width': '940px'
  }));
  scene_what_we_do_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 300,
    offset: 2900,
    tweenChanges: true
  }).triggerHook(0.3).setTween(how_we_do_it_icons_tween).addTo(controller);
  box_tween2 = new TimelineMax().add(TweenMax.to($('.guidelines .ln7'), 0.3, {
    'height': '490px',
    delay: 0.5
  })).add(TweenMax.to($('.perspectives2 .lnp1'), 0.2, {
    'width': '150px'
  })).add([
    TweenMax.to($('.perspectives2 .lnp2'), 0.1, {
      'height': '41px'
    }), TweenMax.to($('.perspectives2 .lnp3'), 0.1, {
      'height': '37px'
    })
  ]).add([
    TweenMax.to($('.perspectives2 .lnp4'), 0.1, {
      'width': '640px'
    }), TweenMax.to($('.perspectives2 .text_box'), 0.1, {
      'opacity': '0.9999'
    }), TweenMax.to($('.perspectives2 .lnp5'), 0.1, {
      'width': '640px'
    })
  ]).add([
    TweenMax.to($('.perspectives2 .lnp6'), 0.1, {
      'height': '37px'
    }), TweenMax.to($('.perspectives2 .lnp7'), 0.1, {
      'height': '41px'
    })
  ]).add(TweenMax.to($('.perspectives2 .lnp8'), 0.2, {
    'width': '150px'
  }));
  scene_box2 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 300,
    offset: 3000
  }).triggerHook(0.3).setTween(box_tween2).addTo(controller);
  jessica_tween2 = new TimelineMax().add([
    TweenMax.to($('.stories2 .story1'), 4, {
      'transform': 'translate3D(0,-600px,0)'
    }), TweenMax.to($('.stories2 .story2'), 2.5, {
      'transform': 'translate3D(0,-900px,0)'
    }), TweenMax.to($('.stories2 .story3'), 2, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories2 .story4'), 3, {
      'transform': 'translate3D(0,-1100px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories2 .story5'), 3.5, {
      'transform': 'translate3D(0,-1200px,0)',
      delay: 0.6
    }), TweenMax.to($('.stories2 .story1 .quote'), 4.5, {
      'transform': 'translate3D(0,-50px,0)'
    }), TweenMax.to($('.stories2 .story2 .quote'), 5, {
      'transform': 'translate3D(0,-200px,0)'
    }), TweenMax.to($('.stories2 .story3 .quote'), 5, {
      'transform': 'translate3D(0, 100px,0)',
      delay: 0.1
    }), TweenMax.to($('.stories2 .story4 .quote'), 4.3, {
      'transform': 'translate3D(0,-250px,0)',
      delay: 0.3
    }), TweenMax.to($('.stories2 .story5 .quote'), 4.8, {
      'transform': 'translate3D(0,-200px,0)',
      delay: 0.6
    }), TweenMax.to($('.guidelines .ln8'), 2, {
      'height': '1104px',
      delay: 1
    })
  ]);
  scene_jessica2 = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1100,
    offset: 3250
  }).triggerHook(0.3).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln6').addClass('complete');
    } else {
      return $('.ln6').removeClass('complete');
    }
  }).setTween(jessica_tween2).addTo(controller);
  return $('.iconset .item').click(function() {
    var id;
    $('.active_icon').removeClass('active_icon');
    $('.iconset .item').addClass('disabled');
    $('.iconset .black_block').addClass('disabled');
    id = $(this).data('id');
    $(this).addClass('active_icon').removeClass('disabled');
    return $('.' + id).addClass('active_icon').removeClass('disabled');
  });
};
});

;require.register("scrollmagic/custom_scrollbar", function(exports, require, module) {
module.exports = function(controller) {
  var scroller1, scroller2, scroller_tween1, scroller_tween2, scroller_tween3;
  scroller_tween1 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '33%'
  }));
  scroller1 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    duration: 3300
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween1).addTo(controller);
  scroller_tween2 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '65%'
  }));
  scroller2 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    offset: 3301,
    duration: 10000
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween2).addTo(controller);
  scroller_tween3 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '110%'
  }));
  return scroller2 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    offset: 13302,
    duration: 1200
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween3).addTo(controller);
};
});

;require.register("scrollmagic/custom_scrollbar_ipad", function(exports, require, module) {
module.exports = function(controller) {
  var scroller1, scroller2, scroller_tween1, scroller_tween2, scroller_tween3;
  scroller_tween1 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '33%'
  }));
  scroller1 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    duration: 3300
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween1).addTo(controller);
  scroller_tween2 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '60%'
  }));
  scroller2 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    offset: 3301,
    duration: 5800
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween2).addTo(controller);
  scroller_tween3 = new TimelineMax().add(TweenMax.to($('.scroller .progress'), 1, {
    height: '110%'
  }));
  return scroller2 = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    offset: 9100,
    duration: 1200
  }).triggerHook(0).on('progress', function(e) {
    $('.active_icon').removeClass('active_icon');
    $('.disabled').removeClass('disabled');
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).setTween(scroller_tween3).addTo(controller);
};
});

;require.register("scrollmagic/earth_section", function(exports, require, module) {
module.exports = function(controller) {
  var largest_tween, scene_earth, scene_largest, scene_over;
  largest_tween = new TimelineMax();
  $('.earth .path path').each(function(i, e) {
    pathPrepare($(e));
    return largest_tween.add(TweenMax.to($(e), 1, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));
  });
  scene_largest = new ScrollMagic.Scene({
    triggerElement: "#content_start",
    duration: 180,
    tweenChanges: true
  }).on("start", function() {
    $(".earth .logo").addClass("showed");
    return $(".why_video .play").addClass("rotated");
  }).on("end", function() {
    $(".earth .largest").addClass("showed");
    return $(".earth .call_to_action").addClass("showed");
  }).triggerHook(0).setTween(largest_tween).addTo(controller);
  scene_earth = new ScrollMagic.Scene({
    triggerElement: ".earth .largest",
    duration: '120%',
    offset: -200
  }).triggerHook(0.7).setClassToggle(".earth .globe", "animated").addTo(controller);
  return scene_over = new ScrollMagic.Scene({
    triggerElement: ".earth .over"
  }).triggerHook(0.7).on("start", function() {
    return $(".earth .over").addClass("showed");
  }).addTo(controller);
};
});

;require.register("scrollmagic/get_smarter_section", function(exports, require, module) {
module.exports = function(controller) {
  var contact_tween, contact_us_video_tween, get_smarter_tween, scene_get_smarter;
  get_smarter_tween = new TimelineMax().add(TweenMax.to($('.about_us .get_smarter_video .label'), 1, {
    'transform': 'translate3D(0,-250px,0)'
  }));
  scene_get_smarter = new ScrollMagic.Scene({
    triggerElement: ".get_smarter_video",
    duration: '200%'
  }).triggerHook(1).setTween(get_smarter_tween).addTo(controller);
  contact_us_video_tween = new TimelineMax().add(TweenMax.to($('.contact_us_video .label'), 1, {
    'transform': 'translate3D(0,-250px,0)'
  }));
  scene_get_smarter = new ScrollMagic.Scene({
    triggerElement: ".contact_us_video",
    duration: '200%'
  }).triggerHook(1).setTween(contact_us_video_tween).addTo(controller);
  $('.purchase_form svg path').each(function(i, e) {
    return pathPrepare($(e));
  });
  contact_tween = [];
  $('.contact_form svg path').each(function(i, e) {
    return pathPrepare($(e));
  });
  return scene_get_smarter = new ScrollMagic.Scene({
    triggerElement: ".contact_us_video",
    offset: 0,
    duration: '150%'
  }).triggerHook(0.3).setClassToggle('.contacts-table', 'drawn').addTo(controller);
};
});

;require.register("scrollmagic/get_started_section", function(exports, require, module) {
module.exports = function(controller) {
  var end_of_guideline_tween, get_started_tween, scene_end_of_guideline, scene_get_started, scene_get_started_tips;
  get_started_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln9'), 2, {
    'height': '330px'
  })).add(TweenMax.to($('.get_started.fadein'), 1, {
    'opacity': '0.9999'
  }));
  scene_get_started = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 200,
    offset: 7000
  }).triggerHook(0.2).setTween(get_started_tween).addTo(controller);
  get_started_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.assessments', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.assessments'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b7'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.assessments'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b7'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.workshops', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.workshops'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b8'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.workshops'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b8'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.speaking', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.speaking'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b9'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.speaking'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b9'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln10'), 1, {
    'width': '940px'
  }));
  scene_get_started_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 1350,
    offset: 7450,
    tweenChanges: true
  }).triggerHook(0.1).setPin('.about_us .container.long').setTween(get_started_tween).addTo(controller);
  end_of_guideline_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln11'), 2, {
    'height': '550px',
    delay: 0.6
  }));
  return scene_end_of_guideline = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 200,
    offset: 8801
  }).triggerHook(0.2).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln10').addClass('complete');
    } else {
      return $('.ln10').removeClass('complete');
    }
  }).setTween(end_of_guideline_tween).addTo(controller);
};
});

;require.register("scrollmagic/get_started_section_ipad", function(exports, require, module) {
module.exports = function(controller) {
  var end_of_guideline_tween, get_started_tween, scene_end_of_guideline, scene_get_started, scene_get_started_tips;
  get_started_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln9'), 2, {
    'height': '330px'
  })).add(TweenMax.to($('.get_started.fadein'), 1, {
    'opacity': '0.9999'
  }));
  scene_get_started = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 200,
    offset: 4300
  }).triggerHook(0.2).setTween(get_started_tween).addTo(controller);
  get_started_tween = new TimelineMax().add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '130px'
    }), TweenMax.fromTo('.assessments', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {
      'width': '200px'
    }), TweenMax.to($('.assessments'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b7'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.assessments'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b7'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '440px'
    }), TweenMax.fromTo('.workshops', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.workshops'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b8'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '460px'
    }), TweenMax.to($('.workshops'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b8'), 0.15, {
      'opacity': '0.0001'
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.2, {
      'width': '680px'
    }), TweenMax.fromTo('.speaking', 0.2, {
      opacity: '0.001'
    }, {
      opacity: '0.9999',
      delay: 0.1
    })
  ]).add([
    TweenMax.to($('.guidelines .ln10'), 0.5, {
      'width': '750px'
    }), TweenMax.to($('.speaking'), 0.5, {
      'transform': 'scale(1.3)',
      'color': '#000'
    }), TweenMax.to($('.get_started_iconset .black_block.b9'), 0.2, {
      'opacity': '0.9999'
    })
  ]).add(TweenMax.to('.assessments', 0.5, {})).add([
    TweenMax.to($('.speaking'), 0.2, {
      'transform': 'scale(1)'
    }), TweenMax.to($('.get_started_iconset .black_block.b9'), 0.05, {
      'opacity': '0.0001'
    })
  ]).add(TweenMax.to($('.guidelines .ln10'), 1, {
    'width': '940px'
  }));
  scene_get_started_tips = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 350,
    offset: 4750,
    tweenChanges: true
  }).triggerHook(0.3).setTween(get_started_tween).addTo(controller);
  end_of_guideline_tween = new TimelineMax().add(TweenMax.to($('.guidelines .ln11'), 2, {
    'height': '550px',
    delay: 0.6
  }));
  return scene_end_of_guideline = new ScrollMagic.Scene({
    triggerElement: ".about_us",
    duration: 200,
    offset: 4960
  }).triggerHook(0.2).on('start', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.ln10').addClass('complete');
    } else {
      return $('.ln10').removeClass('complete');
    }
  }).setTween(end_of_guideline_tween).addTo(controller);
};
});

;require.register("scrollmagic/smooth_scroll", function(exports, require, module) {
module.exports = function(controller) {
  var scrollDown, scrolling;
  scrolling = false;
  $('.spacer .scrolldown').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], $('#hero').height() + 40, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_about_us').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 3150, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_home').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 0, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_get_smarter').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 12650, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_contact').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 13600, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  return scrollDown = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    duration: "100%"
  }).triggerHook(0).on('progress', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).on("start end", function(e) {
    if (e.type === "start") {
      if (e.target.controller().info("scrollDirection") === "FORWARD") {
        if (scrolling) {
          return;
        }
        scrolling = true;
        $('body').addClass('disable-hover');
        return scrollTo($(".inner")[0], $('#hero').height() + 40, function() {
          $('body').removeClass('disable-hover');
          return scrolling = false;
        });
      } else {

      }
    } else {
      if (e.target.controller().info("scrollDirection") === "REVERSE") {
        $('.hero .bg').append(require('hero_video'));
        $(".inner")[0].scrollTop = $('#hero').height() + 40;
        return setTimeout(function() {
          if (scrolling) {
            return;
          }
          scrolling = true;
          $('body').addClass('disable-hover');
          return scrollTo($(".inner")[0], 0, function() {
            $('body').removeClass('disable-hover');
            return scrolling = false;
          });
        }, 200);
      } else {
        return setTimeout(function() {
          return $('.hero_video').remove();
        }, 500);
      }
    }
  }).addTo(controller);
};
});

;require.register("scrollmagic/smooth_scroll_ipad", function(exports, require, module) {
module.exports = function(controller) {
  var scrollDown, scrolling;
  scrolling = false;
  $('.spacer .scrolldown').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], $('#hero').height() + 40, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_about_us').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 3150, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_home').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 0, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_get_smarter').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 8650, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  $('.to_contact').click(function() {
    if (scrolling) {
      return;
    }
    scrolling = true;
    $('body').addClass('disable-hover');
    return scrollTo($(".inner")[0], 9600, function() {
      $('body').removeClass('disable-hover');
      return scrolling = false;
    });
  });
  return scrollDown = new ScrollMagic.Scene({
    triggerElement: "#scrolltrigger",
    duration: "100%"
  }).triggerHook(0).on('progress', function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $('.progress .icon').removeClass('reversed');
    } else {
      return $('.progress .icon').addClass('reversed');
    }
  }).on("start end", function(e) {
    if (e.type === "start") {
      if (e.target.controller().info("scrollDirection") === "FORWARD") {
        if (scrolling) {
          return;
        }
        scrolling = true;
        $('body').addClass('disable-hover');
        return scrollTo($(".inner")[0], $('#hero').height() + 40, function() {
          $('body').removeClass('disable-hover');
          return scrolling = false;
        });
      } else {

      }
    } else {
      if (e.target.controller().info("scrollDirection") === "REVERSE") {
        $('.hero .bg').append(require('hero_video'));
        $(".inner")[0].scrollTop = $('#hero').height() + 40;
        return setTimeout(function() {
          if (scrolling) {
            return;
          }
          scrolling = true;
          $('body').addClass('disable-hover');
          return scrollTo($(".inner")[0], 0, function() {
            $('body').removeClass('disable-hover');
            return scrolling = false;
          });
        }, 200);
      } else {
        return setTimeout(function() {
          return $('.hero_video').remove();
        }, 500);
      }
    }
  }).addTo(controller);
};
});

;require.register("scrollmagic/timeline_section", function(exports, require, module) {
module.exports = function(controller) {
  var money_tween, population_tween, scene_money, scene_population, scene_timeline;
  scene_timeline = new ScrollMagic.Scene({
    triggerElement: ".future",
    offset: 100,
    duration: 450
  }).triggerHook(0.7).on("start", function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      return $(".future .timeline").addClass("second_state");
    } else {
      return $(".future .timeline").removeClass("second_state");
    }
  }).on("end", function(e) {
    if (e.target.controller().info("scrollDirection") === "FORWARD") {
      $(".future .timeline").removeClass("second_state");
      return $(".future .timeline").addClass("third_state");
    } else {
      $(".future .timeline").addClass("second_state");
      return $(".future .timeline").removeClass("third_state");
    }
  }).addTo(controller);
  population_tween = new TimelineMax().add(TweenMax.to('.population .filler', 1, {
    width: '100%'
  }));
  scene_population = new ScrollMagic.Scene({
    triggerElement: ".future",
    duration: 200
  }).triggerHook(0.4).on("start", function() {
    $(".population_background").addClass("showed");
    return $(".textbox.t1").addClass("showed");
  }).on("end", function() {
    $(".population_background").addClass("showed");
    return $(".textbox.t2").addClass("showed");
  }).setTween(population_tween).addTo(controller);
  money_tween = new TimelineMax().add(TweenMax.staggerFromTo('.money .money_column', 1, {
    opacity: '0.0001'
  }, {
    opacity: '0.9999',
    ease: Back.easeOut
  }, 0.1)).add(TweenMax.to($('.point .vline'), 0.7, {
    height: '378px'
  })).add(TweenMax.to($('.point .hline'), 0.3, {
    width: '30vw'
  }));
  return scene_money = new ScrollMagic.Scene({
    triggerElement: ".money",
    offset: 0,
    duration: 350,
    tweenChanges: true
  }).triggerHook(0.7).on("start", function() {}).on("end", function() {
    return $('.future .total').addClass('showed');
  }).setTween(money_tween).addTo(controller);
};
});

;
//# sourceMappingURL=app.js.map