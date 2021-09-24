import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  providers: [HelloWorldService],
})
export class HelloWorldComponent implements OnInit {
  constructor(private helloWorldService: HelloWorldService) {}
  public msg = this.helloWorldService.getMsg();

  ngOnInit(): void {}
}
