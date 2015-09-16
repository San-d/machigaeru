'use strict';

angular.element(document).ready(function() {
    //console.log('member-portal angular app starting up');
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ['machigaeru']);
});