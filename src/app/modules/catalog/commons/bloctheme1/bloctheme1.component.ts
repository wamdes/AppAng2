import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';
import {SncfItems} from '../../common/interfaces/sncf-items';

@Component({
  selector: 'app-bloctheme1',
  templateUrl: './bloctheme1.component.html',
  styleUrls: ['./bloctheme1.component.css']
})
export class Bloctheme1Component implements OnInit {

  constructor(private http: Http){}
	getItems() {

        return this.http.get('assets/docs/FileServices.json')
			.map((response: Response) => {
				return response.json().catalogue.services.filter(services  =>services.Categorie==="Services Ferroviaires")

      });
	}


	ngOnInit() {
      return this.getItems().subscribe(data => {return data)});
	 //console.log(my_cats)

  }







}
