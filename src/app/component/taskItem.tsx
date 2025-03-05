import Link from 'next/link';
import Image from 'next/image';
import { Task } from '../types';
import './styles/globals.css';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return (
        <li className="task-item">
        <Link href={`/task/${task.id}`} className="flex items-center">
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
    );
};

export default TaskItem;
