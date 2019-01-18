import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }
  menu = ['Dark Roast Coffee', 'Earl Grey', 'London Fog'];
}
