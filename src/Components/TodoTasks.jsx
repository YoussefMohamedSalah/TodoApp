import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { TasksContexts } from '../Contexts/TasksContext';
import { MdDownloadDone } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
import { useEffect } from 'react';

function TodoTasks() {
  const { tasks, status, changeStatusToDoing,handleDelete } = useContext(TasksContexts);
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    const arrayOfTodoTasks = tasks.filter((task) => task.status === 'todo');
    setTodoTask(arrayOfTodoTasks);
  }, [tasks, status]);

  return (
    <ListGroup>
      <ListGroup.Item>Todo Tasks</ListGroup.Item>
      <ListGroup.Item action variant="primary">
        {todoTask.map((task) => {
          return (
            <div key={task.id}>
              {task.status === 'todo' && task.text !== '' ? (
                <div className="task--holder">
                  <p className="todo--text--holder">{task.text}</p>
                  <div className="icons--holder">
                    <MdDownloadDone
                      onClick={() => changeStatusToDoing(task.id)}
                    />
                    <TiDelete onClick={() => handleDelete(task.id)} />
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default TodoTasks;
