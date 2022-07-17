import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { TasksContexts } from '../Contexts/TasksContext';
import { MdDownloadDone } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
import { useEffect } from 'react';

function DoneTasks() {
  const { tasks, status, changeStatusToTodo,handleDelete } = useContext(TasksContexts);
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    const arrayOfDoneTasks = tasks.filter((task) => task.status === 'done');
    setTodoTask(arrayOfDoneTasks);
  }, [status]);

  return (
    <ListGroup>
      <ListGroup.Item>Done Tasks</ListGroup.Item>
      <ListGroup.Item action variant="success">
        {todoTask.map((task) => {
          return (
            <div key={task.id}>
              {task.status === 'done' && task.text !== '' ? (
                <div className="task--holder">
                  <p className="todo--text--holder">{task.text}</p>
                  <div className="icons--holder">
                    <MdDownloadDone
                      onClick={() => changeStatusToTodo(task.id)}
                    />
                    <TiDelete onClick={() => handleDelete(task.id)}/>
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

export default DoneTasks;
