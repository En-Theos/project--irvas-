import modal from "./modal";
import tabs from "./tabs";

export default function formCalc(data) {
    modal(".popup_calc_btn", ".popup_calc");
    tabs(".balcon_icons", ".balcon_icons_img", ".popup_calc_content .big_img img", "do_image_more", "inline");

    document.querySelectorAll(".popup_calc_content .balcon_icons img").forEach((img, i) => {
        img.addEventListener('click', () => {
            data.form = i + 1;
            dataValidation(data);
        });
    });
    document.querySelectorAll(".popup_calc .form-control").forEach(button => {
        button.addEventListener('input', () => {
            button.value = button.value.replace(/\D/, "");
            switch (button.id) {
                case "width":
                    data.width = +button.value;
                    break;
                case "height":
                    data.height = +button.value;
                    break;
            }
            dataValidation(data);
        });
    });
    document.querySelector(".popup_calc_profile_content select").addEventListener('change', (event) => {
        data.type = event.target.value;
        dataValidation(data);
    });
    const checkbox = document.querySelectorAll(".checkbox");
    checkbox.forEach(item => {
        item.addEventListener('change', () => {
            checkbox.forEach(i => i.checked = false);
            data.profile =  item.nextElementSibling.id; 
            item.checked = true;
            dataValidation(data);
        });
    });

    function dataValidation({form, width, height, type, profile}) {
        if (form && width && height) {
            modal(".popup_calc_button", ".popup_calc_profile");
        }
        if (type && profile) {
            modal(".popup_calc_profile_button", ".popup_calc_end");
        }
    }
}