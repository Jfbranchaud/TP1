
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //



/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('header')
let elmPortfolio = document.querySelector('article')
let elmNom = document.querySelector('.animation2')
let Pf = new Introduction(contenuIntro.titrePrincipal, elmPortfolio)
let Nom = new Introduction(contenuIntro.titreSecondaire, elmNom)
let monAnimLettre = new AnimLettre(contenuIntro.lesLettres, elmHeader)	







	



