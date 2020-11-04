function imageCards (options) {
    let images = document.querySelectorAll('.image-card-shadow');

    if (options.shadow_type === 'hard') 
        options.shadow_type = '0px';
    else 
        options.shadow_type = '15px';

    let shadowString = `10px 10px ${options.shadow_type} 1px rgba(0, 0, 0, 0.15)`;
    let paddingString = `1em`;

    images.forEach(image => {
        image.style.boxShadow = shadowString;

        if (options.padding) {
            image.style.padding = paddingString;
        }
    })
};

module.exports.imageCards = imageCards;