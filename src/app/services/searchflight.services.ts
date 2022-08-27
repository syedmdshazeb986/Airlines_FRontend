import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {Searchflight} from '../Models/searchflight';


@Injectable({
  providedIn: 'root'
})
export class SearchflightService {
  private apiServer = "http://localhost:63451/api/Search/flight/search";
  public source_airport_id:Number;
  public destination_airport_id:Number;
  public seats:number
  public date:Date
  public flightdata=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  SearchFlights(Booking_Type:String,Depart_airport_Id:Number,Arrival_airport_Id:Number,Departure_Time:Date,Arrival_Time:Date,adults:Number,childs:Number,infants:Number,Class_Type:String){
      
    return this.httpClient.post<Searchflight[]>(this.apiServer,new Searchflight(Booking_Type,Depart_airport_Id,Arrival_airport_Id,Departure_Time,Arrival_Time,adults,childs,infants,Class_Type),this.httpOptions);
  }
}


