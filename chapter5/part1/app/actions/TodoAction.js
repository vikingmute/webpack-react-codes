import AppDispatcher from '../dispatcher/AppDispatcher';

const TodoAction = {
  create(todo) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_TODO',
      todo
    });
  },
  delete(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_TODO',
      id
    });
  }
};

export default TodoAction;
