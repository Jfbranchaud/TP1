
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmPortfolio = document.querySelector('h1')
let intro = new Introduction(contenuIntro, elmPortfolio, animationLettre)


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
/*let elmNom = document.querySelector('h3')
let intro = new Introduction(contenuIntro, elmNom, animationLettre)*/



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










	



