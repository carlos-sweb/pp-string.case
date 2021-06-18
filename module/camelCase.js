/*!!
 * Power Panel pp-string.case - camelCase <https://github.com/carlos-sweb/pp-string.case>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/10 22:45 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('camelCase', factory) :
    (global = global || self, (function () {
      var exports = global.camelCase = factory();
      }()
  ));
  })(this,function(){
    return function( value ){
      if( Object.prototype.toString.call( value ) === '[object String]' ){

        var chars = value.toLowerCase().split('');

        for( var i = 0; i < chars.length; i ++){
          if( ['-','_'].includes( chars[i] ) ){
              chars[i] = ' ';
          }
        }

        var values = chars.join('').split(' ');

        for( var i = 0; i < values.length ; i++ ){
          if( values[i] !== '' ){

            values[i] = i === 0 ? values[i].trim() :  function( val , index ){
                var chars = val.split('');
                chars[0] = chars[0].toUpperCase();
                return chars.join('');
            }(values[i])

          }
        }

        return values.join('');

      }

      return '';
    }
  })
