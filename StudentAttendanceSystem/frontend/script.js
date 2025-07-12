let users = [];
const API_BASE = "http://localhost:3000/api/attendance";
const STUDENTS_API = "http://localhost:3000/api/attendance/students"; // <-- Your real student API

async function fetchAttendance() {
  const date = document.getElementById("datePicker").value;
  if (!date) return alert("Please select a date");

  document.getElementById("report").style.display = "none";

  const resUsers = await fetch(STUDENTS_API);
  users = await resUsers.json();

  const resAttendance = await fetch(`${API_BASE}?date=${date}`);
  const attendanceData = await resAttendance.json();
  console.log(attendanceData);
  

  const formDiv = document.getElementById("attendanceForm");
  formDiv.innerHTML = "";

  // Check if this date is already marked
  const isMarked = attendanceData.length > 0;
  console.log(isMarked);
  
  document.getElementById("submitBtn").style.display = isMarked ? "none" : "block";

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-row";

    const name = document.createElement("span");
    name.textContent = user.name;

    const actions = document.createElement("span");
    const existing = attendanceData.find(a => a.sid===user.id); // strict match sid
    console.log(existing);
    
    if (existing) {
      actions.innerHTML = existing.status === "present"
        ? '<span class="present">Present ✅</span>'
        : '<span class="absent">Absent ❌</span>';
    }else{
        actions.innerHTML = `
            <label>
                <input type="radio" name="attendance-${user.id}" value="present"> Present
            </label>
            <label>
                <input type="radio" name="attendance-${user.id}" value="absent"> Absent
            </label>
        `;
    }

    div.appendChild(name);
    div.appendChild(actions);
    formDiv.appendChild(div);
  });
}

async function submitAttendance() {
const date = document.getElementById("datePicker").value;
const attendance = [];

users.forEach(user => {
    const selected = document.querySelector(`input[name='attendance-${user.id}']:checked`);
    if (selected) {
        attendance.push({ sid: user.id, status: selected.value });
    }
});

if (attendance.length !== users.length) {
    alert("Please mark all users before submitting");
    return;
}

await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, attendance })
});

fetchAttendance(); // Reload UI
}
async function toggleReport() {
  const reportDiv = document.getElementById("report");
  const isVisible = reportDiv.style.display === "block";

  if (isVisible) {
    reportDiv.style.display = "none";
    return;
  }

  const res = await fetch(`${API_BASE}/summary`);
  const summary = await res.json();
  reportDiv.innerHTML = "";
  reportDiv.style.display = "block";

  summary.forEach(user => {
    const row = document.createElement("div");
    row.className = "user-row";
    row.innerHTML = `
      <span>${user.name}</span>
      <span>${user.present}/${user.present + user.absent} (${user.percentage})</span>
    `;
    reportDiv.appendChild(row);
  });
}
