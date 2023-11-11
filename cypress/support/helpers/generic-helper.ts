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

  static generateRandomEmail() {
    // Define a function to generate a random string with a given length
    function generateRandomString(length:any) {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    // Generate a random username with a random length between 5 and 10 characters
    const usernameLength = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    const username = generateRandomString(usernameLength);
    // Generate a random domain with a random length between 5 and 10 characters
    const domainLength = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    const domain = generateRandomString(domainLength);
    // Choose a random top-level domain (TLD) from a predefined list
    const tlds = ["com", "net"];
    const tld = tlds[Math.floor(Math.random() * tlds.length)];
    // Concatenate the username, domain, and TLD to form the email address
    const email = `${username}@${domain}.${tld}`;
    return email;
  }
  
}
