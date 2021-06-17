/*!!
 * Power Panel pp-string.case - kebabCase <https://github.com/carlos-sweb/pp-string.case>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/10 22:45 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('kebabCase', factory) :
    (global = global || self, (function () {
      var exports = global.kebabCase = factory();
      }()
  ));
  })(this,function(){
    return function( value ){
        return '';
    }
  })