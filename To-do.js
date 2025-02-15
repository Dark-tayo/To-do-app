const box = document.getElementById("box");
const container= document.getElementById("container");
function addTask(){
    if(box.value == ''){
        alert("This must not be empty!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = box.value;
        container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    box.value= "";
}

container.addEventListener("click", function(task){
    if(task.target.tagName === "LI"){
        task.target.classList.toggle("checked");
        save();
    }
    else if (task.target.tagName === "SPAN"){
        task.target.parentElement.remove();
        save();
    } 

}, false);

const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;
const toggleText = document.getElementById('toggleText');


if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
    toggleText.textContent = "Light Mode"; // Update text
}


toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        toggleText.textContent = "Light Mode"; 
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        toggleText.textContent = "Dark Mode";
        localStorage.setItem('darkMode', 'disabled');
    }
});