import { useState } from "react" //hook

const ItemCount = () => {
    const [count, setCount] = useState(props.initialValue) //valor inicial, puede ser 0, o que venga por props, por si quiero reutilizar

    const increment = () => {
/*         if (count < 100){
            setCount(count + 1)
        } */
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)//si pongo 3, va de 1 la suma porque se ejecuta la funcion y recien cuando termina renderiza
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    } //con esa funcion, reemplaza el prev, entonces va de 3 en 3.

//FORMA CORRECTA DE ESCRIBIR EL CONTADOR
const decrement = () => {
    if (count > props.min){
        setCount (count => count - 1)
    }
}
/*     const decrement = () => {
        if (props.min){
            setCount(count - 1)
        }
    } */
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount