import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TheamService } from 'src/app/theam-services/theam.service';
import { Option } from './../../option';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = "Internet Movie Database";
  constructor(private themeService: TheamService) { }
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  ngOnInit(): void {
    this.themeService.setTheme("deeppurple-amber");
  }

  public themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }

}
