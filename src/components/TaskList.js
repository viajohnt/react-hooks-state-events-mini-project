import React from "react";
import Task from "./Task"
import { v4 as uuidv4} from "uuid"

function TaskList({tasks, onDeleteTask}) {
  const myTasks = tasks.map ((task) => 
    <Task 
      key = {uuidv4()}
      text={task.text}
      category = {task.category}
      onDeleteTask={onDeleteTask}
      />
    );
     return <div className="tasks">{myTasks}</div>;
}

export default TaskList;

