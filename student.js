const studentInfo = {
  id: 'S001',
  username: 'jane_ñas',
  firstName: 'Jane',
  lastName: 'Tabiñas',
  email: 'jane@example.com',
  grade: '2nd Year College',
};

const studentClasses = [
  {
    className: 'Object Oriented Programming',
    classId: 'OOP101',
    attendance: {
      '2023-09-8': 'Present',
      '2023-09-12': 'Present',
      '2023-09-15': 'Present',
      '2023-09-22': 'Absent',
    },
  },
  {
    className: 'Calculus',
    classId: 'CALC201',
    attendance: {
      '2023-09-18': 'Present',
      '2023-09-25': 'Present',
    },
  },
];

function displayStudentInfo(student) {
  const studentInfoContainer = document.querySelector('.student-info');
  studentInfoContainer.innerHTML = `
    <h3>Welcome, ${student.username} (${student.id})</h3>
    <p>Name: ${student.firstName} ${student.lastName}</p>
    <p>Email: ${student.email}</p>
    <p>Grade: ${student.grade}</p>
  `;
}

function displayStudentClasses(classes) {
  const studentClassesContainer = document.querySelector('.student-classes');
  studentClassesContainer.innerHTML = '<h3>Your Classes:</h3>';

  classes.forEach((course) => {
    const classButton = document.createElement('button');
    classButton.textContent = course.className;
    classButton.classList.add('class-button');
    classButton.addEventListener('click', () => handleButtonClick(classButton, course));
    studentClassesContainer.appendChild(classButton);
  });
}

function handleButtonClick(clickedButton, course) {
  const buttons = document.querySelectorAll('.class-button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  clickedButton.classList.add('active');
  showAttendanceSheet(course);
}

function showAttendanceSheet(course) {
  const attendanceSheetContainer = document.querySelector('.attendance-sheet');
  attendanceSheetContainer.innerHTML = `<h3>Attendance for ${course.className}</h3>`;

  const table = document.createElement('table');
  const tableHeader = document.createElement('tr');
  tableHeader.innerHTML = '<th>Date</th><th>Attendance</th>';
  table.appendChild(tableHeader);

  for (const date in course.attendance) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${date}</td><td>${course.attendance[date]}</td>`;
    table.appendChild(row);
  }

  attendanceSheetContainer.appendChild(table);
  attendanceSheetContainer.classList.remove('hidden');
}

function sendExcuse() {
  const teacherSelect = document.getElementById('excuse-email-teacher-select');
  const selectedTeacherEmail = teacherSelect.options[teacherSelect.selectedIndex].value;
  const emailSubject = 'Excuse Letter';
  const emailBody = "Dear Teacher, I won't be able to attend class today due to...";

  const mailtoLink = 'mailto:' + selectedTeacherEmail + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);

  // Open the mail client with the mailto link
  window.open(mailtoLink);
}

window.addEventListener('DOMContentLoaded', () => {
  displayStudentInfo(studentInfo);
  displayStudentClasses(studentClasses);
  document.getElementById('send-excuse-btn').addEventListener('click', sendExcuse);
});
