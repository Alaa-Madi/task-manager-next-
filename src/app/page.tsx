import TaskItem from './task/taskItem';
import { Task } from './types';
import './globals.css'

const fetchTasks = async (): Promise<Task[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return res.json();
};

export default async function Home() {
    const tasks = await fetchTasks();
    return (
        <div>
            <h1>Task Tracker</h1>
            <table className="task-list">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status Icon</th>
                        <th>Task Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}