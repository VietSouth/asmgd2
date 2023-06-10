// dragging banner
let bannerList = document.querySelector('.banner-list')
let banner = document.querySelector('.banner-list li')
let bannerWidth = banner.clientWidth + 20

let bannerBtns = document.querySelectorAll('.banner-btn')
bannerBtns.forEach(bannerBtn => {
    bannerBtn.addEventListener('click',function(){
        bannerList.scrollLeft += bannerBtn.classList.contains('next-btn')? -bannerWidth : bannerWidth;
    })
});

function dragging(e){
    bannerList.style.transform = 'translateX(e.pageX)' 
}

bannerList.addEventListener('mouseover',dragging)