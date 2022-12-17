import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-techno-stack',
  templateUrl: './techno-stack.component.html',
  styleUrls: ['./techno-stack.component.css']
})
export class TechnoStackComponent {

  technos: any;
  
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/technoStacks")
    .subscribe({
      next: (v) => {
        console.log(v) 
        this.technos = v
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
    // throw new Error('Method not implemented.');
  }
}
