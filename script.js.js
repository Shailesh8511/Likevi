document.getElementById('download-btn').addEventListener('click', function() {
    const url = document.getElementById('reel-url').value.trim();
    
    if (!url) {
        alert('Please paste a valid Instagram Reel URL');
        return;
    }
    
    // In a real app, this would call your backend service
    alert('This is a demo. In a real app, this would process: ' + url);
    
    // Simulate ad display
    console.log('Ad would be displayed here');
});