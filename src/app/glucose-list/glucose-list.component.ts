import { Component, OnInit } from '@angular/core';
import { Glucose } from '../../model/glucose';
import { GlucoseServiceService } from '../glucose-service.service';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.scss']
})
export class GlucoseListComponent implements OnInit {
  glucoseReadings: Glucose[] = [];

  constructor(private glucoseService: GlucoseServiceService) { }

  ngOnInit(): void {
    this.glucoseService.findAll().subscribe((data: Glucose[]) => {
      this.glucoseReadings = data;
    });
  }

  deleteGlucoseReading(id: number): void {
    this.glucoseService.delete(id).subscribe(() => {
      this.glucoseReadings = this.glucoseReadings.filter(reading => reading.glucoseReadingId !== id);
    });
  }
}
