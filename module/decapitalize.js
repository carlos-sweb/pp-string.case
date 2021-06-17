/*!!
 * Power Panel pp-string.case - decapitalize <https://github.com/carlos-sweb/pp-string.case>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/10 22:45 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('decapitalize', factory) :
    (global = global || self, (function () {
      var exports = global.decapitalize = factory();
      }()
  ));
  })(this,function(){
    return function( value , restToLower ){
      var proto = Object.prototype.toString;
      if( proto.call( value  ) === '[object String]' ){
        if( value !== '' ){
          var rest = proto.call( restToLower )  === '[object Boolean]' ? restToLower : false;
          var decapitalizeString = value.split('');
          for( var i = 0; i < decapitalizeString.length ; i++  ){
            if( i === 0 ){
              decapitalizeString[i] = decapitalizeString[i].toLowerCase()
              if( !rest ){ break; }
            }else{
                decapitalizeString[i] = decapitalizeString[i].toLowerCase();
            }

          }
          return decapitalizeString.join('');
        }
      }
      return '';
    }
  })
