// Google Apps Script for SCV Homepage Contact Form
// This script handles form submissions from the homepage contact form

function doPost(e) {
  // Set CORS headers
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    // Get the form data
    var params = e.parameter;
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare the row data with the correct field names
    var rowData = [
      timestamp,
      params.name || '',
      params.email || '',
      params.phone || '',
      params.enquiry_type || '',
      params.grade_level || '',
      params.message || '',
      params.subscription || 'No'
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    output.setContent(JSON.stringify({ 'result': 'success', 'message': 'Form submitted successfully' }));
    return output;
      
  } catch (error) {
    // Return error response
    output.setContent(JSON.stringify({ 'result': 'error', 'message': error.toString() }));
    return output;
  }
}

// Optional: Function to set up the sheet with headers
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Enquiry Type',
    'Grade Level',
    'Message',
    'Subscription'
  ];
  
  // Set header row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#0F4F8C');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('#FFFFFF');
  
  // Freeze the header row
  sheet.setFrozenRows(1);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}
