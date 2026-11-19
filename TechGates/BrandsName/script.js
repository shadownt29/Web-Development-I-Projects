const dialog = document.getElementById('product-detail-dialog')
const detailImg = document.getElementById('detail-image')
const detailTitle = document.getElementById('detail-title')
const detailDesc = document.getElementById('detail-desc')
const detailSpecs = document.getElementById('detail-specs')
const detailPrice = document.getElementById('detail-price')
const detailColor = document.getElementById('detail-color')
const detailStock = document.getElementById('detail-stock')
const detailCategory = document.getElementById('detail-category')

function openDetail(title, price, imgSrc, description, specsArray, color, stock, category) {
    detailTitle.textContent = title;
    detailPrice.textContent = price;
    detailImg.src = imgSrc;
    detailDesc.textContent = description;
    detailColor.textContent = color;
    detailCategory.textContent = category;
    detailStock.textContent = stock;

    detailSpecs.innerHTML = '';
    specsArray.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        detailSpecs.appendChild(li);
    });

    dialog.showModal();
}
function closeDetail() {
    dialog.close();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('product-detail-dialog').addEventListener('click', function(event) {
        if(event.target === this) {
            closeDetail()
        }
    })
})