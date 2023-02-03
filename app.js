const clickBox = document.querySelector(".upload"),   //selecting the icon
inputBox = clickBox.querySelector("input"),    // selecting the input field
imagePreview = document.querySelector(".image"),
widthInput = document.querySelector(".input1 input"),
heightInput = document.querySelector(".input2 input");


const loadFile = (uploadedFiles) =>{
    const file = uploadedFiles.target.files[0];  //it will save the first user selected file
    if(!file) return;  //if select no file
    imagePreview.src = URL.createObjectURL(file); 
    console.log(file); // for terminal debug
    imagePreview.addEventListener("load" , ()=>{
        widthInput.value = imagePreview.naturalWidth;
        heightInput.value = imagePreview.naturalHeight;
        document.querySelector(".upload").classList.add("active");
    });
}

inputBox.addEventListener("change" , loadFile); 
clickBox.addEventListener("click" , ()=>{    //connection the icon with the input field
    inputBox.click();
})