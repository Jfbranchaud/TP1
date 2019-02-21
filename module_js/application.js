
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //



/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('header')
let elmPortfolio = document.querySelector('article')
let elmNom = document.querySelector('.animation2')
//let intro = new Introduction('allo', elmHeader,animationLettre)
let  monAnimLettre = new AnimLettre('allo', elmHeader, finAnim)	
let Pf = new Introduction(contenuIntro.titrePrincipal, elmPortfolio)
let Nom = new Introduction(contenuIntro.titreSecondaire, elmNom, animationLettre)




// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Design et intégration web'
 	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim)	
}

function finAnim()
{
	console.log('animation terminée')
}










	



