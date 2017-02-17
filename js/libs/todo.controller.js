function TodoController(TodoService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];
  function getTodos() {
    TodoService
      .retrive()
      .then(function(response) {
        ctrl.list = response; //first 10 item (0, 10) index
      });
  }
  ctrl.addTodo = function () {
    ctrl.list.unshift({
      title: ctrl.newTodo,
      completed: false
    });
    ctrl.newTodo = '';
  };
  ctrl.removeTodo = function (item, index) {
    ctrl.list.splice(index, 1);
  }
  // ctrl.list = [{
  //   title: 'First todo item',
  //   completed: false
  // },{
  //   title: 'Second todo item',
  //   completed: false
  // },{
  //   title: 'Third todo item',
  //   completed: false
  // }];
  ctrl.getRemaining = function () {
    return ctrl.list.filter(function(item){
      return !item.completed;
    });
  };
  getTodos();
}

angular
 .module('app')
 .controller('TodoController', TodoController);
