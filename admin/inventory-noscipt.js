let inventory = [
  { id: "NL01", name: "Lẩu bò", quantity: 20, unit: "thùng", date: "2025-10-20" },
  { id: "NL02", name: "Lẩu cua", quantity: 35, unit: "thùng", date: "2025-10-21" },
  { id: "NL03", name: "Lẩu hải sản", quantity: 15, unit: "thùng", date: "2025-10-22" },
];

let inventory2 = [
  { id: "VGT01", name: "Cà chua", quantity: 50, unit: "kg" },
  { id: "VGT02", name: "Khoai tây", quantity: 40, unit: "kg" },
  { id: "MTT01", name: "Thịt bò", quantity: 40, unit: "kg" },
  { id: "MTT02", name: "Thịt heo", quantity: 40, unit: "kg" },
];

// Hàm render bảng chung cho cả 2 bảng
function renderTable(data, tableId) {
  const table = document.getElementById(tableId);
  table.innerHTML = "";
  data.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.unit}</td>
        <td>${item.date}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="openPopup('${tableId}', ${index})">Xem chi tiết</button>
          <button type="button" class="btn btn-danger" onclick="OpenPopupVerified()"><i class="fa fa-trash me-1"></i> Xóa</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}
function renderTablePopup(data, tableId) {
  const table = document.getElementById(tableId);
  table.innerHTML = "";
  data.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.unit}</td>
        <td>
          <button type="button" class="btn btn-secondary" onclick="editRow(this)"><i class="fa fa-pen me-1"></i> Sửa</button>
          <button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="fa fa-trash me-1"></i> Xóa</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}
// Mở popup và điền dữ liệu đúng hàng
function openPopup(tableId, index) {
  const tableData = tableId === "inventoryTable" ? inventory : inventory2;
  const item = tableData[index];

  document.getElementById("id").value = item.id;
  document.getElementById("name").value = item.name;
  document.getElementById("quantity").value = item.quantity;
  document.getElementById("unit").value = item.unit;

  document.getElementById("popup").style.display = "flex";

  // Lưu bảng và index để khi nhấn lưu, biết cập nhật vào đâu
  document.getElementById("saveBtn").onclick = () => editItem(tableId, index);
}
//popup xác thực
function OpenPopupVerified(){
  document.getElementById("popup-verified").style.display = "flex";

}
//close popupveri
function closePopupVerified() {
  document.getElementById("popup-verified").style.display = "none";
}
function closePopupNotice() {
  document.getElementById("popup-notice").style.display = "none";
}
//mở thông báo
function OperPopupNotice(){
  document.getElementById("popup-notice").style.display = "flex";
}
//đóng popups
function closePopup(tableId, index) {
  document.getElementById("popup").style.display = "none";
}

// Click ra ngoài để tắt popup
window.onclick = function(e) {
  const popup1 = document.getElementById("popup");
  const popup2 = document.getElementById("popup-notice");

  if (e.target === popup1) {
    closePopup();
  }

  if (e.target === popup2) {
    closePopupNotice();
    closePopupVerified();
  }
};
// // Chỉnh sửa dữ liệu
// function editItem(tableId, index) {
//   const tableData = tableId === "inventoryTable" ? inventory : inventory2;
//   tableData[index] = getFormData();
//   renderTablePopup(tableData, tableId);
//   document.getElementById("popup").style.display = "none";
//   alert("Cập nhật thành công!");
// }

// // Xóa dữ liệu
// function deleteItem(tableId, index) {
//   const tableData = tableId === "inventoryTable" ? inventory : inventory2;
//   if (confirm("Bạn có chắc muốn xóa nguyên liệu này không?")) {
//     tableData.splice(index, 1);
//     renderTablePopup(tableData, tableId);
//     alert("Đã xóa!");
//   }
// }

// // Hàm lấy dữ liệu từ form
// function getFormData() {
//   return {
//     id: document.getElementById("id").value.trim(),
//     name: document.getElementById("name").value.trim(),
//     quantity: parseInt(document.getElementById("quantity").value.trim()) || 0,
//     unit: document.getElementById("unit").value.trim(),
//     date: document.getElementById("date").value,
//   };
// }
// //hủy form đang nhập
// function clearForm() {
//   document.getElementById("inventoryForm").reset();
// }
// //Sửa chi tiết
// function clickA() {
//       // 1. Ẩn nút A
//       document.getElementById("btnA").style.display = "none";

//       // 2. Hiện nút C
//       document.getElementById("btnC").style.display = "inline-block";

//       // 3. Mở khóa nút B
//       document.getElementById("btnB").disabled = false;
//     }

//     function resetState() {
//       // 1. Hiện lại nút A
//       document.getElementById("btnA").style.display = "inline-block";

//       // 2. Ẩn nút C
//       document.getElementById("btnC").style.display = "none";

//       // 3. Khóa nút B lại
//       document.getElementById("btnB").disabled = true;
//     }
// //them hang
// function addRow(){
//   const table=document.getElementById("inventory2").getElementsByTagName('tbody')[0];
//   const newRow = table.insertRow(); // Thêm hàng mới

//   const cell1 = newRow.insertCell(0);
//   const cell2 = newRow.insertCell(1);
//   const cell3 = newRow.insertCell(2);
//   const cell4 = newRow.insertCell(3);
//   const cell5 = newRow.insertCell(4);

//   cell1.innerHTML = '<input type="text" class="form-control" placeholder="ID">';
//   cell2.innerHTML = '<input type="text" class="form-control" placeholder="Nguyên liệu">';
//   cell3.innerHTML = '<input type="number" class="form-control" placeholder="Số lượng">';
//   cell4.innerHTML = '<input type="text" class="form-control" placeholder="Đơn vị">';
//   cell5.innerHTML = '<button type="button" class="btn btn-secondary" onclick="editRow(this)"><i class="fa fa-pen me-1"></i> Sửa</button>   <button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="fa fa-trash me-1"></i> Xóa</button>'
// }

// // Xóa hàng gần nhất
// function deleteRow(btn) {
//   const row = btn.closest("tr");
//   row.remove();
// }
// //xóa hàng cuối cùng
// function deleteLastRow() {
//   const tbody = document.getElementById("inventory2").getElementsByTagName("tbody")[0];

//   if (tbody.rows.length > 0) {
//     tbody.deleteRow(tbody.rows.length - 1);
//   }
// }
// //Lưu hàng
// function saveLastRow() {
//   const table = document.getElementById("inventory2");
//   const rows = table.rows;
//   const lastRow = rows[rows.length - 1]; // lấy dòng cuối cùng
  
//   // Duyệt tất cả ô trừ cột Action cuối cùng
//   for (let i = 0; i < lastRow.cells.length - 1; i++) {
//     const cell = lastRow.cells[i];
//     const input = cell.querySelector("input");
//     if (input) {
//       cell.innerText = input.value; // chuyển input thành text
//     }
//   }

//   // Nếu có nút Save trong cell cuối cùng
//   // const actionCell = lastRow.cells[lastRow.cells.length - 1];
//   // const btn = actionCell.querySelector("button");
//   // if (btn) {
//   //   btn.innerText = "Edit";
//   //   btn.onclick = function() { editRow(this); }
//   // }
// }
// //lưu hàng cùng dòng
// function saveRow(btn) {
//   // Lấy dòng hiện tại của nút bấm
//   const row = btn.parentElement.parentElement;
  
//   // Duyệt tất cả ô trừ cột Action cuối cùng
//   for (let i = 0; i < row.cells.length - 1; i++) {
//     const cell = row.cells[i];
//     const input = cell.querySelector("input");
//     if (input) {
//       // Lấy giá trị input và thay cell bằng text
//       cell.innerText = input.value;
//     }
//   }
  
//   // Thay nút Save bằng nút Edit (nếu muốn)
//   btn.innerText = "Edit";
//   btn.onclick = function() { editRow(this); }
// }
// //sửa từng hàng
// function editRow(btn) {
//   const row = btn.parentElement.parentElement; // dòng chứa nút bấm
  
//   // Duyệt tất cả ô trừ cột Action cuối cùng
//   for (let i = 0; i < row.cells.length - 1; i++) {
//     const cell = row.cells[i];
//     const text = cell.innerText;            // lấy text hiện tại
//     cell.innerHTML = `<input type="text" value="${text}">`; // đổi thành input
//   }

//   // Thay nút Edit thành Save
//   btn.innerHTML = '<i class="fa-solid fa-check"></i>Lưu';
//   btn.onclick = function() { saveRow(this); }
// }

// function saveRow(btn) {
//   const row = btn.parentElement.parentElement;

//   for (let i = 0; i < row.cells.length - 1; i++) {
//     const cell = row.cells[i];
//     const input = cell.querySelector("input");
//     if (input) {
//       cell.innerText = input.value;  // chuyển input thành text
//     }
//   }

//   btn.innerHTML = '<i class="fa fa-pen me-1"></i> Sửa';
//   btn.onclick = function() { editRow(this); }
// }
// //thêm đơn hàng
// function addRowDon(){
//   let ID=document.getElementById("id").value;
//   let Name = document.getElementById("name").value;
//   let Quantity = document.getElementById("quantity").value;
//   let Unit = document.getElementById("unit").value;
//   let Date = document.getElementById("date").value;

//   let table = document.getElementById("inventory").getElementsByTagName('tbody')[0];

//   let newRow = table.insertRow();

//   let cell1 = newRow.insertCell(0);
//   let cell2 = newRow.insertCell(1);
//   let cell3 = newRow.insertCell(2);
//   let cell4 = newRow.insertCell(3);
//   let cell5 = newRow.insertCell(4);
//   let cell6 = newRow.insertCell(5);

//   cell1.innerText=ID;
//   cell2.innerText=Name;
//   cell3.innerText=Quantity;
//   cell4.innerText=Unit;
//   cell5.innerText=Date;
//   cell6.innerHTML = '<button type="button" class="btn btn-success" onclick="openPopup(\'inventory\', ' + (table.rows.length - 1) + ')">Xem chi tiết</button>' +
//     '<button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="fa fa-trash me-1"></i> Xóa</button>';

//   document.getElementById("id").value="";
//   document.getElementById("name").value="";
//   document.getElementById("quantity").value="";
//   document.getElementById("unit").value="";
//   document.getElementById("date").value="";

// }
// Khi load trang, render cả 2 bảng
window.onload = () => {
  renderTable(inventory, "inventoryTable");
  renderTablePopup(inventory2, "inventoryTable2");
};
