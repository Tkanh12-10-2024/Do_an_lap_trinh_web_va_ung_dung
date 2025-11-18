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


// thêm ảnh 
function themAnh() {
  alert("Đã thêm ảnh")
}
// Hàm xóa món ăn
function xoaMonAn(event) {
  event.preventDefault();
  const ten = document.getElementById("tenMon").value;

  
    const xacNhan = confirm(`❌ Bạn có chắc muốn hủy món không?`);
    if (xacNhan) {
      alert(`🗑️ Món đã được hủy!`);
    } else {
      alert("❎ Đã hủy thao tác.");
    }
}
const modalSuaMon = new bootstrap.Modal(document.getElementById("modalSuaMon"));

document.querySelectorAll(".btn-sua-mon").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const tr = e.currentTarget.closest("tr"); // dùng e.currentTarget luôn là nút
    const tenMon = tr.children[2].textContent;
    const giaMon = tr.children[3].textContent;
    const trangThai = tr.children[4].textContent;

    document.getElementById("editTenMon").value = tenMon;
    document.getElementById("editGiaMon").value = giaMon;
    document.getElementById("editTrangThai").value = trangThai;

    modalSuaMon.show(); // Hiển thị popup
  });
});

function xacNhan() {
  alert("Đã sửa thông tin !")
}
function huy() {
  alert("Đã hủy thao tác")
}