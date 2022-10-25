export const recieveBoxStyles = (additionalClasses) => {
    const classes = `w-full bg-text-box rounded-md text-text-primary p-3 text-monstserrat ${additionalClasses}`;
    return classes;
};

export const sendBoxStyles = (additionalClasses) => {
    const classes = `w-full bg-secondary rounded-md text-text-secondary p-3 text-monstserrat ${additionalClasses}`;
    return classes;
};

export const timeStyles = (additionalClasses) => {
    const classes = `w-full text-text-primary text-xs py-2 text-monstserrat ${additionalClasses}`;
    return classes;
}