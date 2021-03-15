import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './task.scss';

const Task = ({
  id,
  label,
  done,
  setDone,
}) => (
  <li className={classNames('tasklist-task', { 'tasklist-task--done': done })}>
    { /* Ou avec une ternaire :
      className={task.done ? 'task-container--done test' : 'task-container'} */ }

    <input
      type="checkbox"
      id={id}
      className="tasklist-ckeckbox"
      checked={done}
      onChange={(event) => {
        // console.log(`${event.currentTarget.checked} pour ${id}`);
        // arguments : nouvel état, id de la tâche
        setDone(event.currentTarget.checked, id);
      }}
    />
    <p>{label}</p>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  // Deux paramètres: nouvel état true/false, id de la tâche
  setDone: PropTypes.func.isRequired,
};

export default Task;
