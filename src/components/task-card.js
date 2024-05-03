import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';
import './edit-task.js';

/**
 * TaskCard <task-card id=N>
 * Display the details of the task with id N in a 'card'
 * as part of the task board
 */
class TaskCard extends LitElement {
  static properties = {
    id: 0,
    _task: {state: true},
  };

  static styles = css`

    :host{
      border-radius:20px;
      display: block;
      width: 100%;
      background-color:rgb(6, 12, 52);
      color: rgba(201, 206, 243, 1);
      margin-bottom:1em;
    }

    .main-container:hover{
      border-radius:20px;
      box-shadow: 0px 0px 10px 1px white;
      background-color: rgb(12, 22, 83);
      transition:0.1s;
    }
    :host input {
        width: 5em;
    }
    h2 {
      font-size: large;
    }
    .main-container{
      padding:1em;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadData();
    // set up an event listener to load new tasks when they change
    window.addEventListener('tasks', () => {
      this._loadData();
    });
  }

  _loadData() {
    this._task = TaskModel.getTask(this.id);
  }

  render() {
    if (this._task) {
      const ts = new Date(parseInt(this._task.timestamp));
      const due = new Date(parseInt(this._task.due));
      return html`
      <div class ='main-container'>
        <h2>${this._task.summary}</h2>
        <p class='task-timestamp'>${ts.toDateString()}</p>
        <p class='task-due'>${due.toDateString()}</p>
        <p class='task-content'>${this._task.text}</p>
        <p class='task-priority'>${this._task.priority}</p>

        <edit-task id=${this.id}></edit-task>
      </div>
      `;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
customElements.define('task-card', TaskCard);
