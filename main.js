document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("scroll-to-this-section").scrollIntoView({
      behavior: "smooth"
    });
  });
  document.getElementById('btg').addEventListener('click', function() {
    window.location.href = 'signup.html';
});
