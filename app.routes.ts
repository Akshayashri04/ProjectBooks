import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent} from './login/login';
import { Home } from './home/home';
import { BookComponent } from './book/book';


export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    { path:'login',component:LoginComponent},
    { path:'home',component:Home },
    { path:'book/:id',component:BookComponent },
    
    
];
