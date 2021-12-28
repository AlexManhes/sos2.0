import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TabelasComponent } from './paginas/tabelas/tabelas.component';
import { LoginComponent } from './paginas/login/login.component';
import { ExcluirComponent } from './paginas/excluir/excluir.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { CasaComponent } from './paginas/casa/casa.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { AddComponent } from './paginas/add/add.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    TabelasComponent,
    LoginComponent,
    ExcluirComponent,
    CadastrarComponent,
    CasaComponent,
    AddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatStepperModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
