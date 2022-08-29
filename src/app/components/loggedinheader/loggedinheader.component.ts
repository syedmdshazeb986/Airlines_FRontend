import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Loginservice } from 'src/app/services/login.service';

@Component({
  selector: 'app-loggedinheader',
  templateUrl: './loggedinheader.component.html',
  styleUrls: ['./loggedinheader.component.css']
})
export class LoggedinheaderComponent implements OnInit {

  constructor(private router: Router,private service:Loginservice) { }
  faUser = faUser
  Userdetails:any;
  Wallets:any=0;

  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
    this.service.getUserData(sessionStorage.getItem('user')).subscribe((d: any)=>{
      this.Userdetails=d;
    })
    this.service.getWalletDetails(sessionStorage.getItem('user')).subscribe((d: any)=>{
      this.Wallets=d;
      console.log(d);

    });
    }
  }
  handlelogout = () => 
  {
    sessionStorage.removeItem('user')
    this.router.navigate([`${'/login'}`]);
  }
}
