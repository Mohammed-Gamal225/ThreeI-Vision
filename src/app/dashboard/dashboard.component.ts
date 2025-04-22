import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { CommonModule, DatePipe } from '@angular/common';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
    providers:[UserApiService]
  
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor( private userApi:UserApiService 
    , private _router:Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): any {
    
    this.userApi.fetchUsers().subscribe(
      (response:any)=>{
    console.log(response);
    this.users= response || []

    })
  }

  viewDetails(user: User): void {
    this._router.navigate([`userDetailsComponent/${user.userName}`])
    console.log('Viewing details for:', user);
  }
}