import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/${id}`);
        setTask(response.data);
      } catch (err) {
        setError("Cannot fetch task.");
        console.error(err);
      }
    };
    fetchTask();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!task) return <p>Loading...</p>;

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.completed ? "✅ Completed" : "❌ Incomplete"}</p>
    </div>
  );
};

export default TaskDetails;