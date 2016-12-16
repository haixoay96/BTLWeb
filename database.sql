CREATE DATABASE btlweb;
USE btlweb;
CREATE TABLE User (
    Username VARCHAR(100) NOT NULL PRIMARY KEY,
    Password VARCHAR(100) NOT NULL,
    Type INT NOT NULL
);
CREATE TABLE Khoa (
    MaKhoa VARCHAR(100) NOT NULL PRIMARY KEY,
    TenKhoa VARCHAR(100) NOT NULL,
    DiaChi VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Dk VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaKhoa) REFERENCES User(Username)
);
CREATE TABLE Nganh (
    MaNganh VARCHAR(100) NOT NULL,
    TenNganh VARCHAR(100) NOT NULL,
    MaKhoa VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaKhoa) REFERENCES Khoa(MaKhoa)
);
CREATE TABLE KhoaHoc (
    MaKh VARCHAR(100) NOT NULL PRIMARY KEY,
    TenKh VARCHAR(100) NOT NULL
);
CREATE TABLE SinhVien (
    MaSv VARCHAR(100) NOT NULL PRIMARY KEY,
    HoTen VARCHAR(100) NOT NULL,
    MaKh VARCHAR(100) NOT NULL,
    MaNganh VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Dk VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaSv) REFERENCES User(Username),
    FOREIGN KEY (MaKh) REFERENCES KhoaHoc(MaKh)
);
CREATE TABLE GiangVien (
    MaGv VARCHAR(100) NOT NULL PRIMARY KEY,
    HoTen VARCHAR(100) NOT NULL,
    MaKhoa VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaGv) REFERENCES User(Username),
    FOREIGN KEY (MaKhoa) REFERENCES Khoa(MaKhoa)
);
CREATE TABLE LinhVuc(
    MaLv VARCHAR(100) NOT NULL PRIMARY KEY,
    TenLv VARCHAR(100) NOT NULL
);
CREATE TABLE Lv_Gv(
    MaLv VARCHAR(100) NOT NULL,
    MaGv VARCHAR(100) NOT NULL,
    PRIMARY KEY (MaLv,MaGv),
    FOREIGN KEY (MaLv) REFERENCES LinhVuc(MaLv),
    FOREIGN KEY (MaGv) REFERENCES GiangVien(MaGv)
);
CREATE TABLE DeTai(
    TenDt VARCHAR(100) NOT NULL PRIMARY KEY,
    MaGv VARCHAR(100) NOT NULL,
    MaSv VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaGv) REFERENCES GiangVien(MaGv),
    FOREIGN KEY (MaSv) REFERENCES SinhVien(MaSv)
);
CREATE TABLE HoiDong(
    TenHd VARCHAR(100) NOT NULL PRIMARY KEY,
    TenDt VARCHAR(100) NOT NULL,
    MaGv VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaGv) REFERENCES GiangVien(MaGv),
    FOREIGN KEY (TenDt) REFERENCES DeTai(TenDt)
);
CREATE TABLE NghienCuu(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    MaGv VARCHAR(100) NOT NULL,
    TenNc VARCHAR(100) NOT NULL,
    FOREIGN KEY (MaGv) REFERENCES GiangVien(MaGv)
);

INSERT INTO User (Username, Password, Type) VALUES('CNTT', '123456', 1);
INSERT INTO User (Username, Password, Type) VALUES('DTVT', '123456', 1);
INSERT INTO User (Username, Password, Type) VALUES('CKT', '123456', 1);
INSERT INTO User (Username, Password, Type) VALUES('VLKT', '123456', 1);

INSERT INTO Khoa (MaKhoa, TenKhoa , DiaChi, Email,Dk) VALUES('CNTT', 'Cong nghe thong tin', 'Xuan Thuy', 'CNTT@vnu.edu.vn','0');
INSERT INTO Khoa (MaKhoa, TenKhoa , DiaChi, Email,Dk) VALUES('DTVT', 'Dien tu vien thong', 'Xuan Thuy', 'DTVT@vnu.edu.vn','0');
INSERT INTO Khoa (MaKhoa, TenKhoa , DiaChi, Email,Dk) VALUES('CKT', 'Co Hoc Ky Thuat Va Tu Dong Hoa', 'Xuan Thuy', 'CKT@vnu.edu.vn','0');
INSERT INTO Khoa (MaKhoa, TenKhoa , DiaChi, Email,Dk) VALUES('VLKT', 'Vat Ly Ky Thuat', 'Xuan Thuy', 'VLKT@vnu.edu.vn','0');

INSERT INTO LinhVuc (MaLv, TenLv) VALUES('123456', 'Document types');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('123457', 'Surveys and overviews');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('123458', 'Biograpieso');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('123459', 'Design');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('223459', 'General and refences');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('223458', 'Performance');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('223457', 'Validation');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('223456', 'Dynamic Memory');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('323456', 'Sanner');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('323457', 'Touch screen');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('323458', 'Haptic devices');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('423456', 'Printers');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('423457', 'Display and imagers');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('523457', 'Sensor application and deployments');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('523458', 'Metallic interconnect');
INSERT INTO LinhVuc (MaLv, TenLv) VALUES('523459', 'wireless devices');






INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('CNTT', 'Cong nghe thong tin', 'CNTT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('HTTT', 'He thong thong tin', 'CNTT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('KHMT', 'Khoa hoc may tinh', 'CNTT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('TTMMT', 'Truyen thong va mang may tinh', 'CNTT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('DTVT', 'Dien tu vien thong', 'DTVT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('CKT', 'Co ky thua va tu dong hoa', 'CKT');
INSERT INTO Nganh (MaNganh, TenNganh, MaKhoa) VALUES('VLKT', 'Vat ly ky thuat', 'VLKT');

INSERT INTO KhoaHoc (MaKh, TenKh) VALUES('2013', 'QHI-2013');
INSERT INTO KhoaHoc (MaKh, TenKh) VALUES('2014', 'QHI-2014');
INSERT INTO KhoaHoc (MaKh, TenKh) VALUES('2015', 'QHI-2015');
INSERT INTO KhoaHoc (MaKh, TenKh) VALUES('2016', 'QHI-2016');
