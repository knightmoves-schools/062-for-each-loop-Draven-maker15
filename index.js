function markAsDone(todos) {
  const modifiedTodos = [];
  
  todos.forEach((todo,index) => {
    modifiedTodos[index] = `{"done - " + $todo}`;
  });
  return modifiedTodos;
}
