function ValidateEmail(email) {
    // Expressão regular para validar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = ValidateEmail