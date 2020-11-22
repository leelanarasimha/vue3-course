export default class Validations {
    static checkEmail(email) {
        if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email,
            )
        ) {
            return true;
        }
        return false;
    }

    static minLength(name, minLength) {
        if (name.length < minLength) {
            return false;
        }
        return true;
    }
}
