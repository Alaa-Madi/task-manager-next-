import Link from 'next/link';
import Image from 'next/image';
import { Task } from '../types'; 
import '../globals.css'

const TaskItem = ({ task }: { task: Task }) => {
    const status = task.completed ? 'Completed' : 'Pending';

    return (
        <tr className={task.completed ? 'completed' : 'pending'}>
            <td>{task.id}</td>
            <td>
                <Image
                    src={task.completed ? '/complete-icon.png' : '/hourglass-icon.png'}
                    alt={status}
                    width={24}
                    height={24}
                />
            </td>
            <td>
                <Link href={`/task/${task.id}`}>
                    <span>{task.title}</span>
                </Link>
            </td>
            <td>{status}</td>

        </tr>
    );
};

export default TaskItem;