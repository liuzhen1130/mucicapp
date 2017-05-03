angular.module('myApp.controllers', ['myApp.service'])


//发现音乐
.controller('DisCtrl',function ($scope) {
  $scope.title="tab1";
})


//我的音乐
.controller('MysicCtrl',function ($scope) {
  $scope.title="tab2"
})
  //账户
.controller('AccountCtrl',function ($scope) {
  $scope.title="tab3"
})
  //个性推荐
.controller('RecommCtrl',function ($scope) {

})
  //歌单
.controller('SheetCtrl',function ($scope,$stateParams,playListService) {
  $scope.playService= function () {
    playListService.getPlaylist({name:$stateParams.name,callback:function (data) {
      $scope.playList = data.result;
      console.log("ssss");
    }});
  };
  $scope.playService();

})

  //主播电台
.controller('StationCtrl',function ($scope) {

})
  //排行榜
  .controller('RankCtrl',function ($scope) {

  })
//私人FM页面controller
.controller('PrivateCtr',function ($scope,$ionicHistory) {
  $scope.goback=function () {
    $ionicHistory.goBack();
  };
})
  //每日歌曲推荐
.controller('EveryCtr',function ($scope,$ionicHistory) {
  $scope.goback=function () {
    $ionicHistory.goBack();
  };
})
  //云热歌榜
.controller('HotCtr',function ($scope,$ionicHistory) {
  $scope.goback=function () {
    $ionicHistory.goBack();
  };
})
//全部歌单页面路由
  .controller('SheetPageCtr',function ($scope,$ionicHistory,categoryService ){
    $scope.goback=function () {
      $ionicHistory.goBack();
    };
    $scope.cataService=function () {
      categoryService.getCategory({callback:function (data) {
        $scope.categoryList = data.result.childList;
      }});
    };
    $scope.cataService();
  })
.filter('replaceAmp', function() {
  return function(text) {
    return text.replace(/\&amp;/g,'&');
  }
});


