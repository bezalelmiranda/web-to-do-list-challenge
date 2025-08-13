import { PlusCircle } from 'phosphor-react';

import styles from './NewTaskButton.module.css';

type NewTaskButtonProps = {
    newTaskTitle: string;
}


export function NewTaskButton({ newTaskTitle }: NewTaskButtonProps) {

    const isNewTaskEmpty = newTaskTitle === '';

    return (
        <button
            type='submit'
            className={styles.newTask}
            disabled={isNewTaskEmpty}
        >
            <span>Criar</span>
            <div>
                <PlusCircle size={16} color='#f2f2f2' />
            </div>
        </button>
    )
}