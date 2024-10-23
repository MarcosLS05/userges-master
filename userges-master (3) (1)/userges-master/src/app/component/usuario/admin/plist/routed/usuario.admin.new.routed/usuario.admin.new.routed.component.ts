import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';
import { IUsuario } from '../../../../../../model/usuario.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-usuario.admin.new.routed',
  templateUrl: './usuario.admin.new.routed.component.html',
  styleUrls: ['./usuario.admin.new.routed.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class UsuarioAdminNewRoutedComponent implements OnInit {
  usuarioForm: FormGroup | undefined = undefined;
  oUsuario: IUsuario | null = null;
  constructor(private oUsuarioService: UsuarioService) { }  
  ngOnInit() {
    this.crearUsuario();
    
  }
  crearUsuario() {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      apellido1: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      apellido2: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    if (!this.usuarioForm?.valid) {
      alert('Formulario no válido');
      return;
    } else {
      this.oUsuarioService.create(this.usuarioForm?.value).subscribe({
        next: (oUsuario: IUsuario) => {
          this.oUsuario = oUsuario;
          
          alert('Usuario actualizado');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

}
