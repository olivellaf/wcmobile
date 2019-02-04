


export class imageModel {
  id: number;
  name: string;
  src: string;
  alt: string;

  constructor (id: number, name: string, src: string, alt?: string) {
    this.id = id;
    this.name = name;
    this.src = src;
  }

}
