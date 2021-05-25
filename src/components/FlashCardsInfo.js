import halfStep from '../img/half-step.png';
import wholeStep from '../img/whole-step.png';
import minThird from '../img/minor-third.png';
import majThird from '../img/major-third.png';
import perfectFourth from '../img/perfect-fourth.png';
import tritone from '../img/tritone.png';
import perfectFifth from '../img/perfect-fifth.png';
import augFifth from '../img/augmented-fifth.png';
import majSixth from '../img/major-sixth.png';
import minSeventh from '../img/minor-seventh.png';
import majSeventh from '../img/major-seventh.png';
import octave from '../img/octave.jpeg';
import cmaj from '../img/c-major.png';
import fmaj from '../img/f-major.png';
import gmaj from '../img/g-major.png';
import dmaj from '../img/d-major.png';
import emin from '../img/e-minor.png';
import dmin from '../img/d-minor.png';
import gmin from '../img/g-minor.png';
import cmin from '../img/c-minor.png';
import bdim from '../img/b-diminished.png';
import gdim from '../img/g-diminished.png';
import caug from '../img/c-augmented.png';
import faug from '../img/f-augmented.png';
import cmaj7 from '../img/c-major-7.png';
import fmaj7 from '../img/f-major-7.png';
import d7 from '../img/d7.png';
import g7 from '../img/g7.png';
import emin7 from '../img/e-minor-7.png';
import dmin7 from '../img/d-minor-7.png';
import gmin7 from '../img/g-minor-7.png';
import cmin7 from '../img/c-minor-7.png';
import bdim7 from '../img/b-diminished-7.png';
import gdim7 from '../img/g-diminished-7.png';
import caug7 from '../img/c-augmented-7.png';
import faug7 from '../img/f-augmented-7.png';
import useSound from 'use-sound';
import intervals from '../audios/intervals.mp3';
import triadChords from '../audios/triadChords.mp3';
import seventhChords from '../audios/seventhChords.mp3';



const FlashCardMock = () => {
  const [play] = useSound(intervals, {
    sprite: {
      half: [0, 3500],
      whole: [5320, 3500],
      min3rd: [10650, 3500],
      maj3rd: [15900, 3500],
      perf4th: [21320, 3500],
      tri: [26650, 3500],
      perf5th: [31900, 3500],
      aug5th: [37320, 3500],
      maj6th: [42650, 3500],
      min7th: [47900, 3500],
      maj7th: [53320, 3500],
      octave: [58650, 3500]
    }
  });
  const [playChord] = useSound(triadChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      major3: [9580, 4000],
      major4: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });

  const [play7thChord] = useSound(seventhChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      dominant1: [9580, 4000],
      dominant2: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });
  return [
    {
      onClick: () => play({ id: 'half' }),
      image: halfStep,
      imageAlt: 'half step',
      name: 'Half Step'
    },
    {
      onClick: () => play({ id: 'whole' }),
      image: wholeStep,
      imageAlt: 'whole step',
      name: 'Whole Step'
    },
    {
      onClick: () => play({ id: 'min3rd' }),
      image: minThird,
      imageAlt: 'minor 3rd',
      name: 'Minor 3rd'
    },
    {
      onClick: () => play({ id: 'maj3rd' }),
      image: majThird,
      imageAlt: 'major 3rd',
      name: 'Major 3rd'
    },
    {
      onClick: () => play({ id: 'perf4th' }),
      image: perfectFourth,
      imageAlt: 'perfect 4th',
      name: 'Perfect 4th'
    },
    {
      onClick: () => play({ id: 'tri' }),
      image: tritone,
      imageAlt: 'tritone',
      name: 'Tritone'
    },
    {
      onClick: () => play({ id: 'perf5th' }),
      image: perfectFifth,
      imageAlt: 'perfect 5th',
      name: 'Perfect 5th'
    },
    {
      onClick: () => play({ id: 'aug5th' }),
      image: augFifth,
      imageAlt: 'augmented 5th',
      name: 'Aumented 5th'
    },
    {
      onClick: () => play({ id: 'maj6th' }),
      image: majSixth,
      imageAlt: 'major 6th',
      name: 'Major 6th'
    },
    {
      onClick: () => play({ id: 'min7th' }),
      image: minSeventh,
      imageAlt: 'minor 7th',
      name: 'Minor 7th'
    },
    {
      onClick: () => play({ id: 'maj7th' }),
      image: majSeventh,
      imageAlt: 'major 7th',
      name: 'Major 7th'
    },
    {
      onClick: () => play({ id: 'octave' }),
      image: octave,
      imageAlt: 'octave',
      name: 'Perfect Octave'
    },
    {
      onClick: () => playChord({ id: 'major1' }),
      image: cmaj,
      imageAlt: 'C major',
      name: 'C Major'
    },
    {
      onClick: () => playChord({ id: 'major2' }),
      image: fmaj,
      imageAlt: 'F major',
      name: 'F Major'
    },
    {
      onClick: () => playChord({ id: 'major3' }),
      image: gmaj,
      imageAlt: 'G major',
      name: 'G Major'
    },
    {
      onClick: () => playChord({ id: 'major4' }),
      image: dmaj,
      imageAlt: 'D major',
      name: 'D Major'
    },
    {
      onClick: () => playChord({ id: 'minor1' }),
      image: emin,
      imageAlt: 'E minor',
      name: 'E Minor'
    },
    {
      onClick: () => playChord({ id: 'minor2' }),
      image: dmin,
      imageAlt: 'D minor',
      name: 'D Minor'
    },
    {
      onClick: () => playChord({ id: 'minor3' }),
      image: gmin,
      imageAlt: 'G minor',
      name: 'G Minor'
    },
    {
      onClick: () => playChord({ id: 'minor4' }),
      image: cmin,
      imageAlt: 'C minor',
      name: 'C Minor'
    },
    {
      onClick: () => playChord({ id: 'diminished1' }),
      image: bdim,
      imageAlt: 'B diminished',
      name: 'Bº'
    },
    {
      onClick: () => playChord({ id: 'diminished2' }),
      image: gdim,
      imageAlt: 'G diminished',
      name: 'Gº'
    },
    {
      onClick: () => playChord({ id: 'augmented1' }),
      image: caug,
      imageAlt: 'C augmented',
      name: 'C+'
    },
    {
      onClick: () => playChord({ id: 'augmented2' }),
      image: faug,
      imageAlt: 'F augmented',
      name: 'F+'
    },
    {
      onClick: () => play7thChord({ id: 'major1' }),
      image: cmaj7,
      imageAlt: 'C Major 7',
      name: 'Cmaj7'
    },
    {
      onClick: () => play7thChord({ id: 'major2' }),
      image: fmaj7,
      imageAlt: 'F major 7',
      name: 'Fmaj7'
    },
    {
      onClick: () => play7thChord({ id: 'dominant1' }),
      image: g7,
      imageAlt: 'G7',
      name: 'G7'
    },
    {
      onClick: () => play7thChord({ id: 'dominant2' }),
      image: d7,
      imageAlt: 'D7',
      name: 'D7'
    },
    {
      onClick: () => play7thChord({ id: 'minor1' }),
      image: emin7,
      imageAlt: 'E minor 7',
      name: 'Emin7'
    },
    {
      onClick: () => play7thChord({ id: 'minor2' }),
      image: dmin7,
      imageAlt: 'D Minor 7',
      name: 'Dmin7'
    },
    {
      onClick: () => play7thChord({ id: 'minor3' }),
      image: gmin7,
      imageAlt: 'G minor 7',
      name: 'Gmin7'
    },
    {
      onClick: () => play7thChord({ id: 'minor4' }),
      image: cmin7,
      imageAlt: 'C Minor 7',
      name: 'Cmin7'
    },
    {
      onClick: () => play7thChord({ id: 'diminished1' }),
      image: bdim7,
      imageAlt: 'B Diminished 7th',
      name: 'Bº7'
    },
    {
      onClick: () => play7thChord({ id: 'diminished2' }),
      image: gdim7,
      imageAlt: 'G Diminished 7th',
      name: 'Gº7'
    },
    {
      onClick: () => play7thChord({ id: 'augmented1' }),
      image: caug7,
      imageAlt: 'C Augmented 7th',
      name: 'C+7'
    },
    {
      onClick: () => play7thChord({ id: 'augmented2' }),
      image: faug7,
      imageAlt: 'F Augmented 7th',
      name: 'F+7'
    }
  ]
}

export default FlashCardMock;