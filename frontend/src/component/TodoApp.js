import axios from "axios";
import { useState, useEffect, useRef } from "react";
import './TodoApp.css';

function Todo() {
    let [task, setTask] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then((res) => {
                setTask(res.data)
            })
            .catch((err) => {
                console.log(err)
            }

            )
    }, [])

    const firstItem = useRef();
    const secondItem = useRef();

    const dragStart = (e, position) => {
        firstItem.current = position;

    };

    const dragEnter = (e, position) => {
        secondItem.current = position;
    };

    const drop = (e) => {
        const arrayItems = [...task];
        const dragItemContent = arrayItems[firstItem.current];
        arrayItems.splice(firstItem.current, 1);
        arrayItems.splice(secondItem.current, 0, dragItemContent);
        firstItem.current = null;
        secondItem.current = null;
        setTask(arrayItems);
    };

    //----- Delete--------
    async function Delete(id) {
        await axios.delete(`http://localhost:8000/delete/${id}`)
            .then((res) => {
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //----- ADD-------- 
    const [taskName, setTasks] = useState('')
    const Add = async () => {
        await axios.post('http://localhost:8000/add', { taskName })
            .then((res) => {
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)

            })
    }

    //----- edit--------
    function edit(id) {
        setUpdate(id)
    }


    //----- update--------
    let [update, setUpdate] = useState(false)
    const [taskName1, setTasks1] = useState('')
    async function updates(id) {

        await axios.put(`http://localhost:8000/edit`, { id, taskName1 })
            .then((res) => {
                window.location.reload()
                setUpdate(true)
            })
            .catch((err) => {
                alert("error")
            })
    }

    //----- Completed--------
    async function Completed(_id) {
        await axios.put('http://localhost:8000/completed', { _id })
            .then((res) => {
                console.log(res.data)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="cont">
            <div className="main">
                <h1>TodoApp</h1>

                <div className="task-container">
                    <div className="inpt-btn">
                        <input onChange={(e) => setTasks(e.target.value)} className="input" placeholder="Enter Task"></input>
                        <button onClick={Add} className="add-button">Add</button>
                    </div>

                    {
                        task.map((item, index) => (
                            <div className="container" key={item._id}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                draggable>
                                {
                                    update === item._id ?
                                        <div className="edit-task">
                                            <div className="edit-task">
                                                <input placeholder="edit" defaultValue={item.taskName} onChange={(e) => setTasks1(e.target.value)}></input>
                                                <button onClick={() => { updates(item._id) }}>Update</button>
                                            </div>
                                        </div>
                                        :
                                        <div className="task" >
                                            <div className="adjust">
                                                <p
                                                    className={item.completed ? 'line-through' : ""}
                                                >{item.taskName}</p>
                                            </div>

                                            <div className="task-right">
                                                <button onClick={() => edit(item._id)}>Edit</button>
                                                <button onClick={() => Delete(item._id)}>Delete</button>
                                                <button onClick={() => Completed(item._id)}>Completed</button>
                                            </div>
                                        </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo
