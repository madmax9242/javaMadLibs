package com.madlib.contollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.madlib.model.Submission;
import com.madlib.service.SubmissionService;

@CrossOrigin
@RestController
public class SubmissionController {

	@Autowired
	SubmissionService subService;
	
	@PostMapping("/submission")
	public Submission createSubmission(@RequestBody Submission sub) {
		return subService.createSubmission(sub);
	}
	
	@GetMapping("/")
	public String getMainPage() {
		return "Hello World";
	}
	
	@GetMapping("/submission/all") 
	public List<Submission> getAllSubmissions() {
		return subService.findAllSubmissions();
	}
	
	@GetMapping("/submission/{id}")
	public Submission getSubmissionById(@PathVariable Integer id) {
		return subService.findSubmissionById(id);
	}
	
	@PutMapping("/submission}")
	public Submission updateSubmission(@RequestBody Submission sub) {
		return subService.updateSubmission(sub);
	}
	
	@DeleteMapping("/submission/delete/{id}") 
	public void deleteSubmissionById(@PathVariable Integer id) {
		subService.deleteSubmissionById(id);
	}
}
