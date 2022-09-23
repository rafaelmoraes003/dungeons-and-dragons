import getRandomInt from '../utils';

export default abstract class Race {
  protected _name: string;
  protected _dexterity: number = getRandomInt(1, 10);

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}