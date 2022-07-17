import { useState, useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TasksContexts } from '../Contexts/TasksContext';

const TaskInput = () => {
  const { updateTasks } = useContext(TasksContexts);
  const [input, setInput] = useState('');

  return (
    <div className="input-holder-wrapper">
      <div className="input-holder">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="New Task Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button
            as="input"
            type="submit"
            value="Add Task"
            onClick={() => {
              updateTasks(input);
              setInput('');
            }}
          />{' '}
        </InputGroup>
      </div>
    </div>
  );
};

export default TaskInput;
