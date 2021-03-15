// == Import npm
import React from 'react';

// import des données
import initialData from 'src/data/tasks';

// == Import
import TaskAdd from 'src/components/TaskAdd/index';
import CurrentTasks from 'src/components/CurrentTasks/index';
import TaskList from 'src/components/TaskList/index';

import './styles.scss';


// == Composant
class App extends React.Component {
  state = {
    tasks: initialData,
    // contenu de l'input pour créer une tâche
    newTaskLabel: '',
  };

  addTask = () => {
    console.log('je veux ajouter une tâche');

    const { newTaskLabel, tasks } = this.state;

    // Cherche tous les id dans la liste des tâches
    const ids = tasks.map((task) => task.id);
    // Récupère le plus grand id et ajoute 1
    const nextId = Math.max(...ids) + 1;

    const newTask = {
      id: nextId,
      label: newTaskLabel,
      done: false,
    };

    // INTERDIT
    // Il est interdit de modifier directement le state
    // Il faut passer par setState pour que React ne perde pas le fil des changements de state
    // this.state.string = 'interdit';
    // this.state.tasks.push(newTask);
    // TOUJOURS PASSER PAR setState()

    // En JS les tableax (et les objets) sont stockés par référence,
    // donc const tableau1 = tableau2 => j'ai un seul tableau, mais 2 variables
    // qui le référencent

    // On peut passer par n'importe quelle fonction qui nous
    // retourne un nouveau tableau (map, filter, concat, slice)
    // const newTasksList = this.state.tasks.concat();

    // On peut insérer la nouvelle tâche en 2 étapes
    // const newTasksList = [
    //   ...this.state.tasks,
    // ];
    // newTasksList.push(newTask);

    // Écriture en une seule ligne
    // const newTasksList = [
    //   ...this.state.tasks,
    //   newTask,
    // ];


    // console.log(newTasksList);

    // On en profite pour vider l'input
    this.setState({
      tasks: [...tasks, newTask],
      newTaskLabel: '',
    });
  };

  setTaskValue = (newValue) => {
    this.setState({
      newTaskLabel: newValue,
    });
  };

  setTaskDone = (newValue, taskId) => {
    console.log(`On va modifier le statut done pour la tâche ${taskId} : ${newValue}`);

    const { tasks } = this.state;

    // const newTasks = tasks.map((task) => ({
    //   id: task.id,
    //   label: task.label,
    //   done: (task.id === taskId ? newValue : task.done),
    // }));

    // PArcours des tâches pour créer un nouveau tableau
    const newTasks = tasks.map((task) => {
      // Si c'est la tâche à modifier, je crée un nouvel objet
      if (task.id === taskId) {
        return {
          ...task,
          done: newValue,
        };
      }
      // Sinon je garde l'objet (pas de souci car je ne le modifie pas)
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { tasks, newTaskLabel } = this.state;

    const tasksNotDone = tasks.filter((task) => task.done === false);
    const nbTasksNotDone = tasksNotDone.length;

    return (
      <div className="app">
        <TaskAdd taskLabel={newTaskLabel} setTaskLabel={this.setTaskValue} addTask={this.addTask} />
        <CurrentTasks count={nbTasksNotDone} />
        <TaskList tasks={tasks} setDone={this.setTaskDone} />
      </div>
    );
  }
}

// == Export
export default App;
