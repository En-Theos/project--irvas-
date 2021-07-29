export default function tabs(selParentButton, selArrButton, selArrContent, classActive, display) {
    document.querySelector(selParentButton).addEventListener("click", (event) => {
        if (event.target && event.target.parentElement.classList.contains(selArrButton.replace(/\./, ""))) {
            const arrButton = document.querySelectorAll(selArrButton),
                arrContent = document.querySelectorAll(selArrContent);

            arrButton.forEach((button, i) => {
                if (button == event.target.parentElement) {
                    button.classList.add(classActive);
                    arrContent[i].style.display = display;
                } else {
                    button.classList.remove(classActive);
                    arrContent[i].style.display = "none";
                }
            });
        }
    });
}