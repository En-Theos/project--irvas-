import './slider';
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import postForms from "./modules/forms";
import formCalc from "./modules/formCalc";
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', () => {
    const data = {};

    modal(".popup_engineer_btn", ".popup_engineer");
    modal(".contact_us_wrap", ".popup");
    modal(".feedback_block .phone_link", ".popup");
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active", "block");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click", "block");
    formCalc(data);
    postForms(data);
    timer("2021-08-09", "#timer");
});