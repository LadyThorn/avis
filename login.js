function authenticate(userType) {
  const id = document.getElementById('id').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (id && username && password) {
    if (userType === 'student') {
      if (id === 'S001' && username === 'Jane Tabiñas' && password === 'password') {
        // Redirect to student dashboard
        window.location.href = "student.html";
      } else {
        alert('Incorrect student credentials. Please try again.');
      }
    } else if (userType === 'teacher') {
      if (id === 'T001' && username === 'John Doe' && password === 'password') {
        // Redirect to teacher dashboard
        window.location.href = "teacher.html";
      } else {
        alert('Incorrect teacher credentials. Please try again.');
      }
    }
  } else {
    alert('Please fill in all fields.');
  }
}

document.getElementById("studentButton").addEventListener("click", function() {
  authenticate('student');
});

document.getElementById("teacherButton").addEventListener("click", function() {
  authenticate('teacher');
});
