/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./play-list-slide.js";
import "./slide-arrow.js";
import { ref } from "lit/directives/ref.js";


/**
 * `play-list`
 * 
 * @demo index.html
 * @element play-list
 */
export class PlayList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list";
  }

  constructor() {
    super();
    this.currIndex = 0;
    this.topHeading = "";
    this.secondHeading = "";
    this.body = "";
    this.slides = Array.from(this.querySelectorAll("play-list-slide"));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currIndex: { type: Number , reflect: true},
      topHeading: { type: String },
      secondHeading: { type: String },
      body: { type: String },
      slides: { type: String },
      index: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        
        width: 90%;
        max-width: 850px;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-10);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .single-slide {
        background-color: var(--ddd-theme-default-slateMaxLight);
        padding: var(--ddd-spacing-15);
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .top-heading {
        color: var(--ddd-theme-default-skyBlue);
        font-size: var(--ddd-font-size-s);

      }
      .second-heading {
        color: var(--ddd-theme-default-beaverBlue);
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
      }
      .body {
        font-weight: var(--ddd-font-weight-base);
        font-size: var(--ddd-font-size-xs);
        max-height: 150px;
        overflow-y: auto;
        max-width: 600px;
        color: black;
      }
      .line {
        border: none;
        height: 3px;
        background-color: var(--ddd-theme-default-skyBlue);
        width: 150px;
        margin-left: 0;
        margin-right: auto;
      }
      .arrow-wrapper {
        position: relative;
        top: -190px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h3><span>${this.t.title}</span> ${this.title}</h3>

        <div class="single-slide">
          <h4 class="top-heading">${this.topHeading}</h4>
          <h3 class="second-heading">${this.secondHeading}</h3>
          <hr class="line">
          <h5 class="body">${this.body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</h5>
          <slide-indicator 
            .total=${this.slides.length}
            .currIndex="${this.currIndex}"
            @play-list-index-changed="${this._handleIndexChange}">
          </slide-indicator>
          <div class="arrow-wrapper">
            <slide-arrow
              .index=${this.currIndex}
              .total=${this.slides.length}
              @prev-clicked="${this.back}"
              @next-clicked="${this.next}">
            </slide-arrow>
          </div>
        </div>
      </div>
    `;
  }

    firstUpdated() {  
    if (this.index !== undefined) {
      this.currIndex = this.index;
    }
    this._updateSlides();
  }

  updated(changedProperties) {
    if (changedProperties.has('currIndex')) {
      this._updateSlides();
    }
  }

  _updateSlides() {
    this.slides.forEach((slide, i) => {
      slide.active = (i === this.currIndex)
    });

    const curSlide = this.slides[this.currIndex];
    if (curSlide) {
      this.topHeading = curSlide.getAttribute("top-heading");
      this.secondHeading = curSlide.getAttribute("second-heading");
      this.body = curSlide.getAttribute("body");
    } 
  }

  next() {
    if (this.currIndex < this.slides.length - 1) {
      this.currIndex++;
    }
  }

  back() {
    if (this.currIndex > 0) {
      this.currIndex--;
    }
  }

  _handleIndexChange(e) {
    const newIndex = e.detail.index;
    
    if (newIndex >= 0 && newIndex < this.slides.length) {
      this.currIndex = newIndex;
    }
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);