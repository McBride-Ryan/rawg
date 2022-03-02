import React, {useState, useEffect} from 'react'
import axios from 'axios';

const base_url = "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"

export default function Card(props) {
    const [games, setGames] = React.useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setGames(request.data.results)
            return request
        } fetchData();
    }, [props.fetchUrl]);

    console.log(games)

    const cards = games.map(game => {
        return (
            <div style={{ border:"solid black 1px", margin:"5px" }}>
                <p>{game.name} -- {game.metacritic} </p>
                <img 
                    key={game.id}
                    style={{ width:"100%", maxHeight:"150px", objectFit:"contain" }}
                    src={game.background_image} 
                    alt="cover"
                />
            </div>
        )
    })

  return (
    <div>
        <h2>{props.title}</h2>
            <div>
                {cards}
            </div>
    </div>
  )
}
