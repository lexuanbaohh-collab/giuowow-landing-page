# GiuoWow - Landing page tẩy lồng máy giặt

Trang bán hàng tĩnh (một file `index.html`), deploy lên Vercel, dùng để chạy quảng cáo Facebook/TikTok.

## Cấu trúc
- `index.html` - landing page (CSS/JS inline, màu chủ đạo đỏ theo bao bì).
- `chinh-sach-doi-tra.html`, `chinh-sach-bao-mat.html`, `dieu-khoan.html` - trang chính sách (nền tảng quảng cáo thường yêu cầu).
- `assets/` - ảnh. Các file `.svg` là ảnh minh họa tạm, thay bằng ảnh/video thật cùng tên (hoặc đổi đường dẫn trong `index.html`).
- `apps-script.gs` - mã nhận đơn vào Google Sheets.
- `vercel.json` - cấu hình Vercel.

## Cấu hình (đầu `index.html`, biến `CONFIG`)
| Khóa | Ý nghĩa |
|---|---|
| `webhookUrl` | URL Google Apps Script nhận đơn (bắt buộc để form hoạt động) |
| `fbPixelId` | Facebook Pixel ID |
| `ttPixelId` | TikTok Pixel ID |
| `prices` | Giá theo gói, đã gồm freeship: 1 chai 199.000đ, 2 chai 299.000đ, 3 chai 399.000đ |

## Kết nối Google Sheets
1. Tạo Google Sheet mới -> Tiện ích mở rộng -> Apps Script.
2. Dán nội dung `apps-script.gs` -> Triển khai -> Triển khai mới -> Loại: Ứng dụng web -> Chạy với tư cách: Tôi -> Ai có quyền truy cập: Mọi người.
3. Copy URL `.../exec` dán vào `CONFIG.webhookUrl` trong `index.html`.

## Deploy Vercel
Import repo trên vercel.com -> Framework: Other -> không cần build. Mỗi lần push lên `main` Vercel tự deploy.

## Chạy local
```bash
python3 -m http.server 8321
# mở http://localhost:8321
```

## Theo dõi quảng cáo
Link quảng cáo nên gắn UTM, ví dụ: `?utm_source=facebook&utm_medium=paid&utm_campaign=giuowow_a&utm_content=video1`. UTM, fbp/fbc, event_id được ghi cùng đơn vào Sheets.
