const quiz1 =
{
    "quizID": "Museum 1",
    "quizMetaData":
    {
        "title": "Lisser Art Museum",
        "imageURI": "https://www.lamlisse.nl/wp-content/uploads/2018/03/LAM-Lisse-logo-white.svg"

    },
    "quizContent":		
		[
			{
				"question": "Hou jij van de zee?",
				"answers": [{
						"answer": "Ja", 	//10 punten
						"feedback": true
					},
					{
						"answer": "Nee",	//0 punten
						"feedback": false
					},
					{
						"answer": "Sommige",	//5 punten
						"feedback": false
					},

				]
			},
			{
				"question": "Ga jij vaker naar musea?",
				"answers": [{
						"answer": "1x per jaar", //1punt
						"feedback": true
					},
					{
						"answer": "Meerdere keren per jaar", // 15 punten
						"feedback": false
					},
					{
						"answer": "Eens in de zoveel tijd", //5 punten
						"feedback": false
					},
					{
						"answer": "Soms", // 500 punten
						"feedback": false
					}
				]
			},
			{
				"question": "Met welk vervoer reis jij het liefst?: ?",
				"answers": [{
						"answer": "Auto", //15 punten
						"feedback": true
					},
					{
						"answer": "Boot", //10 punten
						"feedback": false
					},
					{
						"answer": "Vliegtuig", //2 punten
						"feedback": false
					},
					{
						"answer": "Fiets", //1 punten
						"feedback": false
					}
				]
			}
		]
	}


// rembrandt 30p
// grapes 25p
// boot 20p

// alles onder de 20
//alles boven de 30