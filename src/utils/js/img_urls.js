/**
 *
 * @param {Number||String} id
 * @returns {keys:url}
 */
export default function img_urls(id) {
    const src = {
        src_official: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        // src_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        src_no_img: "../images/no_img.webp",
    };
    return src;
}
