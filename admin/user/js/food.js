// =============================
// Các hàm xử lý sự kiện nút
// =============================

// Hàm thêm món ăn
function themMonAn(event) {
  event.preventDefault(); // Ngăn load lại trang
  const ten = document.getElementById("tenMon").value;
  const gia = document.getElementById("giaMon").value;
  const trangThai = document.getElementById("trangThai").value;

  
    alert(`✅ Đã thêm món: ${ten} - Giá: ${gia} VNĐ - Trạng thái: ${trangThai}`);
  
}

// Hàm sửa món ăn
function suaMonAn(event) {
  event.preventDefault();
  const ten = document.getElementById("tenMon").value;
    alert(`✏️ Đã sửa thông tin món: ${ten}`);
  }


// Hàm xóa món ăn
function xoaMonAn(event) {
  event.preventDefault();
  const ten = document.getElementById("tenMon").value;

  
    const xacNhan = confirm(`❌ Bạn có chắc muốn xóa món "${ten}" không?`);
    if (xacNhan) {
      alert(`🗑️ Món "${ten}" đã được xóa!`);
    } else {
      alert("❎ Đã hủy thao tác xóa.");
    }
}
