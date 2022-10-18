export const circleStyle = (additionalClasses) => {
    const classes = `bg-secondary hover:bg-secondary-light active:bg-secondary text-text-secondary flex items-center justify-center rounded-full w-10 h-10 text-monstserrat ${additionalClasses}`;
    return classes;
};

export const regularStyle = (additionalClasses) => {
    const classes = `bg-secondary hover:bg-secondary-light active:bg-secondary text-text-secondary flex items-center justify-center px-3 py-1 rounded-md text-monstserrat ${additionalClasses}`;
    return classes;
};