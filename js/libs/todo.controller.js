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
  };

  ctrl.addTodo = function () {
    if (!ctrl.newTodo) {
      return;
    }
    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(function(response){
        ctrl.list.unshift(response);
        ctrl.newTodo = '';
      });
  };

  ctrl.removeTodo = function (item, index) {
    TodoService
      .remove(item)
      .then(function(response){
        ctrl.list.splice(index, 1);
      });
  };

  ctrl.updateTodo = function (item, index) {
    if (!item.title) {
      ctrl.removeTodo(item, index);
      return;
    }
    TodoService
      .update(item);
  };
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

  ctrl.toggleState = function (item) {
    TodoService
      .update(item)
      .then(function(response){
        return
      }, function () {
        item.completed = !item.completed;
      }
    );
  }

  getTodos();
}

angular
 .module('app')
 .controller('TodoController', TodoController);
