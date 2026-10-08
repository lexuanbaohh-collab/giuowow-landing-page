/**
 * Google Apps Script nhận đơn từ landing page GiuoWow -> ghi vào Google Sheets.
 * Cách dùng: xem README.md (mục "Kết nối Google Sheets").
 */
var SHEET_NAME = 'Orders';
var HEADERS = ['Thời gian','Mã đơn','Họ tên','SĐT','Địa chỉ','Ghi chú','Sản phẩm','Gói','Số lượng','Đơn giá','Tổng tiền','utm_source','utm_medium','utm_campaign','utm_content','utm_term','Trang','Referrer','Thời gian trên trang (s)','User agent'];

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
    sh.appendRow([
      d.timestamp, d.order_code, d.fullname, "'" + d.phone, d.address, d.note, d.product_name, d.option_labels,
      d.quantity, d.unit_price, d.total_value,
      d.utm_source, d.utm_medium, d.utm_campaign, d.utm_content, d.utm_term,
      d.page_url, d.referrer, d.session_duration, d.client_user_agent
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok: true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
