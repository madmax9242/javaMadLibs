import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Submission } from '../class/submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  baseUrl: string = "http://localhost:8989/";

  constructor(private http: HttpClient) { }

  addSubmission(submission: Submission): Observable<Submission> {
    return this.http.post<Submission>(this.baseUrl + "submission", submission); // http://localhost:8989/submission
  }

  getAllSubmissions(): Observable<Submission[]> {
    return  this.http.get<Submission[]>(this.baseUrl + "submission/all"); // http://localhost:8989/submission/all
  }

  getSubmissionById(id: number): Observable<Submission> {
    return this.http.get<Submission>(this.baseUrl + "submission/" + id); // http://localhost:8989/submission/id
  }
  

  updateSubmission(submission: Submission): Observable<Submission> {
    return this.http.put<Submission>(this.baseUrl + "submission", submission); // http://localhost:8989/submission
  }
  

  deleteSubmissionById(id: number): Observable<Submission> {
    return this.http.delete<Submission>(this.baseUrl + "submission/delete/" + id); // http://localhost:8989/submission/delete/id
  }

}
