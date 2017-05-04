// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('myApp', ['ionic', 'myApp.controllers','myApp.service'])


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    //发现音乐 -- 个性推荐
    .state('recommend', {
      url: '/recommend',
      templateUrl: 'templates/recommend.html',
      controller:'recommendCtr'
    })
    //发现音乐 -- 歌单
    .state('sheet',{
      url:'/sheet',
      params:{name:'全部'},
      templateUrl:'templates/sheet.html',
      controller:'sheetCtr'
    })
    //发现音乐 -- 歌单 --歌单分类
    .state('sheetClassify',{
      url:'/sheetClassify',
      templateUrl:'templates/sheetClassify.html',
      controller:'sheetClassifyCtr'
    })
    //发现音乐 -- 歌单 --歌单详情
    .state('sheetListDetail',{
      url:'/sheetListDetail',
      templateUrl:'templates/sheetListDetail.html',
      controller:'sheetListDetailCtr'
    })

    //发现音乐 -- 主播电台
    .state('station',{
      url:'/station',
      templateUrl:'templates/station.html',
      controller:'stationCtr'
    })
    //发现音乐 -- 排行榜
    .state('ranking',{
      url:'/ranking',
      templateUrl:'templates/ranking.html',
      controller:'rankingCtr'
    })
    //我的音乐
    .state('myMusic',{
      url:'/myMusic',
      templateUrl:'templates/myMusic.html',
      controller:'myMusicCtr'
    })
    //账户
    .state('user',{
      url:'/user',
      templateUrl:'templates/user.html',
      controller:'userCtr'
    })
    //发现音乐 -- 个性推荐 -- 私人FM
    .state('privateFM',{
      url:'/privateFM',
      templateUrl:'templates/privateFM.html',
      controller:'privateFMCtr'
    })
    //发现音乐 -- 个性推荐 -- 每日歌曲推荐
    .state('everyday',{
      url:'/everyday',
      templateUrl:'templates/everyday.html',
      controller:'everydayCtr'
    })
    //发现音乐 -- 个性推荐 -- 云音乐热歌榜
    .state('hotSong',{
      url:'/hotSong',
      templateUrl:'templates/hotSong.html',
      controller:'hotSongCtr'
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/recommend');

  });
