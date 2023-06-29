import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private renderer: Renderer2){}

  ResumeDownload(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Sunny Kalwani Resume.pdf');
    link.setAttribute('download', `Sunny Kalwani Resume.pdf`);
    link.click();
    link.remove();
  }

}
