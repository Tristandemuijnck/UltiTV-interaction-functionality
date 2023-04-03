const modal = document.getElementById('add-player-modal')
const openBtn = document.getElementById('add-player-btn')
const closeBtn = document.getElementsByClassName('close')[0]

console.log(closeBtn);

openBtn.addEventListener('click', (event) => {
    // Prevent the anchor from going to another page
    event.preventDefault()

    // Open modal
    modal.classList.toggle('modal-show')
})

closeBtn.addEventListener('click', (event) => {
    // Close modal
    modal.classList.toggle('modal-show')
})

// Check for click outside modal
window.addEventListener("click", (e) => {
    // If an element outside of the modal is clicked
    if (e.target == modal) {
        // Close modal
        modal.classList.toggle("modal-show")
    }
})