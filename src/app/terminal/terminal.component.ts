import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  public intro_text = 'guest@zs ~ $';
  public intro_display = '';
  public manMe_text = ' man zach-schwartz';
  public manMe_display = '';
  public lineNumber = 0;
  public nextLineReached = false;

  constructor() { }

  introMessage (that) {
    const total_length = that.intro_text.length;
    const current_length = that.intro_display.length;
    if (current_length < total_length) {
      that.intro_display += that.intro_text[current_length];
    } else {
      return;
    }
    setTimeout(that.introMessage, 200, that);
  }

  manMe (that) {
    const total_length = that.manMe_text.length;
    const current_length = that.manMe_display.length;
    if (current_length < total_length) {
      that.manMe_display += that.manMe_text[current_length];
    } else {
      that.nextLine();
      return;
    }
    setTimeout(that.manMe, 200, that);
  }

  nextLine () {
    this.lineNumber += 1;
  }

  ngOnInit() {
    this.introMessage(this);
    setTimeout(this.manMe, 3200, this);
  }

}
