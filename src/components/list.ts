import { Component } from "./component";

export class pokemonList extend Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render()
  }

  createTemplate() {
    return `
    <ul class="pokemon-list">ei
    `
  }
}

