

function addlist() {
    const input = document.getElementById("inputText");
    const value = input.value.trim();

    if (value === "") {
        alert("Enter the task first!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
        li.remove();
    }
    li.appendChild(btn);

    document.getElementById("Mylist").appendChild(li);
    input.value = "";


}