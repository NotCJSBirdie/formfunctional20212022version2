import React from "react";
import "./Form.css";
// import Tasks from "./Tasks";

// import AddTask from "./AddTask";

var add = function () {
  var text = document.getElementById("text");
  var li = document.createElement("li");
  var button = document.createElement("BUTTON");
  var list = document.getElementById("todoList");

  //li.setAttribute("class", "list-group-item");

  if (text.value == "") {
    alert("Please enter an item to add");
  } else {
    li.appendChild(document.createTextNode(text.value));
    list.appendChild(li);
    li.onclick = deleteItem;
  }

  text.value = "";
};

var deleteItem = function () {
  if (window.confirm("Are you sure you want to delete this item?")) {
    this.parentNode.removeChild(this);
  }
};

var print = function () {
  var prtContent = document.getElementById("todoList");
  var WinPrint = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  );
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
};

const Form = () => {
  // const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };

  //   getTasks();
  // }, []);

  // // Fetch Tasks

  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();

  //   return data;
  // };

  // // Fetch Task

  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  // // Delete task

  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "DELETE",
  //   });

  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // // Toggle reminder

  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTask(id);

  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updTask),
  //   });

  //   const data = await res.json();

  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: !task.reminder } : task
  //     )
  //   );
  // };

  // // Add Task

  // const addTask = async (task) => {
  //   const res = await fetch("http://localhost:5000/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(task),
  //   });

  //   const data = await res.json();

  //   setTasks([...tasks, data]);

  //   // const id = Math.floor(Math.random() * 1000) + 1;

  //   // const newTask = { id, ...task };

  //   // setTasks([...tasks, newTask]);
  // };

  return (
    <div>
      <section class="justify-center max-w-4xl p-6 mx-auto bg-sky-600/50 rounded-md shadow-2xl dark:bg-gray-800">
        <div class="flex flex-row justify-between">
          <h2
            id="tasktracker"
            class="z-50 scale-150 text-xl relative -left-12  text-teal-200 dark:text-white"
          >
            TASK TRACKER
          </h2>
          <button
            // onClick={() => setShowAddTask(!showAddTask)}
            id="button"
            className="z-50 scale-125 relative -right-12 -top-2 text-teal-400 bg-sky-700 p-2 rounded-full shadow-2xl"
          >
            Start!
          </button>
        </div>

        <div className="bg-white p-2 pb-56 flex flex-col rounded-lg">
          <h1 className="text-3xl w-full text-center p-4" id="tasktitle">
            Task Tracker 2022
          </h1>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              id="text"
              placeholder="Enter Task Item"
              className="bg-gray-200 m-2 p-4 text-3xl"
            />
            <input
              className="mt-2 mb-2 ml-2 bg-blue-200 p-4 text-3xl"
              id="submit"
              type="submit"
              value="Add"
              onClick={add}
            />
          </div>

          <ul
            id="todoList"
            className="m-2 p-4 w-full bg-teal-200 text-3xl "
          ></ul>
        </div>
        <div className="m-8"></div>
        <input
          className="bg-blue-200 w-full p-4 text-3xl rounded-full"
          type="submit"
          id="printbutton"
          value="Print"
          onClick={print}
        />
        {/* 
        <div>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            "no task to show"
          )}
        </div> */}
      </section>
    </div>
  );
};

export default Form;
