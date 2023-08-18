# Task description for this Code Review:

Please examine the image below and use it as a guide to creating your index.html page, as well as script.js. All images should be stored in an “images” folder, all stylesheets within a “CSS” folder and all JavaScript files within a “js” folder. 

In this Code Review, your job is to create a list of Tasks for a “My Weekly Planner” website. Information about the tasks should be stored in an array. 

## For this CodeReview, the following criteria will be graded: 

- Create a GitHub Repository named: FE19-CR2-YourName.
- Correct HTML, CSS and JavaScript code and files organized into separate folders, as well as structured code indentation.
- Use bootstrap to help you create the provided design. You can complement your design with CSS/SASS/SCSS, but at least the container holding the Tasks’ cards should use bootstrap classes for responsiveness. The container should have 3 columns in a row for large screens (provided layout), 2 columns in a row for medium screens and 1 column in a row for small/extra small screens. 
- Correct creation of array that hold the information of the Tasks. Please note that for this assignment you can provide the information/data of any Task you want. Be creative and avoid dummy data as Lorem Ipsum.
- Correct creation of the HTML/Bootstrap structure dynamically using JavaScript. This should not be hard coded: elements should be created by JavaScript rather than written in the HTML file. The following should be shown on the screen: the Task’s name, a short description, a representative image and the Priority level field with the representative number. Feel free to expand the information such as duration, location, cost etc... hint: review the functionality of loops. 
- Every time the “Importance” button is clicked, the number of “importance” (the number shown next to the “Importance” button in the template) should increase by one (1) but not further than five(5). 
- As it is in the example template, the background color of the priority level number will change depending on the displayed number.

The colors should be as follow (bootstrap colors): 

  Between 0 – 1 -> Green = (success) 
  Between 2 – 3 -> Yellow = (warning) 
  Between 4 – 5 -> Red = (danger) 
  The colors must change when clicking on the "Importance" button.
  Make sure that every “Task” has an initial value 0 = Green. 

- Add a Sort button that will sort the resulting list of tasks according to their current level of importance (e.g. on ascending order, it will organize the Tasks from less important to more important). 
