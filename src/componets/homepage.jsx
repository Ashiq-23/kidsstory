import Products from "../products";
import Cardskerala from "./cardskerala";
import Slider from "./slider";


export default function Homepage(){
    return(
        <>
            <Slider/>
            <br />
            <Products/>
            <Cardskerala/>
        </>
    )
}