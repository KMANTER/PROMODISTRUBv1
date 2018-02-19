import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'component-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
@Input() isFloatRight: boolean;
@Input() cardEntityName: string;
public entityName: string;
public arrayAvantages: string[];
    constructor() { 

    }

    ngOnInit() {
        this.entityName = this.cardEntityName;
        if(this.entityName === "professionel"){
            this.arrayAvantages = ["Le bon produit au bon prix",
                                    "Un site centralisé et réservé aux professionnels",
                                    "Ouverture de la plateforme aux nouveaux acteurs du marché",
                                    "Amélioration de la marge brute "];
        }else if(this.entityName === "destributeur"){
            this.arrayAvantages = ["Plus de visibilité pour plus de vente",
                                    "Optimisation des coûts web marketing",
                                    "Des prospects et clients mieux ciblés ",
                                    "Multiplication des offres flash et optimisation des stocks"];
        }
    } 
}
