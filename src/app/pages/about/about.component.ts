import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  date:any;
  // blueBg = "btn-bg-blue"
  // orangeBg = "btn-bg-orange"


  constructor(private apiService: ApiService) {
    this.date = new Date();
    console.log(this.date, "date")
  }

}
