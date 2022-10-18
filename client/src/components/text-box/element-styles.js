export const recieveBoxStyles = (additionalClasses) => {
    const classes = `w-full bg-text-box rounded-md text-text-primary p-3 text-monstserrat ${additionalClasses}`;
    return classes;
};

export const sendBoxStyles = (additionalClasses) => {
    const classes = `w-full bg-secondary rounded-md text-text-secondary p-3 text-monstserrat ${additionalClasses}`;
    return classes;
};
