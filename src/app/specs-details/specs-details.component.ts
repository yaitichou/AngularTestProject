import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Spec, specs} from "../data/specs";

@Component({
  selector: 'app-specs-details',
  templateUrl: './specs-details.component.html',
  styleUrls: ['./specs-details.component.css']
})
export class SpecsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  specs: Spec | undefined;

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const specName = String(routeParams.get('specializationName'));
    this.specs = specs.find(spec => spec.specialization === specName);
  }

}
