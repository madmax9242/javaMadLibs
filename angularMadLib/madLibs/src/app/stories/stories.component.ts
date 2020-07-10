import { Component, OnInit } from '@angular/core';
import { Submission } from '../class/submission';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private submission: Submission) { }

  ngOnInit(): void {
    Submission: this.submission;
  }

}
