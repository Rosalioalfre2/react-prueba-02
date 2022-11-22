import { createContext } from "react";
export const TaskContext = createContext();
import { useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        // console.log(tasks.filter((task)=>(task.id !== taskId)))
    }

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: task.title,
                description: task.description,
            },
        ]);
    }

    return (
        <>
            <TaskContext.Provider
                value={{
                    createTask,
                    deleteTask,
                    tasks,
                }}
            >
                {props.children}
            </TaskContext.Provider>
        </>
    );
}
