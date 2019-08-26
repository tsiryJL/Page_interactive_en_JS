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