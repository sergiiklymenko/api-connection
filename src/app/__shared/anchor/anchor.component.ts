import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html'
})

export class AnchorComponent implements OnInit {
  @Input() href = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  clickBefore(e: any): void {
    e.preventDefault();
    if (this.href) {
      this.router.navigate(
        [this.href]
      );
    }
  }
}
