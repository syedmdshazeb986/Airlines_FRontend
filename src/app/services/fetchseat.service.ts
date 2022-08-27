import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Seat } from '../Models/seat';


@Injectable({
  providedIn: 'root'
})
export class FetchseatService {
  public apiServer = "http://localhost:63451/api/Seat/flight";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      public k:number=0;
      public number_of_rows=20;
      public number_of_seats:number = 0;
      public seats:any=[];
      public bookedseats:any=[];
      public seatclass:string
      columns=['A','B','C','D','E','F'];
      getseats(){
        return (this.seats);
      }
      getrows(){
        return this.number_of_rows;
      }

  constructor(private httpClient: HttpClient) { 
    for(let j =0; j<6;j++)
    {
      for(let i =1;i<=this.number_of_rows;i++)
      {
        if(i<=5)
                this.seats[this.k]={"seatnumber":i.toString()+this.columns[j],"booked" : 0, "reserved" : 0,"class" : "business"};
              else
                this.seats[this.k]={"seatnumber":i.toString()+this.columns[j],"booked" : 0, "reserved" : 0,"class" : "economy"}; 
              this.k++;
        
      }
    }
    
    
  }
  getSeatsByFlightId(id:any){
    return this.httpClient.get<Seat[]>(this.apiServer+id,this.httpOptions);
  } 
}

