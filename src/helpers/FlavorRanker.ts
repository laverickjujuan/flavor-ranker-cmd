interface FlavorVotes {
  [flavor: string]: number;
}

class FlavorRanker {
  private flavors: FlavorVotes;
  private rankPoints: number[];

  constructor() {
    this.flavors = {};
    this.rankPoints = [5, 3, 2, 1, 0];
  }

  processVote(flavor: string, rank: number): void {
    if (!this.flavors[flavor]) {
      this.flavors[flavor] = 0;
    }
    this.flavors[flavor] += this.rankPoints[rank - 1];
  }

  getSortedFlavors(): string[] {
    return Object.entries(this.flavors)
      .sort(([flavorA, pointsA], [flavorB, pointsB]) => {
        if (pointsA !== pointsB) return pointsB - pointsA;
        return flavorA.length - flavorB.length;
      })
      .map(([flavor, points]) => {
        const pointsStr = points === 1 ? "pt" : "pts";
        return `${flavor}, ${points} ${pointsStr}`;
      });
  }
}

export default FlavorRanker;
