const imagesBox = document.getElementById('images')
const imgBig = document.getElementById('img-big')
const modal = document.getElementById('modal')

for (i = 1; i <= 4; i++) {
    imagesBox.innerHTML += `
        <img src="../images/img${i}.jpg" class="cursor-pointer rounded-xl hover:opacity-80" width="88" alt="img" />
    `
}

const images = document.querySelectorAll('#images img')

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        sava(index + 1)
    })
})

function sava(id) {
    imgBig.setAttribute('src', `../images/img${id}.jpg`)
}

imgBig.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

function removeModal() {
    console.log('salom');
    modal.classList.add('hidden')
}



// overlay.addEventListener('click', () => {
//     modal.classList.add('hidden')
// })