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

- - -

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

- - -

### filter()

La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback et filtre les éléments du tableau qui ne remplisse pas cet condition.

#### Syntaxe

```javascript
arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
var nouveauTableau = arr.filter(callback, thisArg);
```

##### Callback

La fonction de test (ou prédicat) à appliquer à chaque élément du tableau. Cette fonction est appelée avec les arguments suivants :
###### element courant

L'élément à traiter

###### index

Son indice

###### array

Le tableau complet ( Cette fonction renvoie true — ou une valeur équivalente — si l'élément doit être conservé pour le tableau résultat et false dans le cas contraire. )

##### thisArg (facultatif)

Objet à utiliser en tant que this quand la fonction callback est exécutée.

#### Exaemple

```javascript
 .filter(room => room.size >= 3);
```

Dans cette exemple il y y un ````.filter``` qui est effectué sur un objet qui doit filtrer la taille des chambres.

- - -

### sort()

La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

#### Syntaxe

```javascript
arr.sort()
arr.sort(fonctionComparaison)
```

##### fonctionComparaison

Ce paramètre optionnel permet de spécifier une fonction définissant l'ordre de tri. Si absente, le tableau est trié selon la valeur de point de code Unicode de chaque caractère, d'après la conversion en chaine de caractères de chaque élément. Cette fonction prendra deux arguments : le premier élément à comparer et le deuxième élément à comparer.

#### Exemple

```javascript
.sort((alphabetOrder1, alphabetOrder2) => alphabetOrder2.roomName > alphabetOrder1.roomName ? -1 ; 1);
```

Cet exemple trie les noms de chambres par ordre alphabetique

- - -

### push()

Cette méthode permet d'ajouter des éléments à la fin d'un tableau et de renvoyer la nouvelle taille du tableau.

#### Syntaxe

```javascript
arr.push(élément1, ..., élémentN)
```

Les éléments entre les parenthèses sont les éléments à ajouter à la fin du tableau

#### Exemple

```javascript
persons.push(personne)
```

L'élément personne est ajouté à la fin du tableau persons.

- - - 

### slice()

La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.

#### Syntaxe

```javascript
arr.slice()
arr.slice(début)
arr.slice(début, fin)
```

##### début

Indice (à partir de zéro) depuis lequel commencer l'extraction.
S'il s'agit d'un indice négatif, début indique un décalage depuis la fin de la séquence. Par exemple, ```slice(-2)``` extrait les avant-dernier et dernier éléments dans la séquence.

Si début est absent, ```slice()``` commencera depuis 0. Si début est supérieur à la taille du tableau, c'est un tableau vide qui sera renvoyé.

##### fin

Indice (à partir de zéro) auquel arrêter l'extraction. ```slice()``` extrait jusqu'à cet indice, mais pas l'élément situé en fin lui-même.
```slice(1,4)``` extrait du deuxième au quatrième élément (les éléments d'indices 1, 2 et 3).
S'il s'agit d'un indice négatif, fin indique un décalage depuis la fin de la séquence. ```slice(2,-1)``` extrait du troisième à l'avant-dernier élément dans la séquence.
Si fin n'est pas fourni, ```slice()``` extraira jusqu'à la fin de la séquence ```(arr.length)```. Si fin est supérieur à la longueur de la séquence, ```slice()``` fera une extraction jusqu'à la fin de la séquence.

#### Exemples

```javascript
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// résultat attendu: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// résultat attendu: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// résultat attendu: Array ["bison", "camel", "duck", "elephant"]
```

- - - 

### splice()

La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.

#### Syntaxe

```javascript
var tabElementsSupprimes = array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
```

##### debut

L'indice à partir duquel commencer le changement (les numéros commencent à 0). S'il est négatif, le changement commencera d'autant d'éléments à partir de la fin du tableau. Si la valeur est supérieure à la longueur du tableau, elle est ramenée à 0.

##### nbASupprimer

Un entier indiquant le nombre d'anciens éléments à remplacer.
Si ce paramètre est absent ou si sa valeur est supérieure ou égale à array.length - début, alors les éléments entre début et la fin du tableau seront supprimés.
Si nbASupprimer vaut 0, aucun élément ne sera supprimé. Dans ce cas, il est nécessaire de spécifier au moins un nouvel élément.

##### elemN

Les éléments à ajouter au tableau à partir de début. Si vous ne spécifiez pas de nouvel élément, les anciens éléments seront simplement supprimés du tableau.

#### Exemples

```javascript
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// résultat attendu: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// résultat attendu: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

- - - 

### split()

La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.

#### Syntaxe

```javascript
str.split([séparateur[, qtéMax]])
```

##### separateur

Paramètre optionnel qui définit le ou les caractères à utiliser pour scinder la chaîne. Le séparateur est considéré comme une chaîne ou une expression rationnelle. Si le séparateur est omis ou qu'il n'apparaît pas dans la chaîne, le tableau retourné contiendra un unique élément contenant la chaîne entière. Si le séparateur est une chaîne vide, la chaîne str sera convertie en un tableau dont les éléments seront les caractères de la chaîne. Si le séparateur contient un ou plusieurs caractères, la chaîne de caractères entière doit être trouvée pour effectuer une césure.

##### qtéMax

Paramètre optionnel. Un entier définissant la limite sur le nombre de sous-chaînes à retourner. La méthode split scindera toujours la chaîne à partir du séparateur, mais le tableau retourné contiendra au plus qtéMax sous-chaînes.

#### Exemples

```javacript
var words = str.split(' ');
console.log(words[3]);
// résultat attendu: "fox"

var chars = str.split('');
console.log(chars[8]);
// résultat attendu: "k"

var strCopy = str.split();
console.log(strCopy);
// résultat attendu: Array ["The quick brown fox jumps over the lazy dog."]
```

- - - 

### join()

La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.

#### Syntaxe

```javascript
arr.join()
arr.join(séparateur)
```

##### séparateur

Ce paramètre optionnel indique une chaine de caractères pour séparer chaque élément du tableau. Le séparateur est converti en une chaine de caractères si nécessaire. Si ce paramètre n'est pas utilisé, les éléments du tableau seront séparés par une virgule (,). Si ce paramètre est la chaîne vide, les éléments seront accolés les uns aux autres sans espace entre. La valeur par défaut de ce paramètre est ```",".```

#### Exemples

```javascript
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// résultat attendu: "Fire,Air,Water"

console.log(elements.join(''));
// résultat attendu: "FireAirWater"

console.log(elements.join('-'));
// résultat attendu: "Fire-Air-Water"
```

- - - 












