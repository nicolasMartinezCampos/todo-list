function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    templateUrl: 'todo.html'
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp);
