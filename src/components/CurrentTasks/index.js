import React from 'react';
import PropTypes from 'prop-types';

import './currenttasks.scss';

const CurrentTasks = ({ count }) => {
  let sentence = '';

  if (count === 0) {
    sentence = 'Aucune tâche en cours';
  }
  else if (count === 1) {
    sentence = 'Une tâche en cours';
  }
  else {
    sentence = `${count} tâches en cours`;
  }

  return (
    <p className="currenttasks-counter">
      {sentence}
    </p>
  );
};

CurrentTasks.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CurrentTasks;
