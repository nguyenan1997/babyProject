const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5, // hiển thị 5 slide cùng lúc
    spaceBetween: 10, // khoảng cách giữa các slide
    navigation: {
      nextEl: '#nextBtn',
      prevEl: '#prevBtn',
    },
    loop:true
  });
  
  const slides = document.querySelectorAll('.swiper-slide');
  const arrowIndicator = document.querySelector('.arrow-indicator');
  const slideInfo = document.querySelector('.slide-info');
  
  let arrowFixed = false; // Kiểm soát vị trí cố định của mũi tên
  
  // Đặt vị trí mũi tên dựa trên index của slide
  function setArrowPosition(index) {
    const slideWidth = slides[0].offsetWidth; // Lấy chiều rộng của 1 slide
    const spaceBetween = swiper.params.spaceBetween; // Khoảng cách giữa các slide
  
    // Tính toán vị trí của mũi tên: (index * chiều rộng slide) + (index * khoảng cách giữa slide)
    const offset = index * (slideWidth + spaceBetween);
    
    // Đặt vị trí của mũi tên dựa trên chỉ số của slide
    arrowIndicator.style.transform = `translateX(${offset}px)`;
    arrowFixed = false; // Reset trạng thái mũi tên
  }
  
  // Cập nhật thông tin slide khi click vào slide
  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      setArrowPosition(index); // Cập nhật vị trí của mũi tên
      slideInfo.innerText = `Thông tin slide ${index + 1}`; // Chỉ cập nhật thông tin slide khi click
    });
  });
  
  // Giữ mũi tên cố định khi sử dụng các nút điều hướng
  document.querySelector('#prevBtn').addEventListener('click', () => {
    arrowFixed = true; // Đặt mũi tên ở vị trí cố định
    slideInfo.innerText = `Thông tin slide ${swiper.activeIndex + 1}`; // Cập nhật thông tin slide khi nhấn nút
  });
  
  document.querySelector('#nextBtn').addEventListener('click', () => {
    arrowFixed = true; // Đặt mũi tên ở vị trí cố định
    slideInfo.innerText = `Thông tin slide ${swiper.activeIndex + 1}`; // Cập nhật thông tin slide khi nhấn nút
  });
  
  // Cập nhật thông tin slide và vị trí mũi tên khi slide thay đổi
  swiper.on('slideChange', () => {
    if (!arrowFixed) {
      setArrowPosition(swiper.activeIndex); // Chỉ di chuyển mũi tên, không cập nhật thông tin
    }
    slideInfo.innerText = `Thông tin slide ${swiper.activeIndex + 1}`; // Cập nhật thông tin slide khi slide thay đổi
  });
  