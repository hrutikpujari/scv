// Google Apps Script for SCV Campus Visit Form
// This script handles form submissions from the campus visit scheduling form

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
      params.full_name || '',
      params.email || '',
      params.phone || '',
      params.visit_date || ''
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
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set headers
  var headers = [
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Visit Date'
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
