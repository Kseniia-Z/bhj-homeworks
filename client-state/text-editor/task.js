const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('editorValue', editor.value)
})

editor.value = localStorage.getItem('editorValue');