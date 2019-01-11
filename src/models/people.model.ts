export class Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;


  constructor(init?: Partial<Result>) {
    Object.assign(this, init);
  }
}

export class PeopleResponse {
  count: number;
  next: string;
  previous?: any;
  results: Result[];


  constructor(init?: Partial<PeopleResponse>) {
    Object.assign(this, init);
  }
}
