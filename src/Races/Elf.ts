import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Elf extends Race {
  private static _elfCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacesMaxPoints.Elf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Elf._elfCreatedInstances += 1;
    return Elf._elfCreatedInstances;
  }
}