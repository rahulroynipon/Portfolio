const menuToggler = document.querySelector('#menutoggler');
const menuBar = document.querySelector("#menubar");
const active = document.querySelectorAll("#menubar li")


menuToggler.addEventListener('click',hide)
menuBar.addEventListener('click',hide)

function hide(){
    menuBar.classList.toggle("opacity-100");
}

// active.forEach(item => {
//     item.addEventListener('click', () => {

//         active.forEach(otherItem => {
//             if (otherItem !== item) {
//                 otherItem.classList.remove('active');
//             }
//         });
        
//         item.classList.toggle('active');
//     });
// });

