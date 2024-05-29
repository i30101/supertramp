/**
 * Andrew Kim
 * 29 May 2024
 * Supertramp code
 */

const journalEntries = [
    {
        day: 0,
        health: {
            physical: 100,
            mood: 100, 
            spiritual: 100
        },
        dialogue: "<span>Welcome to <em>Supertramp</em>, an interactive retelling of Chris McCandless's journey into the Alaskan wilderness based on John Krakauer's novel <em>Into the Wild</em>. In this experience, you will be able to undergo the physical and emotional development of Christopher Johnson McCandless as he spent over sixteen weeks in the wild.<br /><br /> Krakauer's retelling of McCandless's story was fragmented, and his explanation for McCandless's daily actions were spread throughout the book. However, with this interactive journey, you will be able to understand all of McCandless and his actions for each step of his journey.<br /><br /> On the left, you will see how long McCandless has spent in the wild and his current health. On the right, you will see his journal entries, providing you with Chris's unaltered words. You can start over or view McCandless's full journal anytime. </span>",
        journalText: "",
        journalCommentary: ""
    },
    {
        day: 1,
        health: {
            physical: 100,
            mood: 100, 
            spiritual: 100
        },
        dialogue: "Welcome to Supertramp",
        journalText: "<span>Exit Fairbanks <br />Sitting Galliean<br />Rabbit Day</span>",
        journalCommentary: "<img src='./assets/day-1.png'></img>"
    }
]

let currentEntryIndex = 0;

function nextEntry() {
    if (currentEntryIndex < journalEntries.length - 1) {
        currentEntryIndex++;
        updateJournalUI();
        
    }
}

function previousEntry() {
    if (currentEntryIndex > 0) {
        currentEntryIndex--;
        updateJournalUI();
    }
}

document.getElementById('next').addEventListener('click', nextEntry);
document.getElementById('previous').addEventListener('click', previousEntry);


function updateJournalUI() {
    const entry = journalEntries[currentEntryIndex];
    document.getElementById('day').textContent = "Day " + entry.day + " / 113";
    document.getElementById('physical').value = entry.health.physical;
    document.getElementById('mood').value = entry.health.mood;
    document.getElementById('spiritual').value = entry.health.spiritual;
    document.getElementById('dialogue-container').innerHTML = entry.dialogue;
    document.getElementById('journal-text').value = entry.journalText;
    document.getElementById('journal-commentary').value = entry.journalCommentary;
    AOS.refresh();
}

document.addEventListener('DOMContentLoaded', updateJournalUI());
AOS.init();
