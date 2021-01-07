const renderError = ({ error, touched }) => {
    if (error && touched) {
        return (
            <div className="invalid-feedback">
                {error}
            </div>
        )
    }
}

const renderInput = ({ type, input, label, meta, placeholder }) => {
    const classError = `${meta.error && meta.touched ? 'is-invalid' : ''}`
    return (
        <div className="mt-3" >
            <label htmlFor={label} >{label}</label>
            <input type={type} {...input} className={`form-control ${classError}`} placeholder={placeholder} autoComplete="off" />
            {renderError(meta)}
        </div>
    )
}

export default renderInput;