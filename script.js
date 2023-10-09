//references to modal and overlay//
const modal = document.getElementById("subscribeModal");
const overlay = document.getElementById("overlay");

//reference for close button//
const closeModal = document.getElementById("closeModal");

// reference for subscription form
const subscriptionForm = document.getElementById("subscriptionForm");
const emailInput = document.getElementById("emailInput");

//function to open the modal//
function openModal(){
    modal.style.transform = "translateY(0)";
    overlay.style.display = "block";
}

//function to hide//
//function closeModalHandler(){
   // modal.style.display = "none";
    //overlay.style.display = "none";
//}
function closeModalHandler() {
    modal.style.transform = "translateY(100%)";
    overlay.style.display = "none";
}

//event listeners to trigger//
document.addEventListener("DOMContentLoaded", () => {
    //show the modal after a delay//
    setTimeout(openModal, 5000);

    //close the modal when button is clicked//
    closeModal.addEventListener("click", closeModalHandler);
    
    //close when background clicked//
    overlay.addEventListener("click", closeModalHandler);

    //prevent if content clicked//
    modal.addEventListener("click", (event) => {
        event.stopPropagation();
});

//SUBMIT THE FORM//
})
document.addEventListener("DOMContentLoaded", function () {
    const chatOutput = document.getElementById("chat-output");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function () {
      const message = messageInput.value;
      if (message.trim() !== "") {
        chatOutput.innerHTML += `<p><strong>User:</strong> ${message}</p>`;
        messageInput.value = "";
      }
    });
  });
  