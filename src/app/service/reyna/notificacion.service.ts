import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private snackBar: MatSnackBar) {}

  // Un solo método para todo, o puedes separar success() y error()
  notificar(mensaje: string, tipo: 'exito' | 'error' = 'exito') {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      // Aquí asignamos la clase según el resultado
      panelClass: tipo === 'exito' ? ['snack-exito'] : ['snack-error']
    });
  }
}