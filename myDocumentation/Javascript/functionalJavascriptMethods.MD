# Functional Javascript

## Les Méthodes

### Map()

La méthode **map()** crée un nouveau tableau et permet de renvoyer le resulta des actions éffectuées avec une une fonction que l'on aura défini.

#### Syntaxe

```var nouveauTableau = arr.map(callback [, thisArg])```

```javascript
var array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
```
Ce code renverra un tableau avec: ```[2, 8, 18, 32]```
