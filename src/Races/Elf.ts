import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Elf extends Race {
  private static _elfCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string) {
    super(name);
    this._maxLifePoints = RacesMaxPoints.Elf;
    Elf._elfCreatedInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._elfCreatedInstances;
  }
}