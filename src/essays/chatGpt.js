import React, { forwardRef } from "react";

const ChatGpt = forwardRef((props, ref) => {
  return (
    <div id="chatGPT" ref={ref}>
      <div class="title">ChatGPT and the Lost Art of the C- Essay</div>
      <p>Published on February 06, 2023</p>
      <p>
        The press is currently lamenting the possibility of ChatGPT and other AI
        enabling students to compose passable essays without having to think or
        write. Based on some experimentation, ChatGPT seems to produce solid B
        papers on any topic. My concern is not that students will cheat with
        this technology. My concern is that the art of the C minus will be lost.
      </p>
      <p>
        I spent many late nights in grad school chugging coffee and Ritalin
        while grading student essays. Most essays fell in the B range, which
        forced my weary brain to differentiate a boring B paper from a boring B
        minus, and summarize my comments in a compliment sandwich – “You did
        this well. You should work on that. You did this other thing well. Blah,
        blah, blah…” The problem with B papers is they are all the same. This is
        especially true of the five-paragraph essay. They usually start by
        repeating the question of the prompt for the essay as a statement in the
        first paragraph. The middle three paragraphs that follow are a list of
        three things that may or may not be related to the prompt. Finally, the
        conclusion more or less says, “Look. I just said three things.” That
        structure earns a B and I would go down to a B minus depending on the
        absurdity of the three things.
      </p>
      <p>
        I once graded essays on the causes of the Civil War. One essay was
        titled, “The Civil War: was there anyone reason?” Yes. The title
        misspelled any one. The thesis was that there may have been more than
        one cause of the Civil War. The middle three body paragraphs listed
        three things that happened. The conclusion was that there was more than
        one reason for the Civil War. B.
      </p>
      <p>
        The only break from the joylessness of reading dozens of B papers was
        the exhilaration of a C paper. They were creative. They did not follow
        any formulas. Each was uniquely interesting. They provoked many
        questions such as what connects one sentence to the next? What is this
        essay is about? What prompt is this essay addressing? How much more time
        did the student spend changing the font size of the periods than in
        writing the words? Is this actually a joke?
      </p>
      <p>
        I love a C paper far more than a B paper. So the real question for
        ChatGPT is will it be creative enough to capture the art of C minus?
      </p>
    </div>
  );
});

export default ChatGpt;
