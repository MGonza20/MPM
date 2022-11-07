const passEqual = (pass) => {
    if (pass === 'not match') {
        return (
            <div className="errorContainer">
                <p data-testid={'password-test'}>
                    Las contraseñas no son iguales
                </p>
            </div>
        )
    }
}

export default passEqual
