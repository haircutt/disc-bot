
const Insults = Object.freeze({
  GENERIC: "You're as useless as the 'ueue' in 'queue'!",
  INTELLECT: "If brains were dynamite, you wouldn't have enough to blow your nose.",
  APPEARANCE: "You look like something I drew with my left hand.",
  HYGIENE: "You could make onions cry.",
  PARENTAL: "Your family tree must be a cactus because everyone on it is a prick.",
  SKILLS: "You have the charm and personality of a soggy paper towel.",
  AGE: "You're not old, you're just... obsolete.",
  FASHION: "Did you get dressed in the dark... or was that the style in 1973?",
  SOCIAL: "I'd agree with you but then we'd both be wrong.",
  WORK_ETHIC: "Your best work is taking breaks.",
  TECH: "You probably think 'Java' is just coffee.",
  FOOD: "Your cooking is why I believe in the right to remain silent.",
  DRIVING: "You drive like my grandma... and she's dead.",
  PETS: "Even your dog pretends you don't exist.",
  MUSIC: "Your taste in music sounds like a broken dial-up modem.",
  FITNESS: "The only exercise you get is jumping to conclusions.",
  EXTRA1: "You actually sick u silly bitch"
});

module.exports = { 
  Insults,
  getAllInsults: () => Object.values(Insults) 
};

