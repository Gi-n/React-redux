
const required = value => (value || typeof value === 'number' ? undefined : `Required`);

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

module.exports = {
    required: required,
    minLength: minLength,
    email: email
}