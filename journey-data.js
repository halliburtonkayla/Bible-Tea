const BIBLE_BOOKS=[
  ['Genesis',50],['Exodus',40],['Leviticus',27],['Numbers',36],['Deuteronomy',34],['Joshua',24],['Judges',21],['Ruth',4],
  ['1 Samuel',31],['2 Samuel',24],['1 Kings',22],['2 Kings',25],['1 Chronicles',29],['2 Chronicles',36],['Ezra',10],['Nehemiah',13],['Esther',10],
  ['Job',42],['Psalms',150],['Proverbs',31],['Ecclesiastes',12],['Song of Songs',8],['Isaiah',66],['Jeremiah',52],['Lamentations',5],['Ezekiel',48],['Daniel',12],
  ['Hosea',14],['Joel',3],['Amos',9],['Obadiah',1],['Jonah',4],['Micah',7],['Nahum',3],['Habakkuk',3],['Zephaniah',3],['Haggai',2],['Zechariah',14],['Malachi',4],
  ['Matthew',28],['Mark',16],['Luke',24],['John',21],['Acts',28],['Romans',16],['1 Corinthians',16],['2 Corinthians',13],['Galatians',6],['Ephesians',6],['Philippians',4],['Colossians',4],
  ['1 Thessalonians',5],['2 Thessalonians',3],['1 Timothy',6],['2 Timothy',4],['Titus',3],['Philemon',1],['Hebrews',13],['James',5],['1 Peter',5],['2 Peter',3],['1 John',5],['2 John',1],['3 John',1],['Jude',1],['Revelation',22]
];
const CHAPTER_TEA={
  'Genesis 1':{
    title:'God said, “Let there be light”',
    paragraphs:[
      'Okay, friend, we are starting at the actual beginning. There is no family drama yet, no kings, no wilderness. Genesis opens with God creating the heavens and the earth. The earth is unformed and dark, and God speaks: “Let there be light.” Light shows up. He separates light from darkness, and that is day one. Then he makes the expanse of sky and separates the waters.',
      'Next comes dry land and seas, and plants begin to grow. God places the sun, moon, and stars in the sky to mark days and seasons. Then the waters fill with living creatures and the sky fills with birds. Land animals come next. And after all that, God makes humankind in his image, male and female, and gives them the responsibility to care for the living world.',
      'The chapter keeps repeating that God sees what he has made and calls it good. At the end he looks at all of it and calls it very good. We have not even reached the garden situation yet! Today I just want to sit with this: before anybody made a mess, the story began with life, purpose, and goodness.'
    ]
  },
  'Genesis 2':{
    title:'A garden, a job, and a partner',
    paragraphs:[
      'Genesis 2 slows us down. The first creation chapter gave us the big picture; now we get a closer look at the people and the garden. God rests on the seventh day and blesses it. Then he forms the man from the dust of the ground and breathes life into him. God plants a garden in Eden and puts the man there to work it and take care of it. So yes, there was a job even before the trouble started!',
      'There are trees with food, including the tree of life and the tree of the knowledge of good and evil. God says the man may eat from the other trees but must not eat from that one. Then God says it is not good for the man to be alone. The animals are brought before him and named, but none is a suitable partner for him.',
      'God causes the man to sleep, makes a woman, and brings her to him. Adam recognizes that she is bone of his bones and flesh of his flesh. The chapter ends with them together and unashamed. It is peaceful right now. Keep that one instruction about the tree in your mind, though, because tomorrow somebody is going to start asking questions.'
    ]
  },
  'Genesis 3':{
    title:'The serpent started asking questions',
    paragraphs:[
      'Girl, here we go. The serpent comes to the woman and asks whether God really said they could not eat from any tree. That is already twisting the instruction. She explains that they can eat from the trees, except the one in the middle of the garden. The serpent tells her she will not die and says the fruit will make her like God, knowing good and evil.',
      'She sees that it looks good, takes it, and eats. She gives some to Adam, who is with her, and he eats too. Their eyes open, but instead of feeling powerful, they realize they are naked and sew fig leaves together. When they hear God, they hide. God calls to the man and asks what happened. Adam points to the woman, and the woman points to the serpent. Nobody is volunteering to take the whole responsibility.',
      'God speaks consequences over the serpent, the woman, and the man. Life will be painful and the ground hard to work. God clothes Adam and Eve, and they leave the garden so they cannot also take from the tree of life. That is a painful turn from chapter two. But I keep noticing that when they hid, God called out to them. We will see their family story continue in the next chapter.'
    ]
  },
  'Genesis 4':{
    title:'Cain and Abel: this got serious',
    paragraphs:[
      'Adam and Eve have sons named Cain and Abel. Cain works the soil, and Abel keeps flocks. Both bring offerings to God. God looks with favor on Abel and his offering, but not on Cain and his. The chapter does not give us every reason, and Cain is angry. God warns him that sin is crouching at the door and tells him to rule over it. That warning is right there before the choice.',
      'Cain takes Abel out into the field and kills him. When God asks where Abel is, Cain says, “Am I my brother’s keeper?” Sir, that is your brother! God tells him Abel’s blood cries out from the ground. Cain is cursed from the soil and becomes a wanderer. He fears that someone will kill him, and God puts a mark on him to protect him from being killed. Judgment and protection appear in the same hard story.',
      'The chapter follows Cain’s descendants for a while, including Lamech, whose words show violence continuing. Then Adam and Eve have another son, Seth, and the chapter says people begin to call on the name of the Lord. We are only four chapters in, and the Bible is already showing how jealousy can turn deadly. I would pause here and ask: what do I do with anger before it grows into something else?'
    ]
  },
  'Genesis 5':{
    title:'Names, years, and one man who walked with God',
    paragraphs:[
      'Okay, this chapter is a family line, and I know lists of names can make your eyes glaze over. But stay with me. Genesis 5 traces the generations from Adam through Seth down to Noah. It tells us who had children and how long each person lived. Again and again, after all those years, the line ends with “and he died.” That repetition reminds us that the garden’s consequences did not disappear.',
      'Then Enoch’s part sounds different. The chapter says Enoch walked faithfully with God, and then he was no more because God took him. After that, the family line keeps going. Methuselah lives a very long life, Lamech has a son named Noah, and he hopes Noah will bring relief from the hard work of the ground.',
      'This is the bridge between Adam’s family and the flood story. It may look like just a list, but it says time is passing and the generations are still moving. And that little line about Enoch? It makes me stop. In the middle of all those years and names, somebody is remembered for walking with God.'
    ]
  },
  'Genesis 6':{
    title:'The world got ugly, and Noah got instructions',
    paragraphs:[
      'By Genesis 6, the world is not looking like the “very good” of chapter one. The chapter describes widespread wickedness and violence. God is grieved by what people are doing. This is not just about somebody making a small mistake; the whole earth has become corrupt. But Noah is introduced as a righteous man who walks with God.',
      'God tells Noah that a flood is coming and gives him instructions for an ark. Not just “build a boat,” either. He gives dimensions, rooms, a roof, a door, and a way to cover it so it will float. He tells Noah to bring his family, animals, and food inside. God also says he will establish a covenant with Noah. Imagine receiving that assignment and knowing you have to start building before you can see the rain.',
      'The chapter closes by saying Noah did everything God commanded him. That is where we leave him today: building in a world full of violence, with a warning and a promise. Tomorrow we see what happens when the rain finally comes. And friend, this is a heavy story about judgment and survival, not just a cute little animal parade.'
    ]
  },
  'Genesis 7':{
    title:'The rain actually came',
    paragraphs:[
      'Now God tells Noah to go into the ark with his household. The animals come as instructed, and Noah’s family goes in. The chapter even gives Noah’s age: he is six hundred when the floodwaters come. After seven days, the rain starts. Water bursts from below and falls from above, and it rains for forty days and forty nights. Then the water keeps rising.',
      'The ark is lifted up, and the flood covers the land. Every high mountain under the heavens is covered, and living things outside the ark die. I want to be honest about how severe this chapter is. It is a story of judgment and terrible loss, while Noah, his family, and the animals with them survive inside. The text says the Lord shuts the door after them.',
      'The waters remain over the earth for one hundred and fifty days. So the chapter does not end with everybody stepping out into sunshine. It ends with the ark afloat and a long wait ahead. If I were inside that boat, I would be wondering what the world would look like when the water finally went down. That is where we pick up next.'
    ]
  },
  'Genesis 8':{
    title:'The water started going down',
    paragraphs:[
      'Genesis 8 begins with a line I love: God remembered Noah and the animals in the ark. A wind blows over the earth, the rain stops, and the water begins to go down. The ark comes to rest on the mountains of Ararat. But resting on a mountain is not the same thing as being ready to walk outside. Noah waits and watches.',
      'He sends out a raven, then a dove. At first the dove comes back because it has nowhere to land. Later it returns with a fresh olive leaf. On another trip, the dove does not come back. Noah removes the covering and sees that the ground is drying, but he still waits until God tells him to come out. Then his family and the animals leave the ark.',
      'The first thing Noah does is build an altar and offer worship to God. God says he will not again curse the ground in this same way because of humankind, and the rhythms of planting and harvest, cold and heat, summer and winter, day and night will continue. The dramatic rain has stopped, but the chapter spent a lot of time on waiting. Sometimes the water starts going down before it is actually time to step out.'
    ]
  },
  'Genesis 9':{
    title:'The rainbow promise, then family trouble',
    paragraphs:[
      'After the flood, God blesses Noah and his sons and tells them to be fruitful and fill the earth. The relationship between people and animals changes, and God speaks seriously about the value of human life. Then he makes a covenant with Noah, his descendants, and every living creature: never again will a flood destroy all life in this way. The rainbow is the sign of that covenant. When you see it, remember that promise reaches beyond Noah’s own family.',
      'But the chapter does not end with everybody living perfectly. Noah plants a vineyard, drinks wine, and becomes drunk inside his tent. His son Ham sees his father exposed and tells his brothers. Shem and Japheth walk backward with a garment to cover Noah without looking. When Noah wakes, he speaks a curse concerning Canaan and blessings concerning Shem and Japheth. It is an uncomfortable family scene, and the text leaves us with questions.',
      'That is the Bible being honest about people. Noah obeyed God and survived the flood, but his story did not become spotless afterward. A fresh start did not mean human families stopped being complicated. I can hold onto the rainbow promise and still take this awkward ending seriously.'
    ]
  },
  'Genesis 10':{
    title:'Where did all these nations come from?',
    paragraphs:[
      'Okay, another list of names—but this one gives us the family lines of Noah’s sons, Shem, Ham, and Japheth, after the flood. Their descendants spread out by clans, languages, lands, and nations. You will see names that later matter in the Bible’s story, including Canaan. Nimrod is singled out as a mighty figure associated with early kingdoms such as Babel.',
      'The chapter is often called the table of nations. It is showing how the story widens from one family in an ark to many peoples across the earth. It does not give a long scene for every person, so this is a good chapter to read slowly and notice the patterns rather than trying to memorize every name on the first pass.',
      'The next chapter will zoom in on Babel and language. For today, I want to remember the bigger picture: humanity is spreading out again, and the Bible is setting the stage for nations we will hear about later. So yes, the names have a purpose. We are watching the world fill up after the flood.'
    ]
  }
};
