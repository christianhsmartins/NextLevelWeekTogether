import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// Quanto o botão check for clicado ele abre a modal 

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick);
})

// Quanto o botão delete for clicado ele abre a modal 
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true){
    event.preventDefault();
    const text = check ? "Marcar como lido" : "Excluir";

    modalTitle.innerHTML= `${text}`;
    modalDescription.innerHTML= check ? `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`; 
    check? modalButton.classList.remove("red") : modalButton.classList.add("red");

    const roomID = document.querySelector("#room-id").dataset.id;
    const slug = check ? "check": "delete";
    const questionID = event.target.dataset.id;
    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomID}/${questionID}/${slug}`);

    modal.open();
}
