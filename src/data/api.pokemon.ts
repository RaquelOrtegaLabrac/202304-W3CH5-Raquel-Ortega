import { Pokemon } from '../model/pokemon';

export class ApiPokemon {
  pokeUrl: string;
  repoUrl: string;
  constructor() {
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.repoUrl = 'http://localhost:3000/pokemon';
  }

  async getAll() {
    const response = await fetch(this.pokeUrl);
    return response.json();
  }

  async get(id: Pokemon['id']) {
    const response = await fetch(this.pokeUrl + id);
    return response.json();
  }

  async create(pokemon: Partial<Pokemon>) {
    const response = await fetch(this.repoUrl, {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async update(id: Pokemon['id'], pokemon: Partial<Pokemon>) {
    const response = await fetch(this.repoUrl + id, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async delete(id: Pokemon['id']) {
    const response = await fetch(this.repoUrl + id, {
      method: 'DELETE',
    });
    return response.ok;
  }
}
