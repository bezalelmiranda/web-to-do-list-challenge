import { Header } from "./components/Header";
import styles from './App.module.css';

import './global.css';
import { NewTaskInput } from "./components/NewTaskInput";
import { NewTaskButton } from "./components/NewTaskButton";
import { TaskList, type TaskType } from "./components/TaskList";
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from "react";

export function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      task: {
        title: 'Finalizar o primeiro módulo de React.',
        completedStatus: true,
      }
    },
    {
      id: 2,
      task: {
        title: 'Finalizar desafio do primeiro módulo de React.',
        completedStatus: true,
      }
    },
    {
      id: 3,
      task: {
        title: 'Obter o certificado do primeiro módulo de React.',
        completedStatus: false,
      }
    }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      task: {
        title: newTaskTitle,
        completedStatus: false,
      }
    }

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('');
    setNewTaskTitle(event?.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function setStatusCompletedTask(taskId: number){
    const updatedTasks = tasks.map(item => {
      if(item.id === taskId){
        return {
          ...item,
          task: {
            ...item.task,
            completedStatus: !item.task.completedStatus,
          }
        };
      }
      return item;
    })

    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
          <NewTaskInput
            newTaskTitle={newTaskTitle}
            handleNewTaskChange={handleNewTaskChange}
            handleNewTaskInvalid={handleNewTaskInvalid}
          />
          <NewTaskButton newTaskTitle={newTaskTitle} />
        </form>
        <main>
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onUpdateCompletedTaskStatus={setStatusCompletedTask}
          />
        </main>
      </div>
    </div>
  )
}