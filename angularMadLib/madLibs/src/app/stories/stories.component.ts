import { Component, OnInit } from '@angular/core';
import { Submission } from '../class/submission';
import { SubmissionService } from '../services/submission-service.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(public submission: Submission, private subService: SubmissionService) { }

  ngOnInit(): void {
    console.log(parseInt(sessionStorage.getItem("id")));
    this.subService.getSubmissionById(parseInt(sessionStorage.getItem("id"))).subscribe(data =>
      this.submission = data); 
    //console.log(parseInt(sessionStorage.getItem("id")));
    
  }


  

}
