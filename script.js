// Hard-coded data for the characters
const originalCharacters = [
    { name: 'Ape Commander', category: 'Tank', image: 'ape_commander.jpg' },
    { name: 'Ascetic Monk', category: 'Tank', image: 'ascetic_monk.jpg' },
    { name: 'Bioborotic Soldier', category: 'Tank', image: 'bioborotic_soldier.jpg' },
    { name: 'Black Sapphire', category: 'Tank', image: 'black_sapphire.jpg' },
    { name: 'Blessed Kid', category: 'Tank', image: 'blessed_kid.jpg' },
    { name: 'Combat Queen', category: 'Tank', image: 'combat_queen.jpg' },
    { name: 'Guardian Angel', category: 'Tank', image: 'guardian_angel.jpg' },
    { name: 'Iron Lady', category: 'Tank', image: 'iron_lady.jpg' },
    { name: 'Lone Werewolf', category: 'Tank', image: 'lone_werewolf.jpg' },
    { name: 'Nano Swamp', category: 'Tank', image: 'nano_swamp.jpg' },
    { name: 'Ruthless Warden', category: 'Tank', image: 'ruthless_warden.jpg' },
    { name: 'Space Captain', category: 'Tank', image: 'space_captain.jpg' },
    { name: 'Spore Lord', category: 'Tank', image: 'spore_lord.jpg' },
    { name: 'Tactical Police', category: 'Tank', image: 'tactical_police.jpg' },
    { name: 'The Yokozuna', category: 'Tank', image: 'the_yokozuna.jpg' },
    { name: 'The Trailblazer', category: 'Tank', image: 'the_trailblazer.jpg' },
    { name: 'Junior Shifu', category: 'Damage', image: 'junior_shifu.jpg' },
    { name: 'Deadly Nightshade', category: 'Damage', image: 'deadly_nightshade.jpg' },
    { name: 'Meditating Master', category: 'Damage', image: 'meditating_master.jpg' },
    { name: 'Unstoppable Force', category: 'Damage', image: 'unstoppable_force.jpg' },
    { name: 'Amazon Warrior', category: 'Damage', image: 'amazon_warrior.jpg' },
    { name: 'Blackmarket Baroness', category: 'Damage', image: 'blackmarket_baroness.jpg' },
    { name: 'Red Mercury', category: 'Damage', image: 'red_mercury.jpg' },
    { name: 'Swift Blade', category: 'Damage', image: 'swift_blade.jpg' },
    { name: 'Loan Shark', category: 'Damage', image: 'loan_shark.jpg' },
    { name: 'Altruistic Banker', category: 'Damage', image: 'altruistic_banker.jpg' },
    { name: 'Nuclear Martyr', category: 'Damage', image: 'nuclear_martyr.jpg' },
    { name: 'Devil\'s Follower', category: 'Damage', image: 'devils_follower.jpg' },
    { name: 'Decommissioned Unit', category: 'Damage', image: 'decommissioned_unit.jpg' },
    { name: 'Death\'s Hand', category: 'Damage', image: 'deaths_hand.jpg' },
    { name: 'Professor Dark Matter', category: 'Damage', image: 'professor_dark_matter.jpg' },
    { name: 'Lil Bulldozer', category: 'Damage', image: 'lil_bulldozer.jpg' },
    { name: 'Artificial Empathy', category: 'Damage', image: 'artificial_empathy.jpg' },
    { name: 'Praying Nun', category: 'Supporter', image: 'praying_nun.jpg' },
    { name: 'Arctic Sheriff', category: 'Supporter', image: 'arctic_sheriff.jpg' },
    { name: 'High Priestess', category: 'Supporter', image: 'high_priestess.jpg' },
    { name: 'Truth Seeker', category: 'Supporter', image: 'truth_seeker.jpg' },
    { name: 'Faith Healer', category: 'Supporter', image: 'faith_healer.jpg' },
    { name: 'Street Magician', category: 'Supporter', image: 'street_magician.jpg' },
    { name: 'Media Tycoon', category: 'Supporter', image: 'media_tycoon.jpg' },
    { name: 'The Godfather', category: 'Supporter', image: 'the_godfather.jpg' },
    { name: 'Leader of the Pack', category: 'Supporter', image: 'leader_of_the_pack.jpg' },
    { name: 'Historical Linguist', category: 'Supporter', image: 'historical_linguist.jpg' },
    { name: 'Tech Tinker', category: 'Supporter', image: 'tech_tinker.jpg' },
    { name: 'Rocket Scientist', category: 'Supporter', image: 'rocket_scientist.jpg' },
    { name: 'Telekinetic Woman', category: 'Supporter', image: 'telekinetic_woman.jpg' },
    { name: 'Charming Attorney', category: 'Supporter', image: 'charming_attorney.jpg' },
    { name: 'Field Medic', category: 'Supporter', image: 'field_medic.jpg' },
];


let characters; // Store the current set of characters
let currentQuestionIndex = 0; // Keep track of the current question

const restartGame = () => {
    characters = [...originalCharacters]; // Make a copy of the original characters
    shuffleArray(characters); // Shuffle the array
    currentQuestionIndex = 0; // Reset the current question index
    updateUI(); // Update the UI to show the first question
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const updateUI = () => {
    const questionElement = document.getElementById("question");
    const scoreElement = document.getElementById("score");
    const characterImage = document.getElementById("characterImage");
  
    if (currentQuestionIndex < characters.length) {
        questionElement.textContent = characters[currentQuestionIndex].name;
        characterImage.src = 'images/' + characters[currentQuestionIndex].image;
    } else {
        questionElement.textContent = "Game Over";
        characterImage.src = '';  // Optionally, set to a default image
    }
    
    scoreElement.textContent = `Score: ${currentQuestionIndex}`;
};


const checkAnswer = (selectedCategory) => {
    const correctCategory = characters[currentQuestionIndex].category;
    const feedbackElement = document.getElementById('feedback');
  
    if (selectedCategory === correctCategory) {
        feedbackElement.innerText = 'Correct!';
    } else {
        feedbackElement.innerText = 'Wrong!';
    }
  
    currentQuestionIndex++;  // Move to the next question
    setTimeout(() => {
        feedbackElement.innerText = '';  // Clear feedback
        updateUI();  // Update the UI for the next question
    }, 1000);
};

// Initialize the game
restartGame();
