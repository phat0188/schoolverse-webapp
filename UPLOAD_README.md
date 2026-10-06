# SchoolVerse V1.3.2 + Virtual Lab 3D (FIXED)

Đây là source hoàn chỉnh dựa trên commit `779c59c` và đã tích hợp Virtual Lab theo cách không ghi đè giao diện chính.

## Đã giữ nguyên
- `index.html` gốc của Vite
- `App.jsx` V1.3.2
- `styles.css`
- `campus.webp`
- `school-map.webp`
- `classroom-v13.webp`
- `main.jsx`, `package.json`, `vite.config.js`

## Đã thêm
- `public/virtual-lab/index.html`
- `public/virtual-lab/labs/physics_speedcart.html`
- `public/virtual-lab/labs/physics_lab.html`
- `public/virtual-lab/labs/chemistry_lab.html`
- `public/virtual-lab/labs/biology_lab.html`

## Điểm vào Virtual Lab
- Menu bên trái: **Thí nghiệm 3D**
- Nút **Thí nghiệm** trong lớp học
- Hotspot **Phòng STEM** trên bản đồ

Tất cả đều mở `/virtual-lab/index.html`.

## Upload GitHub
Khuyến nghị: xóa/khôi phục repository về commit `779c59c`, sau đó upload **toàn bộ nội dung của thư mục này** vào root repository.

Không upload thư mục cha bao quanh nếu GitHub đang yêu cầu các file ở root.

## Lưu ý
Các lab tải Three.js từ `esm.sh`, vì vậy cần Internet khi mở mô phỏng 3D.
