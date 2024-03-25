import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  items = Liste[] = [
    {id: 1, description: 'pass', nom: 'Python'},
    {id: 2, description: 'map', nom: 'Java'},
    {id: 3, description: 'malloc', nom: 'C'}
  ]

  constructor() { }

  get_items() {
    return items;
  }

  del_item(id :int) {
    items.forEach((item, index) => {
      if (item.id === idToDel) {
          items.splice(index, 1);
      }
    });
  }

  see_item(idToSee :int) {
    items.forEach((item) => {
      if (item.id === idToSee) {
          return item;
      }
    });

  }

  add_item(id :int, description :string, nom :string) {
    item = {id, description, nom};
    item.push(item);

  }
}
