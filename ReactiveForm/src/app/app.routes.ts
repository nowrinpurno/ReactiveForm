import { Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {path:"",component:ReactiveFormComponent},
    {path:"edit",component:ReactiveFormComponent},

];
