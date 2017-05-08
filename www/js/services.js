angular.module('myApp.service', [])
//获取推荐歌单的服务
  .service('personalizedService', function ($http) {
    this.getPersonalized = function (opt) {
      $http({
        url: 'http://lxgandlz.cn:8080/personalized',
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data);
      }, function errorCallback() {

      })
    }
  })
  //获取独家放送的服务
  .service('privateContentService', function ($http) {
    this.getPrivateContent = function (opt) {
      $http({
        url: 'http://lxgandlz.cn:8080/personalized/privatecontent',
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data)
      }, function errorCallback() {

      })
    }
  })
  //获取歌单分类的服务
  .service('categoryService', function ($http) {
    this.getCategory = function (opt) {
      $http({
        url: 'http://www.lxgandlz.cn:8080/playlist/catlist',
        method: 'GET'
      }).then(function successCallback(response) {

        var responseData = response.data;
        var categories = [];
        for (var i = 0; i < 5; i++) {
          categories.push({name: responseData.categories[i], childList: []});
        }
        angular.forEach(responseData.sub, function (item) {
          switch (item.category) {
            case 0:
              categories[0].childList.push(item);
              break;
            case 1:
              categories[1].childList.push(item);
              break;
            case 2:
              categories[2].childList.push(item);
              break;
            case 3:
              categories[3].childList.push(item);
              break;
            case 4:
              categories[4].childList.push(item);
              break;
          }
        })
        //console.log(categories)
        opt.callback(categories);
      }, function errorCallback(response) {
        // 请求失败执行代码
      })
    }
  })
  //根据分类获取歌单的服务
  .service('playListService', function ($http) {

    this.getPlaylist = function (opt) {
      $http({
        url: 'http://www.lxgandlz.cn:8080/top/playlist?cat=' + opt.name,
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data);
      }, function errorCallback(response) {
        // 请求失败执行代码
      })
    }
  })
  //根据歌单获取歌单详情的服务
  .service('playListDetailService', function ($http) {
    this.getPlaylistDetail = function (opt) {
      $http({
        url: 'http://lxgandlz.cn:8080/playlist/detail?id=' + opt.playListId,
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data);
      }, function errorCallback(response) {
        // 请求失败执行代码
      })
    }
  })
  //获取首页轮播图的服务
  .service('bannersService', function ($http) {
    this.getBanners = function (opt) {
      $http({
        url: 'http://www.lxgandlz.cn:8080/banner',
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data);

      }, function errorCallback(response) {
        // 请求失败执行代码
      })
    }
  })
  //获取歌曲详情的服务
  .service('songDetailService', function ($http) {
    this.getSongDetail = function (opt) {
      $http({
        url: 'http://lxgandlz.cn:8080/song/detail?ids='+opt.songId,
        method: 'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data);
      }, function errorCallback(response) {

      })
    }
  })
//获取歌曲地址的服务
  .service('songUrlService',function ($http) {
    this.getSongUrl = function (opt) {
      $http({
        url:'http://lxgandlz.cn:8080/music/url?id='+opt.songId,
        method:'GET'
      }).then(function successCallback(response) {
        opt.callback(response.data) ;
      },function errorCallback(response) {

      })
    }
  })
