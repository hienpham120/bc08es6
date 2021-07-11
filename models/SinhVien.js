/*es5
function SinhVien(ma, hoTen) {
    this.maSinhVien = ma;
    this.hoTen = hoTen;
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.tinhDiemTrungBinh = function () {
        return(Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) / 3)
    }
}*/

//es6
export class SinhVien{
    constructor(ma, hoTen){
        this.maSinhVien = ma;
        this.hoTen = hoTen;
    }
    //Khai báo thuộc tính
    maSinhVien = '';
    hoTen = '';
    diemToan = '';
    diemLy = '';
    diemHoa = '';
    //Khai báo phương thức
    tinhDiemTrungBinh = () => {
        return(Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) / 3)
    }
}