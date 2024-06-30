import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlucoseServiceService } from '../glucose-service.service';
import { Glucose } from '../../model/glucose';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-glucose-form',
  templateUrl: './glucose-form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./glucose-form.component.scss']
})
export class GlucoseFormComponent implements OnInit {
  glucoseReading: Glucose = new Glucose();
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private glucoseService: GlucoseServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.glucoseService.findById(params['id']).subscribe(glucose => {
          this.glucoseReading = glucose;
        });
      }
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this.glucoseService.update(this.glucoseReading.glucoseReadingId, this.glucoseReading).subscribe(result => this.gotoGlucoseList());
    } else {
      this.glucoseService.save(this.glucoseReading).subscribe(result => this.gotoGlucoseList());
    }
  }

  gotoGlucoseList() {
    this.router.navigate(['/glucose-readings']);
  }
}
