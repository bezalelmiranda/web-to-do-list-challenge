
import styles from './TaskList.module.css'
import clipboardIcon from '../assets/clipboard-icon.svg';
import { Task } from './Task';

export interface TaskType {
  id: number;
  task: {
    title: string;
    completedStatus: boolean;
  }
}

export interface TaskListProps {
  tasks: TaskType[];
  onDeleteTask: (taskId: number) => void;
  onUpdateCompletedTaskStatus: (taskId: number) => void;
}

export interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: number) => void;
  onUpdateCompletedTaskStatus: (taskId: number) => void;
}

export function TaskList({ tasks, onDeleteTask, onUpdateCompletedTaskStatus }: TaskListProps) {

  const amountTasks = tasks.length;

  const amountCompletedTask = tasks.reduce((accumulator, currentValue) => {
    if (currentValue.task.completedStatus === true) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  const amountCompletedTaskText = amountTasks > 0 ?
    `${amountCompletedTask} de ${amountTasks}` :
    amountTasks;

  return (
    <section className={styles.task}>
      <header>
        <div className={styles.titlesWrapper}>
          <span id="created-tasks">Tarefas Criadas</span>
          <div className={styles.taskCounter}>
            <span className={styles.counterText}>{amountTasks}</span>
          </div>
        </div>
        <div className={styles.titlesWrapper}>
          <span id="completed-tasks">Concluídas</span>
          <div className={amountTasks > 0 ? styles.expandedTaskCounter : styles.taskCounter}>
            <span className={styles.counterText}>
              {amountCompletedTaskText}
            </span>
          </div>
        </div>
      </header>
      {amountTasks <= 0 ? (
        <div className={styles.emptyTaskList}>
          <img src={clipboardIcon} alt='Logotipo do To-Do' />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        tasks.map((item) => {
          return (
            <Task
              key={item.id}
              task={item}
              onDeleteTask={onDeleteTask}
              onUpdateCompletedTaskStatus={onUpdateCompletedTaskStatus}
            />
          )
        })
      )}
    </section>
  );
}