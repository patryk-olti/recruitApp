import '../styles/task.css';

interface Task{
    id: number,
    description: string,
    date: string,
    status: string,
    priority: string
}

const TaskComponent = (props: Task) => {

    const { id, description, date, status, priority } = props;

    return(
        <div className='task__container'>
            <span className='task__tile'>{id}</span>
            <span className='task__tile'>{description}</span>
            <span className='task__tile'>{date}</span>
            <span className='task__tile'>{status}</span>
            <span className='task__tile'>{priority}</span>    
        </div>
    )
}

export default TaskComponent;