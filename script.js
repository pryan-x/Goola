//function to create products for gallery
let imageArr = ['images/products/nice shirt woman.PNG']
let productDescRow1 = 'Lorem ipsum dolor sit amet'
let productDescRow2 = 'Lorem ipsum'
let descArr = []
descArr.push(productDescRow1)
descArr.push(productDescRow2)



const product = function(arr, arrOfImages, galleryNumber) {
    let product = document.createElement('div')
    product.setAttribute('class', 'product-container container')
    let gallery = document.querySelector(`.g${galleryNumber}`)
    console.log(gallery)
    gallery.appendChild(product)
    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'image-container container')
    product.appendChild(imageContainer)
    let imageWrapper = document.createElement('div')
    imageWrapper.setAttribute('class', 'image-wrapper')
    imageContainer.appendChild(imageWrapper)
    let image = document.createElement('img')
    image.setAttribute('src', imageArr[0])
    image.setAttribute('class', 'carousel-image')
    imageWrapper.appendChild(image)
    let descContainer = document.createElement('div')
    descContainer.setAttribute('class', 'description-container container')
    product.appendChild(descContainer)

    for (let i = 0; i < 2; i++) {
        let productDesc = document.createElement('div')
        productDesc.setAttribute('class', `product-description`)
        descContainer.appendChild(productDesc)
        descContainer.lastChild.innerHTML = arr[i]  
      }
   }
for (let i = 0; i < 8; i++) {
    product(descArr, imageArr, 1);
}
for (let i = 0; i < 4; i++) {
    product(descArr, imageArr, 2)
}