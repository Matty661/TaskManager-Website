import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';



//show a dialog to see the detailed view of the a task card if the 
//inner text content is too long. Only insert the element, if the
//text content is too long and ensure that the content is cut off.

class DetailedView extends LitElement {

    static properties = {
        id: 0
    }

    static styles = css`
    :host {
        display:flex;
        justify-content:center;
        margin-bottom:1em;
        width:100%;
    }

    #main-button{
        padding:0;
        margin:0;
        width:3em;
        display:flex;
        border:none;
        height:1.3em;
        border-radius:20px;
        color: white;
        background-color:black;
        justify-content:center;
        align-items:center;
        font-size:1.2em;
        transition:100ms;
    }

    #main-button:hover{
        background-color: rgb(20, 20, 20);
    }
    
    #icon{
        height:0.7em;
        width:0.7em;
    }
    `;

    connectedCallBack() {
        super.connectedCallBack();
    }

    render() {
        return html`
        <button id="main-button" @click="${this._showModal}"><img id="icon" alt="expand icon" src="icons/expand_icon.png"></button>
        `
    }

}

customElements.define('detailed-view',DetailedView);