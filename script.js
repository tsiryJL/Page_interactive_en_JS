//===========================================================================================
// fonctionnalité n°1: lorsqu'on clique sur le footer, il y a clique dans le console
//===========================================================================================
let evenementClick = document.getElementsByTagName('footer')[0];
var  i = 1;

    function clique(){
        console.log('cliquer ' + i); 
            i = i + 1;
        }

evenementClick.addEventListener('click', clique);

//===========================================================================================
//fonctionnalité n°2: l'élément HTML portant l'Id navbarHeader perde sa classe collapse
//============================================================================================
let navParent = document.getElementsByClassName('navbar-toggler')[0];
let navCollapse = document.getElementById('navbarHeader');
    
navParent.addEventListener('click',
    function(){
        navCollapse.classList.toggle('collapse');
    }
);

//===========================================================================================
//fonctionnalité n°3: si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible 
//=========================================================================================== 
let tCard1 = document.getElementsByClassName('card-text')[0];
let eCard1 = document.querySelector('button.btn.btn-outline-secondary')[0];
    console.log(tCard1.innerHTML);

addEventListener('click',
    function(){
        if(tCard1.style.color === "red"){
            tCard1.style.color = "";
        }
        else{
            tCard1.style.color = "red";
        }
    }
);

//===========================================================================================
//fonctionnalité n°4: si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. 
//===========================================================================================
let tCard2 = document.getElementsByClassName('card-text')[1];
let eCard2 = document.querySelector('button.btn.btn-outline-secondary')[1];
    console.log(tCard2.innerHTML);

addEventListener('click',
    function(){
        if(tCard2.style.color === "green"){
            tCard2.style.color = "";
        }
        else{
            tCard2.style.color = "green";
        }
    }
);

//===========================================================================================
//fonctionnalité n°5: si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît 
//===========================================================================================
let a = document.getElementById("navbarHeader")[0];
let b = document.getElementsByTagName('link')[0];
    
addEventListener('click',
    function(){
        b.disabled = true;

    }
);

//===========================================================================================
//fonctionnalité n°6: si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire.
//===========================================================================================
let cardre = document.getElementsByClassName('col-md-4');
let boutons= document.getElementsByClassName('btn-group');

    for(let i = 0; i<cardre.length;i++){
        boutons[i].firstElementChild.addEventListener('mouseover',
            function(){
                if (cardre[i].getElementsByClassName('card-img-top')[0].style.width === "20%"){
                        cardre[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
                        cardre[i].getElementsByClassName('card-text')[0].style.display = "block";
                }  
                else {
                        cardre[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
                        cardre[i].getElementsByClassName('card-text')[0].style.display = "none";
                }
            }
        )
    ;}

//===========================================================================================
//fonctionalité n°7: si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier 
//===========================================================================================
let parentCards = document.getElementsByClassName('col-md-4');
let row = document.getElementsByClassName('row');
let greyButton = document.getElementsByClassName('btn-secondary');

greyButton.addEventListener('click',
    function(e) {
        e.preventDefault();
        row.insertBefore(parentCards, parentCards[0]);
    }
);

//==============================================================================================
//Fonctionnalité n°8: la première card devra passer en dernier.
//==============================================================================================
let parentCards = document.getElementsByClassName('col-md-4');
let blueButton = document.getElementsByClassName('btn-primary');
let row = document.getElementsByClassName('row');
let status = false;

blueButton.addEventListener('click',
    function(e){
        if(status === false){
            e.preventDefault();
            row.appendChild(parentCards[0]);
            status = true;
        }
        else{
            e.preventDefault();
            row.appendChild(parentCards[0]);
            status = false;
        }
    }
);

//==================================================================================================
//Fonctionalité n°9:  La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
//==================================================================================================
//    -Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
//    -Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
//    -Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
//    -Si l'utilisateur presse la touche "b", tout redevient normal.
let logo = document.getElementsByClassName('navbar-brand')[0];
let body = document.getElementsByTagName('body')[0];

logo.addEventListener("keypress",
    function(e){
        e.preventDefault();
        let x = e.key

        if (x == "a" || x == "A"){
            body.className = "";
            body.classList.add("col-md-4");
        } 
        else if (x == "y" || x == "Y"){
            body.className = "";
            body.classList.add("col-md-4");
            body.classList.add("offset-md-4");
        } 
        else if (x == "p" || x == "P"){
            body.className = "";
            body.classList.add("col-md-4");
            body.classList.add("offset-md-8");
        } 
        else if (x == "b" || x == "B"){
            body.className = "";
        }
    }
);



