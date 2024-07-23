const $result = document.querySelector("#result");

const renderUsers = (users) => {
    $result.innerHTML = "";
    users.forEach(user => {
        const $div = document.createElement("div");
        $div.innerHTML = `
            <img src="${user.avatar}">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
            <button class="delete" data-id="${user.id}">Delete</button>
        `;
        $result.appendChild($div);
    });  
}

const getUsersAndRender = () => {
    fetch(`https://api.escuelajs.co/api/v1/users`)
        .then(response => response.json())
        .then(data => renderUsers(data));
}

function handleAction(e) {
    if (e.target.classList.contains("delete")) {
        const id = e.target.getAttribute("data-id");
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => getUsersAndRender());
    }
}

$result.addEventListener("click", handleAction);

getUsersAndRender();
