import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { COVERAGE_DATA } from '../../data/content.data';
import { SOCIAL } from '../../constants/app-constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-coverage',
  imports: [NgClass],
  templateUrl: './coverage.html',
  styleUrl: './coverage.css',
})
export class Coverage {
 protected readonly languageService  = inject(LanguageService);
  protected readonly areas  = COVERAGE_DATA;
  protected readonly social = SOCIAL;
}
