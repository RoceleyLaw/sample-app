export class Hero {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      //? means this is an optional
      public alterEgo?: string
    ) {};


}
