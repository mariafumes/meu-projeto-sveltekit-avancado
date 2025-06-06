export async function load({ params }) {
    const { name } = params;
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
    if (!res.ok) {
      return {
        status: res.status,
        error: new Error(`Pokémon ${name} não encontrado`)
      };
    }
  
    const data = await res.json();
  
    const pokemon = {
      name: data.name,
      id: data.id,
      image: data.sprites.other['official-artwork'].front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t) => t.type.name),
      abilities: data.abilities.map((a) => a.ability.name),
      stats: data.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat
      }))
    };
  
    return { pokemon };
  }
  