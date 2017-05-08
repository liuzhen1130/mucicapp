angular.module('myApp.controllers', [])
//发现音乐 -- 个性推荐
  .controller('recommendCtr', function ($scope, bannersService, $ionicSlideBoxDelegate, personalizedService, privateContentService) {

    $scope.getBannersImgService = function () {
      bannersService.getBanners({
        callback: function (data) {
          $scope.bannerImg = data.banners;
          console.log(data);
          $ionicSlideBoxDelegate.$getByHandle("slideboximgs").loop(true);
          $ionicSlideBoxDelegate.update();
        }
      })
    };
    $scope.getBannersImgService();

    $scope.getPersonalizedService = function () {
      personalizedService.getPersonalized({
        callback: function (data) {
          $scope.personalized = data.result;
          console.log(data)
        }
      })
    }
    $scope.getPersonalizedService();

    $scope.getPrivateContentService = function () {
      privateContentService.getPrivateContent({
        callback: function (data) {
          $scope.privateContent = data.result;
          console.log(data)
        }
      })
    }
    $scope.getPrivateContentService();
  })
  //发现音乐 -- 歌单
  .controller('sheetCtr', function ($scope, playListService, $stateParams) {

    $scope.sheetService = function () {
      playListService.getPlaylist({
        name: $stateParams.name, callback: function (data) {
          //debugger
          console.log(data);
          $scope.sheetList = data.playlists;
        }
      });
    };
    $scope.sheetService();
  })
  //发现音乐 -- 歌单 --歌单分类
  .controller('sheetClassifyCtr', function ($scope, $ionicHistory, categoryService) {
    $scope.goSheetPage = function () {
      $ionicHistory.goBack();
    };
    $scope.sheetClassifyService = function () {
      categoryService.getCategory({
        callback: function (data) {
          $scope.categoryList = data;
          console.log(data)
        }
      });
    };
    $scope.sheetClassifyService();
  })
  //发现音乐 -- 歌单 --歌单详情
  .controller('sheetListDetailCtr', function ($scope, $ionicHistory, playListDetailService, $stateParams) {
    console.log('aaa');
    $scope.goSheetPage = function () {
      $ionicHistory.goBack();
    };
    $scope.sheetListService = function () {
      console.log($stateParams.playListId);
      playListDetailService.getPlaylistDetail({
        playListId: $stateParams.playListId, callback: function (data) {
          $scope.sheetDetail = data.playlist;
          console.log(data);
        }
      })
    };
    $scope.sheetListService();
  })
  //发现音乐 -- 主播电台
  .controller('stationCtr', function ($scope) {

  })
  //发现音乐 -- 排行榜
  .controller('rankingCtr', function ($scope) {

  })
  //我的音乐
  .controller('myMusicCtr', function ($scope) {

  })
  //账户
  .controller('userCtr', function ($scope) {

  })
  //发现音乐 -- 个性推荐 -- 私人FM
  .controller('privateFMCtr', function ($scope, $ionicHistory) {
    $scope.goIndexPage = function () {
      $ionicHistory.goBack();
    }
  })
  //发现音乐 -- 个性推荐 -- 每日歌曲推荐
  .controller('everydayCtr', function ($scope, $ionicHistory) {
    $scope.goIndexPage = function () {
      $ionicHistory.goBack();
    }
  })
  //发现音乐 -- 个性推荐 -- 云音乐热歌榜
  .controller('hotSongCtr', function ($scope, $ionicHistory) {
    $scope.goIndexPage = function () {
      $ionicHistory.goBack();
    }
  })
  //播放歌曲页面
  .controller('playPageCtr', function ($scope, $stateParams, $sce, formatTime2Filter, $ionicHistory, songDetailService, songUrlService) {
    $scope.isOn = 'playMain-middleBg-off';
    $scope.isplay = 'ion-ios-play ';
    $scope.onOff = {
      'transform': 'rotate(-27deg)'
    };
    var source = document.getElementById('source');
    console.log(document.getElementById('source'));
    console.log($scope.isOn);
    var playTime;
    source.ontimeupdate = function () {
      $scope.$apply(function () {
        $scope.currentTime = formatTime2Filter(source.currentTime);
        $scope.progress={
          'width':(parseFloat(source.currentTime)/parseFloat(source.duration))*100+'%'
        };

      });
    };

    //拖动进度条
    var start,end,move,percent;
    var progressWidth = $(".progress").width();
    var progressGreen = $(".progress-green");
    $scope.onTouch = function($event){
      start = $event.target.offsetLeft;
    };
    $scope.onDrag = function($event){
      end = $event.gesture.deltaX;
      move = start + end;
      percent = move/progressWidth;
      //console.log(source.currentTime+"source.currentTime"+source.duration+'source.duration');
      source.currentTime = source.duration*percent;
      console.log(source.duration*percent);
      if (move< 0){
        progressGreen.width(0+'px');
      }else if(move > progressWidth){
        progressGreen.width(progressWidth+'px');

      }else{
        progressGreen.width(move+'px');
      }
    };

    //播放暂停
    $scope.playOnOff = function () {
      if ($scope.isOn == 'playMain-middleBg-on') {
        $scope.isOn = 'playMain-middleBg-off';
        $scope.isplay = 'ion-ios-play';
        $scope.onOff = {
          'transform': 'rotate(-27deg)'
        };
        source.pause();
      } else {
        $scope.isOn = 'playMain-middleBg-on';
        $scope.isplay = 'ion-ios-pause-outline';
        $scope.onOff = {
          'transform': 'rotate(0deg)'
        };
        source.play();
      }
    };
    //返回上一页
    $scope.goSheetDetail = function () {
      $ionicHistory.goBack();
    }

    //获取歌曲信息服务
    $scope.getSongDetailService = function () {
      songDetailService.getSongDetail({
        songId: $stateParams.songId,
        callback: function (data) {
          $scope.songDetail = data.songs;
          console.log(data);
        }
      })
    };
    $scope.getSongDetailService();
    $scope.getSongUrlService = function () {
      songUrlService.getSongUrl({
        songId: $stateParams.songId,
        callback: function (data) {
          $scope.songUrl = $sce.trustAsResourceUrl(data.data[0].url);
          //$scope.songUrl = data.data;
          //console.log(data.data[0].url);
        }
      })
    };
    $scope.getSongUrlService();
  })


  .filter('replaceAmp', function () {
    return function (text) {
      return text.replace(/\&amp;/g, '&');
    }
  })
  .filter('formatNum', function () {
    return function (text) {
      var str = parseInt(text) + '';
      //debugger
      if (str.length > 5) {
        str = str.substring(0, str.length - 4) + '万';
      }
      return str;
    }
  })
  //格式化毫秒
  .filter('formatTime', function () {
    return function (text) {
      var s = parseInt(text / 1000);
      var m = parseInt(s / 60) + ':' + s % 60;
      console.log(s);
      return m;
    }
  })
  //格式化秒
  .filter('formatTime2', function () {
    return function (text) {
      var returnTime = '';
        var second = parseInt(text);//秒
        var minute = 0;//分
        var hour = 0;//小时
        if (second >= 60) {//判断秒数大于60，
          minute = parseInt(second / 60);
          second = parseInt(second % 60);
          if (minute > 60) {//如果分数
            hour = parseInt(minute / 60);
            minute = parseInt(hour % 60);
            if (second < 10) {
              second = "0" + second;
            };
            if (minute < 10) {
              minute = "0" + minute;
            };
            if (hour < 10) {
              hour = "0" + hour;
            };
            returnTime = hour + ":" + minute + ":" + second

          } else {
            if (second < 10) {
              second = "0" + second;
            };
            if (minute < 10) {
              minute = "0" + minute;
            };
            returnTime = minute + ":" + second
          };

        } else {//判断秒数小于60，只有秒，没有分和小时
          if (second < 10) {
            returnTime = "00:0" + second;
          } else {
            returnTime = "00:" + second;
          }
      }
      console.log(returnTime)
      return returnTime;
    }
  })

