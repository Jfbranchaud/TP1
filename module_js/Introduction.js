import {
    Util
} from './Util.js'


export class Introduction {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} chaine - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(chaine, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.titrePrincipal = chaine;

        this.elmParent = elementParent
        this.integrerIntro()
        this.fonction = fonction
    }


    integrerIntro() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'introduction')


            //for(let i; i < tableau.lenght; i++){
                
   // }
        let elmPrincipale = this.creerElement(elmConteneur,
            'div',
            this.titrePrincipal,
            'rectangle')
            


  

     
        /* On garde une référence sur la fonction terminerIntro */
     //   let refTerminerIntro = this.terminerIntro.bind(this)
     //   elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            if (contenu == ' ')
            {
               noeud.innerHTML = '&nbsp;'
            }
            else
            {
                noeud.innerHTML = contenu  
            }
            


        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}