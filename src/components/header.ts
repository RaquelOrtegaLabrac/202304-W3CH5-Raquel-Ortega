import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>

      <img class="pokemon-logo" src="/pokemon-logo.svg" alt="Pokemon logo">
    </header>
    `;
  }
}
