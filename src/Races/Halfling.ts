import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Halfling extends Race {
  private static _halflingCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string) {
    super(name);
    this._maxLifePoints = RacesMaxPoints.Halfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Halfling._halflingCreatedInstances += 1;
    return Halfling._halflingCreatedInstances;
  }
}