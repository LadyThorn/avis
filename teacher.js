document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownContent = document.getElementById("dropdownContent");
  const classesButton = document.getElementById("classesButton");
  const studentsListButton = document.getElementById("studentsListButton");
  const scanCodeButton = document.getElementById("scanCodeButton");
  const classInfoSection = document.getElementById("classInfoSection");

  // Toggle dropdown content visibility
  dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  // Event listeners for each button
  classesButton.addEventListener("click", displayClassesInfo);
  studentsListButton.addEventListener("click", displayStudentsList);
  scanCodeButton.addEventListener("click", displayQRScanner);

  // Function to display class information
  function displayClassesInfo() {
    classInfoSection.innerHTML = `
      <h1>Classes I Teach</h1>
      <div class="class-cards">
        <div class="class-card">
          <h2>Object Oriented Programming</h2>
          <p>Class ID: CS101</p>
          <p>Enrolled Students: 25</p>
          <p>Period: Morning</p>
        </div>
        <div class="class-card">
          <h2>Calculus</h2>
          <p>Class ID: MATH201</p>
          <p>Enrolled Students: 30</p>
          <p>Period: Afternoon</p>
        </div>
        <!-- Add more class cards here -->
      </div>
    `;
    // Create class cards dynamically or any other desired content
    // ...
  }

  // Function to display students list
  function displayStudentsList() {
    classInfoSection.innerHTML = `
      <h1>Students List</h1>
      <table class="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student Number</th>
            <th>Action</th> <!-- Adding a new header for the button -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Tabiñas</td>
            <td>S001</td>
            <td><button class="viewQRButton" onclick="redirectToGenerate('John Doe', 'S001')">View QR Code</button></td> <!-- Adding a button to each row -->
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>S002</td>
            <td><button class="viewQRButton" onclick="redirectToGenerate('Jane Smith', 'S002')">View QR Code</button></td> <!-- Adding a button to each row -->
          </tr>
          <!-- Add more fake student rows here -->
        </tbody>
      </table>
    `;
    // Populate the students table dynamically with rows of student data
    // ...
  }

  // Function to redirect to generate.html with student details as URL parameters
  function redirectToGenerate(name, number) {
    window.location.href = `generate.html?name=${name}&number=${number}`;
  }

  // Function to display QR code scanner
  function displayQRScanner() {
    window.location.href = 'scan.html'; // Redirect to scan.html
  }
});
