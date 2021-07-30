export default function scaleImage(selImage) {
    const boxForImage = document.createElement("div");
    boxForImage.classList.add("popup");
    boxForImage.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
    `;
    document.body.append(boxForImage);

    const contentImage = document.createElement("img");
    
    document.querySelectorAll(selImage).forEach(image => {
        image.addEventListener('click', (event) => {
            event.preventDefault();
            boxForImage.style.display = "flex";
            contentImage.src = image.parentElement.href;
            boxForImage.append(contentImage);
        });
    });
    boxForImage.addEventListener('click', (event) => {
        if (event.target == boxForImage) {
            boxForImage.style.display = "none";
        }
    });
}