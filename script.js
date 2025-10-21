    // Cursor follow effect
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });

  document.getElementById('home-title').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

