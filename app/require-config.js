require.config({
  baseUrl: './app',
  paths: {
    'angular': '../lib/bower_components/angular/angular',
    'angular-ui-router': '../lib/bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-filter': '../lib/bower_components/angular-filter/dist/angular-filter.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'angularfire': '../lib/bower_components/angularfire/dist/angularfire.min',
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'angular': {
      exports : 'angular'
    },
    'angular-ui-router': ['angular'],
    'angular-filter': ['angular'],
    'angularfire': ['angular', 'firebase'],
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    },
  },
  priority: [
    'angular'
  ]
});
//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
// window.name = 'NG_DEFER_BOOTSTRAP!';

require(
  ['dependencies', 'angular', 'angular-ui-router', 'app'], 
  function(deps, angular, route, musicHistoryApp) {
    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      angular.bootstrap(document, ['musicHistoryApp']);
    });
});