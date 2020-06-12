editor.document.designMode="on"

function changeFontStyle(){
    let select = document.getElementById('font-select')
    var value = select.options[select.selectedIndex].value;
    editor.document.execCommand('fontName', false, value)
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

function uploadImage(){
    
}