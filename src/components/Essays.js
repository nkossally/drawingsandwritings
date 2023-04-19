import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Essays = () => {
  const lastOfUsRef = useRef();
  const driveRef = useRef();
  const chatGPTRef = useRef();

  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash.includes("drive")) {
      driveRef.current.scrollIntoView();
    }
  });

  useEffect(() => {
    if (hash.includes("last-of-us")) {
      lastOfUsRef.current.scrollIntoView();
    }
  });

  useEffect(() => {
    if (hash.toLowerCase().includes("chatgpt")) {
      chatGPTRef.current.scrollIntoView();
    }
  });

  return (
    <div class="outer-container below-nav-bar">
      <div class="container">
        <div class="inner-container">
          <div class="navbar">
            <span
              class="nav-button"
              onClick={() => chatGPTRef.current.scrollIntoView()}
            >
              ChatGPT
            </span>
            <span
              class="nav-button"
              onClick={() => lastOfUsRef.current.scrollIntoView()}
            >
              The Last of Us
            </span>
            <span
              class="nav-button"
              onClick={() => driveRef.current.scrollIntoView()}
            >
              Drive
            </span>
          </div>

          <div className="">
            <div class="essays">
              <div id="chatGPT" ref={chatGPTRef}>
                <div class="title">
                  ChatGPT and the Lost Art of the C- Essay
                </div>
                <p>Published on February 06, 2023</p>
                <p>
                  The press is currently lamenting the possibility of ChatGPT
                  and other AI enabling students to compose passable essays
                  without having to think or write. Based on some
                  experimentation, ChatGPT seems to produce solid B papers on
                  any topic. My concern is not that students will cheat with
                  this technology. My concern is that the art of the C minus
                  will be lost.
                </p>
                <p>
                  I spent many late nights in grad school chugging coffee and
                  Ritalin while grading student essays. Most essays fell in the
                  B range, which forced my weary brain to differentiate a boring
                  B paper from a boring B minus, and summarize my comments in a
                  compliment sandwich – “You did this well. You should work on
                  that. You did this other thing well. Blah, blah, blah…” The
                  problem with B papers is they are all the same. This is
                  especially true of the five-paragraph essay. They usually
                  start by repeating the question of the prompt for the essay as
                  a statement in the first paragraph. The middle three
                  paragraphs that follow are a list of three things that may or
                  may not be related to the prompt. Finally, the conclusion more
                  or less says, “Look. I just said three things.” That structure
                  earns a B and I would go down to a B minus depending on the
                  absurdity of the three things.
                </p>
                <p>
                  I once graded essays on the causes of the Civil War. One essay
                  was titled, “The Civil War: was there anyone reason?” Yes. The
                  title misspelled any one. The thesis was that there may have
                  been more than one cause of the Civil War. The middle three
                  body paragraphs listed three things that happened. The
                  conclusion was that there was more than one reason for the
                  Civil War. B.
                </p>
                <p>
                  The only break from the joylessness of reading dozens of B
                  papers was the exhilaration of a C paper. They were creative.
                  They did not follow any formulas. Each was uniquely
                  interesting. They provoked many questions such as what
                  connects one sentence to the next? What is this essay is
                  about? What prompt is this essay addressing? How much more
                  time did the student spend changing the font size of the
                  periods than in writing the words? Is this actually a joke?
                </p>
                <p>
                  I love a C paper far more than a B paper. So the real question
                  for ChatGPT is will it be creative enough to capture the art
                  of C minus?
                </p>
              </div>
              <div class="divider"></div>
              <div id="last-of-us" ref={lastOfUsRef}>
                <div class="title">
                  The Last of Us, The Real Housewives and the Sameness of
                  Stories
                </div>
                <p>
                  Published on January 30, 2023 &#8226; Last modified on
                  March 2, 2023
                </p>
                <p>
                  I could not finish the first episode of{" "}
                  <span className="italic">The Last of Us</span> in one sitting.
                  The show is an adaptation of a video game about a pandemic in
                  which infected humans become zombie-like creatures. It’s
                  riveting. For a few minutes I felt as if I were in a car with
                  Pedro Pascal and his daughter, trying to drive to safety while
                  planes flew only dozens of feet overhead in a residential
                  neighborhood. I was with Pedro for a few minutes anyway. And
                  then I watched him refuse to help anyone who wasn’t in his
                  family. And then I was no longer in the story, but watching
                  the story. I watched the camera technique turn a TV show into
                  a first-person shooter. All of the zombies and all of society
                  melded into pixels to be avoided or destroyed. I watched a
                  familiar story unfold of one family versus everyone else.
                </p>
                <p>
                  <span className="italic">The Last of Us</span> made me sad,
                  and this prompted me to turn it off and turn on my comfort
                  show,{" "}
                  <span className="italic">The Real Housewives of Potomac</span>
                  . But witnessing Gizelle televise her twin daughters’
                  sixteenth birthday party and make it all about Gizelle made me
                  feel even sadder. Epiphanically, it occurred to me that the
                  sadness that permeates{" "}
                  <span className="italic">The Real Housewives</span> is the
                  same as the sadness of{" "}
                  <span className="italic">The Last of Us</span>. Both shows are
                  essentially saying the same thing. Is the edible kicking in or
                  is{" "}
                  <span className="italic">The Real Housewives of Potomac</span>{" "}
                  exactly the same as a zombie apocalypse?
                </p>
                <p>
                  The stories of <span className="italic">The Last of Us</span>{" "}
                  and <span className="italic">The Real Housewives</span> smell
                  the same, at least. As a creature of the internet, I use the
                  medium of the web browser to watch both. By navigating from
                  one tab to another, I can transport from a science fiction
                  narrative about a pandemic induced by late capitalist excess
                  to a hilarious comedy about late capitalist excess.
                </p>
                <p>
                  There’s a consistent message across many stories the media
                  tells us. Discussing two different mediums, television and the
                  computer, can help illustrate the message. When I was a child,
                  my family shared a television. I could not merely change
                  webpages in order to watch a different show. I had to change
                  the channel, and then negotiate with my family whether the
                  change was acceptable. My father tended to watch soccer and he
                  always got his way. My siblings and I debated between Cartoon
                  Network and Nickelodeon. We would argue and physically fight
                  for control of the remote. I am not lauding the days of the
                  primacy of the television nor my nuclear family’s problematic
                  dynamics, but changing the channel implied some sort of
                  relation between brother, sister, father and mother. Changing
                  a URL does not express such tangible relations between people.
                </p>
                <p>
                  I see loneliness and alienation in the stories television and
                  the internet tell. Between the two, the internet is far more
                  alienating because it offers infinitely more possibilities to
                  satisfy granular tastes and desires at all times. The
                  difference between the two mediums is in the extremity of the
                  alienation they foster. The alienation is the same.
                </p>
                <p>
                  In addition to fostering alienation, the media tends to tell
                  us that family, especially the nuclear family, is important.
                  This is not a contradiction because loving your family can be
                  as antisocial as much as it is social. I believe the Pedro
                  Pascal character in
                  <span className="italic">The Last of Us</span> really loves
                  his daughter to the exclusion of everyone else. And I believe
                  that even if Gizelle is so lonely and empty that she needs
                  people who do not know her to know an idea of her, she still
                  loves her daughters. I believe that the media teaches us that
                  we are all alone and, at least, we love our daughters. And,
                  perhaps, at most.
                </p>
              </div>

              <div class="divider"></div>

              <div id="drive" ref={driveRef}>
                <div class="title">Drive: A Defense of Hollywood Escapism</div>
                <p>
                  Originally published on June 08, 2020 &#8226; Last modified on
                  February 3, 2023
                </p>
                <p>
                  The least important element of Drive, and any movie in my
                  opinion, is its plot. Fortunately, the plot is
                  straightforward. Drive’s one sentence summary is a lonely
                  unnamed getaway driver falls in love with his neighbor and her
                  son, and when her husband returns from prison, Driver attempts
                  to protect the family from gangsters to whom the husband owes
                  protection money. Drive has simple characters with simple arcs
                  or no arc. Driver, played by Ryan Gosling, is a laconic and
                  morally ambiguous loner who falls in love with a family and
                  consequently assumes the moral responsibility of killing the
                  guys who threaten the family unit. Driver’s love interest is
                  Irene, played by Carey Mulligan. Irene is nice. That’s about
                  it. Carey Mulligan is a good enough actress to make something
                  of the film’s wordless moments, but her character is just
                  nice. And the bad guys are bad guys. Drive, like most
                  Hollywood films, tells a simple story.
                </p>
                <p>
                  The story Drive tells is not exciting. How it tells it is. The
                  film builds tension by making smart decisions about showing
                  and not showing. Rather than show a pawnshop robbery gone
                  wrong, the camera shows Driver waiting in his car. Rather than
                  show gangsters beat up Irene’s husband, the film shows the
                  aftermath in which Driver comforts Irene’s traumatized son. In
                  that scene, the boy’s small shadow and Driver’s substantially
                  larger shadow prominently lay against the wall behind them.
                  This matters in a film that engages in intentional and
                  symbolic storytelling. Shadows reappear in the final scene
                  when Driver’s shadow deals the killing blow to the primary
                  antagonist of the film.
                </p>
                <p>
                  Video essays on Drive have discussed the symbolism of the
                  scorpion on Driver’s jacket, the film’s use of color to
                  represent characters, and the film’s use of the quadrant
                  system in order to frame scenes. The film also uses visual
                  storytelling to dichotomize good-girl Irene from fallen-woman
                  Blanche, the latter of whom participates in a robbery
                  alongside Driver. Irene is a slender blonde. Blanche is a
                  voluptuous redhead. After Irene’s husband is killed, scenes of
                  police interrogating Irene are crosscut with scenes of Driver
                  interrogating Blanche. Blanche lies and looks towards the
                  audience. Irene tells the truth from a sideview. Blanche is on
                  the left side of the screen. Irene is on the right. Left, of
                  course, symbolizes the bad and right symbolizes the good.
                  Blanche suffers a horrible fate. Driver slaps her shortly
                  before hitmen kill her. Irene manages to live. The
                  good-girl-fallen-woman dichotomy is reductive and socially
                  harmful. But it is a simple story that can be accomplished by
                  effective visual storytelling. And despite the few lines Irene
                  and Blanche have, the actresses who portray them make
                  one-dimensional characters exciting to watch.
                </p>
                <p>
                  In addition to clever camerawork and scene composition,
                  Drive’s music tells the story of the film. The synthpop song
                  “A Real Hero” plays twice during the runtime, asking in an
                  on-the-nose and yet effective manner whether Driver can become
                  a hero. The film uses the song to both bind and ultimately
                  separate Driver and Irene. It plays first when Driver, Irene
                  and her son spend an afternoon driving for pleasure and
                  skipping rocks by a lake. “A real human being. And a real
                  hero,” a female voice sings, approximating and melding with
                  the sound of the synthetic instruments accompanying it. The
                  electronic instruments and the human voice seem like
                  variations of a single sound. The music and the noticeably
                  golden tint of the scene melt one shot into the next, erasing
                  how choppy the editing is. The first time “A Real Hero” plays,
                  Driver is offered the hope of family life. The second time the
                  song plays, near the end of the film, Driver finishes his
                  hero’s journey by abandoning Irene. Driver has just killed the
                  final monster. Golden sunlight frames Driver’s head as it
                  rests against a headrest, and then the dream ends. The film
                  cuts to Irene knocking on Driver’s door, to no response.
                  Finally, the film cuts to Driver driving alone in the
                  darkness. Tears well up in his eyes and do not fall. The
                  escapist anthem of the film plays on as the screen fades to
                  black.
                </p>
                <p>
                  In an interview, Refn remarked that he used synthpop, the
                  signature sound of the 80’s, to make the film seem timeless.
                  This is an easy and effective trick. If you mix the present
                  with the past then the lessons back then are the same as the
                  lessons now, which are the same lessons that have always been.
                  Flattening time and dissolving context turns a story into a
                  universal myth. Using both the trick of nostalgic music and
                  the framework of a simple hero’s journey, Refn attempted to
                  achieve timelessness and universality in Drive. I’m not sure
                  Drive quite reaches mythic status, but it provides escape for
                  nearly two hours.
                </p>
                <p>
                  Refn is not alone in using synthpop to stir nostalgia. For
                  sentimental and capitalist reasons, pop culture has been
                  mining the 80’s for nostalgic material since, perhaps, the
                  1980’s. The decade witnessed a neoliberal anti-poor anti-black
                  politics in the U.S. Popular 80’s movies such as{" "}
                  <span className="italic">Risky Business</span> and{" "}
                  <span className="italic">Wall Street</span> seem like pure
                  expressions of capitalism in decay. And yet, synthpop triggers
                  fond memories of the 80’s even among those who were not alive
                  then. The politics and economics of the decade were awful for
                  all except the very rich, but the aesthetics were fun and
                  enduringly escapist.
                </p>
                <p>
                  Exploring why I love <span className="italic">Drive</span> so
                  much entails exploring why synthpop is probably my favorite
                  genre of music. By a loose definition, synthpop is probably
                  your favorite genre too since synthesizers are nearly
                  universal in pop today. The history of synthpop and electronic
                  music is longer than the history of the commodification of
                  electronic music. Over the course of the twentieth century,
                  engineers and artists refined technologies and techniques for
                  reproducing the sound of classical instruments. 1968’s
                  Switched-On Bach was an early forerunner of synthpop. The
                  album was both cutting edge and nostalgic, using new
                  technology to replicate well-known classics.
                </p>
                <p>
                  The device pop music listeners knowingly or unknowingly
                  associate with synthpop is 1983’s Yamaha DX7, an instrument
                  used by Whitney Houston, Brian Eno, Herbie Hancock and many
                  more. In the 80’s, synthesizers sounded like synthesizers, and
                  not quite like classical instruments. By the 90’s, programable
                  synthesizers more or less perfectly reproduced classical
                  instruments. By then, however, grunge and indie rock displaced
                  synthpop as the dominant form of pop. Synthpop experienced a
                  revival in the early 2000’s only when artists began to use new
                  technology to reproduce the sounds of 80’s synthesizers. The
                  point of the synthesizer transitioned from replicating
                  classical instruments to replicating a replica.
                </p>
                <p>
                  Synthpop as a genre is a sound and a mood. Synthpop makes you
                  feel good, even when the lyrics it envelopes are sad. Synthpop
                  is a simulation, not the real thing. Synthpop feels a few
                  steps removed from reality and from pain. It allows some
                  simulation of the processing of unresolvable trauma without
                  confronting it. The 80’s were terrible, and the music was
                  happy-sounding.
                </p>
                <p>
                  Films, much like synthpop, remove pain from pain. Very few
                  Hollywood movies are painful, even tragic ones. Good things
                  tend to happen to the good guys and bad things to the bad
                  guys. If the good guys suffer by the conclusion of a film,
                  there is, at least, some musical flourish that prompts
                  emotional release. Cinema assures you that you indeed watched
                  a story with a point and so pain is lessened by constituting a
                  functional part of a story, as opposed to a meaningless
                  component of everyday life.{" "}
                  <span className="italic">Drive</span> is a violent film
                  without pain. Sometimes pain is simply offscreen. Other times,
                  when brutality is on screen, only the less sympathetic
                  characters suffer, and you are assured you are not supposed to
                  feel pain by the music accompanying the violence. On a
                  story-level, Hollywood escapism is incapable of mirroring
                  lived reality. On a structural level, Hollywood escapism
                  restricts the imagination of working-class people. Perhaps,
                  then, what can be celebrated about film is the personal.
                </p>
                <p>
                  I first watched <span className="italic">Drive</span> in a
                  theater with a college roommate I like but no longer speak to.
                  At least, I think I did. Did I have a soda? Did I sneak in
                  food? Was the theater full? Does anyone who was there that day
                  recollect the things that I cannot about two hours several
                  years ago? I do not remember much. But I remember the movie
                  because I have seen it several times since then. I have
                  experienced Drive for a total of 9 hours or so, and can
                  experience it again at will. Each time I watch it, time passes
                  and I experience an entire story. Pivotal months in a guy’s
                  life condensed into two hours. And time keeps passing. Things
                  happened between the first time I saw the film and the last
                  time I saw it in order to write this essay. I was fired from
                  several jobs and did my utmost to get fired from the ones I
                  ultimately quit. Other things happened. I’ve worked. I’ve seen
                  movies.
                </p>
                <p>
                  Marxist theorist Theodore Adorno was skeptical about the role
                  of the culture industry in the lives of workers. Adorno once
                  wrote:
                </p>
                <p class="italic">
                  It may also be supposed that the consciousness of the
                  consumers themselves is split between the prescribed fun which
                  is supplied to them by the culture industry and a not
                  particularly well-hidden doubt about its blessings. The
                  phrase, the world wants to be deceived, has become truer than
                  had ever been intended. People are not only, as the saying
                  goes, falling for the swindle; if it guarantees them even the
                  most fleeting gratification they desire a deception which is
                  nonetheless transparent to them. …Without admitting it they
                  sense that their lives would be completely intolerable as soon
                  as they no longer clung to satisfactions which are none at
                  all.
                </p>
                <p>
                  This is Adorno at his most sympathetic to working class people
                  who filled their idle hours with cultural products provisioned
                  by capitalists interested in sedating the masses with pretty
                  stories about pretty people. It mirrors Marx’s famous
                  declaration that “religion is the opium of the masses.” There
                  is “truth” to Adorno’s and Marx’s pronouncements on the
                  sedatives of the masses, be it religion or the culture
                  industry. Both theorists also reduce the complexity and
                  variety of religion and film in service of a theory. As
                  theorists, both men engaged in abstract thinking. The words of
                  Marxist theorists are seductive and convincing. Their
                  abstractions from the lives of ordinary people seem to arrive
                  at some truth that exists outside, while directing the
                  experiences, of ordinary people. But stories are at least as
                  seductive as theories. Stories are less abstract. Stories do
                  not eliminate the details of a human life. The details keep us
                  captivated. The assumption that a story has a point, if not a
                  theory, keeps our attention. Movies are powerful storytellers.
                </p>
                <p>
                  When you watch a movie enough times, it breaks into its parts.
                  This scene and then the next. You see that it is assembled. It
                  is no longer magic. Even if you accompany a movie with some
                  other drug like weed or alcohol, a movie seen enough times
                  breaks into its components. And so does life, because life is
                  not a story. It is a series of days, most of which are
                  forgotten. Days are an assemblage of moments. Most forgotten.
                  Art can freeze a moment and make you think and feel something.
                  Art is less easily forgotten.
                </p>
                <p>
                  I cannot definitively say why one movie appeals to me more
                  than another. <span className="italic">Drive</span> is a great
                  movie amongst many great movies of the twentieth and
                  twenty-first centuries. Like all great art, it melds the
                  familiar with the unfamiliar at just the right proportions.
                  Like most Hollywood films, it is simple. Like most Hollywood
                  movies, it tells you that maybe life would be simple if you
                  were as young and beautiful and white as Ryan Gosling and
                  Carey Mulligan. Maybe life would be a simple story with a
                  beginning, a middle, and an end, with the pointless bits
                  edited out by memory. I suspect that life is not so simple,
                  not even for Ryan Gosling and Carey Mulligan. And certainly
                  not for you and I.
                </p>
                <p>
                  Sources:
                  <br /> Culture Industry Reconsidered, Theodore Adorno
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=fxYjFNh_aIA"
                  >
                    DRIVE Analyzed - Movie Review
                  </a>
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=2c4Fvx3nh2g"
                  >
                    Combining Story and Style: The Colors of Drive
                  </a>
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=wsI8UES59TM"
                  >
                    Drive (2011) - The Quadrant System
                  </a>
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=qpgZS2fNxm8"
                  >
                    Director Nicolas Winding Refn talks Drive
                  </a>
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=XLAKeK0M4WM"
                  >
                    A Relatively Brief History of Synthesizers
                  </a>
                  <br />
                  <a
                    class="source-link"
                    href="https://www.youtube.com/watch?v=Q1Ha0MMT0aA"
                  >
                    Yamaha DX7 - The Synthesizer that Defined the '80s
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essays;
