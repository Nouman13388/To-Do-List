var btn_click = document.getElementById("add-btn");
btn_click.addEventListener("click", function() {
    var add_item = document.getElementById("book-list");
    var new_item = document.createElement("li");
    new_item.textContent = document.getElementById("title").value+ "   " + "   " + document.getElementById("author").value;
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.className = "btn btn-danger btn-sm float-end";
    new_item.appendChild(removeButton);
    new_item.className = "d-flex justify-content-between align-items-center list-group-item"
    add_item.appendChild(new_item);
});

var remove_btn = document.getElementById("book-list");
remove_btn.addEventListener("click", function(e) {
    if(e.target.className == "btn btn-danger btn-sm float-end") {
        var li = e.target.parentElement;
        remove_btn.removeChild(li);
    }
});
