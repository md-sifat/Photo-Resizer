const clickBox = document.querySelector(".upload"),   //selecting the icon
inputBox = clickBox.querySelector("input"),    // selecting the input field
imagePreview = document.querySelector(".image");




const loadFile = (uploadedFiles) =>{
    const file = uploadedFiles.target.files[0];  //it will save the first user selected file
    if(!file) return;  //id select no file
    imagePreview.src = URL.createObjectURL(file); 
    console.log(file); // for terminal debug

}

inputBox.addEventListener("change" , loadFile); 
clickBox.addEventListener("click" , ()=>{    //connection the icon with the input field
    inputBox.click();
})