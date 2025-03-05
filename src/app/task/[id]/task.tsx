'use client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Task } from '@/app/types';
import { useEffect, useState } from 'react';

interface TaskItemProps {
  task: Task;
}

const fetchTaskById = async (id: string): Promise<Task> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) throw new Error('Task not found');
    return res.json();
};

const TaskDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetchTaskById(id as string)
                .then(data => {
                    setTask(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Something went wrong! {error}</div>;

    return (
        <div className="container">
            <h1>Task Details</h1>
            <p><strong>ID:</strong> {task?.id}</p>
            <p><strong>Title:</strong> {task?.title}</p>
            <p><strong>Status:</strong> {task?.completed ? 'Completed' : 'Pending'}</p>
            <Image src="/task-image.jpg" alt="Task" width={500} height={300} />
            <Link href="/" className="back-link">Back to Tasks</Link>
        </div>
    );
};

export default TaskDetails;