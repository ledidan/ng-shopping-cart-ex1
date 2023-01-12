import { Subscription } from 'rxjs';
import { UiService } from './../../Services/ui.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  public text: string;
  public day: string;
  public reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add text..');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);

    // @todo - emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
