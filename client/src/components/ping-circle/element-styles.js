export const animatePing = (additionalClasses) => {
    const classes = `w-3 h-3 rounded-full absolute animate-ping ${additionalClasses}`;
    return classes;
};

export const normalPing = (additionalClasses) => {
    const classes = `w-3 h-3 rounded-full absolute ${additionalClasses}`;
    return classes;
}