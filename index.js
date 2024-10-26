document.addEventListener('DOMContentLoaded', () => {
    const navbarIcon = document.getElementById('navbarIcon');
    const navbarContent = document.getElementById('navbarContent');
  
    // Hiển thị thanh navbar khi click vào menu icon
    navbarIcon.addEventListener('click', () => {
      navbarContent.classList.toggle('show');
    });
  
    // Ẩn thanh navbar khi click ra ngoài
    document.addEventListener('click', (e) => {
      if (!navbarIcon.contains(e.target) && !navbarContent.contains(e.target)) {
        navbarContent.classList.remove('show');
      }
    });
  });
  