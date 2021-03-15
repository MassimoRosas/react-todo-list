import React from 'react';
import PropTypes from 'prop-types';

import './taskadd.scss';

const TaskAdd = ({ addTask, taskLabel, setTaskLabel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit du form');

    // Champ contrôlé pour l'input
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="taskadd-input"
        placeholder="Ajouter une tâche"
        value={taskLabel}
        onChange={(event) => {
          setTaskLabel(event.currentTarget.value);
        }}
      />
    </form>
  );
};

TaskAdd.propTypes = {
  addTask: PropTypes.func.isRequired,
  taskLabel: PropTypes.string.isRequired,
  setTaskLabel: PropTypes.func.isRequired,
};

export default TaskAdd;
