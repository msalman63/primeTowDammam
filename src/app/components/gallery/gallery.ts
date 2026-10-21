import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { GALLERY_DATA } from '../../data/content.data';
import { SOCIAL } from '../../constants/app-constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgClass],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
protected readonly languageService = inject(LanguageService);
  protected readonly items = GALLERY_DATA;
  protected readonly social   = SOCIAL;
}
