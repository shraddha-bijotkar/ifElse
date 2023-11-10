import { Component } from '@angular/core';
import { faCube, faBarChart, faAdd, faDownload, faCheck, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  faCube = faCube;
  faBarchart = faBarChart;
  faAdd = faAdd;
  faDownload = faDownload;
  faCheck = faCheck;
  faTools = faTools;
}
