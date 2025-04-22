import { Component, OnInit } from '@angular/core';
import { UserDetails } from './userDetails.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-details',
  imports: [DatePipe , CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss' , 
  providers:[UserApiService]
})
export class UserDetailsComponent implements OnInit {
  logs: UserDetails[] = [];
  currentusername :string = '';
  constructor(private userApi:UserApiService 
    , private _router:ActivatedRoute) {}

  ngOnInit(): void {
    const username:string = this._router.snapshot.paramMap.get('username')
    || ""
    this.currentusername = username
    this.fetchLogs(username);
  }

  fetchLogs(username:string): void {
    this.userApi.fetchUserLoginDetails(username).subscribe(
      (response:any)=>{
      console.log(response);
      this.logs= response||[]
      }
    )

  }


}