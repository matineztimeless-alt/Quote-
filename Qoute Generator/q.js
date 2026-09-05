const quotes = [
    {
        text: "The version of me I’m becoming is worth the struggle I’m facing today.",
        author: "- Matinez"
    },
    {
        text: "I’m not behind; I’m building at my own pace.",
        author: "- Ayemoni"
    },
    {
        text: "Discipline will take me where motivation can’t.",
        author: "- Timeless"
    },
    {
        text: "Small progress is still progress.",
        author: "- Solomon"
    },
    {
        text: "Your future needs you to keep going.",
        author: "- Jube"
    },
    {
        text: "Great things often begin with uncomfortable decisions.",
        author: "- Grace"
    },
    {
        text: "Consistency turns ordinary effort into extraordinary results.",
        author: "- Johnson"
    },
    {
        text: "You don't need to know everything before you begin.",
        author: "- Gift"
    },
    {
        text: "Every skill was once something you didn't know.",
        author: "- Oluwatimilehin"
    },
    {
        text: "The hardest step is often the first one.",
        author: "- Olorunjubelo"
    },
    {
        text: "Believe in the work you're willing to put in.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "A slow journey can still lead to a great destination.",
        author: "- Sunday"
    },
    {
        text: "Keep learning, even when progress feels invisible.",
        author: "- Irewolede"
    },
    {
        text: "Your mistakes can become lessons if you are willing to learn from them.",
        author: "- Solomon"
    },
    {
        text: "Don't compare your beginning with someone else's middle.",
        author: "- Jube"
    },
    {
        text: "Patience gives your effort time to become results.",
        author: "- Grace"
    },
    {
        text: "The person you want to become is built by what you do today.",
        author: "- Johnson"
    },
    {
        text: "Confidence grows when you keep promises to yourself.",
        author: "- Gift"
    },
    {
        text: "Knowledge becomes powerful when you put it into practice.",
        author: "- Oluwatimilehin"
    },
    {
        text: "You can restart without calling it failure.",
        author: "- Olorunjubelo"
    },
    {
        text: "Don't wait for perfect conditions to make progress.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "One focused hour can change the direction of your day.",
        author: "- Sunday"
    },
    {
        text: "Growth often happens quietly before anyone notices.",
        author: "- Irewolede"
    },
    {
        text: "Your effort matters even when the results take time.",
        author: "- Solomon"
    },
    {
        text: "Learn to enjoy the process, not only the destination.",
        author: "- Jube"
    },
    {
        text: "Courage is continuing even when you are uncertain.",
        author: "- Grace"
    },
    {
        text: "Hard work becomes easier when you give it a purpose.",
        author: "- Johnson"
    },
    {
        text: "You are capable of learning things that once seemed impossible.",
        author: "- Gift"
    },
    {
        text: "The best way to improve is to keep practicing.",
        author: "- Oluwatimilehin"
    },
    {
        text: "Your pace does not determine your potential.",
        author: "- Olorunjubelo"
    },
    {
        text: "A better tomorrow begins with better choices today.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Don't underestimate what you can accomplish with consistency.",
        author: "- Sunday"
    },
    {
        text: "Every new challenge is an opportunity to discover more about yourself.",
        author: "- Irewolede"
    },
    {
        text: "Focus on becoming better, not appearing perfect.",
        author: "- Solomon"
    },
    {
        text: "The journey becomes meaningful when you keep moving forward.",
        author: "- Jube"
    },
    {
        text: "Difficult moments can teach lessons that easy moments cannot.",
        author: "- Grace"
    },
    {
        text: "Success is often built from many small decisions.",
        author: "- Johnson"
    },
    {
        text: "Your curiosity can take you farther than you expect.",
        author: "- Gift"
    },
    {
        text: "Every problem you solve adds another skill to your toolbox.",
        author: "- Oluwatimilehin"
    },
    {
        text: "Don't be afraid to start again with more experience.",
        author: "- Olorunjubelo"
    },
    {
        text: "Your dreams deserve consistent effort.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "A focused mind can accomplish more than a rushed one.",
        author: "- Sunday"
    },
    {
        text: "Keep showing up for the goals that matter to you.",
        author: "- Irewolede"
    },
    {
        text: "The work you do today can become the strength you need tomorrow.",
        author: "- Solomon"
    },
    {
        text: "Sometimes progress looks like simply refusing to quit.",
        author: "- Jube"
    },
    {
        text: "You don't have to be fearless to be brave.",
        author: "- Grace"
    },
    {
        text: "Consistency is powerful because it compounds over time.",
        author: "- Johnson"
    },
    {
        text: "Ask questions when you don't understand; that's how learning begins.",
        author: "- Gift"
    },
    {
        text: "Every expert once had a first attempt.",
        author: "- Oluwatimilehin"
    },
    {
        text: "Your next chapter doesn't have to look like your last one.",
        author: "- Olorunjubelo"
    },
    {
        text: "Keep your standards high and your excuses low.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Use today wisely because tomorrow is built from it.",
        author: "- Sunday"
    },
    {
        text: "A little improvement every day can create a huge difference.",
        author: "- Irewolede"
    },
    {
        text: "Don't let one difficult day define your entire journey.",
        author: "- Solomon"
    },
    {
        text: "The goal is not to move perfectly; it is to keep moving.",
        author: "- Jube"
    },
    {
        text: "Sometimes the lesson is more valuable than the result.",
        author: "- Grace"
    },
    {
        text: "Preparation gives opportunity something to work with.",
        author: "- Johnson"
    },
    {
        text: "Your ability grows when you challenge it.",
        author: "- Gift"
    },
    {
        text: "Learning becomes easier when you allow yourself to make mistakes.",
        author: "- Oluwatimilehin"
    },
    {
        text: "Don't be discouraged by how much you still have to learn.",
        author: "- Olorunjubelo"
    },
    {
        text: "Your determination can carry you through difficult beginnings.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Give your goals enough time to grow.",
        author: "- Sunday"
    },
    {
        text: "Progress becomes visible when you look back.",
        author: "- Irewolede"
    },
    {
        text: "You can learn something from almost every experience.",
        author: "- Solomon"
    },
    {
        text: "Keep your eyes on the direction, not just the distance.",
        author: "- Jube"
    },
    {
        text: "Growth requires you to become comfortable with being uncomfortable.",
        author: "- Grace"
    },
    {
        text: "Strong habits make difficult goals easier to pursue.",
        author: "- Johnson"
    },
    {
        text: "The questions you ask can shape the knowledge you gain.",
        author: "- Gift"
    },
    {
        text: "Practice turns information into ability.",
        author: "- Oluwatimilehin"
    },
    {
        text: "You are allowed to outgrow old versions of yourself.",
        author: "- Olorunjubelo"
    },
    {
        text: "Protect your focus from things that don't serve your goals.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "A meaningful goal gives ordinary days a sense of direction.",
        author: "- Sunday"
    },
    {
        text: "Keep building even when nobody is watching.",
        author: "- Irewolede"
    },
    {
        text: "Your future is influenced by the habits you practice today.",
        author: "- Solomon"
    },
    {
        text: "Don't confuse slow progress with no progress.",
        author: "- Jube"
    },
    {
        text: "The ability to adapt is one of the greatest strengths you can develop.",
        author: "- Grace"
    },
    {
        text: "Effort becomes powerful when combined with direction.",
        author: "- Johnson"
    },
    {
        text: "You don't need permission to improve yourself.",
        author: "- Gift"
    },
    {
        text: "Every line of code you understand is another step forward.",
        author: "- Oluwatimilehin"
    },
    {
        text: "Your setbacks don't erase the progress you've already made.",
        author: "- Olorunjubelo"
    },
    {
        text: "Keep your vision bigger than your temporary difficulties.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Use your time to build something your future self will appreciate.",
        author: "- Sunday"
    },
    {
        text: "You become stronger by solving problems instead of avoiding them.",
        author: "- Irewolede"
    },
    {
        text: "A clear goal makes it easier to decide what deserves your attention.",
        author: "- Solomon"
    },
    {
        text: "The best investment you can make is in your ability to learn.",
        author: "- Jube"
    },
    {
        text: "Your potential grows when you stop being afraid of trying.",
        author: "- Grace"
    },
    {
        text: "Good results are usually the product of repeated effort.",
        author: "- Johnson"
    },
    {
        text: "Stay curious enough to keep discovering new possibilities.",
        author: "- Gift"
    },
    {
        text: "Don't just consume knowledge; build something with it.",
        author: "- Oluwatimilehin"
    },
    {
        text: "You can change direction without giving up on the destination.",
        author: "- Olorunjubelo"
    },
    {
        text: "Your commitment matters most when motivation disappears.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Make today's effort count, even if it feels small.",
        author: "- Sunday"
    },
    {
        text: "The person you become is shaped by what you repeatedly practice.",
        author: "- Irewolede"
    },
    {
        text: "Don't wait to feel ready; learn by doing.",
        author: "- Solomon"
    },
    {
        text: "Every challenge gives you a chance to become more capable.",
        author: "- Jube"
    },
    {
        text: "Be patient with yourself while demanding effort from yourself.",
        author: "- Grace"
    },
    {
        text: "Direction and consistency can take you farther than speed alone.",
        author: "- Johnson"
    },
    {
        text: "Your willingness to learn is more valuable than pretending to know everything.",
        author: "- Gift"
    },
    {
        text: "Build projects that force you to think, not just copy.",
        author: "- Oluwatimilehin"
    },
    {
        text: "A fresh start can happen at any moment.",
        author: "- Olorunjubelo"
    },
    {
        text: "Keep becoming someone your younger self would be proud to meet.",
        author: "- Oluwafunmilayo"
    },
    {
        text: "Use your present wisely because it is shaping your future.",
        author: "- Sunday"
    },
    {
        text: "Keep learning, keep building, and keep moving forward.",
        author: "- Irewolede"
    }
];
/*--- My first ramdom generator ---*/
const quotesContainer = document.getElementById("quotes-container");
const nextButton = document.getElementById("nextBtn")
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuoteText = quotes[randomIndex].text;
    const ramdomQuoteAuthor = quotes[randomIndex].author
    quotesContainer.textContent = `${randomQuoteText} ${ramdomQuoteAuthor}`;
    console.log(randomIndex);
}
nextButton.addEventListener("click", function(){
    showRandomQuote()
});