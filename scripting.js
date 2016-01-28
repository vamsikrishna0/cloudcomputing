// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString) {
    // First check for the pattern
    console.log(dateString);
//    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    if(!(date_regex.test(dateString)))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
   
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;   

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

function validation(){
    var dateStr = document.getElementById('dd').value;
    var r=isValidDate(dateStr);
    return r;
}

