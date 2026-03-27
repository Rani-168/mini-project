import { useState,  useEffect  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Greeting component
function Greeting(isLoggedIn ) {
  return (
     <h2>
      {isLoggedIn ? "Welcome back!" : "Please login."}
    </h2>
  );
}

// App component
function App() {
  const[name, setname] = useState("");
  const[change, SetChange] = useState(true);
  const[list]=useState(["Apple", "Banana", "Orange"]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

 
  function CreateName(e){
     setname(e.target.value);
  useEffect(() => {
    alert("Component mounted!");
  }, []);
  }


   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }



  function ChngeMe(){
    SetChange(!change);
  }


   // Add task
  function addTask() {
    if (input.trim() === "") return; // prevent empty tasks

    setTasks([...tasks, input]);
    setInput(""); // clear input
  }

 function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Hello React!</h1>
        <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={CreateName}
      />
       <button onClick={CreateName}>click me</button>
       <button onClick={ChngeMe}> change me</button>
       {change && <p>This is a toggled message</p>}
       <p>Hello {name}</p>


        <h1>Fruit List</h1>

      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
       <h1>Conditional Greeting</h1>
       <Greeting isLoggedIn={true} />  
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
     <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask} >Add</button>
     
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            
          </li>
          
        ))}
      </ul>
    </div>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
