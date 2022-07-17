import React, { useState, useEffect } from 'react';
import DoingTasks from '../Components/DoingTasks';
import DoneTasks from '../Components/DoneTasks';
import Header from '../Components/Header';
import TodoTasks from '../Components/TodoTasks';
import { TasksContexts } from '../Contexts/TasksContext';

function Main() {
  const [status, setStatus] = useState('todo');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  // function to set The Status to doing and it's useEffect
  const changeStatusToDoing = function (id) {
    tasks.map((item) => {
      if (item.id === id) {
        item.status = 'doing';
      }
    });
    setStatus('doing');
  };
  useEffect(() => {
    changeStatusToDoing();
  }, []);

  // function to set The Status to done and it's useEffect
  const changeStatusToDone = function (id) {
    tasks.map((item) => {
      if (item.id === id) {
        item.status = 'done';
      }
    });
    setStatus('done');
  };
  useEffect(() => {
    changeStatusToDone();
  }, []);

  // function to set The Status to todo and it's useEffect
  const changeStatusToTodo = function (id) {
    const todoArray = tasks.map((item) => {
      if (item.id === id) {
        item.status = 'todo';
      }
      return item;
    });
    setTasks(todoArray);
    setStatus('todo');
  };
  useEffect(() => {
    changeStatusToTodo();
  }, []);

  // function to take the input & value to add new task to the tasks list
  const updateTasks = (input) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { text: input, status: status, id: Math.random() },
    ]);
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [status, tasks]);

  const handleDelete = function (id) {
    const deletedItems = tasks.map((item) => {
      if (item.id === id) {
        item.status = 'deleted';
      }
      return item;
    });
    setTasks(deletedItems);
  };
  useEffect(() => {
    handleDelete();
  }, []);

  useEffect(() => {
    JSON.parse(localStorage.getItem('tasks'));
  }, [status, tasks]);

  return (
    <TasksContexts.Provider
      value={{
        tasks,
        updateTasks,
        status,
        setStatus,
        changeStatusToTodo,
        changeStatusToDoing,
        changeStatusToDone,
        handleDelete,
      }}>
      <Header />
      <div className="Tasks-wrapper">
        <TodoTasks />
        <DoingTasks />
        <DoneTasks />
      </div>
    </TasksContexts.Provider>
  );
}

export default Main;