document.addEventListener("DOMContentLoaded", function() {
    fetch(`${window.origin}/form`, {
        method: "GET",
        credentials: "include",
        cache:"no-cache",
        headers: new Headers({
            'content-type': 'application/json'
        })
        })
        .then(function(response){
        if (response.status !== 200){
            console.log(`Response status: ${response.status}`);
            return;
        }
        response.json().then(function(data){
            display_data(data)
        })
        })
});

function post_article(){
    title = document.getElementById("title_input").value;
    body = document.getElementById("body_input").value;

    data = {
    "title": title,
    "body": body
    };

    fetch(`${window.origin}/form`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
    cache:"no-cache",
    headers: new Headers({
        'content-type': 'application/json'
    })
    })
    .then(function(response){
    if (response.status !== 200){
        console.log(`Response status: ${response.status}`);
        return;
    }
    response.json().then(function(data){
        display_data(data)
    })
    })
}

function update_article(){
    id = document.getElementById("id_input").value;
    title = document.getElementById("title_input").value;
    body = document.getElementById("body_input").value;

    data = {
    id: id,
    title: title,
    body: body
    }

    fetch(`${window.origin}/form`, {
    method: "UPDATE",
    credentials: "include",
    body: JSON.stringify(data),
    cache:"no-cache",
    headers: new Headers({
        'content-type': 'application/json'
    })
    })
    .then(function(response){
    if (response.status !== 200){
        console.log(`Response status: ${response.status}`);
        return;
    }
    response.json().then(function(data){
        display_data(data)
    })
    })
}

function delete_article(){
    id = document.getElementById("id_input").value;

    data = {
    id: id
    }

    fetch(`${window.origin}/form`, {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(data),
    cache:"no-cache",
    headers: new Headers({
        'content-type': 'application/json'
    })
    })
    .then(function(response){
    if (response.status !== 200){
        console.log(`Response status: ${response.status}`);
        return;
    }
    response.json().then(function(data){
        display_data(data)
    })
    })
}

function display_data(data){
    const div = document.getElementById('articles')

    while (div.firstChild){
        div.removeChild(div.firstChild)
    }

    for (i = 0; i < data.length; i++){
        const node = document.createElement('div')
        node.className = "flex-child"
        
        const id = document.createElement('p')
        id.innerHTML = data[i]["id"]
        const title = document.createElement('p')
        title.innerHTML = data[i]["title"]
        const body = document.createElement('p')
        body.innerHTML = data[i]["body"]
        
        node.appendChild(id)
        node.appendChild(title)
        node.appendChild(body)
        div.appendChild(node)
    }
}