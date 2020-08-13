import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>
  constructor(private fireDb: AngularFireDatabase) { }
  getToDoList(){
    this.toDoList = this.fireDb.list('titles');
    return this.toDoList
  }
  addTitle(title: String) {
    this.toDoList.push({
      title: title,
      isChecked: false,
      time: Date
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
}
