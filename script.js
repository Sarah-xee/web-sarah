// JavaScript 來控制滾動視差效果
window.addEventListener('scroll', function() {
    const parallaxImages = document.querySelectorAll('.parallax-image');
    let scrollPosition = window.scrollY;

    // 根據滾動位置調整每個圖片的 translateY 值
    parallaxImages.forEach(function(image) {
        let offset = image.parentElement.getBoundingClientRect().top; // 取得父元素相對於視窗頂部的偏移
        let parallaxSpeed = 0.5; // 視差速度，可調整此值控制滾動速度
        image.style.transform = 'translateY(' + offset * parallaxSpeed + 'px)';
    });
});


// window.addEventListener('scroll', function() {
//     const parallaxImages = document.querySelectorAll('.parallax-image');
    
//     // 檢查滾動位置
//     const scrollY = window.scrollY;

//     parallaxImages.forEach(image => {
//         let speed = 0.5;  // 視差效果的速度，值越大滾動越明顯
//         let offset = scrollY - image.offsetTop; // 獲取圖片相對滾動的距離
//         image.style.transform = `translateY(${offset * speed}px)`;  // 設置視差效果
//     });
// });

// JavaScript 來控制滾動視差效果

