/**
 * Copyright 2026 igasparraj16
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./slide-indicator.js";
import "./slide-arrow.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-slide";

  }

  constructor() {
    super();
    this.title ="ooOOOOosfhfiwuh";
    this["top-heading"] = "default top heading";
    this["second-heading"] = "default second heading";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      "top-heading": { type: String }, 
      "second-heading": { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        
        width: 850px;
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
      }
      h3 span {
        font-size: var(--play-list-project-label-font-size, var(--ddd-font-size-s));
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
        width: 600px;
      }
      .line {
        border: none;
        height: 3px;
        background-color: var(--ddd-theme-default-skyBlue);
        width: 150px;
        margin-left: 0;
        margin-right: auto;
      }
      play-list-slide:hover {
        box-shadow: var(--ddd-boxShadow-sm);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
      
      <div class="single-slide">
        <h4 class="top-heading">${this["top-heading"]}</h4>
        <h3 class="second-heading">${this["second-heading"]}</h3>
        <hr class="line">
        <h5 class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <slide-indicator></slide-indicator>
        <slide-arrow></slide-arrow>
      </div>

    `;
  }





}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);