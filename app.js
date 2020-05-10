const buttons = document.querySelectorAll('.btn');
const image = document.querySelector('img');

const links = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg',];
let link = 0; 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('right')) {
            link++;

            if (link == 4) {
                link = 0;
            }
            
            image.attributes.src.textContent = links[link];
        } else {
            link--;
            
            if (link == -1) {
                link = 3;
            } 

            image.attributes.src.textContent = links[link];
        }
    })
})