import {Component} from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(public httpService: HttpServiceService) {
  }

  cartCounterLabel = document.querySelector('#cart__counter');
  HeartIcon = faHeart;
  content = this.httpService.resAlbums;
  cartCounter = 0;
  isHovered: number | null;
  isLiked = false;

  likeCounter(): number {
    if (this.isLiked === false) {
      return this.cartCounter++;
    } else if (this.isLiked === true) {
      return this.cartCounter--;
    }
  }

  cardLike(): boolean {
    if (this.isLiked === true) {
      this.likeCounter();
      return this.isLiked = false;
    } else if (this.isLiked === false) {
      this.likeCounter();
      return this.isLiked = true;
    }
  }


  // btnClickHandler = (e) => {
  //   const target = e.target;
  //
  //   if (target.classList.contains('item-actions__cart')) {
  //     this.cartCounterLabel.innerHTML = `${++this.cartCounter}`;
  //     if (this.cartCounter === 1) {
  //       console.log(this.cartCounter);
  //     }
  //   }
  // }
}
