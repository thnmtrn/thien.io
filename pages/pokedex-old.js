import Container from "@/components/Container";
import Link from 'next/link'

export default function pokedexold({pokemon}) {

  return (
    <Container>
      <h1 className="text-4xl mb-8 text-center">  Pokedex</h1>
      
    </Container>
  )
}

// export async function getStaticProps(context) {
  //   try {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
//     const {results} = await res.json();
//     const pokemon = results.map((results, index) => {
  //       const paddedIndex = ("00" + (index + 1)).slice(-3);
//       const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
//       return {
  //         ...results,
//         image,
//       }
//     })
//     return {
  //       props: {pokemon},
//     }
//   } catch (err) {
  //     console.error(err);
//   }
// }
//   <ul className=" flex flex-col place-items-center">
// {pokemon.map((pokeman, index) => 
// <li key={index}>
// <Link href={`/pokemon?id=?${index +1}`}>
//   <a>
//     <img src={pokeman.image} alt={pokeman.name}/>
//     <span>{index +1}.</span>{pokeman.name}
//   </a>
// </Link>
// </li>
// )} 