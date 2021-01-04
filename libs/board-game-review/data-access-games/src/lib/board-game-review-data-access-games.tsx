import React, { useEffect, useState } from 'react';
import {API_URL, Game}from '@stores/board-game-review-api-interface';

export function useGames(){
    const [games, setGames] = useState<Game[]>([]);
    useEffect(()=>{
        fetch(`${API_URL}/game`).then(res => res.json()).then(setGames);
    }, []);

    return games;
}

