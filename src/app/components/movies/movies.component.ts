import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getdataService } from '../../services/getdata.service';
import {movie} from './movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 public movies:movie[];
 public object:any; 
 constructor(private getdataService: getdataService) { }
private isCollapsed=false;
  ngOnInit() {
     // this.getdataService.getMovies().subscribe((data:movie[])=>(this.movies=data));
      console.log(this.movies);
    this.getdataService.login(8427046799,'horoscope').then((response)=>{
      this.object=response;
      console.log("here1");
      this.getdataService.getInfo(8427046799,this.object.token).then((response)=>{
        console.log("here2");
        
        console.log("In the res");
        console.log(response);
      },
      (reject)=>{
        console.log(reject);
      }
    )
    });
    }

}
