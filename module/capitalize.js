/*!!
 * Power Panel pp-string.case - capitalize <https://github.com/carlos-sweb/pp-string.case>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/07 19:54 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('capitalize', factory) :
    (global = global || self, (function () {
      var exports = global.capitalize = factory();
      }()
  ));
  })(this,function(){
    return function( value , restToLower ){
        var proto = Object.prototype.toString;
        if( proto.call( value  ) === '[object String]' ){
          if( value !== '' ){
            var rest = proto.call( restToLower )  === '[object Boolean]' ? restToLower : false;
            var capitalizeString = value.split('');
            for( var i = 0; i < capitalizeString.length ; i++  ){
              if( i === 0 ){
                capitalizeString[i] = capitalizeString[i].toUpperCase()
                if( !rest ){ break; }
              }else{
                  capitalizeString[i] = capitalizeString[i].toLowerCase();
              }

            }
            return capitalizeString.join('');
          }
        }
        return '';
    }
  })
