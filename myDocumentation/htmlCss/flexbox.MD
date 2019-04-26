# Flexbox

## Qu'est-ce que Flexbox ?

Flexbox est un module de boite flexibe destiner à faire de la mise en page


## Propriétés Flex

### Propriétées flex pour le parent (container)

**display:** definit un container flex *inline* ou *block* suivant la valeur donnée; elle permet un flex sur les enfants


* **flex-direction:** établit un axe principal donc définit la direction des objets dans le container. Prend les propriétés:
    * **row:** valeur par défaut
    * **ltr:** gauche à droite
    * **rtl:** droite à gauche
    * **row-reverse:** change le sens
    * **column:** fait des colonnes
    * **colomn-reverse:** fait des colonnes du bas vers le haut


* **flex-wrap:** Par defaut les objets flex vont tous éssayer de tenir sur une ligne. cette proprété permet d'aller à la ligne. C'est valeurs sont:
    * **nowrap:** valeur par defaut (Tous les éléments seront sur une seule ligne)
    * **wrap:** les objets iront à la ligne et ainsi de suite si nécessaire
    * **wrap-reverse:** les objets iront à la ligne mais commenceront par la ligne du bas


* **flex-flow:** c'est une sorte de raccourci de __flex-direction__ et __flex-wrap__ elle s'écrit:
    * ```flex-flow: <‘flex-direction’> || <‘flex-wrap’>```


* **justify-content:** definit l'alignement sur l'axe principal, aide à répartir l'espace vide...
    * **flex-start:** valeur par défaut, les objets sont regroupé sur la gauche
    * **flex-end:** les objets sont regroupé sur la droite
    * **center:** objets regroupé au centre
    * **space-between:** les objets sont sur toute la ligne avec un espace egal entre chacun d'entre eux
    * **space-around:** similaire à __space-between__ à la différence que les objets de gauche et de droite ont une marge
    * **space-evenly:** la marge est la m^me entre les objets et les cotés gauche et droit du container


* **align-items:** definit le comportement par defaut de l'axe de la ligne actuelle
    * **flex-stretch:** valeur par defaut, étand l'objet jusqu'a remplir le container
    * **flex-start:** le bord de marge des articles est placé en haut
    * **flex-end:** le bord de marge des articles est placé en bas
    * **center:** les éléments sont placés sur une ligne centrale
    * **baseline:** les éléments sont alignées de sorte que leurs textes soit sur la même ligne 


* **align-content;** cela aligne les lignes d'un container flex lorsqu'il y a de l'espace libre
    * **flex-start:** les lignes sont regroupés en haut du container
    * **flex-end** les lignes sont regroupés en bas du container
    * **$center** les lignes sont regroupés au milieu du container
    * **space-between:** les lignes sont espacées de haut jusqu'en bas du container et l'espace entre les éléments est égal
    * **space-around:** les lignes sont espacées de haut en bas et l'écart entre les éléments et la marge est égal


### Propriétées pour les enfants (les éléments)

**order:** pour definir l'ordre des éléments. Par défaut c'est par ordre d'apparition
```
.item {
  order: <choisir un chiffre>; /* Par defaut c'est 0 */
}
```

**flex-grow:** definit la capacité des éléments de s'agrandir. Sa valeur sert de proportion
```
.item {
  flex-grow: <choisir un chiffre>; /* Par defaut 0 */
}
```

**flex-shrink:** définit la capacité d'un élément à ce rétracter
```
.item {
  flex-shrink: <choisir un chiffre>; /* Par defaut 1 */
}
```
Les chiffres négatif ne sont pas autorisé pour __flex-shrink__


**flex-basis:** (à voir plus tard)


**flex:** combinaison de __flex-grow flex-shrink flex-basis__ le second et le troisième paramettre sont optionel
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```


**align-self:** (à voir plus tard)
