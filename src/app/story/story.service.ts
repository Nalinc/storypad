import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Params } from '@angular/router';
import { Story } from './story.model';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StoryService {
     // Resolve HTTP using the constructor
     constructor (private http: Http, private params: Params) {}
     // private instance variable to hold base url
     private storiesUrl = '/stories'; 


	getStories() : Observable<Story[]> {
	// ...using get request
	return this.http.get(this.storiesUrl)
		// ...and calling .json() on the response to return data
		.map((res:Response) => res.json())
		//...errors if any
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getStory() : Observable<Story[]> {
	// ...using get request
	var that = this;
	return this.http.get(this.storiesUrl+"/"+that.params['id'])
		// ...and calling .json() on the response to return data
		.map((res:Response) => res.json())
		//...errors if any
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	publishStory(story) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(story);
		return this.http.post(this.storiesUrl, body, options).map((res: Response) => res.json());
	}
	ngOnInit(){
		//console.log(this.params)
	}
}