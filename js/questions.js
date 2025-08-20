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
  },
   // ============================================================================
  // JAVA - NIVEAU INTERMÉDIAIRE (20 questions)
  // ============================================================================
  {
    id: "java_int_001",
    langage: "java",
    niveau: "intermédiaire",
    question: "Quelle est la différence entre == et equals() en Java?",
    options: [
      "A. == compare les références, equals() compare le contenu",
      "B. == compare le contenu, equals() compare les références",
      "C. Ils font la même chose",
      "D. == pour les primitifs, equals() pour les objets",
    ],
    bonneReponse: 0,
    explication:
      "== compare l'égalité des références (adresses mémoire) pour les objets, tandis que equals() est destiné à comparer le contenu/logique.",
  },
  {
    id: "java_int_002",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une interface en Java?",
    options: [
      "A. Un contrat que les classes doivent implémenter",
      "B. Une classe abstraite",
      "C. Une classe finale",
      "D. Une méthode statique",
    ],
    bonneReponse: 0,
    explication:
      "Une interface définit un contrat que les classes implémentant doivent respecter. Elle contient des méthodes abstraites (sans implémentation).",
  },
  {
    id: "java_int_003",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'héritage en Java?",
    options: [
      "A. class Enfant extends Parent",
      "B. class Enfant implements Parent",
      "C. class Enfant : Parent",
      "D. class Enfant inherits Parent",
    ],
    bonneReponse: 0,
    explication:
      "L'héritage se fait avec 'extends'. Une classe enfant hérite des méthodes et champs non privés de la classe parent.",
  },
  {
    id: "java_int_004",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une classe abstraite?",
    options: [
      "A. Une classe qui ne peut pas être instanciée",
      "B. Une classe sans méthodes",
      "C. Une classe interface",
      "D. Une classe finale",
    ],
    bonneReponse: 0,
    explication:
      "Une classe abstraite ne peut pas être instanciée directement et peut contenir des méthodes abstraites (sans implémentation) et concrètes.",
  },
  {
    id: "java_int_005",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les exceptions avec try-catch?",
    options: [
      "A. try { code } catch (Exception e) { gestion }",
      "B. attempt { code } catch (Exception e) { gestion }",
      "C. test { code } handle (Exception e) { gestion }",
      "D. execute { code } rescue (Exception e) { gestion }",
    ],
    bonneReponse: 0,
    explication:
      "Le bloc try contient le code risqué, et catch attrape et gère les exceptions qui pourraient être levées.",
  },
  {
    id: "java_int_006",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le polymorphisme en Java?",
    options: [
      "A. Capacité d'un objet à prendre différentes formes",
      "B. Multiplication des objets",
      "C. Transformation des types",
      "D. Optimisation mémoire",
    ],
    bonneReponse: 0,
    explication:
      "Le polymorphisme permet à une référence de classe parent de pointer vers un objet de classe enfant, et d'appeler les méthodes redéfinies.",
  },
  {
    id: "java_int_007",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les collections (List, Set, Map)?",
    options: [
      "A. List: ordonnée, Set: unique, Map: clé-valeur",
      "B. List: unique, Set: ordonnée, Map: clé-valeur",
      "C. List: clé-valeur, Set: unique, Map: ordonnée",
      "D. List: ordonnée, Set: clé-valeur, Map: unique",
    ],
    bonneReponse: 0,
    explication:
      "List: éléments ordonnés et indexés, Set: éléments uniques non ordonnés, Map: paires clé-valeur.",
  },
  {
    id: "java_int_008",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un thread en Java?",
    options: [
      "A. Un fil d'exécution léger",
      "B. Un processus lourd",
      "C. Une méthode d'exécution",
      "D. Un type de données",
    ],
    bonneReponse: 0,
    explication:
      "Un thread est un fil d'exécution léger qui permet l'exécution concurrente de plusieurs tâches dans un même programme.",
  },
  {
    id: "java_int_009",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment crée-t-on un thread?",
    options: [
      "A. En étendant Thread ou implémentant Runnable",
      "B. En utilisant new Process()",
      "C. En appelant createThread()",
      "D. En utilisant async",
    ],
    bonneReponse: 0,
    explication:
      "On peut créer un thread en étendant la classe Thread ou en implémentant l'interface Runnable et en passant au constructeur de Thread.",
  },
  {
    id: "java_int_010",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce que la synchronisation de threads?",
    options: [
      "A. Coordination de l'accès aux ressources partagées",
      "B. Acceleration des threads",
      "C. Arrêt des threads",
      "D. Création de threads",
    ],
    bonneReponse: 0,
    explication:
      "La synchronisation permet d'éviter les conditions de course en coordonnant l'accès des threads aux ressources partagées avec synchronized.",
  },
  {
    id: "java_int_011",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les génériques (Generics)?",
    options: [
      "A. Ils permettent de paramétrer les types",
      "B. Ils génèrent du code automatiquement",
      "C. Ils optimisent la mémoire",
      "D. Ils créent des types dynamiques",
    ],
    bonneReponse: 0,
    explication:
      "Les génériques permettent de créer des classes, interfaces et méthodes qui fonctionnent avec des types paramétrés, assurant la sécurité du type.",
  },
  {
    id: "java_int_012",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une annotation en Java?",
    options: [
      "A. Une métadonnée qui ajoute des informations au code",
      "B. Un commentaire spécial",
      "C. Une méthode annotée",
      "D. Un type de variable",
    ],
    bonneReponse: 0,
    explication:
      "Les annotations fournissent des métadonnées qui peuvent être utilisées par le compilateur, les outils ou à l'exécution.",
  },
  {
    id: "java_int_013",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionne le garbage collection?",
    options: [
      "A. Il libère automatiquement la mémoire des objets non utilisés",
      "B. Il supprime les fichiers temporaires",
      "C. Il optimise le code",
      "D. Il nettoie le cache",
    ],
    bonneReponse: 0,
    explication:
      "Le garbage collector identifie et libère automatiquement la mémoire occupée par les objets qui ne sont plus référencés.",
  },
  {
    id: "java_int_014",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le mot-clé 'this'?",
    options: [
      "A. Référence à l'instance courante de l'objet",
      "B. Référence à la classe parent",
      "C. Référence à la superclasse",
      "D. Référence statique",
    ],
    bonneReponse: 0,
    explication:
      "'this' référence l'instance courante de l'objet, utilisé pour accéder aux variables d'instance et appeler d'autres constructeurs.",
  },
  {
    id: "java_int_015",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les enum?",
    options: [
      "A. Types énumérés avec valeurs constantes prédéfinies",
      "B. Types numériques",
      "C. Types dynamiques",
      "D. Types génériques",
    ],
    bonneReponse: 0,
    explication:
      "Les enum définissent un type avec un ensemble fixe de constantes. Elles peuvent avoir des champs, méthodes et constructeurs.",
  },
  {
    id: "java_int_016",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un stream en Java 8+?",
    options: [
      "A. Une séquence d'éléments supportant des opérations fonctionnelles",
      "B. Un flux de données binaires",
      "C. Un type de collection",
      "D. Un flux d'entrée/sortie",
    ],
    bonneReponse: 0,
    explication:
      "Les streams permettent un traitement déclaratif des collections avec des opérations comme filter, map, reduce dans un style fonctionnel.",
  },
  {
    id: "java_int_017",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les lambda expressions?",
    options: [
      "A. Fonctions anonymes concises",
      "B. Méthodes nommées",
      "C. Classes anonymes",
      "D. Interfaces fonctionnelles",
    ],
    bonneReponse: 0,
    explication:
      "Les lambda expressions permettent d'écrire des fonctions anonymes concises, souvent utilisées avec des interfaces fonctionnelles.",
  },
  {
    id: "java_int_018",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une interface fonctionnelle?",
    options: [
      "A. Interface avec une seule méthode abstraite",
      "B. Interface sans méthodes",
      "C. Interface avec plusieurs méthodes",
      "D. Interface statique",
    ],
    bonneReponse: 0,
    explication:
      "Une interface fonctionnelle a exactement une méthode abstraite et peut être implémentée par une lambda expression.",
  },
  {
    id: "java_int_019",
    langage: "java",
    niveau: "intermédiaire",
    question: "Comment fonctionnent les Optional?",
    options: [
      "A. Conteneur pour valeurs potentiellement nulles",
      "B. Type optionnel",
      "C. Valeur par défaut",
      "D. Validation de null",
    ],
    bonneReponse: 0,
    explication:
      "Optional est un conteneur qui peut contenir ou non une valeur non-nulle, aidant à éviter les NullPointerException.",
  },
  {
    id: "java_int_020",
    langage: "java",
    niveau: "intermédiaire",
    question: "Qu'est-ce que la réflexion (reflection)?",
    options: [
      "A. Capacité d'inspecter et modifier le comportement à l'exécution",
      "B. Miroir des classes",
      "C. Inspection du code source",
      "D. Génération de documentation",
    ],
    bonneReponse: 0,
    explication:
      "La réflexion permet d'inspecter les classes, méthodes, champs à l'exécution, et même de les invoquer dynamiquement.",
  },
  // ============================================================================
  // JAVA - NIVEAU AVANCÉ (20 questions)
  // ============================================================================
  {
    id: "java_adv_001",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les classloaders en Java?",
    options: [
      "A. Ils chargent les classes dans la JVM",
      "B. Ils compilent les classes",
      "C. Ils optimisent le bytecode",
      "D. Ils gèrent la mémoire",
    ],
    bonneReponse: 0,
    explication:
      "Les classloaders sont responsables du chargement des classes dans la JVM, suivant une hiérarchie (bootstrap, extension, system).",
  },
  {
    id: "java_adv_002",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le bytecode Java?",
    options: [
      "A. Code intermédiaire exécuté par la JVM",
      "B. Code source compilé",
      "C. Code machine natif",
      "D. Code assembleur",
    ],
    bonneReponse: 0,
    explication:
      "Le bytecode est un code intermédiaire produit par le compilateur Java et exécuté par la JVM, permettant la portabilité.",
  },
  {
    id: "java_adv_003",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les weak/soft/phantom references?",
    options: [
      "A. Différents niveaux de force pour le garbage collection",
      "B. Références optimisées",
      "C. Références statiques",
      "D. Références dynamiques",
    ],
    bonneReponse: 0,
    explication:
      "Ces références permettent différents comportements du GC: weak (collecté agressivement), soft (collecté si mémoire faible), phantom (après finalisation).",
  },
  {
    id: "java_adv_004",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que JNI (Java Native Interface)?",
    options: [
      "A. Interface pour appeler du code natif (C/C++) depuis Java",
      "B. Interface réseau",
      "C. Interface graphique",
      "D. Interface de base de données",
    ],
    bonneReponse: 0,
    explication:
      "JNI permet d'appeler des fonctions natives écrites en C/C++ depuis Java, et vice versa, au prix de la portabilité.",
  },
  {
    id: "java_adv_005",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les modules Java (JPMS)?",
    options: [
      "A. Système de modularité pour encapsuler et gérer les dépendances",
      "B. Modules graphiques",
      "C. Modules de compilation",
      "D. Modules d'exécution",
    ],
    bonneReponse: 0,
    explication:
      "Le Java Platform Module System (JPMS) introduit dans Java 9 permet de créer des modules avec des dépendances explicites et un encapsulation forte.",
  },
  {
    id: "java_adv_006",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que la mémoire hors-heap (off-heap)?",
    options: [
      "A. Mémoire allouée en dehors du heap géré par le GC",
      "B. Mémoire swap",
      "C. Mémoire cache",
      "D. Mémoire virtuelle",
    ],
    bonneReponse: 0,
    explication:
      "La mémoire hors-heap est allouée directement depuis le système d'exploitation, échappant au garbage collector mais nécessitant une gestion manuelle.",
  },
  {
    id: "java_adv_007",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les VarHandles?",
    options: [
      "A. Références variables pour accès mémoire sécurisé",
      "B. Handles de variables",
      "C. Gestionnaires de variance",
      "D. Variables handlers",
    ],
    bonneReponse: 0,
    explication:
      "VarHandle fournit des opérations atomiques et sécurisées sur les champs et éléments de tableau, remplaçant une partie de Atomic* classes.",
  },
  {
    id: "java_adv_008",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que Project Loom?",
    options: [
      "A. Introduction des virtual threads (fibers)",
      "B. Project de compilation",
      "C. Project de modularité",
      "D. Project de performance",
    ],
    bonneReponse: 0,
    explication:
      "Project Loom introduit les virtual threads, des threads légers gérés par la JVM plutôt que par le OS, permettant des millions de threads concurrents.",
  },
  {
    id: "java_adv_009",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les sealed classes?",
    options: [
      "A. Classes qui restreignent quelles classes peuvent les étendre",
      "B. Classes cryptées",
      "C. Classes sécurisées",
      "D. Classes finales",
    ],
    bonneReponse: 0,
    explication:
      "Les sealed classes permettent de contrôler quelles classes peuvent les étendre, offrant plus de sécurité dans l'héritage.",
  },
  {
    id: "java_adv_010",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern double-checked locking?",
    options: [
      "A. Pattern pour l'initialisation lazy thread-safe",
      "B. Pattern de double vérification",
      "C. Pattern de locking optimisé",
      "D. Pattern de synchronisation",
    ],
    bonneReponse: 0,
    explication:
      "Pattern qui vérifie deux fois la condition avant d'acquérir le lock, pour optimiser les performances tout en garantissant la thread-safety.",
  },
  {
    id: "java_adv_011",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les memory barriers?",
    options: [
      "A. Ils garantissent l'ordre des opérations mémoire entre threads",
      "B. Ils bloquent la mémoire",
      "C. Ils optimisent le cache",
      "D. Ils gèrent le heap",
    ],
    bonneReponse: 0,
    explication:
      "Les memory barriers garantissent que les opérations mémoire avant la barrière sont visibles aux autres threads après la barrière.",
  },
  {
    id: "java_adv_012",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que l'invokedynamic?",
    options: [
      "A. Instruction bytecode pour méthodes dynamiques",
      "B. Invocation dynamique",
      "C. Méthode dynamique",
      "D. Appel dynamique",
    ],
    bonneReponse: 0,
    explication:
      "invokedynamic est une instruction bytecode qui permet la résolution dynamique des méthodes à l'exécution, utilisée pour les lambdas et Nashorn.",
  },
  {
    id: "java_adv_013",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les service providers?",
    options: [
      "A. Mécanisme de découverte de services",
      "B. Fournisseurs de services",
      "C. Services réseau",
      "D. Services système",
    ],
    bonneReponse: 0,
    explication:
      "Le ServiceLoader permet de découvrir et charger des implémentations d'interfaces via des fichiers dans META-INF/services.",
  },
  {
    id: "java_adv_014",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern flyweight?",
    options: [
      "A. Partage d'objets pour économiser la mémoire",
      "B. Pattern léger",
      "C. Pattern de performance",
      "D. Pattern de cache",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern flyweight permet de partager des objets pour minimiser l'utilisation mémoire, souvent utilisé pour les objets immuables.",
  },
  {
    id: "java_adv_015",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les CompletableFuture?",
    options: [
      "A. Futures composables pour programmation asynchrone",
      "B. Futures complétés",
      "C. Futures optimisés",
      "D. Futures thread-safe",
    ],
    bonneReponse: 0,
    explication:
      "CompletableFuture permet de composer des opérations asynchrones de manière déclarative avec thenApply, thenCompose, etc.",
  },
  {
    id: "java_adv_016",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le bytecode manipulation (ASM, ByteBuddy)?",
    options: [
      "A. Modification du bytecode à l'exécution ou compilation",
      "B. Optimisation du bytecode",
      "C. Analyse du bytecode",
      "D. Génération de bytecode",
    ],
    bonneReponse: 0,
    explication:
      "Les librairies comme ASM et ByteBuddy permettent de manipuler le bytecode Java pour créer des proxies, AOP, ou optimisations.",
  },
  {
    id: "java_adv_017",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les records?",
    options: [
      "A. Classes immuables pour holder de données",
      "B. Enregistrements de base de données",
      "C. Records audio",
      "D. Types d'enregistrement",
    ],
    bonneReponse: 0,
    explication:
      "Les records (Java 14+) sont des classes immuables qui génèrent automatiquement equals, hashCode, toString pour les données.",
  },
  {
    id: "java_adv_018",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern visitor?",
    options: [
      "A. Pattern pour ajouter des opérations sans modifier les classes",
      "B. Pattern de visite",
      "C. Pattern d'opération",
      "D. Pattern d'extension",
    ],
    bonneReponse: 0,
    explication:
      "Le visitor pattern permet d'ajouter de nouvelles opérations à une structure d'objets sans modifier leurs classes.",
  },
  {
    id: "java_adv_019",
    langage: "java",
    niveau: "avancé",
    question: "Comment fonctionnent les hidden classes?",
    options: [
      "A. Classes non découvrables par réflexion, pour usage temporaire",
      "B. Classes invisibles",
      "C. Classes privées",
      "D. Classes internes",
    ],
    bonneReponse: 0,
    explication:
      "Les hidden classes sont des classes qui ne peuvent pas être utilisées directement par le bytecode d'autres classes, idéales pour frameworks.",
  },
  {
    id: "java_adv_020",
    langage: "java",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern reactor?",
    options: [
      "A. Pattern pour traitement d'événements non-bloquant",
      "B. Pattern réactif",
      "C. Pattern événementiel",
      "D. Pattern asynchrone",
    ],
    bonneReponse: 0,
    explication:
      "Le reactor pattern gère les demandes de service concurrentes en les démultiplexant et dispatchant aux handlers appropriés de manière non-bloquante.",
  },
  // ============================================================================
  // C# - NIVEAU DÉBUTANT (20 questions)
  // ============================================================================
  {
    id: "cs_deb_001",
    langage: "csharp",
    niveau: "débutant",
    question: "C# est un langage développé par _______?",
    options: ["A. Microsoft", "B. Google", "C. Apple", "D. Oracle"],
    bonneReponse: 0,
    explication:
      "C# a été développé par Microsoft dans les années 2000 dans le cadre de la plateforme .NET, avec Anders Hejlsberg comme architecte principal.",
  },
  {
    id: "cs_deb_002",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment affiche-t-on du texte en C#?",
    options: [
      "A. Console.WriteLine('texte');",
      "B. print('texte');",
      "C. System.out.print('texte');",
      "D. echo('texte');",
    ],
    bonneReponse: 0,
    explication:
      "Console.WriteLine() est utilisé pour afficher du texte dans la console en C#. Console.Write() affiche sans saut de ligne.",
  },
  {
    id: "cs_deb_003",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment déclare-t-on une variable en C#?",
    options: [
      "A. type nom = valeur;",
      "B. var nom = valeur;",
      "C. nom: type = valeur;",
      "D. variable nom type = valeur;",
    ],
    bonneReponse: 0,
    explication:
      "En C#, on déclare une variable avec son type suivi du nom. Exemple: int age = 25;. var permet l'inférence de type.",
  },
  {
    id: "cs_deb_004",
    langage: "csharp",
    niveau: "débutant",
    question: "Quelle est l'extension des fichiers source C#?",
    options: ["A. .cs", "B. .csharp", "C. .c", "D. .cpp"],
    bonneReponse: 0,
    explication:
      "Les fichiers source C# ont l'extension .cs. Après compilation, ils deviennent des assemblies .dll ou .exe.",
  },
  {
    id: "cs_deb_005",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment définit-on une classe en C#?",
    options: ["A. class NomClasse {}", "B. Class NomClasse {}", "C. define class NomClasse {}", "D. struct NomClasse {}"],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'class' est utilisé pour définir une classe en C#. Exemple: public class MaClasse {}",
  },
  {
    id: "cs_deb_006",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment déclare-t-on une méthode Main en C#?",
    options: [
      "A. static void Main(string[] args)",
      "B. public static void main(String[] args)",
      "C. function Main()",
      "D. void main()",
    ],
    bonneReponse: 0,
    explication:
      "La méthode Main, point d'entrée d'un programme C#, se déclare comme: static void Main(string[] args)",
  },
  {
    id: "cs_deb_007",
    langage: "csharp",
    niveau: "débutant",
    question: "Quel type représente des nombres entiers en C#?",
    options: ["A. int", "B. integer", "C. number", "D. num"],
    bonneReponse: 0,
    explication:
      "Le type 'int' représente des nombres entiers de 32 bits en C#. Exemple: int age = 30;",
  },
  {
    id: "cs_deb_008",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment crée-t-on un tableau en C#?",
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
    id: "cs_deb_009",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment utilise-t-on une boucle for en C#?",
    options: [
      "A. for(int i=0; i<10; i++) {}",
      "B. for i in range(10) {}",
      "C. for(i=0; i<10; i++) {}",
      "D. loop(int i=0; i<10; i++) {}",
    ],
    bonneReponse: 0,
    explication:
      "La boucle for en C# utilise la syntaxe: for(initialisation; condition; incrément) { code }",
  },
  {
    id: "cs_deb_010",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment vérifie-t-on une condition en C#?",
    options: ["A. if (condition) {}", "B. if condition {}", "C. check (condition) {}", "D. when (condition) {}"],
    bonneReponse: 0,
    explication:
      "La structure conditionnelle utilise if(condition) { code } en C#. Les parenthèses autour de la condition sont obligatoires.",
  },
  {
    id: "cs_deb_011",
    langage: "csharp",
    niveau: "débutant",
    question: "Quel opérateur teste l'égalité en C#?",
    options: ["A. =", "B. ==", "C. ===", "D. eq"],
    bonneReponse: 1,
    explication:
      "L'opérateur == teste l'égalité des valeurs en C#. Pour les types référence, il teste l'égalité des références par défaut.",
  },
  {
    id: "cs_deb_012",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment déclare-t-on une constante en C#?",
    options: [
      "A. const type NOM = valeur;",
      "B. final type NOM = valeur;",
      "C. constant type NOM = valeur;",
      "D. static type NOM = valeur;",
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'const' est utilisé pour déclarer des constantes en C#. Exemple: const double PI = 3.14159;",
  },
  {
    id: "cs_deb_013",
    langage: "csharp",
    niveau: "débutant",
    question: "Quel type représente du texte en C#?",
    options: ["A. string", "B. String", "C. text", "D. char[]"],
    bonneReponse: 0,
    explication:
      "Le type 'string' (alias de System.String) représente des chaînes de caractères en C#. Exemple: string nom = 'Jean';",
  },
  {
    id: "cs_deb_014",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment obtient-on la longueur d'une chaîne?",
    options: ["A. str.Length", "B. str.length()", "C. str.size()", "D. len(str)"],
    bonneReponse: 0,
    explication:
      "La propriété Length retourne la longueur d'une chaîne. Exemple: string s = 'hello'; int len = s.Length; // 5",
  },
  {
    id: "cs_deb_015",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment importe-t-on un namespace en C#?",
    options: [
      "A. using System;",
      "B. import System;",
      "C. include System;",
      "D. require System;",
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'using' permet d'importer des namespaces en C#. Exemple: using System; using System.Collections.Generic;",
  },
  {
    id: "cs_deb_016",
    langage: "csharp",
    niveau: "débutant",
    question: "Quel mot-clé crée une nouvelle instance d'objet?",
    options: ["A. new", "B. create", "C. instance", "D. object"],
    bonneReponse: 0,
    explication:
      "Le mot-clé 'new' est utilisé pour créer une nouvelle instance d'objet. Exemple: string s = new string('hello');",
  },
  {
    id: "cs_deb_017",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment déclare-t-on une méthode?",
    options: [
      "A. type NomMethode(paramètres) {}",
      "B. function NomMethode(paramètres) {}",
      "C. def NomMethode(paramètres) {}",
      "D. method NomMethode(paramètres) {}",
    ],
    bonneReponse: 0,
    explication:
      "Les méthodes se déclarent avec le type de retour, le nom, et les paramètres. Exemple: public void MaMethode(int param) {}",
  },
  {
    id: "cs_deb_018",
    langage: "csharp",
    niveau: "débutant",
    question: "Quel namespace contient les classes fondamentales?",
    options: ["A. System", "B. System.Core", "C. System.Base", "D. System.Fundamental"],
    bonneReponse: 0,
    explication:
      "Le namespace System contient les classes fondamentales comme String, Object, Int32, Console, etc.",
  },
  {
    id: "cs_deb_019",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment convertit-on une chaîne en nombre entier?",
    options: [
      "A. int.Parse(chaine)",
      "B. Integer.parseInt(chaine)",
      "C. Convert.ToInt32(chaine)",
      "D. String.toInt(chaine)",
    ],
    bonneReponse: 2,
    explication:
      "Convert.ToInt32() et int.Parse() peuvent convertir une chaîne en int. Convert.ToInt32() retourne 0 pour null, int.Parse() lève une exception.",
  },
  {
    id: "cs_deb_020",
    langage: "csharp",
    niveau: "débutant",
    question: "Comment commente-t-on une ligne en C#?",
    options: ["A. // commentaire", "B. # commentaire", "C. -- commentaire", "D. /* commentaire */"],
    bonneReponse: 0,
    explication:
      "Les commentaires sur une ligne commencent par //. Les commentaires multi-lignes utilisent /* */.",
  },
  // ============================================================================
  // C# - NIVEAU INTERMÉDIAIRE (20 questions)
  // ============================================================================
  {
    id: "cs_int_001",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Quelle est la différence entre 'ref' et 'out' en C#?",
    options: [
      "A. 'ref' nécessite une initialisation, 'out' non",
      "B. 'out' nécessite une initialisation, 'ref' non",
      "C. Ils sont identiques",
      "D. 'ref' est pour les références, 'out' pour les valeurs",
    ],
    bonneReponse: 0,
    explication:
      "'ref' nécessite que la variable soit initialisée avant l'appel, tandis que 'out' ne le nécessite pas mais doit être assignée dans la méthode.",
  },
  {
    id: "cs_int_002",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'héritage en C#?",
    options: [
      "A. class Enfant : Parent {}",
      "B. class Enfant inherits Parent {}",
      "C. class Enfant extends Parent {}",
      "D. class Enfant implements Parent {}",
    ],
    bonneReponse: 0,
    explication:
      "L'héritage se fait avec le mot-clé ':'. Une classe enfant hérite des membres publics et protégés de la classe parent.",
  },
  {
    id: "cs_int_003",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'une interface en C#?",
    options: [
      "A. Un contrat que les classes doivent implémenter",
      "B. Une classe abstraite",
      "C. Une classe concrète",
      "D. Un type de données primitif",
    ],
    bonneReponse: 0,
    explication:
      "Une interface définit un ensemble de méthodes que les classes implémentant doivent fournir, sans implémentation.",
  },
  {
    id: "cs_int_004",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment déclare-t-on un événement en C#?",
    options: [
      "A. public event EventHandler NomEvenement;",
      "B. public EventHandler NomEvenement;",
      "C. event public EventHandler NomEvenement;",
      "D. public event NomEvenement EventHandler;",
],
    bonneReponse: 0,
    explication:
      "Les événements se déclarent avec le mot-clé 'event' suivi du type de délégué. Exemple: public event EventHandler MonEvenement;",
  },
  {
    id: "cs_int_005",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'using' en C#?",
    options: [
      "A. Il gère la libération des ressources automatiquement",
      "B. Il importe des namespaces",
      "C. Il crée des alias de types",
      "D. Il déclare des variables locales",
    ],
    bonneReponse: 0,
    explication:
      "'using' garantit que les ressources sont libérées correctement en appelant Dispose() à la fin du bloc.",
  },
  {
    id: "cs_int_006",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que LINQ en C#?",
    options: [
      "A. Language Integrated Query pour interroger des collections",
      "B. Un type de données",
      "C. Un framework graphique",
      "D. Un protocole réseau",
    ],
    bonneReponse: 0,
    explication:
      "LINQ permet d'interroger et manipuler des collections de manière déclarative avec une syntaxe similaire aux requêtes SQL.",
  },
  {
    id: "cs_int_007",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'async' en C#?",
    options: [
      "A. Il permet l'exécution asynchrone de méthodes",
      "B. Il optimise les performances",
      "C. Il crée des threads supplémentaires",
      "D. Il synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'async' marque une méthode comme asynchrone, permettant d'utiliser 'await' pour attendre des opérations sans bloquer le thread principal.",
  },
  {
    id: "cs_int_008",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un délégué en C#?",
    options: [
      "A. Un type qui encapsule une méthode ou un groupe de méthodes",
      "B. Un type de données primitif",
      "C. Une classe abstraite",
      "D. Un type générique",
    ],
    bonneReponse: 0,
    explication:  
      "Un délégué est un type qui encapsule une méthode, permettant de passer des méthodes comme paramètres ou de les stocker dans des variables.",
  },  
  {
    id: "cs_int_009",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'lock' en C#?",
    options: [
      "A. Il synchronise l'accès à un bloc de code pour éviter les conditions de course",
      "B. Il verrouille un fichier",
      "C. Il crée un thread sécurisé",
      "D. Il crypte les données",
    ],
    bonneReponse: 0,
    explication:
      "'lock' est utilisé pour synchroniser l'accès à un bloc de code, empêchant plusieurs threads d'y accéder simultanément.",
  },
  {
    id: "cs_int_010",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Singleton?",
    options: [
      "A. Assure qu'une classe n'a qu'une seule instance et fournit un point d'accès global",
      "B. Crée plusieurs instances d'une classe",
      "C. Gère les événements dans une application",
      "D. Optimise les performances des requêtes",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Singleton garantit qu'une classe n'a qu'une seule instance et fournit un accès global à cette instance.",
  },
  {
    id: "cs_int_011",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne la sérialisation en C#?",
    options: [
      "A. Conversion d'un objet en format binaire ou texte pour stockage ou transmission",
      "B. Compression de données",
      "C. Cryptage de données",
      "D. Optimisation des performances réseau",
    ],
    bonneReponse: 0,
    explication:
      "La sérialisation convertit un objet en un format binaire ou texte, permettant de le stocker ou de le transmettre. En C#, on utilise souvent BinaryFormatter ou JsonSerializer.",
  },
  {
    id: "cs_int_012",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Observer?",
    options: [
      "A. Permet à un objet de notifier d'autres objets de changements d'état",
      "B. Crée des objets observables",
      "C. Gère les événements dans une application",
      "D. Optimise les performances des requêtes",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Observer permet à un objet (sujet) de notifier plusieurs autres objets (observateurs) lorsqu'un changement d'état se produit.",
  },
  {
    id: "cs_int_013",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'yield' en C#?",
    options: [
      "A. Il permet de créer des itérateurs en retournant des valeurs séquentiellement",
      "B. Il optimise les performances",
      "C. Il crée des threads supplémentaires",
      "D. Il synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'yield' est utilisé pour créer des itérateurs, permettant de retourner des éléments un par un dans une boucle foreach.",
  },
  {
    id: "cs_int_014",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Factory?",
    options: [
      "A. Un pattern pour créer des objets sans spécifier la classe concrète",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Factory fournit une interface pour créer des objets, mais laisse la décision de la classe concrète à une sous-classe.",
  },
  {
    id: "cs_int_015",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'async' avec 'await'?",
    options: [
      "A. 'async' marque une méthode comme asynchrone, 'await' attend une tâche",
      "B. 'async' crée un thread, 'await' synchronise les threads",
      "C. 'async' optimise les performances, 'await' gère les exceptions",
      "D. 'async' déclare une variable, 'await' l'initialise",
    ],
    bonneReponse: 0,
    explication:
      "'async' indique que la méthode peut contenir des opérations asynchrones, et 'await' permet d'attendre la complétion d'une tâche sans bloquer le thread principal.",
  },
  {
    id: "cs_int_016",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Command?",
    options: [
      "A. Un pattern pour encapsuler une requête en tant qu'objet",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Command encapsule une requête en tant qu'objet, permettant de paramétrer des objets avec des actions à exécuter.",
  },
  {
    id: "cs_int_017",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'dynamic' en C#?",
    options: [
      "A. Il permet de déclarer des variables dont le type est résolu à l'exécution",
      "B. Il optimise les performances",
      "C. Il crée des threads supplémentaires",
      "D. Il synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'dynamic' permet de déclarer des variables dont le type est résolu à l'exécution, permettant une flexibilité accrue mais au prix de la sécurité de type.",
  },
  {
    id: "cs_int_018",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Strategy?",
    options: [
      "A. Un pattern pour encapsuler des algorithmes interchangeables",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Strategy permet de définir une famille d'algorithmes, encapsuler chacun d'eux et les rendre interchangeables, permettant de modifier le comportement d'un objet à l'exécution.", 
  },
  {
    id: "cs_int_019",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Comment fonctionne le mot-clé 'volatile' en C#?",
    options: [
      "A. Il indique que la variable peut être modifiée par plusieurs threads",
      "B. Il optimise les performances",
      "C. Il crée des threads supplémentaires",
      "D. Il synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'volatile' indique que la variable peut être modifiée par plusieurs threads, empêchant le compilateur de faire des optimisations qui pourraient causer des problèmes de visibilité.",
  },
  {
    id: "cs_int_020",
    langage: "csharp",
    niveau: "intermédiaire",
    question: "Qu'est-ce que le pattern Adapter?",
    options: [
      "A. Un pattern pour adapter une interface à une autre",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Adapter permet de convertir l'interface d'une classe en une autre interface attendue par le client, permettant ainsi l'interopérabilité entre classes incompatibles.",
  },
  // ============================================================================
  // C# - NIVEAU AVANCÉ (20 questions)  
  // ============================================================================
  {
    id: "cs_adv_001",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne la réflexion (Reflection) en C#?",
    options: [
      "A. Permet d'inspecter et manipuler les types à l'exécution",
      "B. Optimise les performances",
      "C. Crée des threads supplémentaires",
      "D. Synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "La réflexion permet d'inspecter les types, méthodes, propriétés, etc., à l'exécution, permettant de créer des instances dynamiquement ou d'invoquer des méthodes.",
  },
  {
    id: "cs_adv_002",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le garbage collection (GC) en C#?",
    options: [
      "A. Mécanisme automatique de gestion de la mémoire",
      "B. Nettoyage manuel de la mémoire",
      "C. Optimisation des performances mémoire",
      "D. Allocation dynamique de mémoire",
    ],
    bonneReponse: 0,
    explication:
      "Le garbage collector gère automatiquement la mémoire en libérant les objets qui ne sont plus utilisés, évitant les fuites de mémoire.",
  },
  {
    id: "cs_adv_003",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'unsafe' en C#?",
    options: [
      "A. Permet d'utiliser des pointeurs et du code non sécurisé",
      "B. Optimise les performances",
      "C. Crée des threads supplémentaires",
      "D. Synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'unsafe' permet d'utiliser des pointeurs et de manipuler la mémoire de manière non sécurisée, nécessitant une attention particulière pour éviter les erreurs.",
  },
  {
    id: "cs_adv_004",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Dependency Injection (DI)?",
    options: [
      "A. Technique pour injecter des dépendances dans une classe via le constructeur ou des propriétés",
      "B. Technique pour gérer les événements",
      "C. Technique pour optimiser les performances réseau",
      "D. Technique pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "La DI permet de séparer les dépendances d'une classe, facilitant les tests unitaires et la maintenance en injectant les dépendances via le constructeur ou des propriétés.",
  },
  {
    id: "cs_adv_005",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'async' avec 'IAsyncEnumerable<T>'?",
    options: [
      "A. Permet de créer des itérateurs asynchrones",
      "B. Optimise les performances",
      "C. Crée des threads supplémentaires",
      "D. Synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'IAsyncEnumerable<T>' permet de créer des itérateurs asynchrones, permettant de parcourir des collections de manière asynchrone avec 'await foreach'.",
  },
  {
    id: "cs_adv_006",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Mediator?",
    options: [
      "A. Un pattern pour centraliser la communication entre objets",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Mediator centralise la communication entre objets, réduisant les dépendances directes et facilitant la maintenance.",
  },
  {
    id: "cs_adv_007",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'readonly' en C#?",
    options: [
      "A. Indique qu'un champ ne peut être assigné qu'une seule fois, soit lors de sa déclaration, soit dans le constructeur",
      "B. Indique qu'un champ est constant et ne peut pas être modifié",
      "C. Indique qu'une méthode est immuable",
      "D. Indique qu'une classe est finale",
    ],
    bonneReponse: 0,
    explication:
      "'readonly' indique qu'un champ ne peut être assigné qu'une seule fois, garantissant son immutabilité après l'initialisation.",
  },
  {
    id: "cs_adv_008",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Builder?",
    options: [
      "A. Un pattern pour construire des objets complexes étape par étape",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Builder permet de construire des objets complexes étape par étape, séparant la construction de l'objet de sa représentation finale.",
  },
  {
    id: "cs_adv_009",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'volatile' en C#?",
    options: [
      "A. Indique qu'une variable peut être modifiée par plusieurs threads, empêchant les optimisations du compilateur",
      "B. Indique qu'une variable est constante et ne peut pas être modifiée",
      "C. Indique qu'une méthode est immuable",
      "D. Indique qu'une classe est finale",
    ],
    bonneReponse: 0,
    explication:
      "'volatile' indique qu'une variable peut être modifiée par plusieurs threads, empêchant le compilateur de faire des optimisations qui pourraient causer des problèmes de visibilité.",
  },
  {
    id: "cs_adv_010",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Chain of Responsibility?",
    options: [
      "A. Un pattern pour passer une requête le long d'une chaîne d'objets jusqu'à ce qu'elle soit traitée",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Chain of Responsibility permet de passer une requête le long d'une chaîne d'objets, chaque objet pouvant traiter ou transmettre la requête.",
  },
  {
    id: "cs_adv_011",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'sealed' en C#?",
    options: [
      "A. Indique qu'une classe ne peut pas être héritée",
      "B. Indique qu'une méthode ne peut pas être surchargée",
      "C. Indique qu'un champ est constant et ne peut pas être modifié",
      "D. Indique qu'une classe est finale",
    ],
    bonneReponse: 0,
    explication:
      "'sealed' indique qu'une classe ne peut pas être héritée, empêchant toute sous-classe de la classe scellée.",
  },
  {
    id: "cs_adv_012",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Prototype?",
    options: [
      "A. Un pattern pour créer des objets en copiant un prototype existant",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Prototype permet de créer des objets en copiant un prototype existant, facilitant la création d'instances similaires.",
  },
  {
    id: "cs_adv_013",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'dynamic' en C#?",
    options: [
      "A. Permet de déclarer des variables dont le type est résolu à l'exécution",
      "B. Indique qu'une variable est constante et ne peut pas être modifiée",
      "C. Indique qu'une méthode est immuable",
      "D. Indique qu'une classe est finale",
    ],
    bonneReponse: 0,
    explication:
      "'dynamic' permet de déclarer des variables dont le type est résolu à l'exécution, offrant une flexibilité accrue mais au prix de la sécurité de type.",
  },
  {
    id: "cs_adv_014",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Flyweight?",
    options: [
      "A. Un pattern pour partager des objets afin de réduire l'utilisation de la mémoire",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Flyweight permet de partager des objets similaires pour réduire l'utilisation de la mémoire, en stockant les données communes dans un objet partagé.",
  },
  {
    id: "cs_adv_015",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'async' avec 'Task<T>'?",
    options: [
      "A. Permet de créer des tâches asynchrones qui retournent un résultat",
      "B. Optimise les performances",
      "C. Crée des threads supplémentaires",
      "D. Synchronise les threads",
    ],
    bonneReponse: 0,
    explication:
      "'Task<T>' représente une opération asynchrone qui peut retourner un résultat, permettant d'utiliser 'await' pour attendre sa complétion.",
  },
  {
    id: "cs_adv_016",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Composite?",
    options: [
      "A. Un pattern pour composer des objets en structures arborescentes",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Composite permet de composer des objets en structures arborescentes, traitant les objets individuels et les compositions de manière uniforme.",
  },
  {
    id: "cs_adv_017",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'const' en C#?",
    options: [
      "A. Indique qu'une variable est constante et ne peut pas être modifiée après son initialisation",
      "B. Indique qu'une variable peut être modifiée",
      "C. Indique qu'une méthode est immuable",
      "D. Indique qu'une classe est finale",
    ],
    bonneReponse: 0,
    explication:
      "'const' indique qu'une variable est constante et doit être initialisée lors de sa déclaration, ne pouvant pas être modifiée par la suite.",
  },
  {
    id: "cs_adv_018",
    langage: "csharp",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern State?",
    options: [
      "A. Un pattern pour permettre à un objet de changer son comportement en fonction de son état interne",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern State permet à un objet de changer son comportement en fonction de son état interne, encapsulant l'état dans des classes distinctes.",
  },
  {
    id: "cs_adv_019",
    langage: "csharp",
    niveau: "avancé",
    question: "Comment fonctionne le mot-clé 'abstract' en C#?",
    options: [
      "A. Indique qu'une classe ou une méthode est abstraite et doit être implémentée dans une sous-classe",
      "B. Indique qu'une classe ou une méthode est concrète et peut être instanciée",
      "C. Indique qu'une variable est constante et ne peut pas être modifiée",
      "D. Indique qu'une classe est finale et ne peut pas être héritée",
    ],
    bonneReponse: 0,
    explication:
      "'abstract' indique qu'une classe ou une méthode est abstraite, nécessitant une implémentation dans une sous-classe, empêchant l'instanciation directe de la classe abstraite.",
  },
  {
    id: "cs_adv_020",
    langage: "csharp",  
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Visitor?",
    options: [
      "A. Un pattern pour séparer un algorithme de la structure d'un objet",
      "B. Un pattern pour gérer les événements",
      "C. Un pattern pour optimiser les performances réseau",
      "D. Un pattern pour la sérialisation d'objets",
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Visitor permet de séparer un algorithme de la structure d'un objet, permettant d'ajouter de nouvelles opérations sans modifier les classes des objets.",
  },
    // ============================================================================
    // PHP - NIVEAU DÉBUTANT (20 questions)
    // ============================================================================
    {
      id: "php_deb_001",
      langage: "php",
      niveau: "débutant",
      question: "PHP est principalement utilisé pour _______?",
      options: [
        "A. Le développement web côté serveur",
        "B. Le développement mobile",
        "C. Le développement desktop",
        "D. Le développement embarqué"
      ],
      bonneReponse: 0,
      explication:
        "PHP est un langage de script principalement utilisé pour le développement web côté serveur."
    },
    {
      id: "php_deb_002",
      langage: "php",
      niveau: "débutant",
      question: "Quel symbole commence une variable en PHP?",
      options: [
        "A. $",
        "B. @",
        "C. #",
        "D. &"
      ],
      bonneReponse: 0,
      explication:
        "Toutes les variables en PHP commencent par le symbole $. Exemple : $nom = 'Jean';"
    },
    {
      id: "php_deb_003",
      langage: "php",
      niveau: "débutant",
      question: "Comment affiche-t-on du texte en PHP?",
      options: [
        "A. print('texte');",
        "B. echo 'texte';",
        "C. display('texte');",
        "D. show('texte');"
      ],
      bonneReponse: 1,
      explication:
        "La commande echo permet d'afficher du texte ou des variables en PHP. print fonctionne aussi mais echo est plus courant."
    },
    {
      id: "php_deb_004",
      langage: "php",
      niveau: "débutant",
      question: "Quelle extension de fichier utilise-t-on pour les scripts PHP?",
      options: [
        "A. .php",
        "B. .ph",
        "C. .html",
        "D. .js"
      ],
      bonneReponse: 0,
      explication:
        "Les fichiers PHP ont l'extension .php."
    },
    {
      id: "php_deb_005",
      langage: "php",
      niveau: "débutant",
      question: "Comment commence-t-on un bloc de code PHP?",
      options: [
        "A. <?php",
        "B. <php>",
        "C. <!--php-->",
        "D. <?"
      ],
      bonneReponse: 0,
      explication:
        "Un script PHP commence par <?php et se termine par ?>."
    },
    {
      id: "php_deb_006",
      langage: "php",
      niveau: "débutant",
      question: "Comment déclare-t-on une fonction en PHP?",
      options: [
        "A. function nomFonction() {}",
        "B. def nomFonction() {}",
        "C. func nomFonction() {}",
        "D. declare nomFonction() {}"
      ],
      bonneReponse: 0,
      explication:
        "Les fonctions en PHP se déclarent avec le mot-clé function. Exemple : function maFonction() {}"
    },
    {
      id: "php_deb_007",
      langage: "php",
      niveau: "débutant",
      question: "Quel opérateur utilise-t-on pour la concaténation de chaînes?",
      options: [
        "A. +",
        "B. .",
        "C. &",
        "D. concat"
      ],
      bonneReponse: 1,
      explication:
        "En PHP, l'opérateur . permet de concaténer des chaînes de caractères."
    },
    {
      id: "php_deb_008",
      langage: "php",
      niveau: "débutant",
      question: "Comment commente-t-on une ligne en PHP?",
      options: [
        "A. // commentaire",
        "B. # commentaire",
        "C. /* commentaire */",
        "D. Toutes ces réponses"
      ],
      bonneReponse: 3,
      explication:
        "PHP accepte //, # pour les commentaires sur une ligne et /* ... */ pour les commentaires multi-lignes."
    },
    {
      id: "php_deb_009",
      langage: "php",
      niveau: "débutant",
      question: "Quel type de données permet de stocker du texte?",
      options: [
        "A. string",
        "B. text",
        "C. char",
        "D. varchar"
      ],
      bonneReponse: 0,
      explication:
        "Le type string est utilisé pour stocker du texte en PHP."
    },
    {
      id: "php_deb_010",
      langage: "php",
      niveau: "débutant",
      question: "Comment crée-t-on un tableau vide en PHP?",
      options: [
        "A. $tab = array();",
        "B. $tab = [];",
        "C. $tab = new Array();",
        "D. $tab = {};"
      ],
      bonneReponse: 0,
      explication:
        "Un tableau vide se crée avec array(). Depuis PHP 5.4, [] est aussi accepté."
    },
    {
      id: "php_deb_011",
      langage: "php",
      niveau: "débutant",
      question: "Comment accède-t-on au premier élément d'un tableau?",
      options: [
        "A. $tab[1]",
        "B. $tab[0]",
        "C. $tab.first()",
        "D. $tab->get(0)"
      ],
      bonneReponse: 1,
      explication:
        "Les tableaux PHP sont indexés à partir de 0. Le premier élément est donc $tab[0]."
    },
    {
      id: "php_deb_012",
      langage: "php",
      niveau: "débutant",
      question: "Quelle fonction permet de compter le nombre d'éléments d'un tableau?",
      options: [
        "A. count()",
        "B. length()",
        "C. size()",
        "D. total()"
      ],
      bonneReponse: 0,
      explication:
        "La fonction count() retourne le nombre d'éléments dans un tableau."
    },
    {
      id: "php_deb_013",
      langage: "php",
      niveau: "débutant",
      question: "Comment vérifie-t-on une condition en PHP?",
      options: [
        "A. if (condition) {}",
        "B. if condition {}",
        "C. check (condition) {}",
        "D. when (condition) {}"
      ],
      bonneReponse: 0,
      explication:
        "La structure conditionnelle utilise if(condition) { ... } en PHP."
    },
    {
      id: "php_deb_014",
      langage: "php",
      niveau: "débutant",
      question: "Quel opérateur teste l'égalité en PHP?",
      options: [
        "A. =",
        "B. ==",
        "C. ===",
        "D. eq"
      ],
      bonneReponse: 1,
      explication:
        "== teste l'égalité des valeurs, === teste l'égalité des valeurs et des types."
    },
    {
      id: "php_deb_015",
      langage: "php",
      niveau: "débutant",
      question: "Comment déclare-t-on une constante en PHP?",
      options: [
        "A. define('NOM', valeur);",
        "B. const NOM = valeur;",
        "C. constant NOM = valeur;",
        "D. final NOM = valeur;"
      ],
      bonneReponse: 0,
      explication:
        "La fonction define() permet de déclarer une constante globale. const est utilisé dans les classes."
    },
    {
      id: "php_deb_016",
      langage: "php",
      niveau: "débutant",
      question: "Comment inclure un autre fichier PHP?",
      options: [
        "A. include 'fichier.php';",
        "B. import 'fichier.php';",
        "C. require 'fichier.php';",
        "D. A et C"
      ],
      bonneReponse: 3,
      explication:
        "include et require permettent d'inclure un fichier PHP. require provoque une erreur fatale si le fichier est absent, include une alerte."
    },
    {
      id: "php_deb_017",
      langage: "php",
      niveau: "débutant",
      question: "Comment lit-on une entrée utilisateur via un formulaire?",
      options: [
        "A. $_POST['nom']",
        "B. $_GET['nom']",
        "C. $_REQUEST['nom']",
        "D. Toutes ces réponses"
      ],
      bonneReponse: 3,
      explication:
        "Les variables superglobales $_POST, $_GET et $_REQUEST permettent de récupérer les données envoyées par formulaire."
    },
    {
      id: "php_deb_018",
      langage: "php",
      niveau: "débutant",
      question: "Comment convertit-on une chaîne en nombre entier?",
      options: [
        "A. intval('123')",
        "B. (int) '123'",
        "C. strToInt('123')",
        "D. A et B"
      ],
      bonneReponse: 3,
      explication:
        "intval() et le cast (int) permettent de convertir une chaîne en entier."
    },
    {
      id: "php_deb_019",
      langage: "php",
      niveau: "débutant",
      question: "Comment déclare-t-on une classe en PHP?",
      options: [
        "A. class NomClasse {}",
        "B. Class NomClasse {}",
        "C. define class NomClasse {}",
        "D. struct NomClasse {}"
      ],
      bonneReponse: 0,
      explication:
        "Le mot-clé class permet de déclarer une classe en PHP."
    },
    {
      id: "php_deb_020",
      langage: "php",
      niveau: "débutant",
      question: "Comment termine-t-on une instruction en PHP?",
      options: [
        "A. Par un point-virgule ;",
        "B. Par un point .",
        "C. Par une virgule ,",
        "D. Par un retour à la ligne"
      ],
      bonneReponse: 0,
      explication:
        "Chaque instruction PHP doit se terminer par un point-virgule ;"
    },
  // ============================================================================
  // PHP - NIVEAU INTERMÉDIAIRE (20 questions)
  // ============================================================================
  {
    id: "php_int_001",
    langage: "php",
    niveau: "intermédiaire",
    question: "Qu'est-ce qu'un tableau associatif en PHP?",
    options: [
      "A. Un tableau indexé par des clés numériques",
      "B. Un tableau indexé par des clés de type chaîne",
      "C. Un tableau multidimensionnel",
      "D. Un tableau vide"
    ],
    bonneReponse: 1,
    explication:
      "Un tableau associatif est un tableau dont les clés sont des chaînes de caractères. Exemple : $tab = ['nom' => 'Jean', 'age' => 30];"
  },
  {
    id: "php_int_002",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment parcourir un tableau avec foreach en PHP?",
    options: [
      "A. foreach($tab as $val) {}",
      "B. foreach($tab in $val) {}",
      "C. for($i=0; $i<count($tab); $i++) {}",
      "D. while($tab) {}"
    ],
    bonneReponse: 0,
    explication:
      "La boucle foreach permet de parcourir facilement les tableaux : foreach($tab as $val) { ... }"
  },
  {
    id: "php_int_003",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment vérifier si une variable existe en PHP?",
    options: [
      "A. isset($var)",
      "B. exists($var)",
      "C. defined($var)",
      "D. check($var)"
    ],
    bonneReponse: 0,
    explication:
      "La fonction isset() retourne true si la variable existe et n'est pas nulle."
  },
  {
    id: "php_int_004",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment inclure un fichier une seule fois en PHP?",
    options: [
      "A. include_once 'fichier.php';",
      "B. require_once 'fichier.php';",
      "C. include 'fichier.php';",
      "D. A et B"
    ],
    bonneReponse: 3,
    explication:
      "include_once et require_once incluent le fichier seulement s'il n'a pas déjà été inclus."
  },
  {
    id: "php_int_005",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment définir une fonction avec des paramètres par défaut?",
    options: [
      "A. function f($a = 1) {}",
      "B. function f($a) = 1 {}",
      "C. function f($a) {}",
      "D. function f($a: 1) {}"
    ],
    bonneReponse: 0,
    explication:
      "On peut définir des paramètres par défaut dans la déclaration : function f($a = 1) {}"
  },
  {
    id: "php_int_006",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment accéder à la longueur d'une chaîne en PHP?",
    options: [
      "A. strlen($str)",
      "B. $str.length",
      "C. length($str)",
      "D. count($str)"
    ],
    bonneReponse: 0,
    explication:
      "La fonction strlen() retourne la longueur d'une chaîne de caractères."
  },
  {
    id: "php_int_007",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment rediriger vers une autre page en PHP?",
    options: [
      "A. header('Location: page.php');",
      "B. redirect('page.php');",
      "C. goto('page.php');",
      "D. window.location = 'page.php';"
    ],
    bonneReponse: 0,
    explication:
      "La fonction header('Location: ...') permet de rediriger l'utilisateur vers une autre page."
  },
  {
    id: "php_int_008",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment gérer les erreurs avec try/catch en PHP?",
    options: [
      "A. try { ... } catch(Exception $e) { ... }",
      "B. attempt { ... } catch(Exception $e) { ... }",
      "C. test { ... } catch(Exception $e) { ... }",
      "D. try/catch n'existe pas en PHP"
    ],
    bonneReponse: 0,
    explication:
      "PHP supporte la gestion des exceptions avec try/catch : try { ... } catch(Exception $e) { ... }"
  },
  {
    id: "php_int_009",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment déclarer une classe avec un constructeur en PHP?",
    options: [
      "A. class MaClasse { function __construct() {} }",
      "B. class MaClasse { function MaClasse() {} }",
      "C. class MaClasse { function construct() {} }",
      "D. class MaClasse { function new() {} }"
    ],
    bonneReponse: 0,
    explication:
      "Le constructeur s'appelle __construct() dans une classe PHP."
  },
  {
    id: "php_int_010",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment accéder à une propriété d'objet en PHP?",
    options: [
      "A. $objet->propriete",
      "B. $objet.propriete",
      "C. $objet['propriete']",
      "D. $objet:propriete"
    ],
    bonneReponse: 0,
    explication:
      "On accède à une propriété d'objet avec la flèche : $objet->propriete"
  },
  {
    id: "php_int_011",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment vérifier le type d'une variable en PHP?",
    options: [
      "A. gettype($var)",
      "B. typeof($var)",
      "C. type($var)",
      "D. $var.type"
    ],
    bonneReponse: 0,
    explication:
      "La fonction gettype() retourne le type d'une variable."
  },
  {
    id: "php_int_012",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment transformer un tableau en chaîne séparée par des virgules?",
    options: [
      "A. implode(',', $tab)",
      "B. join(',', $tab)",
      "C. $tab.toString()",
      "D. A et B"
    ],
    bonneReponse: 3,
    explication:
      "implode() et join() transforment un tableau en chaîne, séparant les éléments par le séparateur donné."
  },
  {
    id: "php_int_013",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment vérifier si une clé existe dans un tableau associatif?",
    options: [
      "A. array_key_exists('cle', $tab)",
      "B. isset($tab['cle'])",
      "C. in_array('cle', $tab)",
      "D. A et B"
    ],
    bonneReponse: 3,
    explication:
      "array_key_exists() et isset() permettent de vérifier si une clé existe dans un tableau associatif."
  },
  {
    id: "php_int_014",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment créer une méthode statique dans une classe PHP?",
    options: [
      "A. public static function nom() {}",
      "B. static public function nom() {}",
      "C. function static nom() {}",
      "D. A et B"
    ],
    bonneReponse: 3,
    explication:
      "On peut déclarer une méthode statique avec public static function ou static public function."
  },
  {
    id: "php_int_015",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment accéder à une constante de classe en PHP?",
    options: [
      "A. MaClasse::NOM",
      "B. $MaClasse->NOM",
      "C. MaClasse.NOM",
      "D. MaClasse->NOM"
    ],
    bonneReponse: 0,
    explication:
      "On accède à une constante de classe avec ::, exemple : MaClasse::NOM"
  },
  {
    id: "php_int_016",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment fonctionne l'autoloading des classes en PHP?",
    options: [
      "A. spl_autoload_register()",
      "B. autoload()",
      "C. require_once",
      "D. include"
    ],
    bonneReponse: 0,
    explication:
      "spl_autoload_register() permet de définir une fonction d'autoload pour charger automatiquement les classes."
  },
  {
    id: "php_int_017",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment envoyer des données JSON en PHP?",
    options: [
      "A. json_encode($data)",
      "B. encode_json($data)",
      "C. toJSON($data)",
      "D. $data->json()"
    ],
    bonneReponse: 0,
    explication:
      "La fonction json_encode() convertit une variable PHP en chaîne JSON."
  },
  {
    id: "php_int_018",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment récupérer la valeur d'un cookie en PHP?",
    options: [
      "A. $_COOKIE['nom']",
      "B. $_GET['nom']",
      "C. $_POST['nom']",
      "D. $_REQUEST['nom']"
    ],
    bonneReponse: 0,
    explication:
      "Les cookies sont accessibles via le tableau superglobal $_COOKIE."
  },
  {
    id: "php_int_019",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment ouvrir et lire un fichier texte en PHP?",
    options: [
      "A. fopen() puis fread()",
      "B. file_get_contents()",
      "C. readfile()",
      "D. Toutes ces réponses"
    ],
    bonneReponse: 3,
    explication:
      "On peut lire un fichier avec fopen/fread, file_get_contents ou readfile selon le besoin."
  },
  {
    id: "php_int_020",
    langage: "php",
    niveau: "intermédiaire",
    question: "Comment déclarer une interface en PHP?",
    options: [
      "A. interface NomInterface {}",
      "B. class NomInterface {}",
      "C. define interface NomInterface {}",
      "D. struct NomInterface {}"
    ],
    bonneReponse: 0,
    explication:
      "Le mot-clé interface permet de déclarer une interface en PHP."
  },
  // ============================================================================
  // PHP - NIVEAU AVANCÉ (20 questions)
  // ============================================================================
  {
    id: "php_adv_001",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le namespace en PHP?",
    options: [
      "A. Un espace de noms pour organiser le code",
      "B. Un type de variable",
      "C. Un module externe",
      "D. Un tableau associatif"
    ],
    bonneReponse: 0,
    explication:
      "Le namespace permet d'organiser le code et d'éviter les conflits de noms entre classes, fonctions ou constantes."
  },
  {
    id: "php_adv_002",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le type hinting en PHP?",
    options: [
      "A. Permet de spécifier le type attendu d'un argument ou retour de fonction",
      "B. Permet de créer des types personnalisés",
      "C. Permet de convertir les types automatiquement",
      "D. Permet d'optimiser la mémoire"
    ],
    bonneReponse: 0,
    explication:
      "Le type hinting permet de spécifier le type attendu pour les arguments et le retour des fonctions, améliorant la robustesse du code."
  },
  {
    id: "php_adv_003",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Singleton en PHP?",
    options: [
      "A. Garantit qu'une classe n'a qu'une seule instance",
      "B. Crée plusieurs instances d'une classe",
      "C. Permet l'héritage multiple",
      "D. Optimise la mémoire"
    ],
    bonneReponse: 0,
    explication:
      "Le Singleton assure qu'une classe n'a qu'une seule instance et fournit un point d'accès global à cette instance."
  },
  {
    id: "php_adv_004",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Factory en PHP?",
    options: [
      "A. Crée des objets sans spécifier la classe exacte",
      "B. Crée des objets statiques",
      "C. Crée des objets immuables",
      "D. Crée des objets hérités"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Factory encapsule la création d'objets et permet de créer différents types d'objets selon les paramètres."
  },
  {
    id: "php_adv_005",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Observer en PHP?",
    options: [
      "A. Permet à un objet de notifier d'autres objets lors d'un changement d'état",
      "B. Permet de surveiller les erreurs",
      "C. Permet de créer des logs",
      "D. Permet de gérer les exceptions"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Observer permet à un objet de notifier automatiquement une liste d'observateurs quand son état change."
  },
  {
    id: "php_adv_006",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne l'autoloading PSR-4 en PHP?",
    options: [
      "A. Charge automatiquement les classes selon leur namespace",
      "B. Charge les fichiers HTML",
      "C. Charge les fichiers CSS",
      "D. Charge les fichiers JS"
    ],
    bonneReponse: 0,
    explication:
      "L'autoloading PSR-4 permet de charger automatiquement les classes selon leur namespace et leur chemin de fichier."
  },
  {
    id: "php_adv_007",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce qu'une interface en PHP?",
    options: [
      "A. Un contrat que les classes doivent respecter",
      "B. Une classe abstraite",
      "C. Un module externe",
      "D. Un type de variable"
    ],
    bonneReponse: 0,
    explication:
      "Une interface définit un ensemble de méthodes que les classes doivent implémenter."
  },
  {
    id: "php_adv_008",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le trait en PHP?",
    options: [
      "A. Permet de réutiliser du code dans plusieurs classes",
      "B. Permet l'héritage multiple",
      "C. Permet de créer des interfaces",
      "D. Permet de créer des exceptions"
    ],
    bonneReponse: 0,
    explication:
      "Les traits permettent de réutiliser des méthodes dans plusieurs classes, contournant l'absence d'héritage multiple."
  },
  {
    id: "php_adv_009",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne PDO pour la base de données en PHP?",
    options: [
      "A. Fournit une interface orientée objet pour accéder aux bases de données",
      "B. Fournit une interface procédurale",
      "C. Fournit une interface graphique",
      "D. Fournit une interface réseau"
    ],
    bonneReponse: 0,
    explication:
      "PDO (PHP Data Objects) fournit une interface orientée objet pour accéder à différentes bases de données de manière sécurisée."
  },
  {
    id: "php_adv_010",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Dependency Injection en PHP?",
    options: [
      "A. Injecte les dépendances dans une classe via le constructeur ou les setters",
      "B. Crée des dépendances globales",
      "C. Optimise la mémoire",
      "D. Crée des objets statiques"
    ],
    bonneReponse: 0,
    explication:
      "La Dependency Injection permet d'injecter les dépendances dans une classe, facilitant la maintenance et les tests."
  },
  {
    id: "php_adv_011",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Adapter en PHP?",
    options: [
      "A. Permet d'adapter une interface à une autre",
      "B. Permet de créer des interfaces",
      "C. Permet de créer des classes abstraites",
      "D. Permet de créer des exceptions"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Adapter permet de convertir l'interface d'une classe en une autre interface attendue par le client."
  },
  {
    id: "php_adv_012",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Strategy en PHP?",
    options: [
      "A. Permet de changer d'algorithme à l'exécution",
      "B. Permet de créer des stratégies de sécurité",
      "C. Permet de créer des stratégies de cache",
      "D. Permet de créer des stratégies de log"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Strategy permet de définir une famille d'algorithmes, de les encapsuler et de les rendre interchangeables."
  },
  {
    id: "php_adv_013",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Composite en PHP?",
    options: [
      "A. Permet de composer des objets en structures arborescentes",
      "B. Permet de composer des objets en listes",
      "C. Permet de composer des objets en tableaux",
      "D. Permet de composer des objets en chaînes"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Composite permet de composer des objets en structures arborescentes, traitant les objets individuels et les compositions de manière uniforme."
  },
  {
    id: "php_adv_014",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Chain of Responsibility en PHP?",
    options: [
      "A. Permet de passer une requête le long d'une chaîne d'objets jusqu'à ce qu'elle soit traitée",
      "B. Permet de créer des chaînes de caractères",
      "C. Permet de créer des chaînes de log",
      "D. Permet de créer des chaînes de cache"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Chain of Responsibility permet de passer une requête le long d'une chaîne d'objets, chaque objet pouvant traiter ou transmettre la requête."
  },
  {
    id: "php_adv_015",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Prototype en PHP?",
    options: [
      "A. Permet de créer des objets en copiant un prototype existant",
      "B. Permet de créer des prototypes de fonctions",
      "C. Permet de créer des prototypes de classes",
      "D. Permet de créer des prototypes de variables"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Prototype permet de créer des objets en copiant un prototype existant, facilitant la création d'instances similaires."
  },
  {
    id: "php_adv_016",
    langage: "php",
    niveau: "avancé",
    question: "Qu'est-ce que le pattern Flyweight en PHP?",
    options: [
      "A. Permet de partager des objets pour économiser la mémoire",
      "B. Permet de créer des objets légers",
      "C. Permet de créer des objets volants",
      "D. Permet de créer des objets statiques"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Flyweight permet de partager des objets similaires pour réduire l'utilisation de la mémoire."
  },
  {
    id: "php_adv_017",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Visitor en PHP?",
    options: [
      "A. Permet de séparer un algorithme de la structure d'un objet",
      "B. Permet de visiter des objets dans une collection",
      "C. Permet de créer des visiteurs pour des événements",
      "D. Permet de créer des visiteurs pour des logs"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Visitor permet de séparer un algorithme de la structure d'un objet, permettant d'ajouter de nouvelles opérations sans modifier les classes des objets."
  },
  {
    id: "php_adv_018",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Decorator en PHP?",
    options: [
      "A. Permet d'ajouter dynamiquement des responsabilités à un objet",
      "B. Permet de décorer des objets graphiques",
      "C. Permet de décorer des chaînes de caractères",
      "D. Permet de décorer des fichiers"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Decorator permet d'ajouter dynamiquement des responsabilités à un objet, en l'enveloppant dans un autre objet."
  },
  {
    id: "php_adv_019",
    langage: "php",
    niveau: "avancé",
    question: "Comment fonctionne le pattern Command en PHP?",
    options: [
      "A. Encapsule une requête en tant qu'objet, permettant de paramétrer les clients avec des requêtes différentes",
      "B. Permet d'exécuter des commandes système",
      "C. Permet de créer des commandes pour la console",
      "D. Permet de créer des commandes pour les bases de données"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Command encapsule une requête en tant qu'objet, permettant de paramétrer les clients avec différentes requêtes et de les exécuter ultérieurement."
  },
  {
    id: "php_adv_020",
    langage: "php",  
    niveau: "avancé",
    question: "Comment fonctionne le pattern Memento en PHP?",
    options: [
      "A. Permet de capturer et restaurer l'état interne d'un objet sans violer l'encapsulation",
      "B. Permet de créer des mementos pour les événements",
      "C. Permet de créer des mementos pour les logs",
      "D. Permet de créer des mementos pour les fichiers"
    ],
    bonneReponse: 0,
    explication:
      "Le pattern Memento permet de capturer et restaurer l'état interne d'un objet sans violer l'encapsulation, facilitant la gestion des états."
  },
   // HTML - DÉBUTANT
  {
    id: "html_deb_001",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer un lien hypertexte ?",
    options: ["A. <a>", "B. <link>", "C. <href>", "D. <url>"],
    bonneReponse: 0,
    explication: "La balise <a> permet de créer des liens hypertexte."
  },
  {
    id: "html_deb_002",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à insérer une image ?",
    options: ["A. <img>", "B. <image>", "C. <src>", "D. <pic>"],
    bonneReponse: 0,
    explication: "La balise <img> permet d'insérer une image."
  },
  {
    id: "html_deb_003",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer un paragraphe ?",
    options: ["A. <p>", "B. <para>", "C. <text>", "D. <paragraph>"],
    bonneReponse: 0,
    explication: "La balise <p> permet de créer un paragraphe."
  },
  {
    id: "html_deb_004",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer un titre principal ?",
    options: ["A. <h1>", "B. <title>", "C. <header>", "D. <head>"],
    bonneReponse: 0,
    explication: "La balise <h1> sert à créer un titre principal."
  },
  {
    id: "html_deb_005",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer une liste non ordonnée ?",
    options: ["A. <ul>", "B. <ol>", "C. <li>", "D. <list>"],
    bonneReponse: 0,
    explication: "La balise <ul> sert à créer une liste non ordonnée."
  },
  {
    id: "html_deb_006",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer une cellule dans un tableau ?",
    options: ["A. <td>", "B. <tr>", "C. <table>", "D. <cell>"],
    bonneReponse: 0,
    explication: "La balise <td> sert à créer une cellule dans un tableau."
  },
  {
    id: "html_deb_007",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à insérer une ligne horizontale ?",
    options: ["A. <hr>", "B. <line>", "C. <br>", "D. <horizontal>"],
    bonneReponse: 0,
    explication: "La balise <hr> insère une ligne horizontale."
  },
  {
    id: "html_deb_008",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à insérer un saut de ligne ?",
    options: ["A. <br>", "B. <hr>", "C. <line>", "D. <break>"],
    bonneReponse: 0,
    explication: "La balise <br> insère un saut de ligne."
  },
  {
    id: "html_deb_009",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à créer un formulaire ?",
    options: ["A. <form>", "B. <input>", "C. <fieldset>", "D. <submit>"],
    bonneReponse: 0,
    explication: "La balise <form> sert à créer un formulaire."
  },
  {
    id: "html_deb_010",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle balise sert à insérer une liste ordonnée ?",
    options: ["A. <ol>", "B. <ul>", "C. <li>", "D. <list>"],
    bonneReponse: 0,
    explication: "La balise <ol> sert à insérer une liste ordonnée."
  },

  // CSS - DÉBUTANT
  {
    id: "css_deb_001",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quel sélecteur cible tous les éléments d'une page ?",
    options: ["A. *", "B. .all", "C. #all", "D. body"],
    bonneReponse: 0,
    explication: "Le sélecteur universel * cible tous les éléments."
  },
  {
    id: "css_deb_002",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet de changer la couleur du texte ?",
    options: ["A. color", "B. background-color", "C. text-color", "D. font-color"],
    bonneReponse: 0,
    explication: "La propriété color change la couleur du texte."
  },
  {
    id: "css_deb_003",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet de changer la taille de la police ?",
    options: ["A. font-size", "B. text-size", "C. size", "D. font-style"],
    bonneReponse: 0,
    explication: "La propriété font-size change la taille de la police."
  },
  {
    id: "css_deb_004",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet de mettre un texte en gras ?",
    options: ["A. font-weight", "B. font-bold", "C. bold", "D. text-weight"],
    bonneReponse: 0,
    explication: "La propriété font-weight permet de mettre le texte en gras."
  },
  {
    id: "css_deb_005",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet de changer la couleur de fond ?",
    options: ["A. background-color", "B. color", "C. bg-color", "D. background"],
    bonneReponse: 0,
    explication: "La propriété background-color change la couleur de fond."
  },
  {
    id: "css_deb_006",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quel sélecteur cible un élément par son identifiant ?",
    options: ["A. #identifiant", "B. .identifiant", "C. identifiant", "D. *identifiant"],
    bonneReponse: 0,
    explication: "Le sélecteur #identifiant cible un élément par son identifiant."
  },
  {
    id: "css_deb_007",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet d'ajouter une bordure ?",
    options: ["A. border", "B. outline", "C. border-style", "D. box"],
    bonneReponse: 0,
    explication: "La propriété border permet d'ajouter une bordure."
  },
  {
    id: "css_deb_008",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet d'ajouter de l'espace intérieur à un élément ?",
    options: ["A. padding", "B. margin", "C. space", "D. border"],
    bonneReponse: 0,
    explication: "La propriété padding ajoute de l'espace intérieur à un élément."
  },
  {
    id: "css_deb_009",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet d'ajouter de l'espace extérieur à un élément ?",
    options: ["A. margin", "B. padding", "C. border", "D. space"],
    bonneReponse: 0,
    explication: "La propriété margin ajoute de l'espace extérieur à un élément."
  },
  {
    id: "css_deb_010",
    langage: "htmlcss",
    niveau: "débutant",
    question: "Quelle propriété permet de changer le type de police ?",
    options: ["A. font-family", "B. font-type", "C. font-style", "D. font"],
    bonneReponse: 0,
    explication: "La propriété font-family change le type de police."
  },

  // HTML - INTERMÉDIAIRE
  {
    id: "html_int_001",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise permet d'intégrer une vidéo ?",
    options: ["A. <video>", "B. <media>", "C. <movie>", "D. <embed>"],
    bonneReponse: 0,
    explication: "La balise <video> permet d'intégrer une vidéo."
  },
  {
    id: "html_int_002",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise sert à intégrer du son ?",
    options: ["A. <audio>", "B. <sound>", "C. <music>", "D. <media>"],
    bonneReponse: 0,
    explication: "La balise <audio> sert à intégrer du son."
  },
  {
    id: "html_int_003",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise permet d'intégrer un script JavaScript ?",
    options: ["A. <script>", "B. <js>", "C. <javascript>", "D. <code>"],
    bonneReponse: 0,
    explication: "La balise <script> permet d'intégrer du JavaScript."
  },
  {
    id: "html_int_004",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise sert à regrouper du contenu pour le styliser ?",
    options: ["A. <div>", "B. <span>", "C. <section>", "D. <group>"],
    bonneReponse: 0,
    explication: "La balise <div> sert à regrouper du contenu."
  },
  {
    id: "html_int_005",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise permet d'intégrer une feuille de style externe ?",
    options: ["A. <link>", "B. <style>", "C. <css>", "D. <stylesheet>"],
    bonneReponse: 0,
    explication: "La balise <link> permet d'intégrer une feuille de style externe."
  },
  {
    id: "html_int_006",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise sert à afficher une citation longue ?",
    options: ["A. <blockquote>", "B. <quote>", "C. <cite>", "D. <q>"],
    bonneReponse: 0,
    explication: "La balise <blockquote> sert à afficher une citation longue."
  },
  {
    id: "html_int_007",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise permet de regrouper des éléments de formulaire ?",
    options: ["A. <fieldset>", "B. <form>", "C. <group>", "D. <input>"],
    bonneReponse: 0,
    explication: "La balise <fieldset> regroupe des éléments de formulaire."
  },
  {
    id: "html_int_008",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise sert à afficher une image vectorielle ?",
    options: ["A. <svg>", "B. <img>", "C. <vector>", "D. <canvas>"],
    bonneReponse: 0,
    explication: "La balise <svg> sert à afficher une image vectorielle."
  },
  {
    id: "html_int_009",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise permet de créer une liste de définition ?",
    options: ["A. <dl>", "B. <ul>", "C. <ol>", "D. <list>"],
    bonneReponse: 0,
    explication: "La balise <dl> permet de créer une liste de définition."
  },
  {
    id: "html_int_010",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle balise sert à afficher du texte préformaté ?",
    options: ["A. <pre>", "B. <code>", "C. <text>", "D. <format>"],
    bonneReponse: 0,
    explication: "La balise <pre> sert à afficher du texte préformaté."
  },

  // CSS - INTERMÉDIAIRE
  {
    id: "css_int_001",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Comment centrer un élément horizontalement avec flexbox ?",
    options: ["A. justify-content: center;", "B. align-items: center;", "C. text-align: center;", "D. margin: auto;"],
    bonneReponse: 0,
    explication: "justify-content: center centre les éléments horizontalement en flexbox."
  },
  {
    id: "css_int_002",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de créer une ombre portée sur un élément ?",
    options: ["A. box-shadow", "B. shadow", "C. text-shadow", "D. filter-shadow"],
    bonneReponse: 0,
    explication: "La propriété box-shadow crée une ombre portée sur un élément."
  },
  {
    id: "css_int_003",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de définir la transparence d'un élément ?",
    options: ["A. opacity", "B. transparent", "C. alpha", "D. visibility"],
    bonneReponse: 0,
    explication: "La propriété opacity définit la transparence d'un élément."
  },
  {
    id: "css_int_004",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de changer le curseur de la souris ?",
    options: ["A. cursor", "B. pointer", "C. mouse", "D. hover"],
    bonneReponse: 0,
    explication: "La propriété cursor change le curseur de la souris."
  },
  {
    id: "css_int_005",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de positionner un élément de façon absolue ?",
    options: ["A. position: absolute;", "B. position: fixed;", "C. position: relative;", "D. position: static;"],
    bonneReponse: 0,
    explication: "position: absolute positionne un élément de façon absolue."
  },
  {
    id: "css_int_006",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de faire une transition animée entre deux états ?",
    options: ["A. transition", "B. animation", "C. effect", "D. transform"],
    bonneReponse: 0,
    explication: "La propriété transition permet d'animer le passage entre deux états."
  },
  {
    id: "css_int_007",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de transformer un élément (rotation, échelle, etc.) ?",
    options: ["A. transform", "B. transition", "C. scale", "D. rotate"],
    bonneReponse: 0,
    explication: "La propriété transform permet de modifier la forme d'un élément."
  },
  {
    id: "css_int_008",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de masquer un élément sans le supprimer du flux ?",
    options: ["A. visibility: hidden;", "B. display: none;", "C. opacity: 0;", "D. hidden: true;"],
    bonneReponse: 0,
    explication: "visibility: hidden masque l'élément sans le supprimer du flux."
  },
  {
    id: "css_int_009",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de définir le fond d'un élément avec une image ?",
    options: ["A. background-image", "B. image-background", "C. background-url", "D. img-background"],
    bonneReponse: 0,
    explication: "La propriété background-image définit une image de fond."
  },
  {
    id: "css_int_010",
    langage: "htmlcss",
    niveau: "intermédiaire",
    question: "Quelle propriété permet de arrondir les coins d'un élément ?",
    options: ["A. border-radius", "B. corner-radius", "C. round-corner", "D. border-curve"],
    bonneReponse: 0,
    explication: "La propriété border-radius arrondit les coins d'un élément."
  },

  // HTML - AVANCÉ
  {
    id: "html_adv_001",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir des zones éditables dans une page ?",
    options: ["A. contenteditable", "B. <input>", "C. <editable>", "D. <edit>"],
    bonneReponse: 0,
    explication: "L'attribut contenteditable rend une zone éditable."
  },
  {
    id: "html_adv_002",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet d'intégrer un composant personnalisé ?",
    options: ["A. <custom-element>", "B. <component>", "C. <div>", "D. <template>"],
    bonneReponse: 3,
    explication: "La balise <template> permet de définir du contenu réutilisable pour des composants personnalisés."
  },
  {
    id: "html_adv_003",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet d'intégrer du contenu externe dans une page ?",
    options: ["A. <iframe>", "B. <embed>", "C. <object>", "D. Toutes ces réponses"],
    bonneReponse: 3,
    explication: "<iframe>, <embed> et <object> permettent d'intégrer du contenu externe."
  },
  {
    id: "html_adv_004",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir des métadonnées pour le document ?",
    options: ["A. <meta>", "B. <head>", "C. <data>", "D. <info>"],
    bonneReponse: 0,
    explication: "La balise <meta> définit des métadonnées dans le document."
  },
  {
    id: "html_adv_005",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de regrouper des options dans un menu déroulant ?",
    options: ["A. <optgroup>", "B. <option>", "C. <select>", "D. <group>"],
    bonneReponse: 0,
    explication: "La balise <optgroup> regroupe des options dans un menu déroulant."
  },
  {
    id: "html_adv_006",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir une zone de navigation principale ?",
    options: ["A. <nav>", "B. <menu>", "C. <aside>", "D. <header>"],
    bonneReponse: 0,
    explication: "La balise <nav> définit une zone de navigation principale."
  },
  {
    id: "html_adv_007",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir un contenu interactif (dialogue, popup) ?",
    options: ["A. <dialog>", "B. <popup>", "C. <modal>", "D. <window>"],
    bonneReponse: 0,
    explication: "La balise <dialog> permet de créer des dialogues ou popups natifs."
  },
  {
    id: "html_adv_008",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir une liste de suggestions pour un champ de saisie ?",
    options: ["A. <datalist>", "B. <select>", "C. <options>", "D. <suggest>"],
    bonneReponse: 0,
    explication: "La balise <datalist> fournit des suggestions pour un champ <input>."
  },
  {
    id: "html_adv_009",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir un contenu alternatif pour les navigateurs ne supportant pas certains éléments ?",
    options: ["A. <noscript>", "B. <alt>", "C. <fallback>", "D. <alternative>"],
    bonneReponse: 0,
    explication: "La balise <noscript> affiche un contenu alternatif si JavaScript est désactivé."
  },
  {
    id: "html_adv_010",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle balise permet de définir un point d'ancrage dans une page ?",
    options: ["A. <a name=\"...\">", "B. <anchor>", "C. <point>", "D. <mark>"],
    bonneReponse: 0,
    explication: "L'attribut name sur la balise <a> permet de définir un point d'ancrage."
  },

  // CSS - AVANCÉ
  {
    id: "css_adv_001",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quel propriété permet de créer une animation CSS ?",
    options: ["A. animation", "B. transition", "C. keyframes", "D. effect"],
    bonneReponse: 0,
    explication: "La propriété animation permet de créer des animations CSS."
  },
  {
    id: "css_adv_002",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle règle permet de définir les étapes d'une animation CSS ?",
    options: ["A. @keyframes", "B. @animation", "C. @steps", "D. @frames"],
    bonneReponse: 0,
    explication: "La règle @keyframes définit les étapes d'une animation CSS."
  },
  {
    id: "css_adv_003",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de créer un effet de filtre sur un élément ?",
    options: ["A. filter", "B. effect", "C. overlay", "D. blend"],
    bonneReponse: 0,
    explication: "La propriété filter permet d'appliquer des effets comme blur, grayscale, etc."
  },
  {
    id: "css_adv_004",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de gérer l'empilement des éléments ?",
    options: ["A. z-index", "B. stack-order", "C. layer", "D. order"],
    bonneReponse: 0,
    explication: "La propriété z-index gère l'empilement des éléments."
  },
  {
    id: "css_adv_005",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de définir une grille CSS ?",
    options: ["A. display: grid;", "B. grid-template", "C. grid-area", "D. grid-layout"],
    bonneReponse: 0,
    explication: "display: grid active le mode grille CSS."
  },
  {
    id: "css_adv_006",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de définir le comportement de flexbox pour les enfants ?",
    options: ["A. flex", "B. flex-grow", "C. flex-shrink", "D. Toutes ces réponses"],
    bonneReponse: 3,
    explication: "flex, flex-grow et flex-shrink définissent le comportement des enfants en flexbox."
  },
  {
    id: "css_adv_007",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de définir une image de fond multiple ?",
    options: ["A. background-image", "B. background", "C. background-multi", "D. multi-image"],
    bonneReponse: 1,
    explication: "background permet de définir plusieurs images de fond en CSS."
  },
  {
    id: "css_adv_008",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de contrôler le mode de fusion des calques ?",
    options: ["A. mix-blend-mode", "B. blend-mode", "C. layer-mode", "D. composite-mode"],
    bonneReponse: 0,
    explication: "mix-blend-mode contrôle le mode de fusion des calques."
  },
  {
    id: "css_adv_009",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de définir une variable CSS personnalisée ?",
    options: ["A. --ma-variable", "B. var()", "C. custom-var", "D. variable"],
    bonneReponse: 0,
    explication: "Les variables CSS sont définies avec --nom et utilisées avec var()."
  },
  {
    id: "css_adv_010",
    langage: "htmlcss",
    niveau: "avancé",
    question: "Quelle propriété permet de définir le comportement de défilement d'un élément ?",
    options: ["A. scroll-behavior", "B. overflow", "C. scroll", "D. scroll-mode"],
    bonneReponse: 0,
    explication: "scroll-behavior définit le comportement du défilement (smooth, auto, etc.)."
  },
  
    // ============================================================================
    // REACTJS - NIVEAU DÉBUTANT (20 questions)
    // ============================================================================
    {
      id: "react_deb_001",
      langage: "reactjs",
      niveau: "débutant",
      question: "Qu'est-ce que React ?",
      options: [
      "A. Une bibliothèque JavaScript pour construire des interfaces utilisateur",
      "B. Un langage de programmation",
      "C. Un framework CSS",
      "D. Un serveur web"
      ],
      bonneReponse: 0,
      explication: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur."
    },
    {
      id: "react_deb_002",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment s'appelle la structure de base d'une interface React ?",
      options: [
      "A. Composant",
      "B. Module",
      "C. Page",
      "D. Vue"
      ],
      bonneReponse: 0,
      explication: "La structure de base en React est le composant."
    },
    {
      id: "react_deb_003",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel fichier est généralement le point d'entrée d'une application React ?",
      options: [
      "A. index.js",
      "B. app.js",
      "C. main.js",
      "D. start.js"
      ],
      bonneReponse: 0,
      explication: "Le fichier index.js est généralement le point d'entrée."
    },
    {
      id: "react_deb_004",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel mot-clé permet de créer un composant fonctionnel ?",
      options: [
      "A. function",
      "B. class",
      "C. component",
      "D. create"
      ],
      bonneReponse: 0,
      explication: "On utilise le mot-clé function pour créer un composant fonctionnel."
    },
    {
      id: "react_deb_005",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel est le nom de la syntaxe qui mélange HTML et JavaScript dans React ?",
      options: [
      "A. JSX",
      "B. TSX",
      "C. HTMLX",
      "D. JSL"
      ],
      bonneReponse: 0,
      explication: "JSX est la syntaxe qui mélange HTML et JavaScript dans React."
    },
    {
      id: "react_deb_006",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment insérer une variable JavaScript dans du JSX ?",
      options: [
      "A. Avec des accolades {}",
      "B. Avec des crochets []",
      "C. Avec des parenthèses ()",
      "D. Avec des guillemets \"\""
      ],
      bonneReponse: 0,
      explication: "On utilise des accolades {} pour insérer une variable dans du JSX."
    },
    {
      id: "react_deb_007",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel hook permet de gérer l'état local d'un composant fonctionnel ?",
      options: [
      "A. useState",
      "B. useEffect",
      "C. useContext",
      "D. useReducer"
      ],
      bonneReponse: 0,
      explication: "Le hook useState permet de gérer l'état local."
    },
    {
      id: "react_deb_008",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment appelle-t-on la fonction qui modifie l'état créé par useState ?",
      options: [
      "A. Setter",
      "B. Changer",
      "C. Modifier",
      "D. Update"
      ],
      bonneReponse: 0,
      explication: "La fonction retournée par useState est appelée setter."
    },
    {
      id: "react_deb_009",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel hook permet d'exécuter du code après le rendu du composant ?",
      options: [
      "A. useEffect",
      "B. useState",
      "C. useCallback",
      "D. useMemo"
      ],
      bonneReponse: 0,
      explication: "useEffect permet d'exécuter du code après le rendu."
    },
    {
      id: "react_deb_010",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment passe-t-on des données d'un parent à un enfant ?",
      options: [
      "A. Par les props",
      "B. Par l'état",
      "C. Par le contexte",
      "D. Par les variables globales"
      ],
      bonneReponse: 0,
      explication: "On passe les données via les props."
    },
    {
      id: "react_deb_011",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel attribut JSX permet d'ajouter une classe CSS ?",
      options: [
      "A. className",
      "B. class",
      "C. cssClass",
      "D. styleClass"
      ],
      bonneReponse: 0,
      explication: "On utilise className pour ajouter une classe CSS en JSX."
    },
    {
      id: "react_deb_012",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment rendre une liste d'éléments en React ?",
      options: [
      "A. Avec la méthode map",
      "B. Avec la méthode forEach",
      "C. Avec la méthode filter",
      "D. Avec la méthode reduce"
      ],
      bonneReponse: 0,
      explication: "On utilise map pour rendre une liste d'éléments."
    },
    {
      id: "react_deb_013",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel attribut doit être unique lors du rendu d'une liste ?",
      options: [
      "A. key",
      "B. id",
      "C. name",
      "D. value"
      ],
      bonneReponse: 0,
      explication: "L'attribut key doit être unique pour chaque élément de la liste."
    },
    {
      id: "react_deb_014",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment gérer un événement de clic sur un bouton ?",
      options: [
      "A. onClick",
      "B. click",
      "C. handleClick",
      "D. eventClick"
      ],
      bonneReponse: 0,
      explication: "On utilise l'attribut onClick pour gérer le clic."
    },
    {
      id: "react_deb_015",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel package installe-t-on pour démarrer un projet React facilement ?",
      options: [
      "A. create-react-app",
      "B. react-starter",
      "C. react-init",
      "D. react-setup"
      ],
      bonneReponse: 0,
      explication: "create-react-app permet de démarrer un projet React facilement."
    },
    {
      id: "react_deb_016",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel est le nom du DOM virtuel utilisé par React ?",
      options: [
      "A. Virtual DOM",
      "B. Shadow DOM",
      "C. Real DOM",
      "D. Document DOM"
      ],
      bonneReponse: 0,
      explication: "React utilise le Virtual DOM."
    },
    {
      id: "react_deb_017",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel est le nom du hook pour partager des données globales ?",
      options: [
      "A. useContext",
      "B. useState",
      "C. useEffect",
      "D. useGlobal"
      ],
      bonneReponse: 0,
      explication: "useContext permet de partager des données globales."
    },
    {
      id: "react_deb_018",
      langage: "reactjs",
      niveau: "débutant",
      question: "Comment importer React dans un fichier JavaScript ?",
      options: [
      "A. import React from 'react';",
      "B. require('react');",
      "C. include React;",
      "D. load React;"
      ],
      bonneReponse: 0,
      explication: "On importe React avec import React from 'react';"
    },
    {
      id: "react_deb_019",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel est le nom du hook pour optimiser une fonction de rappel ?",
      options: [
      "A. useCallback",
      "B. useMemo",
      "C. useEffect",
      "D. useReducer"
      ],
      bonneReponse: 0,
      explication: "useCallback optimise une fonction de rappel."
    },
    {
      id: "react_deb_020",
      langage: "reactjs",
      niveau: "débutant",
      question: "Quel est le nom du hook pour mémoriser une valeur calculée ?",
      options: [
      "A. useMemo",
      "B. useCallback",
      "C. useEffect",
      "D. useState"
      ],
      bonneReponse: 0,
      explication: "useMemo mémorise une valeur calculée."
    },
    // REACTJS - NIVEAU INTERMÉDIAIRE (10 questions)
    {
      id: "react_int_001",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Quel hook permet de gérer des effets de bord dans un composant ?",
      options: [
        "A. useEffect",
        "B. useState",
        "C. useReducer",
        "D. useRef"
      ],
      bonneReponse: 0,
      explication: "useEffect permet de gérer les effets de bord (side effects) dans un composant."
    },
    {
      id: "react_int_002",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment accéder à un élément du DOM dans un composant fonctionnel ?",
      options: [
        "A. useRef",
        "B. useEffect",
        "C. useState",
        "D. useMemo"
      ],
      bonneReponse: 0,
      explication: "useRef permet d'accéder à un élément du DOM."
    },
    {
      id: "react_int_003",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Quel hook permet de gérer un état complexe avec des actions ?",
      options: [
        "A. useReducer",
        "B. useState",
        "C. useEffect",
        "D. useCallback"
      ],
      bonneReponse: 0,
      explication: "useReducer permet de gérer un état complexe avec des actions."
    },
    {
      id: "react_int_004",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment éviter de recalculer une valeur lors du rendu ?",
      options: [
        "A. useMemo",
        "B. useCallback",
        "C. useEffect",
        "D. useRef"
      ],
      bonneReponse: 0,
      explication: "useMemo permet de mémoriser une valeur calculée."
    },
    {
      id: "react_int_005",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment optimiser une fonction passée en props à un enfant ?",
      options: [
        "A. useCallback",
        "B. useMemo",
        "C. useEffect",
        "D. useReducer"
      ],
      bonneReponse: 0,
      explication: "useCallback optimise une fonction passée en props."
    },
    {
      id: "react_int_006",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment partager des données entre plusieurs composants sans passer par les props ?",
      options: [
        "A. Contexte (Context API)",
        "B. useState",
        "C. useEffect",
        "D. useRef"
      ],
      bonneReponse: 0,
      explication: "Le Context API permet de partager des données globales."
    },
    {
      id: "react_int_007",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment effectuer une requête HTTP dans un composant React ?",
      options: [
        "A. Dans useEffect avec fetch ou axios",
        "B. Directement dans le rendu",
        "C. Avec useState",
        "D. Avec useMemo"
      ],
      bonneReponse: 0,
      explication: "On effectue les requêtes HTTP dans useEffect avec fetch ou axios."
    },
    {
      id: "react_int_008",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Quel attribut permet de rendre un formulaire contrôlé ?",
      options: [
        "A. value",
        "B. checked",
        "C. selected",
        "D. controlled"
      ],
      bonneReponse: 0,
      explication: "L'attribut value permet de rendre un champ contrôlé."
    },
    {
      id: "react_int_009",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment empêcher le comportement par défaut d'un formulaire lors de la soumission ?",
      options: [
        "A. event.preventDefault()",
        "B. event.stopPropagation()",
        "C. event.cancel()",
        "D. event.blockDefault()"
      ],
      bonneReponse: 0,
      explication: "event.preventDefault() empêche le comportement par défaut."
    },
    {
      id: "react_int_010",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment rendre un composant React performant lors du rendu de listes volumineuses ?",
      options: [
        "A. Utiliser des clés uniques et le Virtual DOM",
        "B. Utiliser des IDs aléatoires",
        "C. Utiliser des classes CSS",
        "D. Utiliser des variables globales"
      ],
      bonneReponse: 0,
      explication: "Des clés uniques et le Virtual DOM rendent le rendu performant."
    },
    {
      id: "react_int_011",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Quel hook permet de mémoriser une référence qui persiste entre les rendus ?",
      options: [
        "A. useRef",
        "B. useMemo",
        "C. useState",
        "D. useEffect"
      ],
      bonneReponse: 0,
      explication: "useRef permet de mémoriser une référence persistante."
    },
    {
      id: "react_int_012",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment conditionner l'exécution d'un effet dans useEffect ?",
      options: [
        "A. En passant un tableau de dépendances",
        "B. En utilisant useState",
        "C. En utilisant useCallback",
        "D. En utilisant useReducer"
      ],
      bonneReponse: 0,
      explication: "Le tableau de dépendances conditionne l'exécution de useEffect."
    },
    {
      id: "react_int_013",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment éviter le rendu inutile d'un composant enfant ?",
      options: [
        "A. React.memo",
        "B. useEffect",
        "C. useState",
        "D. useRef"
      ],
      bonneReponse: 0,
      explication: "React.memo évite le rendu inutile d'un composant enfant."
    },
    {
      id: "react_int_014",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment lever un événement personnalisé d'un enfant vers un parent ?",
      options: [
        "A. En passant une fonction en props",
        "B. En utilisant useEffect",
        "C. En utilisant useRef",
        "D. En utilisant useMemo"
      ],
      bonneReponse: 0,
      explication: "On passe une fonction en props pour lever un événement personnalisé."
    },
    {
      id: "react_int_015",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment gérer l'affichage conditionnel dans JSX ?",
      options: [
        "A. Avec les opérateurs ternaires ou &&",
        "B. Avec switch",
        "C. Avec for",
        "D. Avec map"
      ],
      bonneReponse: 0,
      explication: "On utilise les opérateurs ternaires ou && pour l'affichage conditionnel."
    },
    {
      id: "react_int_016",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment partager une logique entre plusieurs composants ?",
      options: [
        "A. Custom hooks",
        "B. Props",
        "C. useState",
        "D. useEffect"
      ],
      bonneReponse: 0,
      explication: "On crée des custom hooks pour partager la logique."
    },
    {
      id: "react_int_017",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment gérer la navigation entre plusieurs pages en React ?",
      options: [
        "A. Avec react-router",
        "B. Avec useEffect",
        "C. Avec useState",
        "D. Avec useMemo"
      ],
      bonneReponse: 0,
      explication: "react-router permet de gérer la navigation entre pages."
    },
    {
      id: "react_int_018",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment gérer les erreurs dans un composant React ?",
      options: [
        "A. Avec un Error Boundary",
        "B. Avec useEffect",
        "C. Avec useState",
        "D. Avec useRef"
      ],
      bonneReponse: 0,
      explication: "Un Error Boundary permet de gérer les erreurs dans React."
    },
    {
      id: "react_int_019",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment optimiser le chargement des images en React ?",
      options: [
        "A. Lazy loading",
        "B. useEffect",
        "C. useState",
        "D. useMemo"
      ],
      bonneReponse: 0,
      explication: "Le lazy loading optimise le chargement des images."
    },
    {
      id: "react_int_020",
      langage: "reactjs",
      niveau: "intermédiaire",
      question: "Comment internationaliser une application React ?",
      options: [
        "A. Avec des librairies comme react-intl ou i18next",
        "B. Avec useEffect",
        "C. Avec useState",
        "D. Avec useMemo"
      ],
      bonneReponse: 0,
      explication: "On utilise des librairies comme react-intl ou i18next pour l'internationalisation."
    }
]


