import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { getPokemon } from '@/fetch/lesson6/get-pokemon';

type PokedexProps= {
    pokeId: string
};

export const Pokedex: React.FC<PokedexProps> = async ({pokeId}) => {
    const pokeData = await getPokemon(pokeId);
    // console.log(pokeData);

    if (pokeData.statusCode === 404) {
        notFound();
    }

  return (
    <>
    {pokeData.error && <>{pokeData.error}</>}
    {pokeData.data && (
        <>
            <h3>{pokeData.data.name}</h3>
            <Image src={pokeData.data.imageUrl} width={200} height={200} alt="" />
             {!Number.isNaN(Number(pokeId)) && (
                <div>
                    <Link href={`/lesson6/lesson6-2/${Number(pokeId) -1}`}>前へ</Link>
                    <Link href={`/lesson6/lesson6-2/${Number(pokeId) +1}`}>次へ</Link>
                </div>
             )}

        </>
    )}

    </>
  );
};
