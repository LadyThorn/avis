function updateStudentNumber() {
  var namesDropdown = document.getElementById('namesDropdown');
  var selectedName = namesDropdown.value;

  var studentNumberDisplay = document.getElementById('studentNumber');
  
  // Mapping of selected name to its associated student number
  var studentNumbers = {
    'Jane Tabinas': 's001',
    'Elijah Montefalco': 's003',
    // Add more names and their associated student numbers
  };

  // Update the displayed student number based on the selected name
  if (studentNumbers[selectedName]) {
    studentNumberDisplay.textContent = studentNumbers[selectedName];
  } else {
    studentNumberDisplay.textContent = 'Student number not found';
  }
}


function generateQRCode() {
  var selectedName = document.getElementById('namesDropdown').value;
  var selectedSubject = document.getElementById('subjectsDropdown').value;
  var studentNumber = document.getElementById('studentNumber').textContent;

  var qrCodeDiv = document.getElementById('qrcode');
  
  var qrData = `${selectedName}, ${studentNumber}, ${selectedSubject}`;

  // Create QR code using qrcode-generator library
  var qr = qrcode(0, 'M');
  qr.addData(qrData);
  qr.make();

  // Render QR code to the specified div
  qrCodeDiv.innerHTML = qr.createImgTag();
}
