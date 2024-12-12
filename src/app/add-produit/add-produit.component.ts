import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  message! : string;
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;


  constructor(private produitService: ProduitService,
              private router :Router
   ) {}


   ngOnInit(): void {
    this.produitService.listeCategories().
          subscribe(cats => {console.log(cats);
                             this.categories = cats._embedded.categories;
                             }
        );
  }




  addProduit(){
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
     this.produitService.ajouterProduit(this.newProduit)
                       .subscribe(prod => {
                       console.log(prod);
                       this.router.navigate(['produits']);
                       }); 
     }
 



}
