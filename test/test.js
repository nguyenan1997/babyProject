function openNav() {
  document.querySelector(".sidenav").style.width = "250px"; // Thay đổi chiều rộng
  document.querySelector("#main").style.marginLeft = "250px"; // Di chuyển nội dung
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0"; // Đặt lại chiều rộng
  document.querySelector("#main").style.marginLeft = "0"; // Đặt lại vị trí nội dung
}

class aa {
  constructor(ss) {
    this.bb = 8;
    this.cc = 2;
    this.dd = ss
  }
  hello() {
    console.log(this.bb);
    this.ee = function gg() {
      console.log(this.bb, this.cc)
    }
  }
}


let kk = new aa('skdjhfkjw')
let ll = new aa('d')
ll.bb = 9
console.log(kk.bb)
console.log(ll.bb)
kk.ee()

Function
let haha = aa
typeof haha === 'function'


class GioHang {
  constructor() {
      /** @type {ItemGioHang[]} */
      this.items = []
  }
  render(parent) {
    this.element = document.createElement('div')
    parent.append(this.element)
  }
  addItem(id, gia) {
      let existed = this.items.find(item => item.id === id)
      if (existed) {
        existed.update(1)
      } else {
        existed = gia > 1_000_000_000 ? new ItemGioHangDacBiet() : new ItemGioHang(id, 1, gia)
        this.items.push(item)
        existed.render(this.element)
      }
  }
  remove(id, soluong) {
      const item = this.items.find(item => item.id === id)
      if (item) {
          item.update(soluong)
      }
  }
}
class ItemGioHang {
  #giaHuuNghi
  constructor(id, soluong, gia) {
      this.id = id
      this.soLuong = soluong
      this.gia = gia
      this.#giaHuuNghi = gia / 3
  }
  render(/** @type HTMLElement */parent) {
      this.element = document.createElement('div')
      this.element.onclick = () => {
        this.update(1)
      }
      parent.appendChild(this.element)
  }
  update(soluong) {
      this.soLuong += soluong
      this.element.innerText(this.soLuong + '|' + (this.soLuong * this.gia) + '|' + this.#giaHuuNghi)
  }
}


class ItemGioHangDacBiet extends ItemGioHang {
  render(/** @type HTMLElement */parent) {
    this.element = document.createElement('span')
    this.element.onclick = () => {
      this.update(1)
    }
    parent.appendChild(this.element)
  }
  giaoHangNhanh() {

  }
}
