import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom:any) { }
  createCanonicalURL() {
    let canonicalLink: HTMLLinkElement = this.dom.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = this.dom.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', this.dom.URL);
 }
}
