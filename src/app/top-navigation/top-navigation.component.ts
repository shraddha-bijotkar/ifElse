import { Component } from '@angular/core';
import { faMessage, faBell, faSortDown, faFaceSmile, faSearch, faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  faMessage = faMessage;
  faBell = faBell;
  faSortDown = faSortDown;
  faFaceSmile = faFaceSmile;
  faSearch = faSearch;
  faList = faList;
}
