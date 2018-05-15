
/* 

  Cuepoint Coffee. 
  A simple library for HTML5 Video Subtitles and Cuepoints

  # TODO: rename 'slide' to 'keyframe' ?
*/

(function() {
  var Cuepoint, Utils, utils;

  Utils = (function() {

    function Utils() {}

    Utils.prototype.log = function(args) {
      this.args = args;
      if (window.console) {
        return console.log(Array.prototype.slice.call(this, arguments));
      }
    };

    return Utils;

  })();

  Cuepoint = (function() {

    function Cuepoint() {
      this.nativeKeys = Object.keys;
      this.currentSlide = null;
    }

    Cuepoint.prototype.init = function(slides) {
      var self;
      this.slides = slides;
      this.subtitles = document.getElementById("subtitles");
      this.video = document.getElementById("video");
      self = this;
      return this.video.addEventListener("timeupdate", function() {
        var currentSecond, currentSlide;
        currentSecond = parseInt(this.currentTime);
        if (slides[currentSecond] !== void 0 && currentSecond !== currentSlide) {
          currentSlide = currentSecond;
          return self.update(currentSecond);
        }
      }, false);
    };

    Cuepoint.prototype.currentTime = function() {
      return this.video.currentTime;
    };

    Cuepoint.prototype.update = function(time) {
      this.time = time;
      return this.slides[time].action();
    };

    Cuepoint.prototype.setTime = function(time) {
      this.time = time;
      this.video.currentTime = time;
      return this.video.play();
    };

    Cuepoint.prototype.play = function() {
      return this.video.play();
    };

    Cuepoint.prototype.pause = function() {
      if (!this.video.paused) return this.video.pause();
    };

    return Cuepoint;

  })();

  utils = new Utils;

  window.cuepoint = new Cuepoint;

}).call(this);
