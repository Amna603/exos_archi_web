import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DestinationService } from '../destination.service';
import { Destination } from '../destination'
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { 
  ChangeDetectionStrategy, EventEmitter, 
  Input, Output
} from '@angular/core';


@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.page.html',
  styleUrls: ['./add-destination.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class addDestinationPage implements OnInit {
  @Output() submitted = new EventEmitter<Destination>();
  dataSaved = false;
  allDestinations$ = of([] as Destination[]);
  destinationForm= {} as FormGroup;
  loading = false;
  name = '';
  description = '';
  containedInPlace = '';
  travelAgencies = '';
  destination:Destination[] = [];


  constructor(private router: Router,
              private route: ActivatedRoute,
              public formBuilder: FormBuilder,
              private destinationservice : DestinationService) { }
  ngOnInit() { 
    this.name = this.route.snapshot.params['name'];

      this.destinationForm = this.formBuilder.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          containedInPlace: ['', Validators.required],
          travelAgencies: ['', Validators.required],
        });
      //this.saveDestination}
    }




    submitForm() {
      this.dataSaved = false;
      let new_dest = this.destinationForm.value;
      this.destinationservice.postDestination(new_dest).subscribe(destination => {
        console.log(new_dest);
        this.dataSaved = true;
        //this.loadAllDestinations();
      },
      err => {
        console.log(err);
      }
    );

      //this.destinationservice.getDestination().subscribe(destinations => {
        //let maxIndex = destination.length -1;
        //let maxIndexItem = destination[maxIndex];
      
      //this.destinationForm.reset()
      //this.router.navigate(['/destination'])

       
  }



  loadAllDestinations() {
    //allDestinations = of([] as Destionation[]);
    this.allDestinations$ = this.destinationservice.getDestination();
  }

  saveDestination() {
    const destination = {
      name: 'Java Functional Interface',
      description: 'Java 8', containedInPlace: 'Krishna',
      travelAgencies : 'travelAgencies'
    };
    this.destinationservice.postDestination(destination).subscribe(res => {
      //const dest = res.body;
      //console.log(dest?.name);
      //console.log(res.headers.get('Content-Type'));
      //this.loadAllDestinations();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          //A client-side or network error occurred.         
          console.log('An error occurred:', err.error.message);
        } else {
          //Backend returns unsuccessful response codes such as 404, 500 etc.        
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      }
    );
  }



  
}
