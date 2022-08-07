/**
 * Change le src de l'image.
 * @param {Event} e
 * @param {Object} urls {keys: url}
 */
export default function changeImgSrc(e, urls) {
    const target = e.target;
    const src_value = target.src;
    const array_of_src = Object.values(urls);

    for (let i = 0; i < array_of_src.length; i++) {
        if (array_of_src[i] === src_value) {
            target.src = array_of_src[i + 1];
            break;
        }
    }
}
