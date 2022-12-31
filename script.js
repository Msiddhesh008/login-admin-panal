
var firstName = document.getElementById("firstName");
var gameName = document.getElementById("gameName");
var password = document.getElementById("password");
var submitBtn = document.getElementById("submit");
var email = document.getElementById("email")
var table = document.querySelector("table");
var admin = document.querySelector("section button")
var section = document.querySelector("section")
// var SrNo = 0;

function EmployeeData(firstName, gameName, password, email) {
  this.EmpId = Date.now();
  this.fName = firstName;
  this.gName = gameName;
  this.password = password;
  this.email = email;
}


function createTable() {
  var empArr = JSON.parse(localStorage.getItem("empArr"));

  var tr = document.createElement("tr");
  table.appendChild(tr);

  var tdSrNo = document.createElement("td");
  tr.appendChild(tdSrNo);

  var tdName = document.createElement("td");
  tr.appendChild(tdName);

  var tdgamename = document.createElement("td");
  tr.appendChild(tdgamename);

  var tdEmail = document.createElement("td");
  tr.appendChild(tdEmail);

  var tdPassword = document.createElement("td");
  tr.appendChild(tdPassword);

  tdSrNo.innerHTML = empArr[i].EmpId;
  tdName.innerHTML = empArr[i].fName;
  tdgamename.innerHTML = empArr[i].gName;
  tdPassword.innerHTML = empArr[i].password;
  tdEmail.innerHTML = empArr[i].email;
}

if (localStorage.getItem("empArr") != null) {
  var empArrr = JSON.parse(localStorage.getItem("empArr"));
  for (var i = 0; i < empArrr.length; i++) {
    createTable();
  }
} else {
  localStorage.setItem("empArr", "[]");
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var empData = new EmployeeData(firstName.value.toUpperCase(), gameName.value.toUpperCase(), password.value, email.value.toLowerCase());

  var old_data = JSON.parse(localStorage.getItem("empArr"));
  old_data.push(empData);

  localStorage.setItem("empArr", JSON.stringify(old_data));

  // ========================================================
  
  var empArr = JSON.parse(localStorage.getItem("empArr"));

  var tr = document.createElement("tr");
  table.appendChild(tr);

  var tdSrNo = document.createElement("td");
  tr.appendChild(tdSrNo);

  var tdName = document.createElement("td");
  tr.appendChild(tdName);

  var tdgamename = document.createElement("td");
  tr.appendChild(tdgamename);

  var tdEmail = document.createElement("td");
  tr.appendChild(tdEmail);

  var tdPassword = document.createElement("td");
  tr.appendChild(tdPassword);

  for (let i = 0; i < empArr.length; i++) {
    tdSrNo.innerHTML = empArr[i].EmpId;
    tdName.innerHTML = empArr[i].fName;
    tdgamename.innerHTML = empArr[i].gName;
    tdPassword.innerHTML = empArr[i].password;
    tdEmail.innerHTML = empArr[i].email;
  }
  // =======================================
  firstName.value = "";
  gameName.value = "";
  password.value = "";
  email.value = "";
});

admin.onclick = function(){
  table.style.display = "block"
  section.style.display = "none"

}
