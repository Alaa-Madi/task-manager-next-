'use client'; 
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Task } from '@/app/types';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Error from '../../error/error';

const fetchTaskById = async (id: string): Promise<Task> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return res.json();
};

const TaskDetails = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams to get the dynamic route parameter
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await fetchTaskById(id as string);
          setTask(data);
        } catch (err) {
          console.error(err);
          router.push('/src/app/error/error.tsx'); 
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id, router]);

  if (loading) return <div className="text-center">Loading...</div>;

      return (
        <div className={styles.taskDetailsContainer}>
            <div className={styles.taskCard}>
                <h1 className={styles.taskTitle}>{task?.title}</h1>
                <p className={styles.taskStatus}>Status: <span className={styles[status.toLowerCase()]}>{status}</span></p>
                <p className={styles.taskId}>ID: {task?.id}</p>
            <Image
                src={task?.completed ? '/complete-icon.png' : '/hourglass-icon.png'}
                alt={status}
                width={24}
                height={24}
            />
            <hr />
                <Link href="/" className={styles.backLink}>Back to Tasks</Link>
            </div>
        </div>
        
    );
};

export default TaskDetails;