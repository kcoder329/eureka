var SILLY = (function(module) {
    module.DoIt = function(resultObject){        
        resultObject.prepend('yyy' + Date() + '<br/>');
    };
    return module;
}(SILLY || {}));


