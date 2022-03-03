import React, {useState, useEffect} from 'react'
import axios from 'axios';

const base_url = "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"

export default function Popular(props) {
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
            <div className='mt-8'>
                <a href="/">
                    {/* image */}
                    <img 
                        key={game.id}
                        src={game.background_image} 
                        alt="cover"
                        className='hover:opacity-75 transition ease-in-out duration-150'
                        style={{ objectFit:'contain' }}
                    />
                </a>
                <div class="mt-2">
                    <a href="/">  
                        <p className='text-lg mt-2 hover:text-gray-300'>{game.name}</p> 
                    </a>  
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                        <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
                        <span className="ml-1">{game.metacritic}%</span>
                        <span className="mx-2">|</span>
                        <span>{game.released}</span>
                        
                    </div>
                </div>
            </div>
        )
    })

    console.log(games)

    const platform = games;
    const gamez = platform.forEach(element =>{ return element.platforms})
    console.log(gamez)

    // const array1 = ['a', 'b', 'c'];
    // array1.forEach(element => console.log(element));
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

  return (
    <div className='container mx-auto px-4'>
        <h2 className='text-blue-500 uppercase tracking-wide font-semibold'>Popular Games</h2>   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cards}
        </div>
        
    </div>   
  )
}
