import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Dwarf extends Race {
  private static _dwarfCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string) {
    super(name);
    this._maxLifePoints = RacesMaxPoints.Dwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Dwarf._dwarfCreatedInstances += 1;
    return Dwarf._dwarfCreatedInstances;
  }
}