console.log('hola quien hace esto?');
var app = new Vue({
    el: '#app',
    data: {
        pokemon: pokemons,
        typeColor: {
            grass: '#78C850',
            poison: '#A040A0',
            fire: '#F08030',
            flying: '#A890F0',
            water: '#6890F0',
            bug: '#A8B820',
            normal: '#A8A878',
            electric: '#F8D030',
            ground: '#C58100',
        },
    }
});