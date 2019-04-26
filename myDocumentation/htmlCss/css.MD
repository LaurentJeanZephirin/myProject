# CSS

## Qu'est-ce que le CSS ?

Le CSS permet de styliser la présentation des document **html** et **xml**.

## Faire une déclaration CSS

![Alt Déclaration CSS](https://mdn.mozillademos.org/files/11525/CSS.svg)

Le **sélecteur** désigne l'élément html à styliser, dans le cas présent, l'élément paragraphe représenté par la lettre p.
La **propriété** est ce que l'on souhaite modifier concernant le sélecteur choisi, ici la couleur.
En ce qui concerne la **valeur de la propriété**, elle permet de choisir la mise en forme de la propriété donnée.
La **déclaration** se compose de la propriété ainsi que de sa valeur.

### Combiner les sélecteur pour une déclaration

Il est possible de combiner plusieurs sélecteur pour une déclaration.
le code est le suivant:

```css
p,li,h1 {
  color: red;
}

```
