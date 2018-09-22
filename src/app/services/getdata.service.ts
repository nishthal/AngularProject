import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class getdataService{
    public token;
    public num:string;
    private getUrl='http://starlord.hackerearth.com/movieslisting';
    constructor(private http: HttpClient)
    {
        
    }
    login(username :number, password: string){
 
        return new Promise((resolve, reject) => {
     
            let headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
     
            this.http.post('http://127.0.0.1:8000/accounts/api/login/' , { username:username , password:password }, {headers: headers})
              .subscribe(res => {
                console.log(res);
resolve(res);
                //let data = res.json();
                //this.token = (data.token).toString();
              //  this.storage.set('token', this.token);
    //            resolve(data);
     
      //          resolve(res.json());
              }, (err) => {
                reject(err);
              });
     
        });
     
      }
      getInfo( username : number,token : string ){
        var v=username;
        console.log("here");
        console.log(token);
        console.log(v);
        this.num=v.toString();
       
        return new Promise((resolve, reject) => {
     
            let headers = new HttpHeaders();
      
            headers.append('Content-Type', 'application/json');
            headers.append( 'Authorization', 'Token '+ token );
            console.log(headers);
            this.http.get( "http://127.0.0.1:8000/accounts/api/users/", {headers: headers})
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                  console.log("Error Here")
                reject(err);
              });
          });
    
     }
    getMovies()
    {
        return this.http.get(this.getUrl);
    }
}