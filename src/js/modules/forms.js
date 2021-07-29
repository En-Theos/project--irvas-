export default function postForms(data) {
    const forms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll('input[name="user_phone"]');

    const message = {
        success: "Все прошло успешно",
        load: "assets/img/spinner.svg",
        failure: "Все прошло не по плану"
    };

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^-+\d]/, "");
        });
    });

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("ads");

            const div = document.createElement("div");
            div.classList.add("status");
            div.innerHTML = `
                <img src="${message.load}" alt="Ops...">
            `;
            form.append(div);

            let formData = Object.fromEntries(new FormData(form).entries());

            if (form.getAttribute("data-calc") == "end") {
                formData = Object.assign(data, formData);
            }

            const postData = JSON.stringify(formData);
            
            fetch("http://localhost:3000/formData", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: postData
            }).then((returnJSONData) => {
                if (returnJSONData.ok || returnJSONData.status == 200) {
                    div.textContent = message.success;
                } else {
                    div.textContent = message.failure;
                }
            }).catch(() => {
                div.textContent = message.failure;
            }).finally(() => {
                setTimeout(() => div.remove(), 4000);
                form.reset();
            });
        });
    });
}