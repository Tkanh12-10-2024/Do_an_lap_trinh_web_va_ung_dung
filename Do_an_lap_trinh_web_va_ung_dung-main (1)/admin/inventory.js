let inventory = [
  { id: "NL01", name: "Lẩu bò", quantity: 20, unit: "Phần", date: "2025-10-20" },
  { id: "NL02", name: "Lẩu cua", quantity: 35, unit: "Phần", date: "2025-10-21" },
  { id: "NL03", name: "Lẩu hải sản", quantity: 15, unit: "Phần", date: "2025-10-22" },
];

let inventory2 = [
  { id: "VGT01", name: "Cà chua", quantity: 50, unit: "kg", total: 2000000 },
  { id: "VGT02", name: "Khoai tây", quantity: 40, unit: "kg", total: 2000000 },
  { id: "MTT01", name: "Thịt bò", quantity: 40, unit: "kg", total: 2000000 },
  { id: "MTT02", name: "Thịt heo", quantity: 40, unit: "kg", total: 2000000 },
];


// ====== FORMAT TIỀN TỆ ======
function formatMoney(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatTableMoney() {
  const moneyCells = document.querySelectorAll(".money");
  moneyCells.forEach(td => {
    let raw = td.innerText.replace(/\D/g, "");
    if (raw !== "") td.innerText = formatMoney(raw);
  });
}


// ====== RENDER TABLE ======
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
          <button type="button" class="btn btn-success" onclick="openPopup('popup', ${index})">Xem chi tiết</button>
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
        <td class="quantity">${item.quantity}</td>
        <td>${item.unit}</td>
        <td class="total money">${item.total}</td>
        <td class="unit-price money"></td>
      </tr>
    `;
    table.innerHTML += row;
  });

  calculateUnitPrice();
  formatTableMoney();
}


//tắt popup
function closePopup(popupid){
  document.getElementById(popupid).style.display = "none";
}

window.onclick = function(e){
  const popup = document.getElementById("popup");
  if (e.target === popup) {
    closePopup();
  }
}
// ====== POPUP ======
function openPopup(tableid,index) {
  document.getElementById(tableid).style.display = "flex";
}




// ====== EDIT ITEM ======
function editItem(tableId, index) {
  const tableData = tableId === "inventoryTable" ? inventory : inventory2;
  tableData[index] = getFormData();
  renderTablePopup(tableData, tableId);
  closePopup();
  alert("Cập nhật thành công!");
}


// ====== DELETE ROW ======
function deleteItem(tableId, index) {
  const tableData = tableId === "inventoryTable" ? inventory : inventory2;

  if (confirm("Bạn có chắc muốn xóa nguyên liệu này không?")) {
    tableData.splice(index, 1);
    renderTablePopup(tableData, tableId);
    alert("Đã xóa!");
  }
}

function deleteRow(btn) {
  const row = btn.closest("tr");
  row.remove();
}


// ====== GET FORM DATA ======
function getFormData() {
  return {
    id: document.getElementById("id").value.trim(),
    name: document.getElementById("name").value.trim(),
    quantity: parseInt(document.getElementById("quantity").value.trim()) || 0,
    unit: document.getElementById("unit").value.trim(),
    date: document.getElementById("date").value,
  };
}


// ====== THÊM HÀNG ======
function addRow() {
  const table = document.getElementById("inventory2").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).innerHTML = '<input type="text" class="form-control" placeholder="ID">';
  newRow.insertCell(1).innerHTML = '<input type="text" class="form-control" placeholder="Nguyên liệu">';
  newRow.insertCell(2).innerHTML = '<input type="number" class="form-control" placeholder="Số lượng">';
  newRow.insertCell(3).innerHTML = '<input type="text" class="form-control" placeholder="Đơn vị">';
  newRow.insertCell(4).innerHTML = '<input type="text" class="form-control" placeholder="Tổng">';
  newRow.insertCell(5).innerHTML = "";  
}


// ====== SỬA / LƯU HÀNG ======
function editRow(btn) {
  const row = btn.closest("tr");

  for (let i = 0; i < row.cells.length - 2; i++) {
    const text = row.cells[i].innerText;
    row.cells[i].innerHTML = `<input type="text" value="${text}">`;
  }

  btn.innerHTML = '<i class="fa-solid fa-check"></i> Lưu';
  btn.onclick = function () { saveRow(this); };
}

function saveRow(btn) {
  const row = btn.closest("tr");

  for (let i = 0; i < row.cells.length - 1; i++) {
    const input = row.cells[i].querySelector("input");
    if (input) row.cells[i].innerText = input.value;
  }

  formatTableMoney();
  calculateUnitPrice();

  btn.innerHTML = '<i class="fa fa-pen me-1"></i> Sửa';
  btn.onclick = function () { editRow(this); };
}


// ====== TÍNH ĐƠN GIÁ ======
function calculateUnitPrice() {
  const rows = document.querySelectorAll("#inventory2 tbody tr");

  rows.forEach(row => {
    const qty = parseFloat(row.querySelector(".quantity")?.innerText);
    const totalText = row.querySelector(".total")?.innerText.replace(/\./g, "");
    const total = parseFloat(totalText);

    const unitCell = row.querySelector(".unit-price");

    if (!isNaN(qty) && qty > 0 && !isNaN(total)) {
      const unitPrice = total / qty;
      unitCell.innerText = formatMoney(Math.round(unitPrice));
    } else {
      unitCell.innerText = "-";
    }
  });
}


// ====== PAGE LOAD ======
window.onload = () => {
  renderTable(inventory, "inventoryTable");
  renderTablePopup(inventory2, "inventoryTable2");
  
};
