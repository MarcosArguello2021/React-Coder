export const configBtns = (contador, max, min=1, restar, sumar) => {
    
    const configRestar = {
        className: `btn ${contador === min ? 'btn-outline-danger' : 'btn-outline-primary '}`,
        disabled: contador === min,
        onClick: restar
    }
    
    const configSumar = {
        className: `btn ${contador === max ? 'btn-danger' : 'btn-dark'}`,
        disabled: contador === max,
        onClick: sumar
    }

    return {configRestar, configSumar}
}

