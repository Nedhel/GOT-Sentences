import "./App.css";
import bg from "./img/trono.jpg";
import soundgot from "./got.mp3";
import { Title } from "./Title";
import { Card } from "./Card";
import { Button } from "./Button";
import { useState } from "react";

function App() {
    const music = new Audio(soundgot);
    //music.loop = true;
    const [name, setName] = useState({ nombre: "", sentence: "", slug: "" });

    function getSentence() {
        fetch("https://api.gameofthronesquotes.xyz/v1/random")
            .then((response) => response.json())
            .then((data) => {
                setName({
                    nombre: data.character.name,
                    sentence: data.sentence,
                    slug: data.character.slug,
                });
                //console.log(data.sentence, data.character.name);
            });
        music.play();
    }
    return (
        <main
            className="bg-cover h-screen grid grid-rows-layout justify-items-center items-start border"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Title />
            <Card
                name={name.nombre}
                sentence={name.sentence}
                slug={name.slug}
            />
            <Button evento={getSentence} />
        </main>
    );
}

export default App;
