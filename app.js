let myPicture = document.querySelector('#preview-image')
let previewFile = document.querySelector('.input-file')




myPicture.addEventListener('change',function(){
    //tao ra 1 the img
    let img = document.createElement('img')
    //link src cho img
    //createObjectURL la tao 1 duong dan thong qua 1 file, duong dan do chi dan tai nguyen trong may tinh cua minh
    img.src = URL.createObjectURL(myPicture.files[0])
    console.log(myPicture.files[0].name)

    //ktra ket thuc duoi cua anh
    if(!myPicture.files[0].name.endsWith('.jpg')){
        console.log('no')
    }
    else {
        previewFile.appendChild(img)
    }
    
})