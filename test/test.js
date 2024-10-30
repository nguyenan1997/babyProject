function openNav() {
  document.querySelector(".sidenav").style.width = "250px"; // Thay đổi chiều rộng
  document.querySelector("#main").style.marginLeft = "250px"; // Di chuyển nội dung
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0"; // Đặt lại chiều rộng
  document.querySelector("#main").style.marginLeft = "0"; // Đặt lại vị trí nội dung
}