function upDate(previewPic) {
    console.log("Sự kiện tương tác đã kích hoạt.");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Di chuột qua hoặc dùng phím Tab để chọn hình ảnh bên dưới.";
}

window.onload = function() {
    console.log("Trang web đã tải xong. Đang thiết lập tabindex...");
    let images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã gán tabindex cho ảnh thứ: " + (i + 1));
    }
};
