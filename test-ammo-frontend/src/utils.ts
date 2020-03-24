
let idCounter = 0;

export const generateId = () => {
    return `id-${++idCounter}`;
}

