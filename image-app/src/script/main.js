document.getElementById('backgroundImageBtn').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = 'auto';
            document.getElementById('preview').innerHTML = '';
            document.getElementById('preview').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});