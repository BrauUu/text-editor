editor.document.designMode="on"

var cssLink = document.createElement("link");
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
cssLink.href = './fonts/StylesFonts/arial.css';
frames['editor'].document.head.appendChild(cssLink);

function changeFontStyle(styleSheet){
    cssLink.href = './fonts/StylesFonts/' + styleSheet + '.css';
    frames['editor'].document.head.appendChild(cssLink);
}

function toBold(){
    editor.document.execCommand('bold', false, null)
}

function toItalic(){
    editor.document.execCommand('italic', false, null)
}

function toUnderline(){
    editor.document.execCommand('underline', false, null)
}

function toParagraph(){
    editor.document.execCommand('indent', false, null)
}

function toSuperscript(){
    editor.document.execCommand('superscript', false, null)
}

function toSubscript(){
    editor.document.execCommand('subscript', false, null)
}

function alignCenter(){
    editor.document.execCommand('justifyCenter', false, null)
}

function alignLeft(){
    editor.document.execCommand('justifyLeft', false, null)
}

function alignRight(){
    editor.document.execCommand('justifyRight', false, null)
}

function justify(){
    editor.document.execCommand('justifyFull', false, null)
}

function toOrderedList(){
    editor.document.execCommand('insertOrderedList', false, null)
}

function toUnorderedList(){
    editor.document.execCommand('insertUnorderedList', false, null)
}

function changeSize(value){
    editor.document.execCommand('fontSize', false, value)
}

function undo(){
    editor.document.execCommand('undo', false, null)
}

function redo(){
    editor.document.execCommand('redo', false, null)
}

function changeColor(){
    let selectedColor = document.getElementById('font-color')
    let color = selectedColor.value
    editor.document.execCommand('foreColor', false, color)
}

function unlockModal(){
    document.getElementById('upload-image-modal').style.display = "block";
}

function lockModal(){
    document.getElementById('upload-image-modal').style.display = "none";
}

function uploadImage(url){
    console.log(url)
    lockModal();
    editor.document.execCommand('insertImage', false, url)
}