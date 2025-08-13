
import styles from './Task.module.css'
import { Check, Trash } from 'phosphor-react';
import type { TaskProps } from './TaskList';

export function Task({ task, onDeleteTask, onUpdateCompletedTaskStatus }: TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(task.id);
  }

  function handleCompleteTask() {
    onUpdateCompletedTaskStatus(task.id);
  }

  return (
    <div className={styles.taskList} key={task.id}>
      <div className={styles.taskCard}>
        <div className={styles.taskChecker}>
          <input
            type='radio'
            id={`task-radio-${task.id}`}
            name={`complete-task-${task.id}`}
            checked={task.task.completedStatus}
            onClick={handleCompleteTask}
            readOnly
          />
          <label htmlFor={`task-radio-${task.id}`} >
            <Check size={12} weight="bold" className={styles.checkIcon} />
          </label>
        </div>
        <div className={styles.taskTitle}>
          <span
            className={
              task.task.completedStatus ? styles.completedTask : styles.uncompletedTask
            }
          >
            {task.task.title}
          </span>
        </div>
        <button onClick={handleDeleteTask} title='Deletar tarefa'>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}