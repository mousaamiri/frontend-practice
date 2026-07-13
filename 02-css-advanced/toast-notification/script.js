const showToast = document.getElementById('showToast')
const template = document.getElementById('toast-template')
const body = document.body
showToast.addEventListener('click', () => {
    let toastContainer = document.getElementById('toast-container')
    if (!toastContainer) {
        toastContainer = document.createElement("div")
        toastContainer.id = 'toast-container'
        toastContainer.className = 'toast-container'

        body.appendChild(toastContainer)
    }
    const toastClone = template.cloneNode(true)
    const item = toastClone.querySelector('.toast-item');
    toastClone.removeAttribute('id')
    toastClone.style.display = 'block'

    const closeBtn = toastClone.querySelector('.close-toast')
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toastClone.remove()
        })
    }

    setTimeout(() => {
        dismissToast(toastClone, item);
    }, 3000);
    toastContainer.appendChild(toastClone)
    requestAnimationFrame(() => {
        if (item) {
            item.classList.add('active');
        }
    })

})
function dismissToast(toast, item) {
    item.classList.remove("active");

    setTimeout(() => {
        toast.remove();
    }, 300);
}