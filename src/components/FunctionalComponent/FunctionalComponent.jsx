

const FunctiontalComponent = ({titulo, subtitulo}) => {
    console.log(titulo);
    console.log(subtitulo);
    return(
        <div>
            <h1>
                {titulo}
            </h1>
            <p>
                {subtitulo}
            </p>
        </div>
    )
}

export default FunctiontalComponent;