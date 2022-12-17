import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  projects: any;
  
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/projects")
    .subscribe({
      next: (v) => {
        console.log(v) 
        this.projects = v
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
    // throw new Error('Method not implemented.');
  }

}
