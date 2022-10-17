import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005")
      .then((response) => setTasks(response.data))
      .catch((error) => alert(error.response.data.error));
  }, []);
  return (
    <div className="App">
      <h3>My tasks</h3>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
