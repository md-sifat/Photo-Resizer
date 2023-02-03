const clickBox = document.querySelector(".upload"),   //selecting the icon
inputBox = clickBox.querySelector("input"),    // selecting the input field
imagePreview = document.querySelector(".image"),
widthInput = document.querySelector(".input1 input"),
heightInput = document.querySelector(".input2 input"),
ratioInput = document.querySelector(".ratio input"),
downloadBtn  = document.querySelector(".btn"),
qualityInput = document.querySelector(".quality , input");

let ratio;

const loadFile = (uploadedFiles) =>{
    const file = uploadedFiles.target.files[0];  //it will save the first user selected file
    if(!file) return;  //if select no file
    imagePreview.src = URL.createObjectURL(file); 
    console.log(file); // for terminal debug
    imagePreview.addEventListener("load" , ()=>{
        widthInput.value = imagePreview.naturalWidth;
        heightInput.value = imagePreview.naturalHeight;
        ratio = imagePreview.naturalWidth / imagePreview.naturalHeight;
        document.querySelector(".upload").classList.add("active");
    });
}

widthInput.addEventListener("keyup" , () => {
    const height = ratioInput.checked ? widthInput.value / ratio  :  heightInput.value;
    heightInput.value =Math.floor(height);
})

heightInput.addEventListener("keyup" , () => {
    const width = ratioInput.checked ? heightInput.value * ratio  :  widthInput.value;
    widthInput.value =Math.floor(width);
})

const Download = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    const imageQuality  = qualityInput.checked ? 0.7 : 1.0;

    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ctx.drawImage(imagePreview , 0 ,0 , canvas.width ,canvas.height);

    a.href =canvas.toDataURL("image/jpeg" , imageQuality);
    a.download = new Date().getTime();
    a.click();
}


downloadBtn.addEventListener("click" , Download)


inputBox.addEventListener("change" , loadFile); 
clickBox.addEventListener("click" , ()=>{    //connection the icon with the input field
    inputBox.click();
})