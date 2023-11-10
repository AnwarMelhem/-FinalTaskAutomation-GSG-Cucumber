export default class GenericHelper {
// Random numbers up to 10000
  static genericRandomNumber(maxNumber = 10000) {
    return Math.round(maxNumber * Math.random());
  }
// Current Date with "yyyy-mm-dd" format
  static currentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;
    return currentDate;
  }
}
