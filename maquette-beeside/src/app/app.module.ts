import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//ce module est impératif pour les routes
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//composant de l'app
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProposComponent } from './propos/propos.component';




export const appRouteList: Routes = [
  //mappage
    {
        path: 'rea',
        component: AppHeaderComponent
    },
    {
        path: 'accueil',
        component: NavigationComponent
    },
    {
        path: 'propos',
        component: ProposComponent
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NavigationComponent,
    ProposComponent
  ],
  exports: [
    //export importan pour les routes
    RouterModule
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ne pas oublier la map des routes en import
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
