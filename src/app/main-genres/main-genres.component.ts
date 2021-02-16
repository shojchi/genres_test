import {Component} from '@angular/core';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-main-genres',
  templateUrl: './main-genres.component.html',
  styleUrls: ['./main-genres.component.css']
})
export class MainGenresComponent {
  constructor(public httpService: HttpServiceService) {
  }
}
