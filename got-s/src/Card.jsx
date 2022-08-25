import aria from "./img/aria.webp"
import cersei from "./img/cersei.webp"
import jaime from "./img/jaime.jpg"
import jon from "./img/jon.jpg"
import petyr from "./img/petyr.webp"
import sansa from "./img/sansa.webp"
import tyrion from "./img/tyrion.jpg"
import interrogacion from "./img/interrogacion.png"
export function Card(props){  
    let src=''
    switch(props.slug){
        case 'arya': src=aria; break
        case 'cersei' : src=cersei; break
        case 'jaime' : src=jaime; break
        case 'jon': src=jon; break
        case 'baelish': src=petyr; break
        case 'sansa': src=sansa; break
        case 'tyrion': src=tyrion; break
        default: src=interrogacion; break
    }
    return(
        <div className="bg-transparent h-full border w-96 flex flex-col items-center justify-between">
            <p className="text-white font-bold">{props.name}</p>
            <img src={src} alt={props.slug} className="rounded w-3/5 h-2/3 shadow-lg shadow-slate-300"></img>
            <q className="text-white bg-black">{props.sentence}</q>
        </div>
    )
}