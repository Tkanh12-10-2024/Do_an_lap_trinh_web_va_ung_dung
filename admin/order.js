document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // 1. NÚT XÓA
  // ==========================
  document.querySelectorAll(".btn-danger").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const id = row.children[0].innerText;

      if (confirm(`🗑 Bạn muốn xóa đơn hàng ${id}?`)) {
        alert(`✔ Đã xóa đơn hàng ${id} `);
      }
    });
  });

  // ==========================
  // 2. NÚT TICK HOÀN TẤT
  // ==========================
  document.querySelectorAll(".btn-success").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const id = row.children[0].innerText;
      const name = row.children[1].innerText;
      const total = row.children[2].innerText;
      const date = row.children[3].innerText;

      alert(
        "🎉 HOÀN TẤT ĐƠN HÀNG\n\n" +
        `• Mã đơn: ${id}\n` +
        `• Khách: ${name}\n` +
        `• Tổng tiền: ${total}\n` +
        `• Ngày đặt: ${date}\n` +
        `• Trạng thái: Hoàn tất`
      );
    });
  });

  // ==========================
  // 3. NÚT CHI TIẾT
  // ==========================
  document.querySelectorAll(".btn-detail").forEach((btn) => {
    btn.addEventListener("click", function () {

      const row = this.closest("tr");
      const id = row.children[0].innerText;
      const name = row.children[1].innerText;

      // Dữ liệu mẫu cố định
      const phone = "0123 456 789";
      const address = "123 Lê Lợi - TP.HCM";
      const note = "Không cay";

      // Gán vào modal
      document.getElementById("ct-id").innerText = id;
      document.getElementById("ct-name").innerText = name;
      document.getElementById("ct-phone").innerText = phone;
      document.getElementById("ct-address").innerText = address;
      document.getElementById("ct-note").innerText = note;

      // Hiện modal
      new bootstrap.Modal(document.getElementById("modalChiTiet")).show();

      // Reset nút sửa về trạng thái ban đầu
      resetEditButton();
    });
  });

  // ==========================
// 4. NÚT SỬA TRONG MODAL (chỉ nhập, KHÔNG lưu)
// ==========================
const btnEdit = document.querySelector("#modalChiTiet .btn-warning");

btnEdit.addEventListener("click", function () {
  const name = document.getElementById("ct-name");
  const phone = document.getElementById("ct-phone");
  const address = document.getElementById("ct-address");
  const note = document.getElementById("ct-note");

  // Nếu chưa chuyển sang input → chuyển
  if (!name.dataset.editing) {
    // Chuyển sang input nhưng giữ dữ liệu gốc trong dataset
    name.dataset.old = name.innerText;
    phone.dataset.old = phone.innerText;
    address.dataset.old = address.innerText;
    note.dataset.old = note.innerText;

    name.innerHTML = `<input class="form-control" value="${name.innerText}">`;
    phone.innerHTML = `<input class="form-control" value="${phone.innerText}">`;
    address.innerHTML = `<input class="form-control" value="${address.innerText}">`;
    note.innerHTML = `<input class="form-control" value="${note.innerText}">`;

    name.dataset.editing = "true";
    this.textContent = "💾 Lưu";
    this.classList.remove("btn-warning");
    this.classList.add("btn-primary");
    return;
  }

  // Nếu đang ở chế độ Lưu → chỉ hiện alert, KHÔNG cập nhật dữ liệu
  const newName = name.querySelector("input").value;
  const newPhone = phone.querySelector("input").value;
  const newAddress = address.querySelector("input").value;
  const newNote = note.querySelector("input").value;

  alert(
    `✔ Bạn đã nhập thông tin mới (không lưu):\n` +
    `• Họ tên: ${newName}\n` +
    `• SĐT: ${newPhone}\n` +
    `• Địa chỉ: ${newAddress}\n` +
    `• Ghi chú: ${newNote}`
  );

  // Trả lại dữ liệu cũ
  name.innerText = name.dataset.old;
  phone.innerText = phone.dataset.old;
  address.innerText = address.dataset.old;
  note.innerText = note.dataset.old;

  delete name.dataset.editing;
  delete name.dataset.old;
  delete phone.dataset.old;
  delete address.dataset.old;
  delete note.dataset.old;

  this.textContent = "✏ Sửa";
  this.classList.remove("btn-primary");
  this.classList.add("btn-warning");
});


  

  // ==========================
  // 5. NÚT XÁC NHẬN TRONG MODAL
  // ==========================
  document.querySelector("#modalChiTiet .btn-success").addEventListener("click", function () {
    const id = document.getElementById("ct-id").innerText;
    alert(`✔ Xác nhận đơn hàng ${id} `);
  });

});
function huyDon() {
  alert("❗ Bạn đã hủy đơn hàng!");
}
