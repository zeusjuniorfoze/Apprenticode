const questions = [
  // ============================================================================
  // JAVASCRIPT - NIVEAU DÉBUTANT (20 questions)
  // ============================================================================
  {
    id: "js_deb_001",
    langage: "javascript",
    niveau: "débutant",
    question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
    options: [
      "A. La balise js",
      "B. La balise javascript",
      "C. La balise script",
      "D. La balise rel",
    ],
    bonneReponse: 2,
    explication:
      "La balise HTML <script> est utilisée pour déclarer un script JavaScript dans votre document HTML. Exemple : `<script> //Votre script JS </script>`",
  },
  {
    id: "js_deb_002",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment déclare-t-on une variable en JavaScript?",
    options: [
      "A. var nomVariable;",
      "B. variable nomVariable;",
      "C. v nomVariable;",
      "D. declare nomVariable;",
    ],
    bonneReponse: 0,
    explication:
      "En JavaScript, on peut déclarer une variable avec 'var', 'let' ou 'const'. 'var' est la méthode traditionnelle, bien que 'let' et 'const' soient préférées en JavaScript moderne.",
  },
  {
    id: "js_deb_003",
    langage: "javascript",
    niveau: "débutant",
    question: "Quel est le type de données pour stocker du texte en JavaScript?",
    options: [
      "A. text",
      "B. string",
      "C. char",
      "D. varchar",
    ],
    bonneReponse: 1,
    explication:
      "En JavaScript, le type de données 'string' est utilisé pour stocker du texte. Exemple : let nom = 'Jean';",
  },
  {
    id: "js_deb_004",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment affiche-t-on un message dans la console?",
    options: [
      "A. print('message')",
      "B. console.log('message')",
      "C. echo('message')",
      "D. display('message')",
    ],
    bonneReponse: 1,
    explication:
      "console.log() est la méthode standard pour afficher des messages dans la console du navigateur ou de Node.js.",
  },
  {
    id: "js_deb_005",
    langage: "javascript",
    niveau: "débutant",
    question: "Quelle est la syntaxe correcte pour une fonction en JavaScript?",
    options: [
      "A. function maFonction() {}",
      "B. def maFonction() {}",
      "C. func maFonction() {}",
      "D. function: maFonction() {}",
    ],
    bonneReponse: 0,
    explication:
      "La syntaxe correcte pour déclarer une fonction en JavaScript est 'function nomFonction() { // code }'",
  },
  {
    id: "js_deb_006",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment crée-t-on un tableau vide en JavaScript?",
    options: [
      "A. var arr = [];",
      "B. var arr = {};",
      "C. var arr = new Array[];",
      "D. var arr = array();",
    ],
    bonneReponse: 0,
    explication:
      "Un tableau vide se crée avec les crochets []. On peut aussi utiliser 'new Array()' mais la première méthode est préférée.",
  },
  {
    id: "js_deb_007",
    langage: "javascript",
    niveau: "débutant",
    question: "Quel opérateur utilise-t-on pour la comparaison stricte en JavaScript?",
    options: [
      "A. =",
      "B. ==",
      "C. ===",
      "D. !=",
    ],
    bonneReponse: 2,
    explication:
      "L'opérateur === effectue une comparaison stricte (valeur et type), tandis que == effectue une comparaison avec conversion de type.",
  },
  {
    id: "js_deb_008",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment accède-t-on au premier élément d'un tableau?",
    options: [
      "A. tableau[1]",
      "B. tableau[0]",
      "C. tableau.first()",
      "D. tableau.get(0)",
    ],
    bonneReponse: 1,
    explication:
      "Les tableaux en JavaScript sont indexés à partir de 0. Le premier élément est donc accessible avec tableau[0].",
  },
  {
    id: "js_deb_009",
    langage: "javascript",
    niveau: "débutant",
    question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau?",
    options: [
      "A. tableau.add()",
      "B. tableau.append()",
      "C. tableau.push()",
      "D. tableau.insert()",
    ],
    bonneReponse: 2,
    explication:
      "La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.",
  },
  {
    id: "js_deb_010",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment écrit-on un commentaire sur une ligne en JavaScript?",
    options: [
      "A. # Ceci est un commentaire",
      "B. // Ceci est un commentaire",
      "C. /* Ceci est un commentaire",
      "D. -- Ceci est un commentaire",
    ],
    bonneReponse: 1,
    explication:
      "Les commentaires sur une ligne commencent par // en JavaScript. Pour les commentaires multi-lignes, on utilise /* */.",
  },
  {
    id: "js_deb_011",
    langage: "javascript",
    niveau: "débutant",
    question: "Quel est le résultat de typeof 'Hello'?",
    options: [
      "A. text",
      "B. string",
      "C. char",
      "D. object",
    ],
    bonneReponse: 1,
    explication:
      "L'opérateur typeof retourne 'string' pour les chaînes de caractères en JavaScript.",
  },
  {
    id: "js_deb_012",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment convertit-on une chaîne en nombre entier?",
    options: [
      "A. parseInt()",
      "B. toNumber()",
      "C. convertInt()",
      "D. stringToInt()",
    ],
    bonneReponse: 0,
    explication:
      "La fonction parseInt() convertit une chaîne de caractères en nombre entier. Exemple : parseInt('123') retourne 123.",
  },
  {
    id: "js_deb_013",
    langage: "javascript",
    niveau: "débutant",
    question: "Quelle structure utilise-t-on pour répéter du code?",
    options: [
      "A. if",
      "B. switch",
      "C. for",
      "D. try",
    ],
    bonneReponse: 2,
    explication:
      "La boucle 'for' est une structure de contrôle qui permet de répéter du code un nombre déterminé de fois.",
  },
  {
    id: "js_deb_014",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment accède-t-on à un élément HTML par son ID?",
    options: [
      "A. document.getElementById()",
      "B. document.getElement()",
      "C. document.findById()",
      "D. document.selectId()",
    ],
    bonneReponse: 0,
    explication:
      "document.getElementById() est la méthode standard pour accéder à un élément HTML par son attribut ID.",
  },
  {
    id: "js_deb_015",
    langage: "javascript",
    niveau: "débutant",
    question: "Quel événement se déclenche quand on clique sur un élément?",
    options: [
      "A. onhover",
      "B. onclick",
      "C. onpress",
      "D. onselect",
    ],
    bonneReponse: 1,
    explication:
      "L'événement 'onclick' se déclenche quand l'utilisateur clique sur un élément HTML.",
  },
  {
    id: "js_deb_016",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment déclare-t-on une constante en JavaScript?",
    options: [
      "A. const maConstante = 5;",
      "B. constant maConstante = 5;",
      "C. final maConstante = 5;",
      "D. readonly maConstante = 5;",
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'const' permet de déclarer une constante dont la valeur ne peut pas être réassignée.",
  },
  {
    id: "js_deb_017",
    langage: "javascript",
    niveau: "débutant",
    question: "Quelle est la valeur par défaut d'une variable déclarée mais non initialisée?",
    options: [
      "A. null",
      "B. undefined",
      "C. 0",
      "D. ''",
    ],
    bonneReponse: 1,
    explication:
      "En JavaScript, une variable déclarée mais non initialisée a la valeur 'undefined'.",
  },
  {
    id: "js_deb_018",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment vérifie-t-on si une variable est un nombre?",
    options: [
      "A. isNumber()",
      "B. typeof variable === 'number'",
      "C. variable.isNumber()",
      "D. checkNumber(variable)",
    ],
    bonneReponse: 1,
    explication:
      "On peut vérifier le type d'une variable avec 'typeof variable === 'number'' pour les nombres.",
  },
  {
    id: "js_deb_019",
    langage: "javascript",
    niveau: "débutant",
    question: "Quelle méthode supprime le dernier élément d'un tableau?",
    options: [
      "A. tableau.removeLast()",
      "B. tableau.pop()",
      "C. tableau.delete()",
      "D. tableau.cut()",
    ],
    bonneReponse: 1,
    explication:
      "La méthode pop() supprime le dernier élément d'un tableau et le retourne.",
  },
  {
    id: "js_deb_020",
    langage: "javascript",
    niveau: "débutant",
    question: "Comment affiche-t-on une boîte de dialogue d'alerte?",
    options: [
      "A. alert('message')",
      "B. popup('message')",
      "C. dialog('message')",
      "D. show('message')",
    ],
    bonneReponse: 0,
    explication:
      "La fonction alert() affiche une boîte de dialogue avec un message et un bouton OK.",
  },

  // ============================================================================
  // JAVASCRIPT - NIVEAU INTERMÉDIAIRE (20 questions)
  // ============================================================================
  {
    id: "js_int_001",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Quelle est la différence entre 'let' et 'var'?",
    options: [
      "A. Aucune différence",
      "B. 'let' a une portée de bloc, 'var' a une portée de fonction",
      "C. 'let' est plus rapide que 'var'",
      "D. 'var' est plus moderne que 'let'",
    ],
    bonneReponse: 1,
    explication:
      "'let' a une portée de bloc (block scope) tandis que 'var' a une portée de fonction (function scope). 'let' évite aussi le hoisting problématique de 'var'.",
  },
  {
    id: "js_int_002",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une fonction fléchée (arrow function)?",
    options: [
      "A. Une fonction qui pointe vers une autre",
      "B. Une syntaxe courte pour écrire des fonctions: () => {}",
      "C. Une fonction qui retourne toujours true",
      "D. Une fonction récursive",
    ],
    bonneReponse: 1,
    explication:
      "Les fonctions fléchées sont une syntaxe concise pour écrire des fonctions : const func = () => {}. Elles ont aussi un comportement différent pour 'this'.",
  },
  {
    id: "js_int_003",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Que fait la méthode map() sur un tableau?",
    options: [
      "A. Filtre les éléments",
      "B. Transforme chaque élément et retourne un nouveau tableau",
      "C. Trie le tableau",
      "D. Trouve un élément spécifique",
    ],
    bonneReponse: 1,
    explication:
      "map() crée un nouveau tableau avec les résultats de l'appel d'une fonction pour chaque élément du tableau original.",
  },
  {
    id: "js_int_004",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment fonctionne la destructuration d'objet?",
    options: [
      "A. const obj = {a, b} = source",
      "B. const {a, b} = obj",
      "C. const [a, b] = obj",
      "D. const obj.a, obj.b = source",
    ],
    bonneReponse: 1,
    explication:
      "La destructuration d'objet permet d'extraire des propriétés : const {a, b} = obj; extrait les propriétés 'a' et 'b' de l'objet.",
  },
  {
    id: "js_int_005",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le hoisting en JavaScript?",
    options: [
      "A. L'élévation des déclarations en haut de leur portée",
      "B. La création d'objets dynamiques",
      "C. L'optimisation du code",
      "D. La gestion des erreurs",
    ],
    bonneReponse: 0,
    explication:
      "Le hoisting est le comportement par lequel les déclarations de variables et de fonctions sont 'hissées' au sommet de leur portée pendant la compilation.",
  },
  {
    id: "js_int_006",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment créer une promesse (Promise) en JavaScript?",
    options: [
      "A. new Promise((resolve, reject) => {})",
      "B. Promise.create((resolve, reject) => {})",
      "C. createPromise((resolve, reject) => {})",
      "D. Promise((resolve, reject) => {})",
    ],
    bonneReponse: 0,
    explication:
      "Une Promise se crée avec 'new Promise((resolve, reject) => {})' où resolve et reject sont des fonctions de callback.",
  },
  {
    id: "js_int_007",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Que fait l'opérateur spread (...) ?",
    options: [
      "A. Concatène des chaînes",
      "B. Étale les éléments d'un itérable",
      "C. Divise un nombre",
      "D. Compare des valeurs",
    ],
    bonneReponse: 1,
    explication:
      "L'opérateur spread (...) étale les éléments d'un tableau ou d'un objet. Exemple : [...array1, ...array2] ou {...obj1, ...obj2}",
  },
  {
    id: "js_int_008",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment fonctionne async/await?",
    options: [
      "A. Pour créer des fonctions synchrones",
      "B. Pour gérer les promesses de manière plus lisible",
      "C. Pour créer des boucles",
      "D. Pour déclarer des variables",
    ],
    bonneReponse: 1,
    explication:
      "async/await permet de gérer les promesses de manière synchrone en apparence. 'async' déclare une fonction asynchrone, 'await' attend le résultat d'une promesse.",
  },
  {
    id: "js_int_009",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une closure en JavaScript?",
    options: [
      "A. Une fonction qui ferme l'application",
      "B. Une fonction qui a accès aux variables de sa portée parente",
      "C. Une fonction sans paramètres",
      "D. Une fonction qui ne retourne rien",
    ],
    bonneReponse: 1,
    explication:
      "Une closure est une fonction qui a accès aux variables de sa portée lexicale même après que cette portée ait été fermée.",
  },
  {
    id: "js_int_010",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment fonctionne la méthode filter()?",
    options: [
      "A. Transforme tous les éléments",
      "B. Retourne un nouveau tableau avec les éléments qui passent un test",
      "C. Trie les éléments",
      "D. Compte les éléments",
    ],
    bonneReponse: 1,
    explication:
      "filter() crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.",
  },
  {
    id: "js_int_011",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Que fait la méthode reduce()?",
    options: [
      "A. Réduit la taille du tableau",
      "B. Applique une fonction de réduction pour obtenir une valeur unique",
      "C. Supprime des éléments",
      "D. Inverse le tableau",
    ],
    bonneReponse: 1,
    explication:
      "reduce() applique une fonction de réduction sur chaque élément du tableau pour le réduire à une seule valeur.",
  },
  {
    id: "js_int_012",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment gérer les erreurs avec try/catch?",
    options: [
      "A. try { code } catch (error) { gestion }",
      "B. attempt { code } catch (error) { gestion }",
      "C. test { code } catch (error) { gestion }",
      "D. exec { code } catch (error) { gestion }",
    ],
    bonneReponse: 0,
    explication:
      "La structure try/catch permet de gérer les erreurs : le code dans 'try' est exécuté, et si une erreur survient, elle est capturée dans 'catch'.",
  },
  {
    id: "js_int_013",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Qu'est-ce que l'event bubbling?",
    options: [
      "A. La création d'événements",
      "B. La propagation des événements du plus profond vers la racine",
      "C. La suppression d'événements",
      "D. L'annulation d'événements",
    ],
    bonneReponse: 1,
    explication:
      "L'event bubbling est la propagation d'un événement depuis l'élément cible vers ses parents dans l'arbre DOM.",
  },
  {
    id: "js_int_014",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment utilise-t-on les templates literals?",
    options: [
      "A. 'Hello ' + name",
      "B. `Hello ${name}`",
      "C. 'Hello %s' % name",
      "D. concat('Hello ', name)",
    ],
    bonneReponse: 1,
    explication:
      "Les templates literals utilisent les backticks (`) et permettent l'interpolation avec ${variable}.",
  },
  {
    id: "js_int_015",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Que fait Object.assign()?",
    options: [
      "A. Crée un nouvel objet",
      "B. Copie les propriétés d'objets sources vers un objet cible",
      "C. Compare deux objets",
      "D. Supprime des propriétés",
    ],
    bonneReponse: 1,
    explication:
      "Object.assign() copie toutes les propriétés énumérables d'un ou plusieurs objets sources vers un objet cible.",
  },
  {
    id: "js_int_016",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment fonctionne setTimeout()?",
    options: [
      "A. Exécute du code immédiatement",
      "B. Exécute du code après un délai spécifié",
      "C. Crée une boucle infinie",
      "D. Arrête l'exécution du code",
    ],
    bonneReponse: 1,
    explication:
      "setTimeout() exécute une fonction après un délai spécifié en millisecondes. Exemple : setTimeout(fonction, 1000)",
  },
  {
    id: "js_int_017",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le DOM?",
    options: [
      "A. Document Object Model - représentation des éléments HTML",
      "B. Data Object Management",
      "C. Dynamic Object Method",
      "D. Document Operation Mode",
    ],
    bonneReponse: 0,
    explication:
      "Le DOM (Document Object Model) est une représentation en arbre des éléments HTML que JavaScript peut manipuler.",
  },
  {
    id: "js_int_018",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment créer une classe en JavaScript?",
    options: [
      "A. class MyClass { constructor() {} }",
      "B. function class MyClass() {}",
      "C. create class MyClass {}",
      "D. new class MyClass {}",
    ],
    bonneReponse: 0,
    explication:
      "Les classes se déclarent avec le mot-clé 'class' suivi du nom de la classe et d'un constructeur.",
  },
  {
    id: "js_int_019",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Que fait JSON.stringify()?",
    options: [
      "A. Parse une chaîne JSON",
      "B. Convertit un objet JavaScript en chaîne JSON",
      "C. Valide un JSON",
      "D. Formate un JSON",
    ],
    bonneReponse: 1,
    explication:
      "JSON.stringify() convertit un objet JavaScript en chaîne de caractères JSON. L'inverse est JSON.parse().",
  },
  {
    id: "js_int_020",
    langage: "javascript",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'opérateur nullish coalescing (??) ?",
    options: [
      "A. Compare deux valeurs",
      "B. Retourne la première valeur non-null/non-undefined",
      "C. Additionne deux nombres",
      "D. Vérifie l'existence d'une propriété",
    ],
    bonneReponse: 1,
    explication:
      "L'opérateur ?? retourne la valeur de droite si celle de gauche est null ou undefined. Différent de || qui teste la 'fausseté'.",
  },

  // ============================================================================
  // JAVASCRIPT - NIVEAU AVANCÉ (20 questions)
  // ============================================================================
  {
    id: "js_adv_001",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que l'event loop en JavaScript?",
    options: [
      "A. Une boucle for infinie",
      "B. Le mécanisme qui gère l'exécution asynchrone du code",
      "C. Une méthode pour créer des événements",
      "D. Un pattern de programmation",
    ],
    bonneReponse: 1,
    explication:
      "L'event loop est le mécanisme qui permet à JavaScript de gérer les opérations asynchrones malgré son caractère single-threaded.",
  },
  {
    id: "js_adv_002",
    langage: "javascript",
    niveau: "avancé",
    question: "Que sont les Web Workers?",
    options: [
      "A. Des développeurs web",
      "B. Des scripts qui s'exécutent en arrière-plan sur un thread séparé",
      "C. Des outils de développement",
      "D. Des frameworks JavaScript",
    ],
    bonneReponse: 1,
    explication:
      "Les Web Workers permettent d'exécuter du JavaScript sur un thread séparé, évitant de bloquer l'interface utilisateur.",
  },
  {
    id: "js_adv_003",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment fonctionne le prototype en JavaScript?",
    options: [
      "A. C'est un modèle de classe",
      "B. Chaque objet a un lien vers un autre objet (son prototype)",
      "C. C'est une fonction spéciale",
      "D. C'est un type de variable",
    ],
    bonneReponse: 1,
    explication:
      "En JavaScript, chaque objet a une propriété prototype qui pointe vers un autre objet, créant une chaîne de prototypes pour l'héritage.",
  },
  {
    id: "js_adv_004",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que le currying en JavaScript?",
    options: [
      "A. Un pattern de cuisine",
      "B. La transformation d'une fonction à plusieurs arguments en séquence de fonctions à un argument",
      "C. Une méthode d'optimisation",
      "D. Un type de boucle",
    ],
    bonneReponse: 1,
    explication:
      "Le currying transforme une fonction f(a,b,c) en f(a)(b)(c), permettant l'application partielle des arguments.",
  },
  {
    id: "js_adv_005",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment créer un module ES6?",
    options: [
      "A. module.exports = {}",
      "B. export { fonction }; import { fonction } from './module'",
      "C. require('./module')",
      "D. include './module'",
    ],
    bonneReponse: 1,
    explication:
      "Les modules ES6 utilisent export pour exporter et import pour importer des fonctionnalités entre fichiers.",
  },
  {
    id: "js_adv_006",
    langage: "javascript",
    niveau: "avancé",
    question: "Que fait Symbol() en JavaScript?",
    options: [
      "A. Crée une chaîne unique",
      "B. Crée un identifiant unique et immutable",
      "C. Crée un nombre aléatoire",
      "D. Crée un objet spécial",
    ],
    bonneReponse: 1,
    explication:
      "Symbol() crée un identifiant unique qui ne peut être égal à aucun autre Symbol, utile pour les propriétés privées.",
  },
  {
    id: "js_adv_007",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment fonctionne Proxy en JavaScript?",
    options: [
      "A. Crée une copie d'objet",
      "B. Intercepte et personnalise les opérations sur les objets",
      "C. Optimise les performances",
      "D. Gère les erreurs",
    ],
    bonneReponse: 1,
    explication:
      "Proxy permet d'intercepter et de personnaliser les opérations effectuées sur les objets (lecture, écriture, énumération, etc.).",
  },
  {
    id: "js_adv_008",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce qu'un générateur (generator) en JavaScript?",
    options: [
      "A. Une fonction qui peut être pausée et reprise",
      "B. Un créateur d'objets",
      "C. Un compilateur de code",
      "D. Un gestionnaire d'événements",
    ],
    bonneReponse: 0,
    explication:
      "Un générateur est une fonction spéciale (function*) qui peut être pausée avec yield et reprise, permettant de produire une séquence de valeurs.",
  },
  {
    id: "js_adv_009",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment fonctionne WeakMap par rapport à Map?",
    options: [
      "A. WeakMap est plus rapide",
      "B. WeakMap a des clés faiblement référencées et peut être garbage collecté",
      "C. WeakMap peut stocker plus de données",
      "D. Aucune différence",
    ],
    bonneReponse: 1,
    explication:
      "WeakMap utilise des références faibles pour ses clés, permettant au garbage collector de nettoyer les entrées quand les clés ne sont plus référencées ailleurs.",
  },
  {
    id: "js_adv_010",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Observer en JavaScript?",
    options: [
      "A. Un pattern pour surveiller les variables",
      "B. Un pattern où un objet maintient une liste d'observateurs et les notifie des changements",
      "C. Un pattern pour optimiser le code",
      "D. Un pattern pour gérer les erreurs",
    ],
    bonneReponse: 1,
    explication:
      "Le pattern Observer permet à un objet de notifier automatiquement une liste d'observateurs quand son état change.",
  },
  {
    id: "js_adv_011",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment optimiser les performances avec requestAnimationFrame()?",
    options: [
      "A. Il accélère toutes les animations",
      "B. Il synchronise les animations avec le taux de rafraîchissement du navigateur",
      "C. Il réduit la mémoire utilisée",
      "D. Il compresse les animations",
    ],
    bonneReponse: 1,
    explication:
      "requestAnimationFrame() optimise les animations en les synchronisant avec le taux de rafraîchissement de l'écran (généralement 60 FPS).",
  },
  {
    id: "js_adv_012",
    langage: "javascript",
    niveau: "avancé",
    question: "Que fait Object.defineProperty()?",
    options: [
      "A. Crée un nouvel objet",
      "B. Définit une nouvelle propriété avec des descripteurs spécifiques",
      "C. Copie des propriétés",
      "D. Supprime des propriétés",
    ],
    bonneReponse: 1,
    explication:
      "Object.defineProperty() permet de définir une propriété avec des descripteurs précis (writable, enumerable, configurable, get/set).",
  },
  {
    id: "js_adv_013",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment fonctionne le debouncing?",
    options: [
      "A. Accélère l'exécution des fonctions",
      "B. Retarde l'exécution d'une fonction jusqu'à ce qu'un délai soit écoulé",
      "C. Exécute une fonction plusieurs fois",
      "D. Cache le résultat des fonctions",
    ],
    bonneReponse: 1,
    explication:
      "Le debouncing retarde l'exécution d'une fonction jusqu'à ce qu'un certain temps soit écoulé depuis le dernier appel, utile pour optimiser les recherches.",
  },
  {
    id: "js_adv_014",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que le throttling?",
    options: [
      "A. Limite la fréquence d'exécution d'une fonction",
      "B. Accélère les fonctions",
      "C. Compress les données",
      "D. Crypte les données",
    ],
    bonneReponse: 0,
    explication:
      "Le throttling limite la fréquence d'exécution d'une fonction à un maximum, par exemple une fois toutes les 100ms.",
  },
  {
    id: "js_adv_015",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment implémenter un Singleton en JavaScript?",
    options: [
      "A. Avec une classe normale",
      "B. Avec un objet littéral ou une classe qui ne permet qu'une seule instance",
      "C. Avec plusieurs constructeurs",
      "D. Avec des fonctions globales",
    ],
    bonneReponse: 1,
    explication:
      "Un Singleton assure qu'une classe n'a qu'une seule instance et fournit un point d'accès global à cette instance.",
  },
  {
    id: "js_adv_016",
    langage: "javascript",
    niveau: "avancé",
    question: "Que fait Reflect en JavaScript?",
    options: [
      "A. Réfléchit la lumière",
      "B. Fournit des méthodes pour les opérations interceptables sur les objets",
      "C. Optimise les performances",
      "D. Gère les erreurs",
    ],
    bonneReponse: 1,
    explication:
      "Reflect fournit des méthodes pour les opérations interceptables JavaScript (get, set, has, deleteProperty, etc.).",
  },
  {
    id: "js_adv_017",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment fonctionne l'immutabilité avec Object.freeze()?",
    options: [
      "A. Arrête l'exécution",
      "B. Rend un objet immutable (non modifiable)",
      "C. Sauvegarde l'objet",
      "D. Copie l'objet",
    ],
    bonneReponse: 1,
    explication:
      "Object.freeze() rend un objet immutable : ses propriétés ne peuvent plus être modifiées, ajoutées ou supprimées.",
  },
  {
    id: "js_adv_018",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Factory en JavaScript?",
    options: [
      "A. Un pattern pour créer des usines",
      "B. Un pattern qui crée des objets sans spécifier leur classe exacte",
      "C. Un pattern pour optimiser la mémoire",
      "D. Un pattern pour gérer les erreurs",
    ],
    bonneReponse: 1,
    explication:
      "Le pattern Factory encapsule la création d'objets et permet de créer différents types d'objets selon les paramètres fournis.",
  },
  {
    id: "js_adv_019",
    langage: "javascript",
    niveau: "avancé",
    question: "Comment utiliser les SharedArrayBuffer?",
    options: [
      "A. Pour partager des données entre threads JavaScript",
      "B. Pour créer des tableaux plus rapides",
      "C. Pour optimiser la mémoire",
      "D. Pour créer des tableaux partagés entre pages",
    ],
    bonneReponse: 0,
    explication:
      "SharedArrayBuffer permet de partager des données entre le thread principal et les Web Workers, mais nécessite des en-têtes de sécurité spécifiques.",
  },
  {
    id: "js_adv_020",
    langage: "javascript",
    niveau: "avancé",
    question: "Qu'est-ce que l'Intersection Observer API?",
    options: [
      "A. Observe les intersections de routes",
      "B. Observe quand un élément entre ou sort de la zone visible",
      "C. Observe les clics sur les éléments",
      "D. Observe les changements de style",
    ],
    bonneReponse: 1,
    explication:
      "L'Intersection Observer API permet d'observer de manière asynchrone les changements d'intersection d'un élément avec son ancêtre ou la viewport.",
  },

  // ============================================================================
  // PYTHON - NIVEAU DÉBUTANT (20 questions)
  // ============================================================================
  {
    id: "py_deb_001",
    langage: "python",
    niveau: "débutant",
    question: "Python est un langage _______?",
    options: ["A. interprété", "B. machine", "C. compilé", "D. binaire"],
    bonneReponse: 0,
    explication:
      "Python est un langage interprété, ce qui signifie que son code source est exécuté ligne par ligne par un interpréteur, plutôt que d'être compilé en code machine avant l'exécution.",
  },
  {
    id: "py_deb_002",
    langage: "python",
    niveau: "débutant",
    question: "Comment affiche-t-on du texte en Python?",
    options: [
      "A. echo('Hello')",
      "B. print('Hello')",
      "C. console.log('Hello')",
      "D. display('Hello')",
    ],
    bonneReponse: 1,
    explication:
      "La fonction print() est utilisée pour afficher du texte ou des valeurs en Python. Exemple : print('Hello World')",
  },
  {
    id: "py_deb_003",
    langage: "python",
    niveau: "débutant",
    question: "Comment déclare-t-on une variable en Python?",
    options: [
      "A. var nom = 'Jean'",
      "B. nom = 'Jean'",
      "C. string nom = 'Jean'",
      "D. declare nom = 'Jean'",
    ],
    bonneReponse: 1,
    explication:
      "En Python, on déclare une variable simplement en lui assignant une valeur : nom = 'Jean'. Python détermine automatiquement le type.",
  },
  {
    id: "py_deb_004",
    langage: "python",
    niveau: "débutant",
    question: "Quel caractère utilise-t-on pour les commentaires sur une ligne?",
    options: ["A. //", "B. #", "C. /*", "D. --"],
    bonneReponse: 1,
    explication:
      "En Python, les commentaires sur une ligne commencent par le caractère #. Exemple : # Ceci est un commentaire",
  },
  {
    id: "py_deb_005",
    langage: "python",
    niveau: "débutant",
    question: "Comment définit-on une fonction en Python?",
    options: [
      "A. function maFonction():",
      "B. def maFonction():",
      "C. func maFonction():",
      "D. define maFonction():",
    ],
    bonneReponse: 1,
    explication:
      "Les fonctions en Python se définissent avec le mot-clé 'def' suivi du nom de la fonction et des deux-points.",
  },
  {
    id: "py_deb_006",
    langage: "python",
    niveau: "débutant",
    question: "Quel est le type de données pour les nombres entiers en Python?",
    options: ["A. int", "B. integer", "C. number", "D. num"],
    bonneReponse: 0,
    explication:
      "En Python, le type de données pour les nombres entiers est 'int'. Exemple : age = 25 (age sera de type int)",
  },
  {
    id: "py_deb_007",
    langage: "python",
    niveau: "débutant",
    question: "Comment crée-t-on une liste vide en Python?",
    options: [
      "A. liste = []",
      "B. liste = {}",
      "C. liste = ()",
      "D. liste = list[]",
    ],
    bonneReponse: 0,
    explication:
      "Une liste vide se crée avec des crochets vides : liste = []. On peut aussi utiliser list() mais [] est plus courant.",
  },
  {
    id: "py_deb_008",
    langage: "python",
    niveau: "débutant",
    question: "Comment accède-t-on au premier élément d'une liste?",
    options: [
      "A. liste[1]",
      "B. liste[0]",
      "C. liste.first()",
      "D. liste.get(0)",
    ],
    bonneReponse: 1,
    explication:
      "Les listes en Python sont indexées à partir de 0. Le premier élément est accessible avec liste[0].",
  },
  {
    id: "py_deb_009",
    langage: "python",
    niveau: "débutant",
    question: "Comment ajoute-t-on un élément à une liste?",
    options: [
      "A. liste.add(element)",
      "B. liste.append(element)",
      "C. liste.push(element)",
      "D. liste.insert(element)",
    ],
    bonneReponse: 1,
    explication:
      "La méthode append() ajoute un élément à la fin d'une liste. Exemple : ma_liste.append('nouvel élément')",
  },
  {
    id: "py_deb_010",
    langage: "python",
    niveau: "débutant",
    question: "Quelle structure utilise-t-on pour une boucle simple en Python?",
    options: ["A. for", "B. loop", "C. repeat", "D. iterate"],
    bonneReponse: 0,
    explication:
      "La boucle 'for' est la structure principale pour itérer en Python. Exemple : for i in range(5):",
  },
  {
    id: "py_deb_011",
    langage: "python",
    niveau: "débutant",
    question: "Comment vérifie-t-on une condition en Python?",
    options: ["A. if condition:", "B. if (condition)", "C. if condition then:", "D. check condition:"],
    bonneReponse: 0,
    explication:
      "Les conditions se vérifient avec 'if' suivi de la condition et des deux-points. L'indentation définit le bloc de code.",
  },
  {
    id: "py_deb_012",
    langage: "python",
    niveau: "débutant",
    question: "Quel opérateur utilise-t-on pour l'égalité en Python?",
    options: ["A. =", "B. ==", "C. ===", "D. eq"],
    bonneReponse: 1,
    explication:
      "L'opérateur == teste l'égalité en Python, tandis que = est utilisé pour l'assignation.",
  },
  {
    id: "py_deb_013",
    langage: "python",
    niveau: "débutant",
    question: "Comment convertit-on une chaîne en nombre entier?",
    options: ["A. int(chaine)", "B. toInt(chaine)", "C. Integer(chaine)", "D. convert(chaine)"],
    bonneReponse: 0,
    explication:
      "La fonction int() convertit une chaîne de caractères en nombre entier. Exemple : int('123') retourne 123",
  },
  {
    id: "py_deb_014",
    langage: "python",
    niveau: "débutant",
    question: "Quel est le type de données pour du texte en Python?",
    options: ["A. text", "B. string", "C. str", "D. char"],
    bonneReponse: 2,
    explication:
      "En Python, le type de données pour le texte est 'str' (string). Exemple : nom = 'Jean' (nom sera de type str)",
  },
  {
    id: "py_deb_015",
    langage: "python",
    niveau: "débutant",
    question: "Comment obtient-on la longueur d'une liste?",
    options: ["A. liste.length", "B. len(liste)", "C. liste.size()", "D. count(liste)"],
    bonneReponse: 1,
    explication:
      "La fonction len() retourne la longueur d'une séquence (liste, chaîne, etc.). Exemple : len([1,2,3]) retourne 3",
  },
  {
    id: "py_deb_016",
    langage: "python",
    niveau: "débutant",
    question: "Comment crée-t-on un dictionnaire vide?",
    options: ["A. dict = []", "B. dict = {}", "C. dict = ()", "D. dict = set()"],
    bonneReponse: 1,
    explication:
      "Un dictionnaire vide se crée avec des accolades vides : dict = {}. On peut aussi utiliser dict() mais {} est plus courant.",
  },
  {
    id: "py_deb_017",
    langage: "python",
    niveau: "débutant",
    question: "Comment accède-t-on à une valeur dans un dictionnaire?",
    options: [
      "A. dictionnaire[cle]",
      "B. dictionnaire.get[cle]",
      "C. dictionnaire->cle",
      "D. dictionnaire.cle",
    ],
    bonneReponse: 0,
    explication:
      "On accède aux valeurs d'un dictionnaire avec la syntaxe dictionnaire[cle]. Exemple : mon_dict['nom']",
  },
  {
    id: "py_deb_018",
    langage: "python",
    niveau: "débutant",
    question: "Quelle fonction permet de lire une entrée utilisateur?",
    options: ["A. read()", "B. input()", "C. scan()", "D. get_input()"],
    bonneReponse: 1,
    explication:
      "La fonction input() permet de lire une entrée clavier de l'utilisateur. Exemple : nom = input('Entrez votre nom: ')",
  },
  {
    id: "py_deb_019",
    langage: "python",
    niveau: "débutant",
    question: "Comment vérifie-t-on le type d'une variable?",
    options: ["A. typeof(variable)", "B. type(variable)", "C. gettype(variable)", "D. variable.type()"],
    bonneReponse: 1,
    explication:
      "La fonction type() retourne le type d'une variable. Exemple : type(5) retourne <class 'int'>",
  },
  {
    id: "py_deb_020",
    langage: "python",
    niveau: "débutant",
    question: "Comment crée-t-on une chaîne sur plusieurs lignes?",
    options: [
      "A. 'ligne1' + 'ligne2'",
      "B. '''texte multiligne'''",
      "C. 'ligne1 \\n ligne2'",
      "D. multiline('texte')",
    ],
    bonneReponse: 1,
    explication:
      "Les triple guillemets ''' ou \"\"\" permettent de créer des chaînes sur plusieurs lignes en Python.",
  },

  // ============================================================================
  // PYTHON - NIVEAU INTERMÉDIAIRE (20 questions)
  // ============================================================================
  {
    id: "py_int_001",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une list comprehension?",
    options: [
      "A. Une façon de comprendre les listes",
      "B. Une syntaxe concise pour créer des listes : [x for x in iterable]",
      "C. Une méthode de tri",
      "D. Une fonction intégrée",
    ],
    bonneReponse: 1,
    explication:
      "Une list comprehension est une syntaxe concise pour créer des listes. Exemple : [x*2 for x in range(5)] crée [0,2,4,6,8]",
  },
  {
    id: "py_int_002",
    langage: "python",
    niveau: "intermédiaire",
    question: "Que fait la fonction enumerate()?",
    options: [
      "A. Compte les éléments",
      "B. Retourne des tuples (index, valeur) pour chaque élément",
      "C. Trie les éléments",
      "D. Supprime les doublons",
    ],
    bonneReponse: 1,
    explication:
      "enumerate() retourne un objet qui produit des tuples contenant l'index et la valeur de chaque élément.",
  },
  {
    id: "py_int_003",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment fonctionne la fonction zip()?",
    options: [
      "A. Compresse des fichiers",
      "B. Combine plusieurs itérables en parallèle",
      "C. Trie des données",
      "D. Filtre des éléments",
    ],
    bonneReponse: 1,
    explication:
      "zip() combine plusieurs itérables en parallèle. Exemple : zip([1,2], ['a','b']) produit [(1,'a'), (2,'b')]",
  },
  {
    id: "py_int_004",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un décorateur en Python?",
    options: [
      "A. Une fonction qui modifie le comportement d'une autre fonction",
      "B. Un pattern de design",
      "C. Une classe spéciale",
      "D. Un module d'interface graphique",
    ],
    bonneReponse: 0,
    explication:
      "Un décorateur est une fonction qui prend une autre fonction en paramètre et étend son comportement sans la modifier explicitement.",
  },
  {
    id: "py_int_005",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment définit-on une classe en Python?",
    options: [
      "A. class MaClasse:",
      "B. define class MaClasse:",
      "C. create class MaClasse:",
      "D. new class MaClasse:",
    ],
    bonneReponse: 0,
    explication:
      "Les classes en Python se définissent avec le mot-clé 'class' suivi du nom de la classe et des deux-points.",
  },
  {
    id: "py_int_006",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce que self dans une classe Python?",
    options: [
      "A. Un mot-clé réservé",
      "B. Une référence à l'instance courante de la classe",
      "C. Une variable globale",
      "D. Une fonction spéciale",
    ],
    bonneReponse: 1,
    explication:
      "'self' est une convention pour référencer l'instance courante de la classe dans les méthodes.",
  },
  {
    id: "py_int_007",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment gère-t-on les exceptions avec try/except?",
    options: [
      "A. try: code except Exception: gestion",
      "B. attempt: code catch Exception: gestion",
      "C. test: code handle Exception: gestion",
      "D. exec: code error Exception: gestion",
    ],
    bonneReponse: 0,
    explication:
      "La gestion d'exceptions utilise try/except. Le code dans 'try' est exécuté, et les exceptions sont capturées dans 'except'.",
  },
  {
    id: "py_int_008",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un générateur en Python?",
    options: [
      "A. Une fonction qui utilise 'yield' pour produire des valeurs une à une",
      "B. Un créateur de classes",
      "C. Un compilateur de code",
      "D. Une fonction mathématique",
    ],
    bonneReponse: 0,
    explication:
      "Un générateur est une fonction qui utilise 'yield' au lieu de 'return' pour produire des valeurs de manière lazy (paresseuse).",
  },
  {
    id: "py_int_009",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'opérateur * dans les paramètres de fonction?",
    options: [
      "A. Multiplie les paramètres",
      "B. Collecte un nombre variable d'arguments positionnels",
      "C. Indique un paramètre optionnel",
      "D. Crée une copie du paramètre",
    ],
    bonneReponse: 1,
    explication:
      "*args collecte tous les arguments positionnels supplémentaires dans un tuple. **kwargs fait de même pour les arguments nommés.",
  },
  {
    id: "py_int_010",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une lambda en Python?",
    options: [
      "A. Une fonction anonyme courte",
      "B. Une lettre grecque",
      "C. Une classe spéciale",
      "D. Un type de données",
    ],
    bonneReponse: 0,
    explication:
      "Une lambda est une fonction anonyme courte qui peut avoir plusieurs arguments mais une seule expression. Exemple : lambda x: x*2",
  },
  {
    id: "py_int_011",
    langage: "python",
    niveau: "intermédiaire",
    question: "Que fait la fonction map()?",
    options: [
      "A. Crée une carte géographique",
      "B. Applique une fonction à tous les éléments d'un itérable",
      "C. Associe des clés et valeurs",
      "D. Trie des données",
    ],
    bonneReponse: 1,
    explication:
      "map() applique une fonction à chaque élément d'un itérable et retourne un objet map. Exemple : map(str.upper, ['a','b'])",
  },
  {
    id: "py_int_012",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment fonctionne la fonction filter()?",
    options: [
      "A. Supprime tous les éléments",
      "B. Filtre les éléments selon une condition",
      "C. Trie les éléments",
      "D. Compte les éléments",
    ],
    bonneReponse: 1,
    explication:
      "filter() filtre les éléments d'un itérable selon une fonction de test. Seuls les éléments qui passent le test sont conservés.",
  },
  {
    id: "py_int_013",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce que l'héritage en Python?",
    options: [
      "A. Le passage de propriétés d'une classe parent à une classe enfant",
      "B. La copie de variables",
      "C. L'importation de modules",
      "D. La sauvegarde de données",
    ],
    bonneReponse: 0,
    explication:
      "L'héritage permet à une classe de hériter des attributs et méthodes d'une autre classe. Syntaxe : class Enfant(Parent):",
  },
  {
    id: "py_int_014",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment crée-t-on un set (ensemble) en Python?",
    options: [
      "A. set = []",
      "B. set = {}",
      "C. set = set() ou {1,2,3}",
      "D. set = ()",
    ],
    bonneReponse: 2,
    explication:
      "Un set se crée avec set() pour un ensemble vide ou {1,2,3} pour un ensemble avec des éléments. {} crée un dictionnaire vide.",
  },
  {
    id: "py_int_015",
    langage: "python",
    niveau: "intermédiaire",
    question: "Que fait la méthode join() sur les chaînes?",
    options: [
      "A. Sépare une chaîne",
      "B. Joint les éléments d'un itérable avec la chaîne comme séparateur",
      "C. Copie une chaîne",
      "D. Convertit en majuscules",
    ],
    bonneReponse: 1,
    explication:
      "join() joint les éléments d'un itérable en utilisant la chaîne comme séparateur. Exemple : ','.join(['a','b']) donne 'a,b'",
  },
  {
    id: "py_int_016",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment ouvre-t-on et lit-on un fichier en Python?",
    options: [
      "A. with open('fichier.txt', 'r') as f: contenu = f.read()",
      "B. file = open('fichier.txt'); contenu = file.get()",
      "C. contenu = read('fichier.txt')",
      "D. contenu = load('fichier.txt')",
    ],
    bonneReponse: 0,
    explication:
      "La syntaxe 'with open()' est recommandée car elle ferme automatiquement le fichier. 'r' indique le mode lecture.",
  },
  {
    id: "py_int_017",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une f-string?",
    options: [
      "A. Une chaîne de fonctions",
      "B. Une chaîne formatée avec interpolation : f'Hello {nom}'",
      "C. Une chaîne de caractères fixes",
      "D. Une chaîne de type float",
    ],
    bonneReponse: 1,
    },
    {
    id: "py_int_017",
    langage: "python",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une f-string?",
    options: [
      "A. Une chaîne de fonctions",
      "B. Une chaîne formatée avec interpolation : f'Hello {nom}'",
      "C. Une chaîne de caractères fixes",
      "D. Une chaîne de type float",
    ],
    bonneReponse: 1,
    explication:
      "Les f-strings (formatted string literals) permettent l'interpolation de variables directement dans les chaînes. Exemple : f'Bonjour {nom}, vous avez {age} ans'",
  },
  {
    id: "py_int_018",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'opérateur walrus (:=) en Python?",
    options: [
      "A. Il assigne et retourne une valeur dans une expression",
      "B. Il compare deux valeurs",
      "C. Il crée une référence",
      "D. Il optimise les performances",
    ],
    bonneReponse: 0,
    explication:
      "L'opérateur walrus (:=) permet d'assigner une valeur à une variable tout en retournant cette valeur, utile dans les expressions conditionnelles.",
  },
  {
    id: "py_int_019",
    langage: "python",
    niveau: "intermédiaire",
    question: "Que fait le module itertools?",
    options: [
      "A. Fournit des outils pour itérer sur des données",
      "B. Crée des interfaces graphiques",
      "C. Gère les threads",
      "D. Crypte des données",
    ],
    bonneReponse: 0,
    explication:
      "itertools fournit des fonctions pour créer des itérateurs pour une boucle efficace. Exemple : cycle, permutations, combinations, etc.",
  },
  {
    id: "py_int_020",
    langage: "python",
    niveau: "intermédiaire",
    question: "Comment fonctionne le context manager avec with?",
    options: [
      "A. Gère automatiquement la fermeture des ressources",
      "B. Crée un contexte de variable",
      "C. Définit une portée de bloc",
      "D. Optimise la mémoire",
    ],
    bonneReponse: 0,
    explication:
      "Le context manager (with) garantit que les ressources sont correctement fermées, même en cas d'erreur. Utilisé pour les fichiers, connexions, etc.",
  },
  // ============================================================================
  // PYTHON - NIVEAU AVANCÉ (20 questions)
  // ============================================================================
  {
    id: "py_adv_001",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le GIL (Global Interpreter Lock) en Python?",
    options: [
      "A. Un mécanisme qui empêche l'exécution simultanée de threads Python",
      "B. Un verrou pour les variables globales",
      "C. Un système de gestion de mémoire",
      "D. Un optimiseur de performances",
    ],
    bonneReponse: 0,
    explication:
      "Le GIL est un mutex qui protège l'accès aux objets Python, empêchant plusieurs threads d'exécuter du bytecode Python simultanément.",
  },
  {
    id: "py_adv_002",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les métaclasses en Python?",
    options: [
      "A. Elles définissent le comportement des classes",
      "B. Elles créent des métadonnées",
      "C. Elles optimisent le code",
      "D. Elles gèrent les exceptions",
    ],
    bonneReponse: 0,
    explication:
      "Les métaclasses sont les classes des classes. Elles définissent comment les classes se comportent. type est la métaclasse par défaut.",
  },
  {
    id: "py_adv_003",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le duck typing?",
    options: [
      "A. 'Si ça marche comme un canard, c'est un canard' - on vérifie le comportement plutôt que le type",
      "B. Un typage strict",
      "C. Une méthode de cryptage",
      "D. Un pattern de design",
    ],
    bonneReponse: 0,
    explication:
      "Le duck typing se concentre sur ce qu'un objet peut faire (ses méthodes) plutôt que sur son type réel.",
  },
  {
    id: "py_adv_004",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les descriptors en Python?",
    options: [
      "A. Ils définissent comment les attributs sont accédés dans les classes",
      "B. Ils décrivent les variables",
      "C. Ils créent de la documentation",
      "D. Ils optimisent la mémoire",
    ],
    bonneReponse: 0,
    explication:
      "Les descriptors permettent de personnaliser l'accès aux attributs via __get__, __set__ et __delete__. Utilisés dans les propriétés.",
  },
  {
    id: "py_adv_005",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que asyncio en Python?",
    options: [
      "A. Un framework pour la programmation asynchrone",
      "B. Une bibliothèque de tests",
      "C. Un module de logging",
      "D. Un système de templates",
    ],
    bonneReponse: 0,
    explication:
      "asyncio est une bibliothèque pour écrire du code concurrent en utilisant async/await. Elle est particulièrement utile pour les I/O bound tasks.",
  },
  {
    id: "py_adv_006",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les coroutines avec async/await?",
    options: [
      "A. Elles permettent une programmation asynchrone non bloquante",
      "B. Elles créent des threads",
      "C. Elles optimisent les calculs",
      "D. Elles gèrent la mémoire",
    ],
    bonneReponse: 0,
    explication:
      "async définit une coroutine, await suspend son exécution jusqu'à ce qu'une autre coroutine ou future soit complétée.",
  },
  {
    id: "py_adv_007",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Borg en Python?",
    options: [
      "A. Un pattern où toutes les instances partagent le même état",
      "B. Un pattern de singleton",
      "C. Un pattern de factory",
      "D. Un pattern d'observateur",
    ],
    bonneReponse: 0,
    explication:
      "Contrairement au Singleton qui n'a qu'une instance, le pattern Borg permet plusieurs instances qui partagent le même état.",
  },
  {
    id: "py_adv_008",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les annotations de type?",
    options: [
      "A. Elles ajoutent des informations de type optionnelles",
      "B. Elles forcent le typage statique",
      "C. Elles optimisent l'exécution",
      "D. Elles créent de la documentation",
    ],
    bonneReponse: 0,
    explication:
      "Les annotations de type (type hints) permettent d'ajouter des informations de type au code, utilisées par des outils comme mypy pour la vérification statique.",
  },
  {
    id: "py_adv_009",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que __slots__ dans une classe?",
    options: [
      "A. Il limite les attributs d'instance pour économiser la mémoire",
      "B. Il définit les méthodes de la classe",
      "C. Il crée des emplacements pour les variables",
      "D. Il optimise les performances",
    ],
    bonneReponse: 0,
    explication:
      "__slots__ permet de définir explicitement les attributs d'instance, économisant de la mémoire en évitant le dictionnaire __dict__.",
  },
  {
    id: "py_adv_010",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les context managers personnalisés?",
    options: [
      "A. En implémentant __enter__ et __exit__",
      "B. En utilisant with context:",
      "C. En créant une classe spéciale",
      "D. En utilisant des décorateurs",
    ],
    bonneReponse: 0,
    explication:
      "Pour créer un context manager personnalisé, on implémente les méthodes __enter__() et __exit__() dans une classe.",
  },
  {
    id: "py_adv_011",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le module multiprocessing?",
    options: [
      "A. Il permet d'exécuter du code en parallèle en utilisant des processus",
      "B. Il gère les threads",
      "C. Il optimise le CPU",
      "D. Il crée des sous-processus",
    ],
    bonneReponse: 0,
    explication:
      "multiprocessing contourne le GIL en utilisant des processus séparés plutôt que des threads, permettant un vrai parallélisme sur plusieurs coeurs.",
  },
  {
    id: "py_adv_012",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les data classes?",
    options: [
      "A. Elles génèrent automatiquement des méthodes spéciales pour les classes de données",
      "B. Elles stockent des données dans des classes",
      "C. Elles créent des bases de données",
      "D. Elles sérialisent des données",
    ],
    bonneReponse: 0,
    explication:
      "Les data classes (à partir de Python 3.7) génèrent automatiquement __init__, __repr__, __eq__ et autres méthodes pour les classes principalement destinées à stocker des données.",
  },
  {
    id: "py_adv_013",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern MRO (Method Resolution Order)?",
    options: [
      "A. L'ordre dans lequel Python recherche les méthodes dans l'héritage multiple",
      "B. L'ordre des méthodes dans une classe",
      "C. L'optimisation des appels de méthode",
      "D. La résolution des noms de méthode",
    ],
    bonneReponse: 0,
    explication:
      "Le MRO détermine l'ordre dans lequel les classes parentes sont cherchées lors de l'héritage multiple. On peut le voir avec Class.__mro__.",
  },
  {
    id: "py_adv_014",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les abstract base classes (ABC)?",
    options: [
      "A. Elles définissent des interfaces que les classes filles doivent implémenter",
      "B. Elles créent des classes de base",
      "C. Elles optimisent l'héritage",
      "D. Elles génèrent du code abstrait",
    ],
    bonneReponse: 0,
    explication:
      "Les ABC du module abc permettent de définir des interfaces avec des méthodes abstraites que les classes concrètes doivent implémenter.",
  },
  {
    id: "py_adv_015",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le module functools?",
    options: [
      "A. Il fournit des outils pour la programmation fonctionnelle",
      "B. Il crée des fonctions",
      "C. Il optimise les fonctions",
      "D. Il gère les fonctionnalités",
    ],
    bonneReponse: 0,
    explication:
      "functools fournit des outils comme lru_cache, partial, wraps pour la programmation fonctionnelle et la mémoïsation.",
  },
  {
    id: "py_adv_016",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionne @property?",
    options: [
      "A. Elle transforme une méthode en attribut accessible",
      "B. Elle définit une propriété de classe",
      "C. Elle crée un attribut calculé",
      "D. Elle optimise l'accès aux attributs",
    ],
    bonneReponse: 0,
    explication:
      "Le décorateur @property permet d'accéder à une méthode comme à un attribut, et on peut définir setter et deleter avec @attribut.setter.",
  },
  {
    id: "py_adv_017",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern monad en Python?",
    options: [
      "A. Un pattern fonctionnel pour chaîner des opérations",
      "B. Un pattern de création d'objets",
      "C. Un pattern de gestion d'erreurs",
      "D. Un pattern d'optimisation",
    ],
    bonneReponse: 0,
    explication:
      "Bien que Python n'ait pas de monades natives, le pattern peut être implémenté pour chaîner des opérations, comme avec les Option ou Either.",
  },
  {
    id: "py_adv_018",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionnent les imports dynamiques?",
    options: [
      "A. importlib.import_module() permet d'importer à l'exécution",
      "B. On utilise dynamic import",
      "C. On évalue des chaînes de caractères",
      "D. On utilise exec() pour importer",
    ],
    bonneReponse: 0,
    explication:
      "importlib.import_module() permet d'importer des modules dynamiquement pendant l'exécution du programme.",
  },
  {
    id: "py_adv_019",
    langage: "python",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern strategy en Python?",
    options: [
      "A. Un pattern qui permet de changer d'algorithme à l'exécution",
      "B. Un pattern de stratégie d'exécution",
      "C. Un pattern d'optimisation",
      "D. Un pattern de gestion de ressources",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern strategy permet de définir une famille d'algorithmes, de les encapsuler et de les rendre interchangeables.",
  },
  {
    id: "py_adv_020",
    langage: "python",
    niveau: "avancé",
    question: "Comment fonctionne le module concurrent.futures?",
    options: [
      "A. Il fournit une interface de haut niveau pour l'exécution asynchrone",
      "B. Il gère les threads concurrents",
      "C. Il optimise les futures",
      "D. Il crée des exécuteurs",
    ],
    bonneReponse: 0,
    explication:
      "concurrent.futures fournit une interface pour exécuter des appels asynchrones using ThreadPoolExecutor ou ProcessPoolExecutor.",
  },
  // ============================================================================
  // JAVA - NIVEAU DÉBUTANT (20 questions)
  // ============================================================================
  {
    id: "java_deb_001",
    langage: "java",
    niveau: "débutant",
    question: "Java est un langage _______?",
    options: ["A. interprété", "B. compilé", "C. script", "D. markup"],
    bonneReponse: 1,
    explication:
      "Java est un langage compilé en bytecode qui s'exécute sur la JVM (Java Virtual Machine).",
  },
  {
    id: "java_deb_002",
    langage: "java",
    niveau: "débutant",
    question: "Comment déclare-t-on une variable en Java?",
    options: [
      "A. type nom = valeur;",
      "B. var nom = valeur;",
      "C. nom: type = valeur;",
      "D. variable nom type = valeur;",
    ],
    bonneReponse: 0,
    explication:
      "En Java, on déclare une variable avec son type suivi du nom et optionnellement d'une valeur. Exemple: int age = 25;",
  },
  {
    id: "java_deb_003",
    langage: "java",
    niveau: "débutant",
    question: "Quelle est l'extension des fichiers source Java?",
    options: ["A. .java", "B. .class", "C. .jar", "D. .jav"],
    bonneReponse: 0,
    explication:
      "Les fichiers source Java ont l'extension .java. Après compilation, ils deviennent des fichiers .class contenant du bytecode.",
  },
  {
    id: "java_deb_004",
    langage: "java",
    niveau: "débutant",
    question: "Comment affiche-t-on du texte en Java?",
    options: [
      "A. System.out.print('texte');",
      "B. console.log('texte');",
      "C. print('texte');",
      "D. echo('texte');",
    ],
    bonneReponse: 0,
    explication:
      "System.out.print() ou System.out.println() sont utilisés pour afficher du texte dans la console en Java.",
  },
  {
    id: "java_deb_005",
    langage: "java",
    niveau: "débutant",
    question: "Quel mot-clé définit une classe en Java?",
    options: ["A. class", "B. Class", "C. define", "D. struct"],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'class' est utilisé pour définir une classe en Java. Exemple: public class MaClasse {}",
  },
  {
    id: "java_deb_006",
    langage: "java",
    niveau: "débutant",
    question: "Comment déclare-t-on une méthode main en Java?",
    options: [
      "A. public static void main(String[] args)",
      "B. function main()",
      "C. public void main()",
      "D. static main(String[] args)",
    ],
    bonneReponse: 0,
    explication:
      "La méthode main, point d'entrée d'un programme Java, se déclare comme: public static void main(String[] args)",
  },
  {
    id: "java_deb_007",
    langage: "java",
    niveau: "débutant",
    question: "Quel type représente des nombres entiers en Java?",
    options: ["A. int", "B. integer", "C. number", "D. num"],
    bonneReponse: 0,
    explication:
      "Le type 'int' représente des nombres entiers de 32 bits en Java. Exemple: int age = 30;",
  },
  {
    id: "java_deb_008",
    langage: "java",
    niveau: "débutant",
    question: "Comment crée-t-on un tableau en Java?",
    options: [
      "A. int[] arr = new int[5];",
      "B. array arr = [1,2,3];",
      "C. int arr = {1,2,3};",
      "D. new array(5);",
    ],
    bonneReponse: 0,
    explication:
      "On crée un tableau avec: type[] nom = new type[taille]; ou type[] nom = {valeur1, valeur2};",
  },
  {
    id: "java_deb_009",
    langage: "java",
    niveau: "débutant",
    question: "Quelle boucle utilise-t-on pour itérer un nombre déterminé de fois?",
    options: ["A. for", "B. while", "C. do-while", "D. loop"],
    bonneReponse: 0,
    explication:
      "La boucle 'for' est utilisée quand on connaît à l'avance le nombre d'itérations. Syntaxe: for(int i=0; i<10; i++)",
  },
  {
    id: "java_deb_010",
    langage: "java",
    niveau: "débutant",
    question: "Comment vérifie-t-on une condition en Java?",
    options: ["A. if (condition) {}", "B. if condition {}", "C. check (condition) {}", "D. when (condition) {}"],
    bonneReponse: 0,
    explication:
      "La structure conditionnelle utilise if(condition) { code } en Java. Les parenthèses autour de la condition sont obligatoires.",
  },
  {
    id: "java_deb_011",
    langage: "java",
    niveau: "débutant",
    question: "Quel opérateur teste l'égalité en Java?",
    options: ["A. =", "B. ==", "C. ===", "D. eq"],
    bonneReponse: 1,
    explication:
      "L'opérateur == teste l'égalité des valeurs primitives ou des références d'objets. Pour comparer le contenu des objets, on utilise equals().",
  },
  {
    id: "java_deb_012",
    langage: "java",
    niveau: "débutant",
    question: "Comment déclare-t-on une constante en Java?",
    options: [
      "A. final type NOM = valeur;",
      "B. const type NOM = valeur;",
      "C. constant type NOM = valeur;",
      "D. static type NOM = valeur;",
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'final' est utilisé pour déclarer des constantes en Java. Exemple: final double PI = 3.14159;",
  },
  {
    id: "java_deb_013",
    langage: "java",
    niveau: "débutant",
    question: "Quel type représente du texte en Java?",
    options: ["A. String", "B. string", "C. text", "D. char[]"],
    bonneReponse: 0,
    explication:
      "La classe String représente des chaînes de caractères en Java. Exemple: String nom = 'Jean';",
  },
  {
    id: "java_deb_014",
    langage: "java",
    niveau: "débutant",
    question: "Comment obtient-on la longueur d'une chaîne?",
    options: ["A. str.length()", "B. str.length", "C. str.size()", "D. len(str)"],
    bonneReponse: 0,
    explication:
      "La méthode length() retourne la longueur d'une chaîne. Pour les tableaux, c'est length (sans parenthèses).",
  },
  {
    id: "java_deb_015",
    langage: "java",
    niveau: "débutant",
    question: "Comment importe-t-on une classe en Java?",
    options: [
      "A. import package.Classe;",
      "B. include package.Classe;",
      "C. using package.Classe;",
      "D. require package.Classe;",
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'import' permet d'importer des classes d'autres packages. Exemple: import java.util.ArrayList;",
  },
  {
    id: "java_deb_016",
    langage: "java",
    niveau: "débutant",
    question: "Quel mot-clé crée une nouvelle instance d'objet?",
    options: ["A. new", "B. create", "C. instance", "D. object"],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'new' est utilisé pour créer une nouvelle instance d'objet. Exemple: String s = new String('hello');",
  },
  {
    id: "java_deb_017",
    langage: "java",
    niveau: "débutant",
    question: "Comment déclare-t-on une méthode?",
    options: [
      "A. type nomMethode(paramètres) {}",
      "B. function nomMethode(paramètres) {}",
      "C. def nomMethode(paramètres) {}",
      "D. method nomMethode(paramètres) {}",
    ],
    bonneReponse: 0,
    explication:
      "Les méthodes se déclarent avec le type de retour, le nom, et les paramètres. Exemple: public void maMethode(int param) {}",
  },
  {
    id: "java_deb_018",
    langage: "java",
    niveau: "débutant",
    question: "Quel package contient les classes fondamentales?",
    options: ["A. java.lang", "B. java.util", "C. java.io", "D. java.core"],
    bonneReponse: 0,
    explication:
      "Le package java.lang contient les classes fondamentales comme String, Object, Integer, System, etc. Il est importé automatiquement.",
  },
  {
    id: "java_deb_019",
    langage: "java",
    niveau: "débutant",
    question: "Comment convertit-on une chaîne en nombre entier?",
    options: [
      "A. Integer.parseInt(chaine)",
      "B. Integer.valueOf(chaine)",
      "C. String.toInt(chaine)",
      "D. Convert.toInteger(chaine)",
    ],
    bonneReponse: 0,
    explication:
      "Integer.parseInt() convertit une chaîne en int primitif. Integer.valueOf() retourne un objet Integer.",
  },
  {
    id: "java_deb_020",
    langage: "java",
    niveau: "débutant",
    question: "Comment commente-t-on une ligne en Java?",
    options: ["A. // commentaire", "B. # commentaire", "C. -- commentaire", "D. /* commentaire"],
    bonneReponse: 0,
    explication:
      "Les commentaires sur une ligne commencent par //. Les commentaires multi-lignes utilisent /* */.",
  }
  // Continuer avec Java intermédiaire, Java avancé, puis les autres langages...
]

