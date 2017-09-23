import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Project} from "../../model/project";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../service/projectService";

@Component({
  selector: 'app-searche-result',
  templateUrl:'./searcheResult.component.html',
  styleUrls:['./searcheResult.component.css']
})

export class SearcheResultComponent implements OnDestroy,OnInit{
  private request:string;
  private subscribtion:Subscription;
  constructor(private activateRouter: ActivatedRoute,
              private projectService: ProjectService){
    this.subscribtion = this.activateRouter.params.subscribe(params => this.request = params["request"]);
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
  ngOnInit(){
  }
}
