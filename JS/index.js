// home modal window

let homeModalWidow = document.querySelector(".home-modal-window")

function openHomeModalWindow() {
    homeModalWidow.classList.add('active')
}

function closeHomeModalWindow() {
    homeModalWidow.classList.remove('active')
}

// gallary home-modal-window
let homeGallaryModalWindow = document.querySelector('.home-gallary-modal-window');

function openHomeModalWindowimg() {
    homeGallaryModalWindow.classList.add('active');
}

function closeGallaryHomeModalWindow() {
    homeGallaryModalWindow.classList.remove('active')
}

// footer gallary modal window

let footerModalWndow = document.querySelector('.footer-modal-window');
let modalImg = document.querySelector('.modal-img');
let closeImg = document.querySelector('.close-img');
   

const footerGallaryHtml1 = `
    <div class="footer-modal-window-content">
        <i onclick="closeFooterGallary()" class="fa-solid fa-xmark"></i>
        <img openModalImg(event) src = "https://livedemo00.template-help.com/wt_prod-22310/images/project-2-1200x800-original.jpg">
    </div>  
`
const footerGallaryHtml2 = `
    <div class="footer-modal-window-content">
        <i onclick="closeFooterGallary()" class="fa-solid fa-xmark"></i>
        <img openModalImg(event) src = "https://livedemo00.template-help.com/wt_prod-22310/images/project-4-1200x800-original.jpg">
    </div>  
`
const footerGallaryHtml3 = `
    <div class="footer-modal-window-content">
        <i onclick="closeFooterGallary()" class="fa-solid fa-xmark"></i>
        <img openModalImg(event) src = "https://livedemo00.template-help.com/wt_prod-22310/images/grid-gallery-6-1200x800-original.jpg">
    </div>  
`
const footerGallaryHtml4 = `
    <div class="footer-modal-window-content">
        <i onclick="closeFooterGallary()" class="fa-solid fa-xmark"></i>
        <img openModalImg(event) src = "https://livedemo00.template-help.com/wt_prod-22310/images/project-5-1200x800-original.jpg">
    </div>  
`

function openModalImg1(e) {
    footerModalWndow.classList.add('active')
    console.log(e)
    
    footerModalWndow.innerHTML = footerGallaryHtml1;

}


function openModalImg2(e) {
    footerModalWndow.classList.add('active')
    console.log(e)
    
    footerModalWndow.innerHTML = footerGallaryHtml2;

}

function openModalImg3(e) {
    footerModalWndow.classList.add('active')
    console.log(e)
    
    footerModalWndow.innerHTML = footerGallaryHtml3;

}
function openModalImg4(e) {
    footerModalWndow.classList.add('active')
    console.log(e)
    
    footerModalWndow.innerHTML = footerGallaryHtml4;

}

function closeFooterGallary() {
    footerModalWndow.classList.remove('active')
}