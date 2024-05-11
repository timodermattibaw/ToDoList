export const fetchTasks = () => {
  return fetch("http://localhost:1111/task");
};

export const updateTaskById = async (payload) => {
  return fetch(`http://localhost:1111/task/${payload._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

export const createTask = async (payload) => {
  return fetch(`http://localhost:1111/task/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

export const deleteTaskById = async (id) => {
  return fetch(`http://localhost:1111/task/${id}`, {
    method: "DELETE",
  });
};
