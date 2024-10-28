document.getElementById('show-notification').addEventListener('click', () => {
    const notification = document.getElementById('notification');
    
    // Remove the hidden class to show the notification
    notification.classList.remove('hidden');
    
    // Set a timeout to hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000); // Change this value for a longer or shorter duration
});
