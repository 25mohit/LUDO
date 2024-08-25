const tTypes = {
    10: 's',
    23: 's',
    35: 'danger',
    8: 'warning',
    24: 'alert',
    // Add more positions and their corresponding 't' types as needed
};

export const boxes = Array.from({ length: 52 }, (_, i) => ({
    n: `b${i + 1}`,
    t: tTypes[i + 1] || 'p', // Default to 'safe' if the position is not specified in tTypes
}));
