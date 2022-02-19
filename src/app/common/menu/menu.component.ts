import { Option } from './../../option';
import { TheamService } from './../../theam-services/theam.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() public options: Array<Option>;
  @Output() public themeChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private themeService: TheamService) { }
  ngOnInit(): void {
  }

  changeTheme(themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }
}
