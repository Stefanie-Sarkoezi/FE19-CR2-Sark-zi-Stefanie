let tasks = [
    {
        picture: "images/...",
        taskHeading: "Deal with open taps",
        taskDescription: "Go through your 100 open taps and delete not necessary ones.",
        priority: 1,
        deadline: "17.06.2023"
    },
    {
        picture: "images/...",
        taskHeading: "Meditate",
        taskDescription: "Meditate for 20 minutes in the morning before leaving the house, so that nobody gets killed again.",
        priority: 3,
        deadline: "09.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Bring car into the workshop",
        taskDescription: "The f*cking rust bucket don't wanna start again.",
        priority: 4,
        deadline: "11.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Cancel tonight plans with your friends",
        taskDescription: "Instead enjoy your evening on the couch with a cold beer (or five) while watching trash TV.",
        priority: 4,
        deadline: "09.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Do the laundry",
        taskDescription: "You are a grown-up, you can't bring your mother the dirty laundry again!",
        priority: 2,
        deadline: "13.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Do the dishes",
        taskDescription: "Before the dirty plates find their way themselves in the dishwasher...",
        priority: 2,
        deadline: "12.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Feed the cat",
        taskDescription: "!No later that 7pm! Before that grumpy b*tch again takes a dumb on your pillow.",
        priority: 5,
        deadline: "09.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Be extra friendly to your annoying clients at work",
        taskDescription: "Remeber, you need this job to feed your cat!",
        priority: 5,
        deadline: "09.06.2023"   
    },
    {
        picture: "images/...",
        taskHeading: "Clean up the house",
        taskDescription: "Friendly reminder: That's not an organized chaos, your are just lazy.",
        priority: 2,
        deadline: "13.06.2023"   
    },
];

for (let task of tasks) {
    document.getElementById("result").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${task.picture}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title centured">${task.taskHeading}</h5>
                <p class="card-text">${task.taskDescription}</p>
             </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Priority: ${task.priority}</li>
                <li class="list-group-item">Deadline: ${task.deadline}</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    `;
    
}
    

