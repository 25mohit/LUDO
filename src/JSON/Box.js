const tTypes = {
    2: 's',
    10: 's',
    15: 's',
    23: 's',
    28: 's',
    26: 's',
    36: 's',
    41: 's',
    49: 's'
};

export const boxes = Array.from({ length: 52 }, (_, i) => ({
    n: `b${i + 1}`,
    s: (i == 1 || i == 14 || i == 27 || i == 40) ? 'start' : '',
    t: tTypes[i + 1] || 'p',
}));