const cities = ['CDMX', 'Bogota', 'Monterrey', 'Guadalajara', 'Morelia', 'Buenos Aires', 'Lima', 'Montevideo', 'Santiago'];

const randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)];
};


module.exports = randomString;