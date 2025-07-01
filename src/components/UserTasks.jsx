import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserTasks = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/users/${id}/tasks`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user tasks:", err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Tasks for {user.name}</h1>
      <ul>
        {user.tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> – {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTasks;