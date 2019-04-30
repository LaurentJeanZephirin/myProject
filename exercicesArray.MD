console.log(hostels);

const ranked = hostels
    .sort((hostel1, hostel2) => hostel2.roomNumbers - hostel1.roomNumbers)
    .map(hostel => hostel.name)




console.log(ranked);
// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que ou 3 places et les classer par ordre alphabétique selon le non de la chambre

const tab = hostels
    .map(chambers => chambers.rooms
        .filter(value => value.size > 3)
            .map(chambersName => chambersName.roomName)
        .sort())


console.log(tab);
