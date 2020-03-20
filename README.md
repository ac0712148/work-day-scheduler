# work Day Scheduler

## Description

For this project, we create a calender that allows the user to save events for each hour of the day. The time slots are visually marked to indicate whether they are upcoming, current or past due.
This web app runs in browser and relies on dynamically updated HTML and CSS powered by jQuery.

We also use the [Moment.js](https://momentjs.com/) library to work with date and time. 

## Files
The files used for this task are as follow:
* `index.html`
* `style.css`
* `script.js`
* `README.md`

## Details
Using CSS and HTML, we create a user interface where the user can input memos on the time slot and press the save button to store memo into local storage.
If the user deletes the memo and saves, the web app is updated and ready to use for other reminders.

The colors used in the calender represent the following:
* Gray = "past"
* Red = "current"
* Green = "future"
The colors are updated at the moment of loading the page.