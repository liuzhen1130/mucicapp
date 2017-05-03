// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('myApp', ['ionic', 'myApp.controllers'])

/*.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
 // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
 // for form inputs)
 if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
 cordova.plugins.Keyboard.disableScroll(true);

 }
 if (window.StatusBar) {
 // org.apache.cordova.statusbar required
 StatusBar.styleDefault();
 }
 });
 })*/

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      //发现音乐
      .state('tab.discover', {
        url: '/discover',
        views: {
          'tab-discover': {
            templateUrl: 'templates/tab-discover.html',
            controller: 'DisCtrl'
          }
        }
      })
      //tab2
      .state('tab.discover.tabs2', {
        url: '/tabs2',
        views: {
          'tabs2': {
            templateUrl: 'templates/tabs2.html'
          }
        }
      })
      //个性推荐
      .state('tab.discover.tabs2.recomm', {
        url: '/recomm',
        views: {
          'tab-recomm': {
            templateUrl: 'templates/tab-recomm.html',
            controller:'RecommCtrl'

          }
        }
      })
      //歌单
      .state('tab.discover.tabs2.sheet', {
        url: '/sheet',
        params:{name:'全部'},
        views: {
          'tab-sheet': {
            templateUrl: 'templates/tab-sheet.html',
            controller:'SheetCtrl'
          }
        }
      })
      //主播电台
      .state('tab.discover.tabs2.station', {
        url: '/station',
        views: {
          'tab-station': {
            templateUrl: 'templates/tab-station.html',
            controller:'StationCtrl'
          }
        }
      })
      //排行榜
      .state('tab.discover.tabs2.ranking', {
        url: '/ranking',
        views: {
          'tab-ranking': {
            templateUrl: 'templates/tab-ranking.html',
            controller:'RankCtrl'
          }
        }
      })
      //我的音乐
      .state('tab.mymusic', {
        url: '/mymusic',
        views: {
          'tab-mymusic': {
            templateUrl: 'templates/tab-mymusic.html',
            controller: 'MysicCtrl'
          }
        }
      })
      //账户
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })
      // 私人FM页面路由
      .state('private', {
        url: '/private',
        templateUrl: 'templates/con-private.html'
      })
      //每日歌曲推荐页面路由
      .state('everyday', {
        url: '/everyday',
        templateUrl: 'templates/con-everyday.html'
      })
      //热歌排行榜页面路由
      .state('hotsong', {
        url: '/hotsong',
        templateUrl: 'templates/con-hotsong.html'
      })
      //全部歌单页面路由
      .state('sheet-page', {
        url: '/sheet-page',
        templateUrl: 'templates/sheet-page.html',
        controller:'SheetPageCtr'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/discover/tabs2/recomm');

  });
