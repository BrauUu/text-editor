editor.document.designMode="on"

function toBold(){
    editor.document.execCommand('bold',false,null)
}

function toItalic(){
    editor.document.execCommand('italic',false,null)
}

function toUnderline(){
    editor.document.execCommand('underline',false,null)
}

function undo(){
    editor.document.execCommand('undo',false,null)
}

function redo(){
    editor.document.execCommand('redo',false,null)
}

function toOrderedList(){
    editor.document.execCommand('insertOrderedList', false, null)
}

function toUnorderedList(){
    editor.document.execCommand('insertUnorderedList', false, null)
}