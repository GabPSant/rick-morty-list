"use client"

import {api} from '../../services/api';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import CharacterDiv, {Character} from './components/CharacterDiv/CharacterDiv';

interface Page{
  info:{
    pages: number;
    next: string|null;
    prev: string|null;
  }
  results: Character[];
}

export default function Home() {
  const [page, setPage] = useState<Page>();

  useEffect(()=>{
    getPage(1);
  }, [])

  async function getPage(pageNumber: number){
    try{
      const response = await api.get(`/character?page=${pageNumber}`);
      setPage(response.data);
    }
    catch(error){
      console.error("Error:", error);
    }
  }
  
  return (
    <>
    <Header/>
    <h1>List of Characters</h1>
    <main>
      {page?.results.map(character=>(
        // eslint-disable-next-line react/jsx-key
        <CharacterDiv id={character.id} name={character.name} gender={character.gender} 
        status={character.status} species={character.species} image={character.image} 
        nameOrigin={character.location.name} nameLocation={character.origin.name}/>
      ))}
      </main>
    </>
  )
}
