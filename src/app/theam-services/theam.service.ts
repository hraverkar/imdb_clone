import { Option } from './../option';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheamService {

  constructor(private httpClient: HttpClient, private styleManager: StyleManagerService) { }

  public getThemeOptions(): Observable<Array<Option>> {
    return this.httpClient.get<Array<Option>>('/assets/theme-options.json');
  }

  public setTheme(option: any): void {
    this.styleManager.setStyle('theme', `node_modules/@angular/material/prebuilt-themes/${option}.css`);
  }
}
