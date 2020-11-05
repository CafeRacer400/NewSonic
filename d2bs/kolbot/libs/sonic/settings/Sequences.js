/**
 *    @filename   Sequences.js
 *    @desc       config the sequences to be ran
 */

const Sequences = (function() {
    return {
        // advance to next difficulty after conditions have been met
        nextDifficulty: [
            // classic
            [
                // normal
                [
                    "me.charlvl >= 30",
                    "Packet.checkQuest(26, 0)"
                ],
                // nightmare
                [
                    "me.charlvl >= 67",
                    "me.fireResist >= 70",
                    "me.lightningResist >= 70",
                    "Packet.checkQuest(26, 0)"
                ]
            ],
            // xpac
            [
                // normal
                [
                    "me.charlvl >= 45",
                    "Packet.checkQuest(40, 0)"
                ],
                // nightmare
                [
                    "me.charlvl >= 75",
                    "me.fireResist >= 75",
                    "me.lightningResist >= 50",
                    "Packet.checkQuest(40, 0)"
                ]
            ]
        ],
        quest: [
            [ ////////////////// classic
                [	 // normal difficulty
                    "den", "cave", "tree", "cain", "trist", "countess", "andariel",
                    "radament", "cube", "shaft", "amulet", "summoner", "duriel", "tomb",
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual", "diablo"
                ],
                [	// nightmare difficulty
                    "den", "tree", "cain", "trist", "countess", "andariel",
                    "radament", "shaft", "amulet", "summoner", "duriel",
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual", "diablo"
                ],
                [	// hell difficulty
                    "andariel",
                    "radament", "shaft", "amulet", "summoner", "duriel",
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual"
                ]
            ],
            [ ////////////////// xpac
                [	 // normal difficulty
                    "den", "raven", "tree", "cain", "trist", "countess", "andariel",		//Hint: removed cave after raven
                    "radament", "cube", "shaft", "amulet", "summoner", "tomb", "duriel",	//Hint: shaft befor amulet (bug in script?)
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual", "diablo",
                    "shenk", "rescue", "ancients", "baal"							//Hint: removed "anya" after rescue (hardcore & buggy)
                ],
                [	// nightmare difficulty
                    "den", "countess", "andariel",
                    "radament", "shaft", "amulet", "summoner", "duriel",			//Hint: removed cube
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual", "diablo",
                    "shenk", "ancients", "baal"										//Hint: removed "anya" after shenk (hardcore & buggy)
                ],
                [	// hell difficulty
                    "andariel",
                    "radament", "shaft", "amulet", "summoner", "duriel",			//Hint: removed cube
                    "lamessen", "eye", "brain", "heart", "travincal", "mephisto",
                    "izual"
                ]
            ]
        ],
        magicfind: [
            [ ////////////////// classic
                [	// normal difficulty - farm cs to level 26 so we can move on
                    "mephisto", "diablo"
                ],
                [	// nightmare difficulty
                    "andariel", "summoner", "duriel", "mephisto", "izual", "diablo"
                ],
                [	// hell difficulty
                    "duriel", "mephisto", "summoner", "andariel", "izual", "vizier"
                ]
            ],
            [ ////////////////// xpac
                [	// normal difficulty
                    "countess", "shenk", "mephisto", "pindle", "baal"											//Hint: added countess for runes
                ],
                [	// nightmare difficulty
                    "countess", "andariel", "mephisto", "shenk", "pindle", "baal"					//Hint: added countess for runes
                ],
                [	// hell difficulty
                    "chests", "mausoleum", "tunnels", "duriel", "mephisto", "andariel"				//Hint: changed order
	                ]
            ]
        ]
    }
}());
