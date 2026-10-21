import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { WhyUS } from './components/why-us/why-us';
import { Coverage } from './components/coverage/coverage';
import { Gallery } from './components/gallery/gallery';
import { ContactInfo } from './components/contact-info/contact-info';
import { Footer } from './components/footer/footer';
import { FloatingButtons } from './components/floating-buttons/floating-buttons';

@Component({
  imports: [Navbar, Home, Services, About, WhyUS, Coverage, Gallery, ContactInfo, Footer, FloatingButtons],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('eliteTowJeddah');
}
