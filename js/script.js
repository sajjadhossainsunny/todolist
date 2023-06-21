let input = document.querySelector(".input");
let subButton = document.querySelector(".sub_btn");
let unorderList = document.querySelector("ul");
let arr = []

subButton.addEventListener("click", function () {
    arr.push(input.value)
    addToDo()
    input.value = ""
    input2.value = ""
})

function addToDo() {
    unorderList.innerHTML = "";
    arr.map((item) => {
        unorderList.innerHTML += `<li><div class="text"><h4>${item}</h4></div><button class="remove">Delete</button></li>`;
    })
    let remove = document.querySelectorAll(".remove");
    let removeArr = Array.from(remove);
    removeArr.map((button, index) => {
        button.addEventListener("click", function () {
            arr.splice(index, 1);
            addToDo()
        })
    })
}