import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    nom : String = "";
    prenom : String = "";
    adresse : String = "";
    cp : String = "";
    ville : String = "";
    telephone : String = "";
    email : String = "";
    civilite : String = "";
    password : String = "";
    passwordValider : String = "";
    login : String = "";

    isSubmitted: boolean = false; 

 
    onSubmit(form: any) {
      if (form.valid) {
        this.isSubmitted = true;
      }
    }
  }
  