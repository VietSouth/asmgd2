let bannerBtns = document.querySelectorAll('.banner-btn')
let banners = document.querySelectorAll('#banner ul li')
console.log(bannerBtns)

function resetBannerActive(){
    banners.forEach(banner => {
        banner.classList.remove('active')
    });
}

let i = 0
bannerBtns.forEach(bannerBtn => {
    bannerBtn.onclick = () =>{
        if(bannerBtn.classList.contains('next-btn')){
            i++;
            if(i>banners.length-1){
                i = 0
            }
            resetBannerActive()
            banners[i].classList.add('active')
        }
        if(bannerBtn.classList.contains('prev-btn')){
            i--;
            if(i<0){
                i = banners.length-1
            }
            resetBannerActive()
            banners[i].classList.add('active')
        }
    }
});

setInterval(() => {
    resetBannerActive()
    i++
    if(i>banners.length-1){
        i = 0
    }
    banners[i].classList.add('active')

}, 4000);    

// dragging banner
