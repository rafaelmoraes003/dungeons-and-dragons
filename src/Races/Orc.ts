import RacesMaxPoints from './enumRacesMaxPoints';
import Race from './Race';

export default class Orc extends Race {
  private static _orcCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacesMaxPoints.Orc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Orc._orcCreatedInstances += 1;
    return Orc._orcCreatedInstances;
  }
}