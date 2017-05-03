angular.module('myApp.service',[])
.service('categoryService', function ($http) {
   this.getCategory = function (opt) {
    $http({
      url:'http://www.lxgandlz.cn:8080/getCategory',
      method: 'GET'
    }).then(function successCallback(response) {
      opt.callback(response.data);
    }, function errorCallback(response) {
      // 请求失败执行代码
    })
  }
})
.service('playListService',function ($http) {

  this.getPlaylist = function (opt) {
    $http({
      url:'http://www.lxgandlz.cn:8080/playList?category='+opt.name+'&startNo=0',
      method:'GET'
    }).then(function successCallback(response) {
      opt.callback(response.data);
      console.log('service')
    }, function errorCallback(response) {
      // 请求失败执行代码
    })
  }
})
/*
.service('playListDetailService',function ($http) {
  this.getPlaylistDetail = function (opt) {
    $http({
      url:'http://www.lxgandlz.cn:8080/getPlayListDetail?playListId=514779095',
      method:'GET'
    }).then(function successCallback(response) {
      opt.callback(response.data);
    }, function errorCallback(response) {
      // 请求失败执行代码
    })
  }
})
*/
