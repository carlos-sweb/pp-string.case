/*!!
 * Power Panel pp-string.case - upperCase <https://github.com/carlos-sweb/pp-string.case>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/10 22:45 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('upperCase', factory) :
    (global = global || self, (function () {
      var exports = global.upperCase = factory();
      }()
  ));
  })(this,function(){
    return function( value ){
        if( Object.prototype.toString.call( value ) === '[object String]' ){
          return value.toUpperCase();
        }
        return '';
    }
  })
