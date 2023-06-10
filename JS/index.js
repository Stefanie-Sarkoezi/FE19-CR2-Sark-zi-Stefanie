let tasks = [
    {
        picture: "../images/ClearTabs.png",
        taskHeading: "Deal with open taps",
        taskDescription: "Go through your 100 open taps and delete not necessary ones.",
        priority: 1,
        deadline: "17.06.2023"
    },
    {
        picture: "../images/Meditate.png",
        taskHeading: "Meditate",
        taskDescription: "Meditate for 20 minutes in the morning before leaving the house, so that nobody gets killed again.",
        priority: 3,
        deadline: "09.06.2023"   
    },
    {
        picture: "../images/Car.png",
        taskHeading: "Bring car into the workshop",
        taskDescription: "The f*cking rust bucket don't wanna start again.",
        priority: 4,
        deadline: "11.06.2023"   
    },
    {
        picture: "../images/CancelPlans.png",
        taskHeading: "Cancel tonight plans with your friends",
        taskDescription: "Instead enjoy your evening on the couch with a cold beer (or five) while watching trash TV.",
        priority: 4,
        deadline: "09.06.2023"   
    },
    {
        picture: "../images/Laundry.png",
        taskHeading: "Do the laundry",
        taskDescription: "You are a grown-up, you can't bring your mother the dirty laundry again!",
        priority: 2,
        deadline: "13.06.2023"   
    },
    {
        picture: "../images/Dishes.png",
        taskHeading: "Do the dishes",
        taskDescription: "Before the dirty plates find their way themselves in the dishwasher...",
        priority: 2,
        deadline: "12.06.2023"   
    },
    {
        picture: "../images/FeedCat.png",
        taskHeading: "Feed the cat",
        taskDescription: "<b> !No later that 7pm! </b> <br> Before that grumpy b*tch again takes a dumb on your pillow.",
        priority: 5,
        deadline: "09.06.2023"   
    },
    {
        picture: "../images/Be friendly.png",
        taskHeading: "Be extra friendly to your annoying clients at work",
        taskDescription: "Remeber, you need this job to feed your cat!",
        priority: 5,
        deadline: "09.06.2023"   
    },
    {
        picture: "../images/CleanHouse.png",
        taskHeading: "Clean up the house",
        taskDescription: "Friendly reminder: That's not an organized chaos, your are just lazy.",
        priority: 2,
        deadline: "13.06.2023"   
    },
];


let resultDiv = document.getElementById("result");

for (let i = 0; i < tasks.length; i++) {
  let newColumn = document.createElement("div");
  newColumn.className = "col";
  newColumn.innerHTML = `
        <div class="card my-3" style="width:"18rem"; height="10rem" ">
            <div class="py-3 ps-3">
                <span class ="bg-info px-2 py-1 text-light rounded"> Task </span>
                <span class="">
                    <img src="../images/bookmark.png" width="8%"  class="offset-8">
                    <img src="../images/dots.png" width="3%"  class="ms-3">
                </span>
            </div>
            <img src="${tasks[i].picture}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title centured">${tasks[i].taskHeading}</h5>
                <p class="card-text">${tasks[i].taskDescription}</p>
             </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> 
                    <img src="../images/priority sign.png" width ="17%" height =100%" class="pb-1 pe-2">
                    Priority: <a href="#" class="btn ms-3 myBtn">${tasks[i].priority}</a>
                </li>
                <li class="list-group-item">
                    <img src="../images/calendar.png" width ="20%" height ="110%" class="pb-2 pe-2" >
                    Deadline: ${tasks[i].deadline}
                </li>
            </ul>
            <div class="card-body">
                <a href="#" class="btn btn-danger m-3" > <img src="../images/delete.png" width="10%" height="10%" class="me-2 ">Delete</a>
                <a href="#" class="btn btn-success m-3"><img src="../images/save.png" width="10%" height="10%" class="me-2"> Save </a>
            </div>
        </div>
        
    `; 
    resultDiv.appendChild(newColumn);
}

let btns = document.getElementsByClassName("myBtn");
for(let i = 0; i < btns.length; i++){
    if (tasks[i].priority < 2) {
        btns[i].classList.remove ("btn-danger"); 
        btns[i].classList.add ("btn-success");
    }
    else if (tasks[i].priority < 4){
    btns[i].classList.remove ("btn-success");
    btns[i].classList.add ("btn-warning");
    }
    else if (tasks[i].priority < 6) {
        btns[i].classList.remove ("btn-warning");
        btns[i].classList.add ("btn-danger");
    }
}
for(let i = 0; i < btns.length; i++){
    btns [i].addEventListener("click", function(){
        tasks[i].priority++;
        if (tasks[i].priority > 5){
            tasks[i].priority = 0
        }
        if (tasks[i].priority < 2) {
            btns[i].classList.remove ("btn-danger"); 
            btns[i].classList.add ("btn-success");
        }
        else if (tasks[i].priority < 4){
        btns[i].classList.remove ("btn-success");
        btns[i].classList.add ("btn-warning");
        }
        else if (tasks[i].priority < 6) {
            btns[i].classList.remove ("btn-warning");
            btns[i].classList.add ("btn-danger");
        }

        btns[i].innerHTML = tasks[i].priority;
    });

}
    

