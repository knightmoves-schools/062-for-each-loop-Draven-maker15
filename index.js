function markAsDone(todos) {
  connst modifiedTodos = [];
  todos.forEach((todo) => {
    modifiedTodos.push("done - " + todos);
  });
  return modifiedTodos;
}
