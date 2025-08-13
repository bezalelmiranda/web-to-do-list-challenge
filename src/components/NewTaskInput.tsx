import type { ChangeEvent, InvalidEvent } from 'react';
import styles from './NewTaskInput.module.css';

type NewTaskInputProps = {
    newTaskTitle: string;
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNewTaskInvalid: (event: InvalidEvent<HTMLInputElement>) => void;
}

export function NewTaskInput({ newTaskTitle, handleNewTaskChange, handleNewTaskInvalid }: NewTaskInputProps) {
    return (
        <input
            type="text"
            name='newTaskInput'
            className={styles.newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={newTaskTitle}
            onInvalid={handleNewTaskInvalid}
            required
        />
    )
}
