/**
 * Google Apps Script nhận đơn từ landing page GiuoWow -> ghi vào Google Sheets.
 * Cách dùng: xem README.md (mục "Kết nối Google Sheets").
 */
var SHEET_NAME = 'Orders';
var HEADERS = ['Thời gian','Họ tên','SĐT','Địa chỉ','Gói','Số lượng','Đơn giá','Tổng tiền','Ghi chú','Thanh toán','Trang','utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','ttclid','event_id','fbp','fbc','Referrer','User agent'];

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
    sh.appendRow([
      d.time, d.name, "'" + d.phone, d.address, d.package, d.qty, d.unitPrice, d.total, d.note, d.payment, d.page,
      d.utm_source, d.utm_medium, d.utm_campaign, d.utm_content, d.utm_term, d.fbclid, d.ttclid,
      d.event_id, d.fbp, d.fbc, d.referrer, d.user_agent
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok: true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
