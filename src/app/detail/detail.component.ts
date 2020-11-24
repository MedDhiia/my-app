import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/all.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() person ?: Person;
  @Output() clickedPerson : EventEmitter<Person> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.clickedPerson.emit(this.person);
  }

}
