const form = document.getElementById("formSearch");
const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
  // Nếu input chưa hiện, bật nó lên
  if (!form.classList.contains("show")) {
    form.classList.add("show");
    input.focus();
  } else {
    // Nếu đã hiện và có dữ liệu thì chuyển trang
    const query = input.value.trim();
    if (query !== "") {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  }
});
// thong bao them gio hang
 function themvaogiohang(e) {
                          e.preventDefault(); // chặn link chuyển trang
                          alert(
                            "✅ Sản phẩm đã được thêm vào giỏ hàng thành công!"
                          );
                        }

// Cho phép Enter để tìm kiếm
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (query !== "") {
    window.location.href = "./menu-signin.html";
  }
});


