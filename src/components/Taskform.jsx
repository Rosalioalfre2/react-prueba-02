import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskform() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext);

    const capturaValorInputOnChange = (e) => {
        setTitle(e.target.value);
    };

    const capturaValorInputOnChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            title: title,
            description: description,
        };
        createTask(task);

        setTitle("");
        setDescription("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input
                    placeholder="Escribe tu tarea"
                    onChange={capturaValorInputOnChange}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                />
                <textarea
                    placeholder="Escribe la descripcion"
                    onChange={capturaValorInputOnChangeDescription}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                ></textarea>
                <button className="bg-green-600 text-white px-2 py-1 rounded-md mt-4 hover:bg-green-400">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default Taskform;
