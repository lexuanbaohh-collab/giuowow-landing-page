# GiuoWow - Landing page tẩy lồng máy giặt

Trang bán hàng tĩnh (một file `index.html`) theo phong cách trang sản phẩm TikTok Shop (màu hồng `#FE2C55`), deploy lên Vercel để chạy quảng cáo. Không dùng Pixel/mã theo dõi nào.

## Cấu trúc
- `index.html` - landing page (CSS/JS inline). 4 tab: Tổng quan, Đặc điểm, Mô tả, Đề xuất.
- `chinh-sach-doi-tra.html`, `chinh-sach-bao-mat.html`, `dieu-khoan.html` - trang chính sách.
- `assets/` - ảnh. Các file `.svg` là ảnh minh họa tạm (lồng bẩn, trước/sau, phản hồi khách), thay bằng ảnh thật (cùng tên hoặc đổi đường dẫn trong `index.html`).
- `apps-script.gs` - mã nhận đơn vào Google Sheets.
- `vercel.json` - cấu hình Vercel.

## Gói giá (sửa trong hàm `onBuyClick` ở cuối `index.html`)
1 chai 199.000đ · Combo 2 chai 299.000đ · Combo 3 chai 399.000đ - đều miễn phí vận chuyển, thanh toán khi nhận hàng.

## Kết nối Google Sheets (bắt buộc để form nhận đơn)
1. Tạo Google Sheet mới -> Tiện ích mở rộng -> Apps Script.
2. Dán nội dung `apps-script.gs` -> Triển khai -> Triển khai mới -> Loại: Ứng dụng web -> Chạy với tư cách: Tôi -> Ai có quyền truy cập: Mọi người.
3. Copy URL `.../exec` dán vào `CONFIG.webhookUrl` (đầu khối `<script>` cuối `index.html`).

Khi chưa có `webhookUrl`, form sẽ báo khách gọi hotline thay vì báo thành công giả.

## Deploy Vercel
Import repo trên vercel.com -> Framework: Other -> không cần build. Mỗi lần push lên `main` Vercel tự deploy.

## Chạy local
```bash
python3 -m http.server 8321
# mở http://localhost:8321
```

## Theo dõi nguồn quảng cáo
Gắn UTM vào link quảng cáo, ví dụ `?utm_source=facebook&utm_medium=paid&utm_campaign=giuowow_a&utm_content=video1`. UTM được ghi cùng đơn vào Sheets.
