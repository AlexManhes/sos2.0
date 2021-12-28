import { CasaComponent } from './paginas/casa/casa.component';
//import
import { LoginComponent } from './paginas/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { ExcluirComponent } from './paginas/excluir/excluir.component';
import { TabelasComponent } from './paginas/tabelas/tabelas.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddComponent } from './paginas/add/add.component';

//rotas
const routes: Routes = [

  { path:'', component:CasaComponent},
  { path: 'cadastrar-component', component: CadastrarComponent },
  { path: 'excluir-component', component: ExcluirComponent },
  { path: 'tabelas-component', component: TabelasComponent},
  { path:'add-component', component:AddComponent},
  { path:'casa-component',component:CasaComponent},
];
// modulos
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
