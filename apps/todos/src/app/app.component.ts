import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@stores/data';

@Component({
  selector: 'prb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [];

  constructor(private _http: HttpClient) {
    this._fetch();
  }

  private _fetch() {
    this._http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this._http
      .post('/api/addTodo', {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      })
      .subscribe(() => {
        this._fetch();
      });
  }
}
