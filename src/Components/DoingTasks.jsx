import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { TasksContexts } from '../Contexts/TasksContext';
import { MdDownloadDone } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
import { useEffect } from 'react';

function DoingTasks() {
  const { tasks, status, changeStatusToDone,handleDelete } = useContext(TasksContexts);
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    const arrayOfDoingTasks = tasks.filter((task) => task.status === 'doing');
    setTodoTask(arrayOfDoingTasks);
  }, [status]);

  return (
    <ListGroup>
      <ListGroup.Item>Doing Tasks</ListGroup.Item>
      <ListGroup.Item action variant="warning">
        {todoTask.map((task) => {
          return (
            <div key={task.id}>
              {task.status === 'doing' && task.text !== '' ? (
                <div className="task--holder">
                  <p className="todo--text--holder">{task.text}</p>
                  <div className="icons--holder">
                    <MdDownloadDone
                      onClick={() => changeStatusToDone(task.id)}
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

export default DoingTasks;
