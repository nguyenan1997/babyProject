
const body = document.querySelector('body');
body.innerHTML = `<div class="container-main">
        <div class="container-navigation">
            <a href="../home.html">Trang chủ</a><span>/</span><span>Chi tiết sản phẩm</span>
        </div>
        <div class="container-detail">
            <div class="container-detail-left">
                <div class="directory">
                    <h2 class="headline">
                        DANH MỤC
                    </h2>
                    <ul class="list-directory">
                        <!-- Đoạn này sẽ render ra -->
                         <li><a href="#">Trẻ Nhỏ - Sơ Sinh</a></li>
                         <li><a href="#">Đồ Chơi Mô Hình</a></li>
                         <li><a href="#">Đồ Chơi Xếp Hình</a></li>
                         <li><a href="#">Đồ Chơi Lắp Ghép</a></li>
                         <li><a href="#">Đồ Chơi Búp Bê</a></li>
                         <li><a href="#">Đồ Chơi Giáo Dục</a></li>
                    </ul>
                </div>
                <div class="banner">
                    <!-- Phần này chưa hiểu yêu cầu, cần xem lại đoạn này có nên chạy slie ảnh hay ko -->
                    <img src="../imgaes/mega-deal.png" alt="Ảnh Banner">
                     
                </div>
                <div class="TopSeller">
                    <!-- Đoạn này chỉ hiển thị 3 sản phẩm đầu tiên trong phần HotSaleProduct-->
                     <h2 class="headline-hotsale">Top bán chạy</h2>
                     <ul class="list-topSeller">
                        <li class="product-hotsale">
                            <div class="image-product">
                                <img src="../imgaes/lego2.png" alt="Ảnh sản phẩm">
                                <p class="discount-price">-30%</p>
                            </div>
                            <div class="contanier-detail-product">
                                <p class="name-product">Xe ô tô điện trẻ em TR1958</p>
                                <p class="price-product">888,000 VNĐ</p>
                            </div>
                        </li>
                        <li class="product-hotsale">
                            <div class="image-product">
                                <img src="../imgaes/lego2.png" alt="Ảnh sản phẩm">
                                <p class="discount-price">-30%</p>
                            </div>
                            <div class="contanier-detail-product">
                                <p class="name-product">Xe ô tô điện trẻ em TR1958</p>
                                <p class="price-product">888,000 VNĐ</p>
                            </div>
                        </li>
                        <li class="product-hotsale">
                            <div class="image-product">
                                <img src="../imgaes/lego2.png" alt="Ảnh sản phẩm">
                                <p class="discount-price">-30%</p>
                            </div>
                            <div class="contanier-detail-product">
                                <p class="name-product">Xe ô tô điện trẻ em TR1958</p>
                                <p class="price-product">888,000 VNĐ</p>
                            </div>
                        </li>
                     </ul>
                </div>
            </div>
            <div class="container-detail-right">
                
            </div>
        </div>
    </div>`
