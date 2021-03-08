//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './componentes/navbar.js';
import Jumbotron from './componentes/jumbotron.js';
import Card from './componentes/cards.js';

function App() {
    const data = [
        {
            image: "https://www.biografiasyvidas.com/biografia/d/fotos/dylan_bob_1.jpg",
            cardTitle: "Bob Dylan",
            cardDescription:
                "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
            button: {
                url: "https://en.wikipedia.org/wiki/Bob_Dylan",
                label: "Go to wikipedia"
            }
        },
        {
            image: "https://i.ytimg.com/vi/cWle1-AxB5g/maxresdefault.jpg",
            cardTitle: "John Lennon",
            cardDescription:
                "John Winston Lennon fue un artista, músico, multiinstrumentista, cantautor, compositor, poeta, dibujante, productor, escritor, pacifista, activista y actor inglés, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles.",
            button: {
                url: "https://en.wikipedia.org/wiki/John_Lennon",
                label: "Go to wikipedia"
            }
        },
        {
            image: "https://www.tonica.la/__export/1586715953315/sites/debate/img/2020/04/12/freddie_mercury_live_aid.jpg_423682103.jpg",
            cardTitle: "Freddie Mercury",
            cardDescription:
                "Freddie Mercury fue un cantante, compositor, pianista, diseñador gráfico​ y músico británico de origen parsi e indio, ​ conocido por haber sido el vocalista principal de la banda de rock Queen. Como intérprete, ha sido reconocido por su poderosa voz y extravagantes puestas en escena.​​​",
            button: {
                url: "https://es.wikipedia.org/wiki/Freddie_Mercury",
                label: "Go to wikipedia"
            }
        }
    ]
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="n-4">
                    <div className="d-flex">
                        {data.map(item =>
                            <Card cardTitle={item.cardTitle} image={item.image} cardDescription={item.cardDescription} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
