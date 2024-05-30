/**
 * Andrew Kim
 * 30 May 2024
 */

document.addEventListener('DOMContentLoaded', function () {
    const wordData = [
        { word: 'McCandless', 
            frequency: '364', 
            c: 'The original surname of Christopher Johnson McCandless. To him, it represented a family he was born into - one with a flawed and abusive father. He chose to abandon this name at times while roaming the continent.',
            k: 'To Krakauer, the McCandless name was more than that of a wandering young man - it was the name of a well-to-do family in the Woodson community who was left by their son and shattered by his loss.', 
            img: 'assets/mccandless.jpg',
            caption: 'The McCandless family portrait.'
        },
        { word: 'Chris', 
            frequency: '239', 
            c: 'Although McCandless went by other names throughout his life, Chris was the one given to him by his father. He attempted to break away from this name, both as a label and as a tether to his family life.', 
            k: 'When describing McCandless\'s personal and school life, Krakauer always used "Chris" - the name that tied McCandless back to his family and society.',
            img: 'assets/chris.png',
            caption: 'Chris at W. T. Woodson High School for track practice'    
        },
        {word: 'Alex',
            frequency: '112',
            c: 'To McCandless, the name "Alex Supertramp" was an act of rebelliousness and self-reinvention. He sought to live a new life, roaming across the wild, and reworked his identity with the name "Alex".',
            k: 'To Krakauer, "Chris" was the man who was a talented youth with unmitigated potential, and "Alex" was the name of a persistent and passionate traveler who wandered around North America. Just as they were completely different identities to McCandless, "Chris" and "Alex" where two wholly different subjects for Krakauer.',
            img: 'assets/alex.jpg',
            caption: 'Alex in the Alaskan wilderness'
        },
        {word: 'Walt',
            frequency: '98',
            c: 'The father of Chris McCandless. An engineer, he developed critical communications technology for the U.S. government. Chris never had a close relationship with his father, describing him as "tyrannical" and hypcritical.',
            k: 'Krakauer, on the other hand, depicted Chris as a brilliant but imperfect man who loved his son and was shattered by his loss with the rest of his family.',
            img: 'assets/walt.jpg',
            caption: 'Walt McCandless visiting Fairbanks Bus 142.'
        },
        {word: 'Man',
            frequency: '81',
            c: 'McCandless sought to escape mankind when he left for the wild. However, people who knew him "really liked his company," and got along easily with whoever he met. McCandless\'s relationship with society goes to show how contradictory his thoughts were at times.',
            k: 'At times, Krakauer had trouble with other people as well. Krakauer\'s father was overbearing and demanding, utnil Krakauer realized that his father, too, was a human being with flaws.',
            img: 'assets/krakauer.webp',
            caption: 'Jon Krakauer mountain climbing'
        },
        {word: 'River',
            frequency: '77',
            c: 'The Teklanika River was the fateful barrier that separated McCandless from salvation and contact with society. Had the river not swelled after the spring thaw, McCandless would have been able to get help from the people he had left. Alex had also encountered another river in his previous travels - he attempted to paddle down the Colorado River in an aluminum canoe a year prior to his death.',
            k: 'Krakauer would cross the Teklanika River like McCandless, but on a steel wire installed across the river, a few miles down from McCandless\'s final resting place.',
            img: 'assets/teklanika.jpg',
            caption: 'The Teklanika River in Alaska'
        },
        {word: 'Billie',
            frequency: '74',
            c: 'Billie McCandless was as loving as a mother could be; she passed down her Gianinni guitar onto her son, and when McCandless died, it was in the sleeping bag Billie had sewn for him. Yet, McCandless sought to escape all of his family when he left for Alaska.',
            k: 'When Krakauer met Billie years after McCandless\'s death, he depicted her as shattered by the loss of her son; "I just don\'t understand why he had to take those kind of chances," she told Krakaur.',
            img: 'assets/billie.jpg',
            caption: 'Bille and Walt McCandless'
        },
        {word: 'Westerberg',
            frequency: '72',
            c: 'To McCandless, Wayne Westerberg was an employer who had provided him company and a roof. Westerberg, who had McCandless\'s social security number, also notified the Alaskan authorities of his identity. ',
            k: '',
            img: 'assets/westerberg.jpg',
            caption: 'Wayne Westerberg visits Bus 142.'
        },
        {word: 'Bus',
            frequency: '70',
            c: 'Fairbanks Bus 142 was a "Magic Bus" for McCandless, who found it stocked with supplies. Although McCandless initially sought to walk to the Bering Sea, he decided to establish a permanent residence at the bus. He would die there sixteen weeks later.',
            k: 'Krakauer would visit the bus with Walt and Billie and described the pain and longing of the late McCandless\'s parents. "He must have been very brave and very strong, not to do himself in," Billie said after visiting the bus.',
            img: 'bus.jpg',
            caption: 'Fairbanks Bus 142'
        },
        {word: 'North',
            frequency: '57',
            c: 'McCandless was obsessed with the north since his youth - he devoured the works of Jack London an sought to live life to the fullest in its cold, harsh environment. McCandless also had a family connection to the north - his father had installed critical satellite technology in an observatory in Fairbanks.',
            k: 'Drawn by the story of McCandless, Krakauer would go to the north and visit Bus 142.',
            img: 'assets/alaska.webp',
            caption: 'Mount Denali in Alaska'
        },
        {word: 'Wild', frequency: '57'},
        {word: 'Parents', frequency: '57'},
        {word: 'Franz', frequency: '57'},
        {word: 'Carine', frequency: '50'},
        {word: 'Family', frequency: '48'},
        {word: 'Fairbanks', frequency: '46'},
        {word: 'South', frequency: '45'},
        {word: 'Ruess', frequency: '45'},
        {word: 'Journal', frequency: '42'},
        {word: 'Death', frequency: '41'},
        {word: 'Car', frequency: '34'},
        {word: 'Desert', frequency: '34'},
        {word: 'Money', frequency: '33'},
        {word: 'wilderness', frequency: '28'},
        {word: 'bush', frequency: '28'},
        {word: 'water', frequency: '28'},
        {word: 'living', frequency: '28'},
        {word: 'walked', frequency: '26'},
        {word: 'stampede', frequency: '26'},
        {word: 'person', frequency: '26'},
        {word: 'house', frequency: '26'},
        {word: 'canyon', frequency: '24'},
        {word: 'backpack', frequency: '20'},
        {word: 'Colorado', frequency: '21'},
        {word: 'winter', frequency: '20'},
        {word: 'sky', frequency: '20'},
        {word: 'mountains', frequency: '20'},
        {word: 'Denali', frequency: '19'},
        {word: 'deep', frequency: '19'},
        {word: 'gear', frequency: '19'},
        {word: 'mile', frequency: '18'},
        {word: 'friends', frequency: '18'},
        {word: 'university', frequency: '18'},
        {word: 'Emory', frequency: '16'},
        {word: 'love', frequency: '16'},
        {word: 'bed', frequency: '16'},
        {word: 'potato', frequency: '16'},
        {word: 'January', frequency: '8'},
        {word: 'starvation', frequency: '8'},
        {word: 'writing', frequency: '8'},
        {word: 'lacked', frequency: '6'},
        {word: 'jobs', frequency: '6'},
        {word: 'center', frequency: '6'},
        {word: 'airplane', frequency: '6'},
        {word: 'resumed', frequency: '6'},
        {word: 'wheel', frequency: '6'},
        {word: 'major', frequency: '6'},
        {word: 'paid', frequency: '6'},
        {word: 'slightly', frequency: '6'},
        {word: 'careful', frequency: '6'},
        {word: 'senior', frequency: '6'},
    ];

    function getRandomColorInRange(colorRanges) {
        const chosenRange = colorRanges[Math.floor(Math.random() * colorRanges.length)];

        const range1 = chosenRange[0];
        const range2 = chosenRange[1];

        const r1 = parseInt(range1.substring(1, 3), 16);
        const g1 = parseInt(range1.substring(3, 5), 16);
        const b1 = parseInt(range1.substring(5, 7), 16);

        const r2 = parseInt(range2.substring(1, 3), 16);
        const g2 = parseInt(range2.substring(3, 5), 16);
        const b2 = parseInt(range2.substring(5, 7), 16);

        const r = Math.floor(Math.random() * (r2 - r1 + 1) + r1);
        const g = Math.floor(Math.random() * (g2 - g1 + 1) + g1);
        const b = Math.floor(Math.random() * (b2 - b1 + 1) + b1);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const colorRanges = [
        ['#90a955', '#132a13'],
        ['#98c1d9', '#001f54']
    ];

    const wordCloudContainer = document.getElementById('wordCloudContainer');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalBody = document.getElementById('modal-body');
    const span = document.getElementsByClassName('close')[0];

    shuffle(wordData);

    wordData.forEach(item => {
        const wordElement = document.createElement('span');
        wordElement.className = 'word';
        wordElement.style.fontSize = `${Math.log(item.frequency * 0.05) * 30}px`; // Adjust font size based on frequency
        wordElement.style.color = getRandomColorInRange(colorRanges); // Set random color
        // wordElement.style.top = `${Math.random() * 90}%`; // Random top position within the container
        // wordElement.style.left = `${Math.random() * 90}%`; // Random left position within the container
        wordElement.innerText = item.word;
        wordElement.onclick = () => {
            if (item.img) {
                modalBody.innerHTML = `<p class="frequency">Number of times mentioned: <span class="frequency-count">${item.frequency}</span></p>
                <p><i>${item.word}</i>: ${item.c}</p>
                <p><i>${item.word}</i>: ${item.k}</p>
                <img src="${item.img}" alt="${item.word}"><p class="caption">${item.caption}</p>`;
            } else  if (item.c && item.k) {
                modalBody.innerHTML = `<p class="frequency">Number of times mentioned: <span class="frequency-count">${item.frequency}</span></p>
                <p><i>${item.word}</i>: ${item.c}</p>
                <p><i>${item.word}</i>: ${item.k}</p>
                `;
            } else if (item.c) {
                modalBody.innerHTML = `<p class="frequency">Number of times mentioned: <span class="frequency-count">${item.frequency}</span></p>
                <p><i>${item.word}</i>: ${item.c}</p>
                <p><i>${item.word}</i>: ${item.k}</p>
                `;
            } else {
                modalBody.innerHTML = `<p class="frequency">Number of times mentioned: <span class="frequency-count">${item.frequency}</span></p>`
            }
            modal.style.display = 'block';
            modalContent.classList.add('fade-up'); // Add animation class
        };
        wordCloudContainer.appendChild(wordElement);
    });

    span.onclick = function () {
        modalContent.classList.remove('fade-up'); // Remove animation class
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modalContent.classList.remove('fade-up'); // Remove animation class
            modal.style.display = 'none';
        }
    };
});