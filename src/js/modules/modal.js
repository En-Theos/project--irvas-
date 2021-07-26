const timerShowMW = setTimeout(() => {
    document.querySelector(".popup").style.display = 'block';
    document.body.style.overflow = 'hidden';
}, 5000);

export default function modal(selButton, selModal) {
    const modalElement = document.querySelector(selModal);
    document.querySelector(selButton).addEventListener('click', (event) => {
        if (event.target) {
            event.preventDefault();
            modalElement.style.display = 'block';
            document.body.style.overflow = 'hidden';
            clearTimeout(timerShowMW);
        }
    });
    
    modalElement.addEventListener('click', (event) => {
        if (event.target.tagName == "STRONG" || event.target == modalElement) {
            modalElement.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}