import { Component, OnInit, Input } from '@angular/core';
import { Submission } from '../class/submission';
import { NgForm, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private submission: Submission, private http: HttpClientModule) { 


  }

  ngOnInit(): void {
  }

  createInput(): void{

  }

}
