# Functional Javascript

## Les Méthodes

### Map()

La méthode **map()** crée un nouveau tableau et permet de renvoyer le resulta des actions éffectuées avec une une fonction que l'on aura défini.

#### Syntaxe

```javascript
var nouveauTableau = arr.map(callback [, thisArg])
```

#### Exemple

```javascript
var array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
```
Ce code renverra un tableau avec: ```[2, 8, 18, 32]```


### Reduce()

La méthode **reduce()** applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

#### Fonctionnement

reduce() exécute la fonction callback une fois pour chaque élément présent dans le tableau et ignore les éléments vides du tableau. La fonction callback utilise quatre arguments :

1. L'accumulateur (la valeur retournée par le précédent appel de la fonction callback), ou la valeur initiale s'il sagit du premier appel

2. la valeur de l'élément courant

3. l'index de l'élément courant

4. le tableau parcouru par la méthode  

La première fois que la fonction callback est appelée, valeurInitiale et valeurCourante peuvent correspondre à un ou deux éléments. Si valeurInitiale est fournie dans l'appel de reduce(), alors accumulateur sera égale à valeurInitiale et valeurCourante sera égale à la première valeur de la liste. Si valeurInitiale n'est pas fournie, alors accumulateur sera égale à la première valeur de la liste, et valeurCourante sera alors égale à la seconde.  
Autrement dit, si valeurInitiale n'est pas fournie, reduce exécutera la fonction de rappel à partir de l'indice 1 et la première valeur du tableau (d'indice 0) sera utilisée pour valeurInitiale.

#### Syntaxe

```javascript
arr.reduce(callback)
arr.reduce(callback, valeurInitiale)
```

##### Le callback:

La fonction à exécuter sur chaque valeur de la liste, elle prend quatre arguments en entrée

##### Accumulateur:

La valeur précédemment retournée par le dernier appel du callback, ou valeurInitiale, si elle est fournie (c'est la valeur « accumulée » au fur et à mesure des appels

##### currentValue:

La valeur de l'élément courant actuellement manipulé dans le tableau.

##### Valeur Initiale:

Une valeur utilisée comme premier argument lors du premier appel de la fonction callback. Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé. Si on appelle reduce() sur un tableau vide sans fournir de valeur initiale, on aura une erreur.

#### Exemples

```javascript
const tab = hostels.reduce((acc, hostel) => acc.concat(hostel.rooms),[])
```

Dans cet exemple, reduce regroupe tous les éléments de *rooms* dans un seul tableau qui est initialisé à la fin avec les ```[]```


```javascript
const moyenAge = persons.reduce((acc, currentValue) => {return acc + currentValue.age / persons.length},0);
```

Dans cet exemple, reduce additionne l'age de toutes les personnes avec son accumulateur initié à 0 et une fois qu'il a tout additionné, il divise la soome par le nombre de personnes.


### filter()

La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback et filtre les éléments du tableau qui ne remplisse pas cet condition.

#### Syntaxe

```javascript
arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
var nouveauTableau = arr.filter(callback, thisArg);
```




















