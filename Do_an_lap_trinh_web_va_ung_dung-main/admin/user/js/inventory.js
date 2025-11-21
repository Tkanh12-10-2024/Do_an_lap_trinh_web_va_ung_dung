let inventory = [
  { id: "NL01", name: "Thịt bò", quantity: 20, unit: "kg", date: "2025-10-20" },
  { id: "NL02", name: "Rau cải", quantity: 35, unit: "kg", date: "2025-10-21" },
  { id: "NL03", name: "Nấm kim châm", quantity: 15, unit: "kg", date: "2025-10-22" },
];

function renderTable() {
  const table = document.getElementById("inventoryTable");
  table.innerHTML = "";
  inventory.forEach((item) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.unit}</td>
        <td>${item.date}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

function getFormData() {
  return {
    id: document.getElementById("id").value.trim(),
    name: document.getElementById("name").value.trim(),
    quantity: parseInt(document.getElementById("quantity").value.trim()) || 0,
    unit: document.getElementById("unit").value.trim(),
    date: document.getElementById("date").value,
  };
}

function addItem() {
  const newItem = getFormData();
  
  inventory.push(newItem);
  renderTable();
  alert("Thêm nguyên liệu thành công!");
}

function editItem() {
  const updated = getFormData();
  const index = inventory.findIndex((i) => i.id === updated.id);
  
  inventory[index] = updated;
  renderTable();
  alert("Cập nhật nguyên liệu thành công!");
}

function deleteItem() {
  const id = document.getElementById("id").value.trim();
  const index = inventory.findIndex((i) => i.id === id);
  
  if (confirm("Bạn có chắc muốn xóa nguyên liệu này không?")) {
    inventory.splice(index, 1);
    renderTable();
    alert("Đã xóa nguyên liệu!");
  }
}

window.onload = renderTable;
