/**
 * Function to convert valid string of numbers to date string
 * 
 * IMPROVEMENTS REQUIRED:
 * ----------------------
 * - validation of whether the entered string can be a valid date or not
 */

// takes input in YYYYMMDD form
// returns string in YYYY-MM-DD form

const formatDate = function (dateString) {
    // Check if the string is in the correct format
    if (!/^\d{8}$/.test(dateString)) {
        throw new Error("Invalid date format. Please provide YYYYMMDD");
    }

    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);

    return `${year}-${month}-${day}`;
}

export default formatDate;