const timerShowMW = setTimeout(() => {
    document.querySelector(".popup").style.display = 'block';
    document.body.style.overflow = 'hidden';
}, 60000000);

export default function modal(selButton, selModal) {
    const modalElement = document.querySelector(selModal);

    document.querySelectorAll(selButton).forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target) {
                document.querySelectorAll("[data-modal]").forEach(window => window.style.display = 'none');
                event.preventDefault();
                modalElement.style.display = 'block';
                document.body.style.overflow = 'hidden';
                clearTimeout(timerShowMW);
            }
        });
    });
    
    modalElement.addEventListener('click', (event) => {
        if (event.target.tagName == "STRONG" || event.target == modalElement) {
            modalElement.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}