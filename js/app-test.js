document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    document.querySelectorAll('.nav-links a').forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
