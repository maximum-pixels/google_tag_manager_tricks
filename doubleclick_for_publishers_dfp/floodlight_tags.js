/*
 * Deprecated
 * This is unneccesary at this point. Use the Global Site tag (gtag.js)
 * method of adding floodlight tags. It is much easier, more reliable, 
 * and has new features that make the tracking better
/*


(function(){
    /*
      Annonymous function to avoid polluting global namespace
      This code is intended to run on all pages, with appropriate
      conditional logic at the end to determine which tag to fire when

      Allows easy debugging of output src attribute by setting
        sessionStorage.gtmDebug = true;
      in JS console
    */

    /*
      In order to use Floodlight's "per session" counting method,
      we need a (session)persistent value. Feel free to omit
      if you don't plan on using that
    */
    function setSessionCookie(){
      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      if(getSessioCookie() == ''){
        document.cookie = '_gtm_sessionID='+a+';path=/;domain=.celebritycorporatekit.com';
      }
    }

    function getSessioCookie(){
      var testRegex = /_gtm_sessionID=(\d+)/;
      cookie = '';
      if(testRegex.test(document.cookie)){
        cookie = document.cookie.match(testRegex)[1];
      }
      return cookie;
    }

    function translateCustomVariables(obj){
      var outputString = ';';
      if(typeof obj !== 'undefined'){
        for(var i = 0; i < Object.keys(obj).length; i++){
          outputString += Object.keys(obj)[i] + '=' + obj[Object.keys(obj)[i]]+';';
        }
      }
      return outputString;
    }

    /*
      @param [String] name
        -> optional
        custom name to keep track off the tag, is output via console if debug

      @param [String] src
      @param [String] type
      @param [String] cat
        -> required
        advertiser ID, Group Tag String, Activity Tag String respectively
        The src, type, and cat parameters that make up a floodlight tag

      @param [Object] options
        -> optional
        Key-Value JS object for counting method custom variables
        -> expected format:
        {
          method: 'standard', // (default) or 'perSession', 'unique'
          customVariables: {
            u1: 'custom_variable1',
            u2: 2,
            u3: 123.45
          }
        }

    */
    function createFloolightCounter(name, src, type, cat, options){
      name = name || '';
      options = options || {method: 'standard', tagType: 'counter'}
      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      var append = translateCustomVariables(options.customVariables);
      switch(options.method){
        case 'standard':
          append += 'ord='+a+'?' ;
          break;
        case 'perSession':
          append += 'ord='+getSessioCookie();
          break;
        case 'unique':
          append += 'ord=1;num='+a+'?';
          break;
        default:
          append += 'ord='+a+'?' ;
      }
      var el = document.createElement('iframe');
      el.src = [
        '//' + src + '.fls.doubleclick.net/activityi;src=',
        src,
        ';type=',
        type,
        ';cat=',
        cat,
        append
      ].join('');
      el.setAttribute('frameborder',0);
      el.width = 1;
      el.height = 1;
      el.style = 'display:none;';
      document.body.appendChild(el);
      if(sessionStorage.gtmDebug=='true'){console.log("Crated Floodlight Tag: "+name+'|'+type+'|'+cat);}
    }

    // make session variable available
    setSessionCookie();
    //your conditional logic goes here

    /*
    e.g
    if(document.location.pathname == '/'){
      createFloodlightCounter(
        'exampletag',
        '12345',
        'type0',
        'cat0',
        {
          method: 'unique',
          customVariables: {
            u4: 'some_value'
          }
        }
      );
    }
    */

})();
