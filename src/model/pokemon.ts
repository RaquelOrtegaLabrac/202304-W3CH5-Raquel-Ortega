export type PokeStructure = {
  id: string;
  name: string;
  image: string;
  catchIt: boolean;
};

export class Pokemon implements PokeStructure {
  catchIt: boolean;
  constructor(public id: string, public name: string, public image: string) {
    this.catchIt = false;
  }
}
