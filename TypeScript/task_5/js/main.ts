interface MajorCredits {
  credits: number;
  majorCredits: 'major';
}

interface MinorCredits {
  credits: number;
  minorCredits: 'minor';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    majorCredits: 'major',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    minorCredits: 'minor',
  };
}
