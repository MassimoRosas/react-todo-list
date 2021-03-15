import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/components/Task/index';

import './tasklist.scss';

const TaskList = ({ tasks, setDone }) => (
  <ul className="tasklist-list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        // On peut passer toutes les props une à une
        // id={task.id}
        // label={task.label}
        // done={task.done}

        // Solution plus élégante : déverser les propriétés de task dans les props avec l'opérateur spread
        {...task}
        setDone={setDone}
      />
    ))}
  </ul>
);


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  setDone: PropTypes.func.isRequired,
};

export default TaskList;
