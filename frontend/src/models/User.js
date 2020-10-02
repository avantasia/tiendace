export default class User {
    address = "";
    city="";
    postal_code="";
    profile_picture= "";
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

}
