import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';

class WeeksumCard extends LitElement {
  static properties = {
    id: 0,
    _task: {state: true},
  };

  static styles = css`
    :host {
        display: inherit;
        width: 250px;
        background-color: white;
    }
    h2 {
      background-color: lightblue;
      font-size: small;
      font-variant: small-caps;
    }
    p {
      background-color: white;
      font-size: 12px;
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
    const region = 'en-au';
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };

    if (this._task) {
      const due = new Date(parseInt(this._task.due));
      return html`
      <div>
        <h2>${this._task.summary}</h2>
        <p class='task-due'>Due On: ${due.toLocaleDateString(region, options)}</p>
      </div>
      `;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
customElements.define('weeksum-card', WeeksumCard);