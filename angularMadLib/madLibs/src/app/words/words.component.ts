import { Component, OnInit, Input } from '@angular/core';
import { Submission } from '../class/submission';
import { NgForm, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubmissionService } from '../services/submission-service.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private ngForm: NgForm, 
              public submission: Submission, 
              private http: HttpClient,
              private router: Router,
              private subService: SubmissionService) { 

  }

  ngOnInit(): void {
    this.submission = new Submission();
    this.submission.id = 1;
  }

  createSubmission(): void{
    
    this.subService.addSubmission(this.submission).subscribe(data => {
      this.submission = data;
      console.log(this.submission);
      sessionStorage.setItem("id", (this.submission.id).toString());
      
      this.router.navigate(['/stories'])
    });
  }

}
