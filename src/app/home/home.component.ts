import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {Lawcase} from "../model/lawcase-model";
import {ActivatedRoute, Router} from "@angular/router";
import {CaseService} from "./case.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public itemsPerPage: number = 5;
  public totalRecords: number = 11;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public lawcase: Array<Lawcase>;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public caseService: CaseService) {
  }

  ngOnInit() {
    //从路由里面获取URL参数
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.currentPage = params["page"];
      this.loadData(this.searchText);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        // this.loadData(this.searchText)
        this.loadAllData(this.searchText);
      });
  }

  public loadAllData(searchText: string) {
    return this.caseService.getAllCases().subscribe(
      res => {
        this.lawcase = res;
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }

  public loadData(searchText: string) {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
    this.end = (this.currentPage) * this.itemsPerPage;
    return this.caseService.getAllCases().subscribe(
      res => {
        this.lawcase = res.slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }

  // public pageChanged(event: any): void {
  //   let temp = parseInt(event.page) + 1;
  //   this.router.navigateByUrl("/" + temp);
  // }

  public searchChanged($event): void {
    this.searchTextStream.next(this.searchText);
  }

}
