function setTab(value) {
    const urlInput = document.getElementById('urlInput');
    const textInput = document.getElementById('textInput');
    const phoneInput = document.getElementById('phoneInput');
    
    urlInput.style.display = 'none';
    textInput.style.display = 'none';
    phoneInput.style.display = 'none';
    if (value === 'url') {
        urlInput.style.display = 'block';
    }else if (value === 'text') {
        textInput.style.display = 'block';
    }
    else if (value === 'phone') {
        phoneInput.style.display = 'block';
    }
}