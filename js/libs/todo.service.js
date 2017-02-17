function TodoService($http) {

  var API = '//jsonplaceholder.typicode.com/todos/'

  function create() {}
  function retrive() {
    return $http.get(API).then(function (response){
      return response.data.splice(0, 10);
    });
  }
  function update() {}
  function remove() {}

  return {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
