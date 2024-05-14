Group Assignment done for my Web Technology course. Simple Task Manager with implemented Tasks. A game and other items. (Sign-in / Log-in were given to the group from the uni. )



## Avi
- For a week or two
Until now I have been trying to make a working widget in my own separate copy so a bunch of the work from that separate copy I have now added to the joint project.

- Created weeksum-widget.js
- Changed one of the widget blocks to implement my widget in main.js

- Created a small line saying today's date using "toLocaleDateString"

- FINALLY figured out to isolate the ToDo tasks being displayed as opposed to all tasks being displayed

- Created weeksum-card.js file to shrink down the size of the task cards being displayed in my widget to show only valid information

- Successfully created a widget that displays tasks from the ToDo board

- Tweaked some of the CSS temporarily before we can create a universal style guide for the entire webpage

- Made the widget boxes curved on the corners to fit the task cards

- Further CSS changes (specifically colour palette)

## Matthew
word
- Changed styling to match the "style.css" file

- Added file "gameWidget.js"

- Made a "Guess The Number" Game. 

- Code, inspired from the "BMI calculator widget". -- Very similar concepts. 

- Made it so the game can be played continuously without the need of refreshing the page :)

- Tweaked some css to reduce empty space. 

- Tweaked the css of the heading for "Guess The Number" to stand more unique.

## Nicholas
- Created a timer widget
- Runs for 15mins
- Ability to start,pause and resume the timer
- Able to reset timer back to base state
- Able to set timer to length
- Text displayed when the timer is complete
- Changed the layout of the elements to fill out the widget
- Added a mp3 sound that is set to play when the timer is complete 
- Changed the widgets colours to make them all fit the same colour theme
- Checked code for any parts that are redundant and all parts still work

## Noah
create-task.js:
- based on edit-task, renders a button at the top of task boards that when clicked
- calls a dialog where the user inputs the fields of the new task they want to create
- it then sends the form data to a newly created models.js function 'createTask' which accepts the data
- which then sends a fetch post request to the server with the new task json data in the body
- it then reloads the page to show the made changes.

delete-task.js:
- simple implementation that provides the user a delete button for each of the task cards which is initialised with
- the task id of the task that it is created on. This task id is then passed to a new models.js function 'deleteTask'
- which sends a fetch delete request to the server with the task id.
- it then reloads the page to show the made changes.

detailed-view.js
- altered task-card.js such that when the summary or the text content of the task is too long it will truncate the text
- and add an ellipsis indicating more content to be read. Additionally task-card in this state will render the new
- detailed-view component which adds a new button at the bottom of the task card along side existing ones with an expand
- symbol that allows users to see the full view of the summary and or text content if one or either is too long.
- accomplishes this in a similar fashion to delete-task and create-task: through the use of a pop-up dialog.
- dialog additionally has its own edit-task component allowing the user to quickly edit the task while in the detailed view
- dialog without having to exit it first. detailed-view dialog also has an event listener to update changes made if an edit occurs

Styling:
- Implemented style hover effects from style references
- Styling of logout/login, delete button, buttons create-task, edit-task, detailed-view, and their dialogs inspired from established stylings.
- Implemented Page responsiveness for different viewport widths based on implementation already established from style reference.
