# Les Boucles

## La Boucle FOR

La boucle FOR crée une boucle composée de trois expressions optionnelles. Ces expressions sont séparer par des points-virgules
et tout cela tient dans des parenthèses.

### 1. La syntaxe

```javascript
for ([initialisation]; [conditin]; [expression finale]) {
[instruction]
}
```

### 2. Les expressions

#### 2.1 L'initialisation

La première des expressions est l'**initialisation** qui est souvent réduit à une simple affectation
ou alors à une déclaration de variable. La nouvelle variable déclaré dansl'initialisation s'utilise avec les mots-clés **var** 
ou **let**. Les variables déclaré avec var ne sont pas locale au sein de la boucle tandis que celle déclaré avec let le sont.
L'initialisation n'est _**lue qu'une seule fois**_

#### 2.2 La condition

La **condition**, est l'expression qui suit l'initialisation. Elle est évaluée avant chaque itération de la boucle.  
Si cette expression est vérifiée (et que le prédicat est true), l'instruction est exécutée. L'instruction est executée j'usqu'à  
se que le predicat soit false.

#### 2.3 L'expression finale

Une expression qui est évaluée à la fin de chaque itération. Cela se produit avant l'évaluation de l'expression condition. Cette expression est généralement utilisée pour mettre à jour ou incrémenter le compteur qu'est la variable d'initialisation.

#### 2.4 L'instruction

Une **instruction** est le code qui est exécuté si la condition de la boucle s'avere être *true*. Pour pouvoir executer plusieurs  
instructions au sein de la boucle for, il faudra utiliser une instruction de bloc : ``` {...}``` qui regroupera les differentes instructions.


### 3 Exemple

```javascript
let tab = [];

for (let i = 4; tab.length < 20; i++) {
    if (i % 2 === 0) {
        tab.push(i);
    }
}

console.log(tab);
```

Ce code génère un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit est 4
et il arrete de remplir le tableau quand il y a 20 nombres pairs dans le tableau

## La Boucle While

La boucle **While**, "tant que" en français s'execute tant que la condition est vérifiée.  Cette boucle est de moins en moins utilisé car il est aisé de générer des boucles infini :rage:.

### 1. La syntaxe

```javascript
while (condition) {
instruction
}
```

### 2. Utilisation

#### 2.1 Condition

Ici, aucune ~~initialisation~~ ne précede la condition. Elle est évaluée avant chaque passage dans la boucle.
Si cette expression est vrai, l'instruction est exécutée.

#### 2.2 Instruction

Une instruction optionnelle qui doit être exécutée tant que la condition d'entrée est vérifiée. Afin d'exécuter plusieurs instructions au sein de la boucle, on utilisera généralement un bloc d'instructions ```{ ... }``` pour les regrouper.  
Note : on pourra utiliser l'instruction break afin d'arrêter une boucle avant que la condition soit vérifiée.

### Exemple

```javascript
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

À chaque itération, la boucle incrémente la valeur de n et l'ajoute à x. Ainsi,  x et n prennent les valeurs suivantes :

* Après la première itération : n = 1 et x = 1
* Après la deuxième itération : n = 2 et x = 3
* Après la troisième itération : n = 3 et x = 6

Une fois que la troisième itération est exécutée, la condition n < 3 n'est plus vérifiée et donc la boucle se termine.
