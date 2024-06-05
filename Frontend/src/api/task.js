export const fetchTasks = () => {
  return fetch("https://todolistbackend-9aoa.onrender.com/task");
};

export const updateTaskById = async (id, title) => {
  return fetch(`https://todolistbackend-9aoa.onrender.com/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(title),
  });
};

export const createTask = async (payload) => {
  return fetch(`https://todolistbackend-9aoa.onrender.com/task/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

export const deleteTaskById = async (id) => {
  return fetch(`https://todolistbackend-9aoa.onrender.com/task/${id}`, {
    method: "DELETE",
  });
};
