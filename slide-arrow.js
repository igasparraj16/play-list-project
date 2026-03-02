/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `slide-arrow`
 * 
 * @demo index.html
 * @element slide-arrow
 */
export class SlideArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "slide-arrow";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
      color: "var(--ddd-theme-default-skyBlue)"
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .button {
        width: 36px;
        height: 36px;
        background-color: var(--ddd-theme-default-slateMaxLight); 
        border-radius: 50%;
        border-color: var(--ddd-theme-default-skyBlue);
        border-width: 2px;
        border-style: solid;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="tray">
            <div class="button"></div>
        </div>
      </div>

    `;
  }
}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);