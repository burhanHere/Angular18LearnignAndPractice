import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from "../../../reuseableComponent/page-header/page-header.component";

@Component({
  selector: 'app-if-else-control-flow',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent],
  templateUrl: './if-else-control-flow.component.html',
  styleUrl: './if-else-control-flow.component.css',
})
export class IfElseControlFlowComponent {
  public isDiv1Visible: Boolean;
  public isDiv2Visible: Boolean;
  public div3TextBox1: string;
  public div3TextBox2: string;
  public isDiv4Active: Boolean;
  public div4Text: string;

  constructor() {
    this.isDiv1Visible = true;
    this.isDiv2Visible = true;
    this.div3TextBox1 = ``;
    this.div3TextBox2 = ``;
    this.isDiv4Active = true;
    this.div4Text = `Div-4`;
  }

  public showDiv1() {
    this.isDiv1Visible = true;
  }

  public hideDiv1() {
    this.isDiv1Visible = false;
  }

  public toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
