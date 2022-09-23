import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Dwarf extends Race {
  private static _dwarfCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string) {
    super(name);
    this._maxLifePoints = RacesMaxPoints.Dwarf;
    Dwarf._dwarfCreatedInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfCreatedInstances;
  }
}