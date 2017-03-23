var SILLY = (function(module) {
    module.DoIt = function(resultObject){        
        resultObject.prepend('xxx' + Date() + '<br/>');
    };
    return module;
}(SILLY || {}));


