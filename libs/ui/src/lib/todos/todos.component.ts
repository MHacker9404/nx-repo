import { Component, Input } from '@angular/core';
import { Todo } from '@stores/data';

@Component({
  selector: 'prb-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[];
}
