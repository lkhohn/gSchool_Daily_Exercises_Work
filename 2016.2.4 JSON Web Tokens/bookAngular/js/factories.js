angular.module('app')
.factory('DemoFactory', ['$q', '$window', DemoFactory]);

function DemoFactory($q, $window){
  return {
    request: function(){
      if(!config.headers){
        config.headers={};
      }
      if($window.sessionStorage.token){
        config.headers.Authorization = 'Bearer' + $window.sessionStorage.token;
      }
      return config;
    }
  };
}
