import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  public player: Fighter;
  public env: (Fighter | SimpleFighter | Monster)[];

  constructor(player: Fighter, env: (Fighter | SimpleFighter | Monster)[]) {
    if (env.length < 1) throw new Error('At least one monster is expected.');
    super(player);
    this.player = player;
    this.env = env;
  }

  public fight(): number {
    const { player, env } = this;

    env.every((creature) => {
      while (player.lifePoints > 0 && creature.lifePoints > 0) {
        player.attack(creature);
        creature.attack(player);
      }
      return player.lifePoints >= 0;
    });

    return super.fight();
  }
}