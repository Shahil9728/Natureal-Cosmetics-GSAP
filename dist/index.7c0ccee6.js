const buttons = document.querySelectorAll(".contactbtn");
const forms = document.querySelectorAll(".contactform");
buttons.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        buttons.forEach((btn)=>{
            btn.style.border = "1px solid #AD8B7F";
        });
        button.style.border = "5px double #AD8B7F";
        forms.forEach((form, formIndex)=>{
            form.style.opacity = index === formIndex ? "1" : "0";
        });
    });
});
let show = 0;
function toggleNavbar() {
    var mobileNavbar = document.querySelector(".mobile-navbar");
    if (show) {
        mobileNavbar.style.transform = "translateX(100%)";
        show = 0;
    } else {
        mobileNavbar.style.transform = "translateX(0%)";
        show = 1;
    }
}
gsap.registerPlugin(ScrollTrigger);

//# sourceMappingURL=index.7c0ccee6.js.map
