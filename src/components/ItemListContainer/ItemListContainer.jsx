const ItemListContainer = ({greeting, SecondGreeting}) => {
    return(
        <div>
            <h1>
                {greeting}
            </h1>
            <p>
                {SecondGreeting}
            </p>
        </div>
    )
}

export default ItemListContainer;