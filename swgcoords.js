const Planets = {
    tatooine: {
        'mos eisley': [3608,-4753],
        'bestine': [-1294, -3590]
    }
};

function find(planet,coords){
    let planetCoords = Planets[planet];
    let vx = coords[0],
        vy = coords[1];
    Object.keys(planetCoords).forEach(starport=>{
        let thisCoords = planetCoords[starport];
        let thisX = thisCoords[0],
            thisY = thisCoords[1];

        let a = vx - thisX,
            b = vy - thisY,
            thisDist = Math.sqrt(a*a + b*b);

        console.log(thisDist,starport);
    })
}

find('tatooine',[-1141,-3605]);