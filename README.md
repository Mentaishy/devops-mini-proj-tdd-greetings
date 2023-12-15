# devops-mini-proj-tdd-greetings

Groupe 31
# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 31
- Membres du groupe :         Ramadani Resul
                              Benali El Manichi Marwan    

## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<Notre fichier YAML définit une pipeline GitHub Actions nommée "GitHub Actions Demo".
La pipeline est déclenchée sur les événements d'ouverture et de modification de pull requests.
La pipeline s'exécute sur une machine virtuelle Ubuntu. Les étapes de la pipeline incluent la récupération du code source,
l'installation des dépendances npm, l'affichage de l'heure de début, le formatage du code avec Prettier, le linting du code,
l'exécution des tests avec Jest, la construction du code, l'affichage de l'heure de fin, et enfin,
l'affichage d'un message indiquant le succès de la pipeline.>

```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<Le champ "on" spécifie les événements qui déclenchent l'exécution de la pipeline. "on: pull_request" signifie que la pipeline sera déclenchée lorsqu'une pull request est ouverte ou modifiée.
"on: push" déclencherait la pipeline à chaque push sur la branche.
Pour un groupe de développeurs juniors, il est généralement recommandé de déclencher la pipeline sur les pull requests plutôt que sur les push directs sur la branche principale.
Cela permet de tester le code avant de le fusionner, réduisant ainsi les erreurs potentielles dans la branche principale.>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<Nous n’avons pas définit de « run_on », sans le S après le run, dans notre pipeline.
Par contre, le champ que nous avons utilisé pour spécifier l’environnement d’exécution est « runs-on » avec S.
Dans notre pipeline, "runs-on: ubuntu-latest" indique que la pipeline s'exécute sur une machine virtuelle Ubuntu avec la version la plus récente disponible.>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<Dans notre pipeline, "uses" est utilisé dans la première étape pour spécifier l'action GitHub "actions/checkout@v3".
Cela signifie qu'il utilisera la version 3 de l'action checkout.
En revanche, "run" est utilisé pour exécuter des commandes spécifiques,
telles que "npm i" pour installer les dépendances.>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<Oui, les différentes étapes peuvent être interverties dans notre pipeline en fonction des besoins spécifiques du projet.
Cependant, il est important de comprendre les dépendances entre les étapes.
En effet, le formatage du code peut dépendre de l'installation des dépendances, et la construction du code peut dépendre du formatage réussi.
Il est recommandé de suivre un ordre logique pour assurer le bon déroulement de la pipeline.
Par exemple, nous ne pouvons pas run prettier sans avoir installé les dépendance au préalable avec npm i.
Par contre nous pourrions intervertir les run de prettier et esLint car les deux fonctionnent indépendamment.>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<Pour ajouter un test de sécurité, voici ce que l’on aurait pu faire :

1) Ajouter une nouvelle étape après la construction du code.
2) Utiliser le champ "run" pour exécuter la commande qui lance le test de sécurité, par exemple, "npm run secure_app".
3) S’assurer que toutes les dépendances nécessaires pour le test de sécurité sont correctement installées.

        Ensuite, les question qu’on devrait se poser sont :

1) Le programme secure_app nécessite-t-il des dépendances spécifiques qui doivent être installées avant l'exécution ?
2) Comment le programme secure_app rapporte-t-il les résultats ? Par des codes de sortie, des fichiers de rapport, ou autre ?
3) Le test de sécurité doit-il être exécuté à chaque fois, ou seulement dans certaines conditions ?
4) Le test de sécurité nécessite-t-il des configurations spécifiques ?

En répondant à ces questions, nous pourrons ajuster notre pipeline pour intégrer efficacement le test de sécurité.
>
```