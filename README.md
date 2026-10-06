# SchoolVerse Virtual Lab

Bộ phòng thí nghiệm ảo 3D dành cho SchoolVerse.

## Thành phần

### 1. Đo tốc độ xe lăn 3D
File: `labs/physics_speedcart.html`

- Mô hình đường ray, xe lăn và cổng quang điện 3D.
- Kéo cổng quang điện A/B dọc theo ray.
- Xoay camera, zoom.
- Điều chỉnh độ dốc và hệ số ma sát.
- Đo khoảng cách, thời gian và tốc độ trung bình.
- Ghi nhiều lần đo.

### 2. Phòng Vật lý 3D
File: `labs/physics_lab.html`

Các thí nghiệm:
- Khảo sát lực ma sát.
- Phản xạ ánh sáng: mặt gương, pháp tuyến, thước đo góc, tia tới và tia phản xạ.
- Mạch điện 3D: pin, công tắc, bóng đèn, điện trở, ampe kế, vôn kế.
- Khảo sát sóng âm.
- Truyền nhiệt.
- Đòn bẩy.
- Nam châm điện.
- Lực đẩy Ác-si-mét.
- Đo khối lượng riêng.

### 3. Phòng Hóa học 3D
File: `labs/chemistry_lab.html`

Các thí nghiệm:
- Nhận biết axit/bazơ/trung tính bằng chỉ thị màu.
- Phản ứng tạo kết tủa.
- Trung hòa axit–bazơ.
- Điều chế và nhận biết khí CO2.
- Khảo sát tốc độ phản ứng.
- Tách hỗn hợp bằng lọc.

### 4. Phòng Sinh học 3D
File: `labs/biology_lab.html`

Các thí nghiệm:
- Quan sát tế bào biểu bì hành bằng kính hiển vi.
- Thẩm thấu qua màng.
- Quang hợp và khí O2.
- Thoát hơi nước ở lá.
- Nảy mầm của hạt.
- Nhịp tim trước/sau vận động.

## Chạy thử

Mở `index.html` trong trình duyệt.

Các phòng thí nghiệm dùng Three.js từ CDN, vì vậy cần Internet để tải thư viện 3D.

## Đưa lên GitHub

1. Giải nén thư mục.
2. Tạo repository mới hoặc dùng repository SchoolVerse hiện có.
3. Upload toàn bộ nội dung thư mục này vào root repository.
4. Commit thay đổi.

## Deploy Vercel

Có thể import repository trực tiếp vào Vercel dưới dạng static site. Entry page là `index.html`.

## Cấu trúc

```text
SchoolVerse_Virtual_Lab_Git/
├── index.html
├── README.md
└── labs/
    ├── physics_speedcart.html
    ├── physics_lab.html
    ├── chemistry_lab.html
    └── biology_lab.html
```
