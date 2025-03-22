export const checkValidData = (email, password) => {
    // If email is valid it will return true suppose email is not valid it will return false
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // If email is valid it will return true suppose email is not valid it will return false
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!(isPasswordValid)) return "Password is not valid";

    // If both field are valid then return null value
    return null;
}