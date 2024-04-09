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