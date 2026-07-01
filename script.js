function addInvoice(){

  // Get values

  let clientName = document.getElementById("clientName").value;

  let amount = document.getElementById("amount").value;

  let dueDate = document.getElementById("dueDate").value;

  let status = document.getElementById("status").value;

  // Validation

  if(clientName === "" || amount === "" || dueDate === ""){
    alert("Please fill all fields");
    return;
  }

  // Table

  let table = document.getElementById("invoiceTable");

  let row = table.insertRow();

  // Cells

  row.insertCell(0).innerHTML = clientName;

  row.insertCell(1).innerHTML = "₹ " + amount;

  row.insertCell(2).innerHTML = dueDate;

  row.insertCell(3).innerHTML = status;

  row.insertCell(4).innerHTML =
    '<button class="reminder-btn" onclick="sendReminder()">Send Reminder</button>';

  // Clear fields

  document.getElementById("clientName").value = "";

  document.getElementById("amount").value = "";

  document.getElementById("dueDate").value = "";

}

function sendReminder(){
  alert("Payment Reminder Sent!");
}