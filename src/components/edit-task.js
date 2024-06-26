import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';

/** EditTask <edit-task id=N>
 * Task edit for a given task id (N).  Displays as a button which when clicked
 * shows a modal dialog containing a form to update the task properties.
 * Submitting the form updates the task via the TaskModel.
 */
class EditTask extends LitElement {
  static properties = {
    id: 0,
    _task: {state: true},
  };

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
    }
    form div {
      display: flex;
      justify-content:space-between;
      padding:0.5em;
    }
    input {
      width: 100%;
    }
    #edit-task-dialog{
      border:none;
      border-radius:20px;
    }

    #edit-button{
      color:white;
      background-color: rgb(26, 43, 100);
      border:none;
      border-radius: 15px;
      padding:0.5em;
      transition:150ms;
      height:2.5em;
      width:3em;
    }

    #edit-button:hover {
      background-color: rgb(26, 43, 150);
    }

    .button{
      color:white;
      background-color: rgb(26, 43, 100);
      border:none;
      border-radius: 15px;
      padding:0.5em;
      transition:150ms;
      height:2.5em;
      width:5em;
    }

    .button:hover{
      background-color: rgb(26, 43, 150);
    }

    #edit-task-dialog {
      background-color:rgb(6, 12, 70);
      border-radius:20px;
      border: none;
    }

  label{
      color:white;
      padding-right:2em;
  }

  input,textarea,select{
    padding-inline:1em;
    width:200px; 
    background-color: rgb(26, 43, 100);
    color:white;
    border:none;
    border-radius:15px;
    height:3em;
  }

  h2{
    max-width:15em;
    color:white;
    word-break:break-word;
  }

  p{
    font-size:large;
    margin:0;
  }

  `;

  connectedCallback() {
    super.connectedCallback();
    this._task = TaskModel.getTask(this.id);
    window.addEventListener('tasks', () => {
      this._loadData();
    });
  }

  _loadData() {
    this._task = TaskModel.getTask(this.id);
  }

  /**
   * _submit - private method to handle form submission. Constructs
   * a new task from the form values and then updates the task via TaskModel
   * @param {Object} event - the click event
   */
  _submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const due = new Date(formData.get('due'));
    const newTask = {
      category: formData.get('category'),
      summary: formData.get('summary'),
      text: formData.get('text'),
      priority: formData.get('priority'),
      due: due.valueOf(),
    };
    TaskModel.updateTask(this.id, newTask);
    this._hideModal(event);
  }


  /**
   * click handler for the button to show the editor dialog
   */
  _showModal() {
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.showModal();
  }

  /**
   * click handler to close the editor dialog
   * @param {Object} event - the click event
   */
  _hideModal(event) {
    event.preventDefault();
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.close();
  }

  render() {
    // convert due date from milliseconds time to an ISO string
    // suitable for the datetime-local form input
    const isoString = new Date(this._task.due).toISOString();
    const due = isoString.substring(0, isoString.indexOf('T') + 6);
    return html`
        <button id="edit-button" @click=${this._showModal}>Edit</button>
        <dialog id="edit-task-dialog">
            <h2>Editing task: <p>${this._task.summary}</p></h2>
            <form @submit="${this._submit}">
                <div class="form-row">
                  <label for="category">Category</label>
                  <select name="category" id="category-select">
                    <option value=${this._task.category}>--Select a category--</option>
                    <option value="ToDo">ToDo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div class="form-row">
                    <label for="summary">Summary</label>
                    <input name="summary" id='summary' value=${this._task.summary}>
                </div>
                <div class="form-row">
                    <label for="text">Text</label>
                    <textarea id='main-text' name="text">${this._task.text}</textarea> 
                </div>
                <div class="form-row">
                    <label for="priority">Priority</label>
                    <input name="priority" id='priority' type="number" value=${this._task.priority}> 
                </div>
                <div class="form-row">
                    <label for="due">Due</label>
                    <input id='datetime-input' name="due" type="datetime-local" value=${due}>
                </div>
                <div class="form-row">
                    <button class='button' @click="${this._hideModal}">Cancel</button>
                    <input class='button' value='Update' type=submit>
                </div>
            </form>
        </dialog>`;
  }
}

customElements.define('edit-task', EditTask);
