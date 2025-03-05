import Link from 'next/link';
import Image from 'next/image';
import { Task } from './types';
import './styles/globals.css';

const fetchTasks = async (): Promise<Task[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
};

const Home = async () => {
    const tasks = await fetchTasks();

    return (
        <div className="container">
            <h1>Task Tracker</h1>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <Link href={`/task/${task.id}`}>
                            <Image
                                src={task.completed ? '/complete.png' : '/hourglass.png'}
                                alt="Task Icon"
                                width={24}
                                height={24}
                            />
                            <span>{task.title}</span>
                        </Link>
                        <span className={`task-status ${task.completed ? 'completed' : 'pending'}`}>
                            {task.completed ? 'Completed' : 'Pending'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
