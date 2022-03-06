import { useState, useEffect } from "react";

import TaskComponent from "../components/task";

import '../styles/task.css';

const TasksList = () => {

    const [ tasks, setTasks ] = useState<any>([]);

    useEffect( () => {
        fetch('data/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.response.data[0].assigned_to[0].person_name);
            console.log(data.response.data[0]);
            const dataJson = data.response.data;
            
            setTasks(dataJson);
        })
    }, [])

    return(
        <div className="tasks__container">
            {
                tasks
                ?
                tasks.map( ( item: any ) => <TaskComponent
                    key={`taskId: ${item.id}`}
                    id={item.work_order_id}
                    description={item.description} 
                    date={item.received_date}
                    status={item.status}
                    priority={item.priority}
                    />
                )
                :
                <div> loading </div>
            }
        </div>
    )
}

export default TasksList;