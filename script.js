var input = document.getElementById("user_input");
var button = document.getElementById("button");
var ul = document.getElementById("user_list");

button.addEventListener("click", function() {
	if (input.value.length > 0) {
		var div = document.createElement("div");
		div.setAttribute("class", "input-group mb-3");
		div.innerHTML += '<div class="input-group-prepend"><div></div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div>';
		var li = document.createElement("li");
		li.setAttribute("class", "list-group-item");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(div);
		div.appendChild(li);
		input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var div = document.createElement("div");
		div.setAttribute("class", "input-group mb-3");
		div.innerHTML += '<div class="input-group-prepend"><div></div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div>';
		var li = document.createElement("li");
		li.setAttribute("class", "list-group-item");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(div);
		div.appendChild(li);
		input.value = "";
	}
})