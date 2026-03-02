/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class SlideIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "slide-indicator";
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
      .tray {
        display: flex;
        gap: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--play-list-project-label-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin-top: var(--ddd-spacing-8);
        margin-bottom: var(--ddd-spacing-2);
      }
      .circle {
        width: 12px;
        height: 12px;
        background-color: var(--ddd-theme-default-skyBlue); 
        border-radius: 50%;
    }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="tray">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
      </div>

    `;
  }
}

globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);