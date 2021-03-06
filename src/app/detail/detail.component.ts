import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CaseService} from "../home/case.service";
import {Lawcase} from "../model/lawcase-model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public lawcase: Lawcase;
  public tags;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public caseService: CaseService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.getCase(params["id"]);
        this.getTag(params["id"]);
      }
    );
  }

  public getCase(id: number) {
    this.caseService
      .getCase(id)
      .subscribe(
        data => {
          console.log(data);
          this.lawcase = data
        },
        error => console.error(error)
      );
  }

  public getTag(id: number) {
    this.caseService
      .getTagFilter(id)
      .subscribe(
        data => {
          console.log(data);
          console.log(typeof data);
          this.tags = data;
        },
        error => console.error(error)
      );
  }

}
