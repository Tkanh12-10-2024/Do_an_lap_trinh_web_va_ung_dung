
  // Chờ toàn bộ DOM được tải xong
  document.addEventListener("DOMContentLoaded", function() {

    // Xử lý nút XÓA
    const deleteButtons = document.querySelectorAll(".btn-danger");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function() {
        const row = this.closest("tr");
        const orderId = row.querySelector("td:first-child").innerText;

        const confirmDelete = confirm(`🗑️ Bạn có chắc chắn muốn xóa đơn hàng ${orderId} không?`);
        if (confirmDelete) {
          alert(`✅ Đã xóa đơn hàng ${orderId}`);
          // 👉 Có thể xóa dòng khỏi bảng (nếu muốn)
          // row.remove();
        }
      });
    });

    // Xử lý nút TICK (Hoàn tất)
    const successButtons = document.querySelectorAll(".btn-success");
    successButtons.forEach((btn) => {
      btn.addEventListener("click", function() {
        const row = this.closest("tr");
        const orderId = row.querySelector("td:first-child").innerText;

        alert(`🎉 Đơn hàng ${orderId} đã được xác nhận hoàn tất!`);
      });
    });

  });
