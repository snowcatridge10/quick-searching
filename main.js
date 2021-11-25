    var input = document.createElement("input");
    var btn = document.createElement("button");

    btn.innerHTML = "search";
    btn.id = "btn";
    input.id = "input";

    document.body.appendChild(input);
    document.body.appendChild(btn);

    btn = document.getElementById("btn");
    input = document.getElementById("input");

    btn.addEventListener("click", function(){
        window.location.href="https://www.google.com/search?q=" + input.value;
    });
