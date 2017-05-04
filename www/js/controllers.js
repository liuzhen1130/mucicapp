angular.module('myApp.controllers', [])
//发现音乐 -- 个性推荐
.controller('recommendCtr',function ($scope) {

})
//发现音乐 -- 歌单
.controller('sheetCtr',function ($scope,playListService,$stateParams) {
  console.log('enter in sheetCtr');
  $scope.sheetService=function () {
    playListService.getPlaylist({name:$stateParams.name, callback:function (data) {
      $scope.sheetList = data.result;
    }});
  };
  $scope.sheetService();
})
//发现音乐 -- 歌单 --歌单分类
.controller('sheetClassifyCtr',function ($scope,$ionicHistory,categoryService) {
  console.log('enter sheetClassifyCtr')
  $scope.goSheetPage=function () {
    $ionicHistory.goBack();
  };
  $scope.sheetClassifyService=function () {
    categoryService.getCategory({callback:function (data) {
      $scope.categoryList = data.result.childList;
    }});
  };
  $scope.sheetClassifyService();
})
.filter('replaceAmp', function() {
  return function(text) {
    return text.replace(/\&amp;/g,'&');
  }
})
//发现音乐 -- 歌单 --歌单详情
.controller('sheetListDetailCtr',function ($scope,$ionicHistory,playListDetailService) {
  console.log('aaa');
  $scope.goSheetPage = function () {
    $ionicHistory.goBack();
  };
  $scope.sheetListService=function () {
    playListDetailService.getPlaylistDetail({callback:function (data) {
      $scope.sheetDetail = data.result;
      console.log(data)
    }})
  };
  $scope.sheetListService();
})
//发现音乐 -- 主播电台
.controller('stationCtr',function ($scope) {

})
//发现音乐 -- 排行榜
.controller('rankingCtr',function ($scope) {

})
//我的音乐
.controller('myMusicCtr',function ($scope) {

})
//账户
.controller('userCtr',function ($scope) {

})
//发现音乐 -- 个性推荐 -- 私人FM
.controller('privateFMCtr',function ($scope,$ionicHistory) {
  $scope.goIndexPage=function () {
    $ionicHistory.goBack();
  }
})
//发现音乐 -- 个性推荐 -- 每日歌曲推荐
.controller('everydayCtr',function ($scope,$ionicHistory) {
  $scope.goIndexPage=function () {
    $ionicHistory.goBack();
  }
})
//发现音乐 -- 个性推荐 -- 云音乐热歌榜
.controller('hotSongCtr',function ($scope,$ionicHistory) {
  $scope.goIndexPage=function () {
    $ionicHistory.goBack();
  }
})

