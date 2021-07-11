/**
 * * Câu hỏi phỏng vấn
 * Từ khoá khai báo biến [var, let, const]. Phân biệt giữa let và const.
 * - Khi khai báo bằng var nếu lặp lại thì nó sẽ ghi đè biến var cũ
 * - Phạm vi hoạt động:
 * + var: Trên toàn bộ scope.
 * + let: Trong các scope khác nhau nếu khai báo biến cùng tên thì các biến sẽ phân biệt. Lưu ý trong cùng 1 scope không thể khai báo cùng tên biến (báo lỗi).
 * + const: Giống như let tuy nhiên giá trị nó không thể gán lại. Đối vs object và arr khi khai báo không thể gán  = object và arr mới mà chỉ có thể thay đổi giá trị thuộc tính hoặc phần bên trong chúng mà thôi.
 * --> Trong es6 dùng let thay thế cho var.
 *
 * - Cơ chế hoisting(chỉ hỗ trợ var. Đối vs let và cons không có tác dụng).
 */

let title = "cybersoft";
{
  title = "cyberlearn";
  console.log("title", title);
}
console.log("titlte", title);

//DOM 1 thẻ
// var btn = document.querySelector('#btn0');
// btn.onclick = function(){
//     alert(btn.innerHTML);
// }

// DOM toàn bộ
// var arrButton = document.querySelectorAll('button');
// for(let i=0; i <= arrButton.length; i++){
//     //Mỗi lần duyệt lấy ra 1 thẻ button
//     let button = arrButton[i];
//     //Định nghĩa sự kiện click cho button đó
//     button.onclick = function(){
//         alert(button.innerHTML);
//     }
// }

// const DOMAIN = 'https://scvy.myclass.vn/api/quanlysinhvien/laydanhsachsinhvien';
// // DOMAIN = 'abc'//Báo lỗi

// const SETTING = {
//     TOKEN: 'XYZT'
// };
// SETTING = {};//Không thể khai báo lại. Báo lỗi

/* ----------------------------Arrow function------------------------------- */
/**Arrown function:
 * + Khai báo ngắn gọn hơn so vs function.
 * + Đối với hàm có 1 tham số thì không cần ().
 * + Đối với hàm có duy nhất 1 lệnh return thì không cần {} và chữ return.
 * + Arrow function thường dùng để khai báo hàm, không hỗ trợ khai báo prototype (lớp đối tượng).
 */

//es5
function showMess() {
  console.log("Hello");
}
showMess();

//es6
// let showMessES6 = ()=>{
//     console.log('Hello');
// }
let showMessES6 = (name) => "hello" + name;
showMess();

/**--------------------------Ngữ cảnh con trỏ this-----------------------------------------------**/
/**
 * + Mặc định this sẽ trỏ về window.
 * + Trong object thì this sẽ là object.
 * + Khi con trỏ this không xác định được ngữ cảnh nó sẽ trỏ về windows
 */

// var maSo = 123;
// // window.maSo = 123;
// // maSo = 123;
// // 3 cách khai báo trên giống nhau
// console.log('maSo', maSo)

let hocVien = {
  maSo: 1,
  hoTen: "Nguyen Van A",
  hienThiThongTin: function () {
    let hienThi = () => {
      console.log("maso", this.maSo);
      console.log("hoTen", this.hoTen);
    };
    hienThi();
  },
};
hocVien.hienThiThongTin();
/**------------------------Bài tập ES6 function arrow--------------------------- */
// let arrColor = ['red', 'green', 'blue', 'yellow', 'pink', 'black', 'purple']

//Cách 1: Tạo từng button
// function renderButton(){
//     for(let i = 0; i < arrColor.length; i++){
//         //Lấy ra màu sau mỗi lần lặp
//         let color =  arrColor[i];
//         //Tạo ra 1 nút button
//         let button = document.createElement('button');
//         //Định nghĩa button
//         button.innerHTML = color;
//         button.className = 'btn btn-default m-2 text-capitalize text-white';
//         button.style.backgroundColor = color;
//         button.onclick = function(){
//             //Định nghĩa sự kiện khi người dùng click vào nút button thì ngôi nhà đổi màu
//             document.querySelector('#house').style.color = color;
//             // document.querySelector('#title').style.color = color;
//         }
//         //Append lên giao diện
//         document.querySelector('#arrButton').appendChild(button);
//     }
// }
// renderButton();

//Cách 2: Tạo button bằng chuỗi
// let renderButton = () => {
//     let content = ``;
//     for(let i = 0; i < arrColor.length; i++){
//         let color =  arrColor[i];
//         content += `
//             <button class="btn btn-default m-2 text-capitalize text-white"
//             style="background-color: ${color}"
//             onclick="changeColor('${color}')">
//             ${color}
//             </button>
//         `;
//     }
//     document.querySelector('#arrButton').innerHTML = content;
// }
// renderButton();
// window.changeColor = color => {
//     document.querySelector('#house').style.color = color;
// }

/**------------------------Default params----------------------------------------- */
let getUserInfo = (name = "Hien", age = 24) => {
  if (age > 0 && age < 30) {
    console.log(`${name} đang còn trẻ ${name} muốn đi chơi`);
  } else {
    console.log(`chơi gì tầm này`);
  }
};
// getUserInfo();
// getUserInfo('tên');
// getUserInfo('tên',31);

/**------------------------Rest params----------------------------------------- */
/**
 * overload: hàm chồng --> những hàm trùng tên với nhau, khác số lượng tham số hoặc khác kiểu dữ liệu (c++, c#, java,...)
 * Javascript không hỗ trợ khái niệm trên
 */

function tinhTong(...restParam) {
  //[5, 10, 7]
  switch (restParam.length) {
    case 2: {
      //Xử lý khi có 2 tham số
      return restParam[0] + restParam[1];
    }
    case 3: {
      //Xử lý 3 tham số
      return restParam[0] + restParam[1] + restParam[2];
    }
    default:
      return "Tham số không hợp lệ"; //Trường hợp nhiều tham số
  }
}
let kq1 = tinhTong(5, 10, 7);
let kq2 = tinhTong(5, 10);
let kq3 = tinhTong(5, 10, 2, 4, 4, 5);
console.log("kq1", kq1);
console.log("kq2", kq2);
console.log("kq3", kq3);
/**------------------------Rest params----------------------------------------- */
/**
 * - Dùng để sao chép giá trị của object cũng như array.
 * - Thêm thuộc tính dễ dàng hơn: object = {...object, [thuoc_tinh_da_co]; gia_tri}
 */
let hocVien1 = { ma: 1, ten: "Nguyen Van A" };
let hocVien2 = { ...hocVien1, ma: 2, lop: "BC08E" }; // Gán giá trị thuộc tính chỉ trên 1 dòng

// hocVien2.ma = 2;
// hocVien2.ten = 'Nguyen Van B';

console.log("hocVien1", hocVien1);
console.log("hocVien2", hocVien2);

let arr1 = [1, 2, 3, 5];
let arr2 = [...arr1, 4];
// arr2.push(4);
console.log("arr1", arr1);
console.log("arr2", arr2);
/**------------------------Destructering----------------------------------------- */

let product = {
  id: "111",
  name: "Toshiba",
  price: 10000,
  img: "https://picsum.photos/200/200",
  showInfo: function () {
    console.log("id", product.id);
    console.log("name", product.name);
    console.log("price", product.price);
  },
};
//es5
// let id = product.id;
// let name = product.name;
//es6
//...restParam sẽ đại diẹn cho 1 object chứa các thuộc tính còn lại
let { name, showInfo, ...restParam } = product;
console.log("...restParam", restParam);
showInfo();

//Array: tuple
let hoc_Vien = [
  "1",
  "Nguyen Van A",
  function () {
    console.log("Thong tin: ");
  },
];
let [maHocVien, tenHocVien, ...rest] = hoc_Vien;

console.log("maHocVien", maHocVien);
console.log("tenHocVien", maHocVien);
console.log("rest", rest);
// hienThiThongTinHocVien();

/**------------------------Object Literal----------------------------------------- */

let lopHoc = "BC08E";
let hienThiThongTinLopHoc = function () {
  console.log("Thông tin lớp học");
};

let thongTinLopHoc = {
  maLop: "1",
  lopHoc,
  hienThiThongTinLopHoc,
};

thongTinLopHoc.hienThiThongTinLopHoc();
console.log("lopHoc", thongTinLopHoc);

/**------------------------Dynamic Key----------------------------------------- */

let key = "mã điện thoại";
let key_Gia = "giá";
let dienThoai = {
  [key]: 1,
  ten: "iphone",
  thongTinDienThoai: function () {
    console.log("mã", dienThoai.ma);
    console.log("tên", dienThoai.ten);
  },
};

dienThoai = { ...dienThoai, [key_Gia]: 1000 };
console.log("mã", dienThoai[key]);
console.log("giá", dienThoai[key_Gia]);

console.log("dienThoai", dienThoai);

/**------------------------Bài Tập ES6----------------------------------------- */
document.querySelector("#btnXacNhan").onclick = function () {
  let arrInput = document.querySelectorAll("form input, form select");
  let nhanVien = {};
  for (let i = 0; i < arrInput.length; i++) {
    //Mỗi lần duyệt lấy ra 1 tag
    let input = arrInput[i];
    //es5
    // let id = input.id;
    // let value = input.value;
    // es6
    let { id, value } = input;
    nhanVien = { ...nhanVien, [id]: value };
  }
  //nhanVien = {ma:1, ten: 'abc', luongCB: '1000', chucVu: 'Giám đốc'}
  let content = ``;
  for (let key in nhanVien) {
    //(1) key ='ma',(2) key='ten', (3) key='luongCB', (4)key='chucVu'
    content += `<tr><td>${key}</td> <td>${nhanVien[key]}</td></tr>`;
  }

  document.querySelector("#tblThongTinNhanVien").innerHTML = content;

  console.log("nhanVien", nhanVien);
  console.log("arrInput", arrInput);
};

/**------------------------For in, for of----------------------------------------- */

let arrProduct = [
  {
    id: 1,
    name: "iphone X",
    price: 10000,
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 2,
    name: "iphone XS",
    price: 20000,
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 3,
    name: "iphone XL",
    price: 30000,
    img: "https://picsum.photos/id/3/200/200",
  },
];

/** for
for(let i = 0; i < arrProduct.length; i++){
    let product = arrProduct[i];
    console.log('productFor', product);
}*/

/**for of: Mỗi lần duyệt lấy ra 1 object --> duyệt đến hết mảng
for (let product of arrProduct){
    console.log('productForOf', product);
} */

/**for in: Mỗi lần duyệt lấy ra index của mảng và dùng để duyệt key của object
 for (let index in arrProduct){
    let product = arrProduct[index];
    console.log('productForIn', product);
}*/

let prod = {
  id: 1,
  name: "iphone X",
  price: 10000,
  img: "https://picsum.photos/id/1/200/200",
};

for (let key in prod) {
  //key là tên của từng thuộc tính sau mỗi lần duyệt
  //để lấy value của object đó object[key]
  console.log(key, prod[key]);
}

//Dữ liệu mảng được thể hiện dưới dạng object
let arrResult = {
  ahsdbac: {
    id: 1,
    name: "iphone X",
    price: 10000,
    img: "https://picsum.photos/id/1/200/200",
  },
  cxdunzxa: {
    id: 2,
    name: "iphone XS",
    price: 20000,
    img: "https://picsum.photos/id/2/200/200",
  },
  kdsdkasmd: {
    id: 3,
    name: "iphone XL",
    price: 30000,
    img: "https://picsum.photos/id/3/200/200",
  },
};

for (let key in arrResult) {
  let product = arrResult[key];
  console.log("product", product);
}

import { DOMAIN, USER_LOGIN } from "./setting/setting.js";
import DOMAIN_API from "./setting/setting.js";
import { HocVien } from "./setting/setting.js";

console.log("domain", DOMAIN);
console.log("userLogin", USER_LOGIN);
console.log("domain_API", DOMAIN_API);

let hVien = new HocVien();
console.log("hocVien", hVien);

/**------------------------Oop ES6----------------------------------------- */
/** 4 tính chất oop
 * - Tính trừu tượng (Abstraction): Đặc tả dữ liệu trên thực tế thành các thuộc tính và phương thức của lớp đối tượng.
 * - Tính đóng gói (Encapsolution): Các phương thức thuộc tính chỉ có thể truy xuất thông qua đối tượng.
 * - Tính kế thừa (Inheritance).
 * - Tính đa hình (Polymorphism), JS không có.
 */

import { SinhVien } from "./models/SinhVien.js";
let sv = new SinhVien(1, "Nguyen Van A");
console.log("sinhVien", sv);

class NhanVien {
  maSo = "";
  hoTen = "";
  ngaySinh = "";
  luongCB = "";

  constructor() {}

  tinhLuong() {
    return 1000;
  }

  hienThiThongTin() {
    console.log("Mã số: ", this.maSo);
    console.log("Họ tên: ", this.hoTen);
    console.log("Ngày sinh: ", this.ngaySinh);
    console.log("Lương CB: ", this.luongCB);
  }
}

class GiaoVien extends NhanVien {
  chucVu = "";
  constructor(ma, ten) {
    super(ma, ten);
  }

  tinhLuong() {
    //Tên hàm giống nhau sẽ overide
    super.tinhLuong() + 2000;
  }

  hienThiThongTin() {
    super.hienThiThongTin();
    console.log("Chức vụ: ", this.chucVu);
  }

  layDanhSachMonHocPhanCong() {
    console.log("Danh sách môn học được phân công: PLDC, NNLCBMLN");
  }
}

class BaoVe extends NhanVien {
  khuVuc = "";
  constructor() {
    super();
  }
}

let gv = new GiaoVien(1, "Nguyen Van A");
gv.chucVu = "Hieu Truong";
gv.hienThiThongTin();

let bv = new BaoVe();
bv.chucVu = "Bao Ve";
bv.hienThiThongTin();

/************************Filter************************/
let mangSanPham = [
  { MaSP: 1, TenSP: "Sony Xperia XZ2", Gia: 17500000, HangSX: "SONY" },
  { MaSP: 2, TenSP: "Sony Xperia XZ1", Gia: 15500000, HangSX: "SONY" },
  { MaSP: 3, TenSP: "Sony Xperia XZ Premium", Gia: 18500000, HangSX: "SONY" },
  { MaSP: 4, TenSP: "Google Pixel XL", Gia: 27500000, HangSX: "GOOGLE" },
  { MaSP: 5, TenSP: "Google Pixel 2", Gia: 17500000, HangSX: "GOOGLE" },
  { MaSP: 6, TenSP: "Samsung Galaxy Note 9", Gia: 17500000, HangSX: "SAMSUNG" },
  {
    MaSP: 7,
    TenSP: "Samsung Galaxy S10 Plus",
    Gia: 27500000,
    HangSX: "SAMSUNG",
  },
  { MaSP: 8, TenSP: "Samsung Galaxy S10 5G", Gia: 37500000, HangSX: "SAMSUNG" },
  { MaSP: 9, TenSP: "Iphone X", Gia: 27500000, HangSX: "APPLE" },
  { MaSP: 10, TenSP: "Iphone XS", Gia: 17500000, HangSX: "APPLE" },
];

/*Lấy ra các sản phẩm thuộc hãng sản xuất là sony*/
/*ES5
let result = [];
for (let i = 0; i < mangSanPham; i++) {
  let sanPham = mangSanPham[i];
  if (sanPham.HangSX === "SONY") {
    result.push(sanPham);
  }
}
console.log("Sản phẩm SONY: ", result);
*/
//ES6
let result = mangSanPham.filter((sanPham) => sanPham.HangSX === "SONY");
console.log("SONY: ", result);

let price = mangSanPham.filter((sanPham) => sanPham.Gia < 17500000);
console.log("Price < 17.5: ", price);

/************************Find************************/
/**Thực hiện trên thuộc tính định danh thoả điều kiện arrow function, không tìm thấy trả về undefine */
let dienThoai8 = mangSanPham.find((sanPham) => sanPham.MaSP === 8);
if (dienThoai8) {
  dienThoai8.Gia = 10000; //Cập nhật lại giá
  console.log("Điện thoại số 8: ", dienThoai8);
} else {
  console.log("Không tìm thấy điện thoại số 8");
}

/************************Find Index************************/
/**Tìm ra để xoá hoặc chèn phần tử*/
let index = mangSanPham.findIndex((sanPham) => sanPham.MaSP === 8);
if (index !== -1) {
  //Tìm thấy
  mangSanPham.splice(index, 1);
  console.log("Sau khi xoá: ", mangSanPham);
}

/************************Foreach************************/
/**Duyệt qua các phần tử của mảng*/
mangSanPham.forEach((sanPham, index) => {
  console.log(`Sản phẩm ${index}`, sanPham);
});

/************************Map************************/
/**Biến mảng này thành mảng khác
 * vd: biến mảng sản phẩm thành mảng string, biến mảng object này thành object khác
 */
let mangStringSP = mangSanPham.map((sanPham, index) => {
  return `<p>${sanPham.TenSP}</p>`;
});
console.log("mangSPString", mangStringSP);

let mangSP = mangSanPham.map((sanPham, index) => {
  return { key: sanPham.MaSP, value: sanPham.TenSP };
});
console.log(mangSP);

/************************Reduce************************/
/**Biến đổi mảng thành 1 giá trị. Thường dùng tính tổng, tạo ra 1 chuỗi, 1 object, 1 array mới*/
let tongTienSp = mangSanPham.reduce((tongTien, sanPham, index) => {
  tongTien += sanPham.Gia;
  return tongTien;
}, 0); //lần dầu tiên có giá trị là 0, nếu không có sẽ là undefine
//Tham số thứ 2 của hàm reduce là giá trị bắt đầu cho lần đầu tiên
console.log("tongTienSP", tongTienSp);

let htmlSP = mangSanPham.reduce((htmlContent, sanPham, index) => {
  htmlContent += `
        <div class = "col-md-4 mt-2">
            <div class = "card">
                <img src = "https://picsum.photos/id/${index}/200/200" />
                <div class = "card-body">
                    <p>Tên sản phẩm: ${sanPham.TenSP}</p>
                    <p>Giá: ${sanPham.Gia}</p>
                </div>
            </div>
        </div>
    `;
  return htmlContent;
}, "");
document.querySelector("#danhSachSanPham").innerHTML = htmlSP;
console.log("htmlSP", htmlSP);

/************************Sort************************/
/**Sắp xếp các phần tử của mảng*/

let mangSPTheoTen = mangSanPham.sort((spKeTiep, sp) => {
  let tenSPKeTiep = spKeTiep.TenSP.toLowerCase(); //Chuyển đổi tên thành thường hoặc hoa hết
  let tenSP = sp.TenSP.toLowerCase();
  if (tenSPKeTiep < tenSP) {
    //Nếu sai return -1 để đảo vị trí
    return -1;
  }
  return 1;
});
// mangSPTheoTen.reverse();
console.log("mangXPTheoTen", mangSPTheoTen);

let mangSPTheoGia = mangSanPham.sort((spKeTiep, sp) => {
  return spKeTiep.Gia - sp.Gia;
});
console.log("mangXPTheoGia", mangSPTheoGia);
