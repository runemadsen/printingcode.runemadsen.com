(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.Rune || (g.Rune = {})).Noise = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _runeJs = (typeof window !== "undefined" ? window['Rune'] : typeof global !== "undefined" ? global['Rune'] : null);

var _runeJs2 = _interopRequireDefault(_runeJs);

// http://mrl.nyu.edu/~perlin/noise/
// Adapting from P5.js
// Which was adapted from PApplet.java
// which was adapted from toxi
// which was adapted from the german demo group farbrausch
// as used in their demo "art": http://www.farb-rausch.de/fr010src.zip

var PERLIN_YWRAPB = 4;
var PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
var PERLIN_ZWRAPB = 8;
var PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
var PERLIN_SIZE = 4095;

var SINCOS_PRECISION = 0.5;
var SINCOS_LENGTH = Math.floor(360 / SINCOS_PRECISION);
var sinLUT = new Array(SINCOS_LENGTH);
var cosLUT = new Array(SINCOS_LENGTH);
var DEG_TO_RAD = Math.PI / 180.0;
for (var i = 0; i < SINCOS_LENGTH; i++) {
  sinLUT[i] = Math.sin(i * DEG_TO_RAD * SINCOS_PRECISION);
  cosLUT[i] = Math.cos(i * DEG_TO_RAD * SINCOS_PRECISION);
}

var perlin_PI = SINCOS_LENGTH;
perlin_PI >>= 1;

var Noise = (function () {
  function Noise(url) {
    _classCallCheck(this, Noise);

    this.perlin_octaves = 4; // default to medium smooth
    this.perlin_amp_falloff = 0.5; // 50% reduction/octave
    this.perlin = null;
  }

  _createClass(Noise, [{
    key: "noiseDetail",
    value: function noiseDetail(lod, falloff) {
      if (lod > 0) {
        this.perlin_octaves = lod;
      }
      if (falloff > 0) {
        this.perlin_amp_falloff = falloff;
      }
      return this;
    }
  }, {
    key: "noiseSeed",
    value: function noiseSeed(seed) {

      // Linear Congruential Generator
      // Variant of a Lehman Generator
      var lcg = (function () {
        // Set to values from http://en.wikipedia.org/wiki/Numerical_Recipes
        // m is basically chosen to be large (as it is the max period)
        // and for its relationships to a and c
        var m = 4294967296,

        // a - 1 should be divisible by m's prime factors
        a = 1664525,

        // c and m should be co-prime
        c = 1013904223,
            seed,
            z;
        return {
          setSeed: function setSeed(val) {
            // pick a random seed if val is undefined or null
            // the >>> 0 casts the seed to an unsigned 32-bit integer
            z = seed = (val == null ? Math.random() * m : val) >>> 0;
          },
          getSeed: function getSeed() {
            return seed;
          },
          rand: function rand() {
            // define the recurrence relationship
            z = (a * z + c) % m;
            // return a float in [0, 1)
            // if z = m then z / m = 0 therefore (z % m) / m < 1 always
            return z / m;
          }
        };
      })();

      lcg.setSeed(seed);
      this.perlin = new Array(PERLIN_SIZE + 1);
      for (var i = 0; i < PERLIN_SIZE + 1; i++) {
        this.perlin[i] = lcg.rand();
      }
    }
  }, {
    key: "get",
    value: function get(x, y, z) {

      y = y || 0;
      z = z || 0;

      if (this.perlin == null) {
        this.perlin = new Array(PERLIN_SIZE + 1);
        for (var i = 0; i < PERLIN_SIZE + 1; i++) {
          this.perlin[i] = Math.random();
        }
      }

      if (x < 0) {
        x = -x;
      }
      if (y < 0) {
        y = -y;
      }
      if (z < 0) {
        z = -z;
      }

      var xi = Math.floor(x),
          yi = Math.floor(y),
          zi = Math.floor(z);
      var xf = x - xi;
      var yf = y - yi;
      var zf = z - zi;
      var rxf, ryf;

      var r = 0;
      var ampl = 0.5;

      var n1, n2, n3;

      // Is this right do just have this here?
      var noise_fsc = function noise_fsc(i) {
        // using cosine lookup table
        return 0.5 * (1.0 - cosLUT[Math.floor(i * perlin_PI) % SINCOS_LENGTH]);
      };

      for (var o = 0; o < this.perlin_octaves; o++) {
        var of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);

        rxf = noise_fsc(xf);
        ryf = noise_fsc(yf);

        n1 = this.perlin[of & PERLIN_SIZE];
        n1 += rxf * (this.perlin[of + 1 & PERLIN_SIZE] - n1);
        n2 = this.perlin[of + PERLIN_YWRAP & PERLIN_SIZE];
        n2 += rxf * (this.perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n2);
        n1 += ryf * (n2 - n1);

        of += PERLIN_ZWRAP;
        n2 = this.perlin[of & PERLIN_SIZE];
        n2 += rxf * (this.perlin[of + 1 & PERLIN_SIZE] - n2);
        n3 = this.perlin[of + PERLIN_YWRAP & PERLIN_SIZE];
        n3 += rxf * (this.perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n3);
        n2 += ryf * (n3 - n2);

        n1 += noise_fsc(zf) * (n2 - n1);

        r += n1 * ampl;
        ampl *= this.perlin_amp_falloff;
        xi <<= 1;
        xf *= 2;
        yi <<= 1;
        yf *= 2;
        zi <<= 1;
        zf *= 2;

        if (xf >= 1.0) {
          xi++;xf--;
        }
        if (yf >= 1.0) {
          yi++;yf--;
        }
        if (zf >= 1.0) {
          zi++;zf--;
        }
      }
      return r;
    }
  }]);

  return Noise;
})();

exports["default"] = Noise;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});


//# sourceMappingURL=rune.noise.js.map
