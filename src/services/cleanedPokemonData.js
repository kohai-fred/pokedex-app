import getPokemon from "./fetchPokemon";

export default async function cleanedPokemonData(pokemon_id) {
    const allData = await getPokemon(pokemon_id);
    const { abilities, height, weight, id, moves, name, stats, types, sprites } = allData.info;
    const { base_happiness, capture_rate, color, habitat, egg_groups, flavor_text_entries } = allData.species;

    const evolution = createArrayOfEvolution(allData.evol.chain);
    const description = getDescription(flavor_text_entries);

    const img = sprites.other.dream_world.front_default;
    const data = {
        abilities,
        height,
        weight,
        id,
        moves,
        name,
        stats,
        types,
        img,
        base_happiness,
        capture_rate,
        color,
        habitat,
        evolution,
        description,
        egg_groups,
    };

    return data;
}

function getId(url) {
    const id = url.split("/");
    return id[id.length - 2];
}

const img_url = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

function createArrayOfEvolution(chain) {
    const evol = [{ ...chain.species, id: getId(chain.species.url), img: img_url(getId(chain.species.url)) }];

    function getEvolution(arr) {
        evol[evol.length - 1] = {
            ...evol[evol.length - 1],
            min_level: arr[0].evolution_details[0].min_level,
        };
        evol.push({
            ...arr[0].species,
            id: getId(arr[0].species.url),
            img: img_url(getId(arr[0].species.url)),
            min_level: arr[0]?.evolves_to[0]?.evolution_details[0].min_level || null,
        });

        if (arr[0].evolves_to.length > 0) {
            getEvolution(arr[0].evolves_to);
        }
    }
    if (chain.evolves_to.length > 0) getEvolution(chain.evolves_to);

    return evol;
}

function getDescription(entry) {
    const description = entry.filter((item) => item.language.name == "fr")[0];
    return description;
}
