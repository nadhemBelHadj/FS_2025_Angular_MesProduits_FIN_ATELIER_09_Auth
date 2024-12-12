import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  user = new User();
  erreur=0;

  constructor(private authService : AuthService,
    private  router: Router) { }

    onLoggedin(){
      console.log(this.user);
      let isValidUser: Boolean = this.authService.SignIn(this.user);
    
      if (isValidUser)
         this.router.navigate(['/']);
      else
      this.erreur=1;
        // alert('Login ou mot de passe incorrecte!');
      }
    
    


}
