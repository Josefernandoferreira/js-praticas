"use strict";var Calculadora={_resultado:0,get resultado(){return this._resultado},somar:function(t,r){var o=t+(1<arguments.length&&void 0!==r?r:0);return this._resultado+=o,this},potencia:function(t,r){var o=Math.pow(t,r);return this._resultado+=o,this},zerar:function(){return this._resultado=0,this},log:function(){console.log(this._resultado)}};