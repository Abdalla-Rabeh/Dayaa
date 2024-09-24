function setTab(value) {
    const urlInput = document.getElementById('urlInput');
    const textInput = document.getElementById('textInput');
    const phoneInput = document.getElementById('phoneInput');
    const wifiInput = document.getElementById('wifiInput');
    urlInput.style.display = 'none';
    textInput.style.display = 'none';
    phoneInput.style.display = 'none';
    wifiInput.style.display = 'none';
    if (value === 'url') {
        urlInput.style.display = 'block';
    }else if (value === 'text') {
        textInput.style.display = 'block';
    }
    else if (value === 'phone') {
        phoneInput.style.display = 'block';
    }
    else if (value === 'wifi') {
        wifiInput.style.display = 'block';
    }
}