import aria from "./img/aria.webp"
import cersei from "./img/cersei.webp"
import jaime from "./img/jaime.jpg"
import jon from "./img/jon.jpg"
import petyr from "./img/petyr.webp"
import sansa from "./img/sansa.webp"
import tyrion from "./img/tyrion.jpg"
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
    }
    console.log(props.slug)
    return(
        <div className="bg-transparent h-full border w-96 flex flex-col items-center justify-between">
            <p className="text-white">{props.name}</p>
            <img src={src} alt={props.slug} className="rounded w-3/5 h-2/3"></img>
            <q className="text-white">{props.sentence}</q>
        </div>
    )
}