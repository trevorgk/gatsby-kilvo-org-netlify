import React from 'react';

import Layout from '../../components/Layout';
import HumourAside from '../../components/HumourAside';

export default class HumourIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/recipes-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Humour
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-three-quarters">
                  <p>Laughter is supposed to be the best medicine.</p>
                  <p>
                    I was reading in our local newspaper "The Age" a few weeks
                    back about the role humour plays in maintaining morale when
                    times are really tough. I particularly enjoy this so-called
                    "black" or "gallows" humour. A couple of examples from that
                    article:
                  </p>
                  <p>
                    Q: What did they do for light in Zimbabwe before they had
                    candles?
                    <br />
                    A: Electricity.
                  </p>
                  <p>
                    Q: (From the concentration camps during WWII) What's the
                    difference between a Jewish optimist and a Jewish pessimist?
                    <br />
                    A: A Jewish pessimist is living in exile somewhere, a Jewish
                    optimist is here.
                  </p>
                  <p>
                    <img src="/img/god.jpg" />
                  </p>
                  <p>
                    <img src="/img/pt_meeting.jpg" />
                  </p>
                  <p>
                    <img src="/img/nicetits.jpg" />
                  </p>
                  <p>
                    I heard on the news (on our winter solstice 21 June 2005)
                    that Cardinal Sin had died and I got to thinking about names
                    and professions and how they reflect one another. For
                    example locally (Melbourne, Australia) we have Nathan
                    Crafti, a member of the legal fraternity. So I did the
                    Google thing and came up with{' '}
                    <a href="http://www.granoff.net/names">What's in a Name?</a>{' '}
                    which will amuse those who take a peep.
                  </p>
                  <p>
                    There is a Doctor Misri practising in Canada who treats
                    depression and who has written a book “Shouldn't I be
                    happy?” Check it out you non-believers, it's true! Feed dr
                    misri to Google.
                  </p>
                  <h2>No-one Is Above Suspicion</h2>
                  <p>
                    <img src="/img/no_one_is_above_suspicion.jpg" />
                  </p>
                  <h2>Economic Optimism</h2>
                  <p>
                    <img src="/img/nonsequitor_economic_optimism.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Doonesbury - Intelligent Design
                  </h1>
                  <p>
                    <img src="/img/doonesbury_intelligent_design.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Transition Team
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_transition_team.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Corporate Bailout System
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_corporate_bailout_system.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Governing from the middle of the road
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_the_middle_road.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Cat or dog person
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_cat_or_dog_person.gif" />
                  </p>
                  <h1>
                    <a href=""></a>Planning board meetings
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_planning_board_meetings.gif" />
                  </p>
                  <h1>
                    <a href=""></a>The Three Wise Middle-aged Monkeys
                  </h1>
                  <p>
                    <img src="/img/3_wise_monkeys.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>We all have friends like this (don't we
                    Kenny?)
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_unicycle.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>Birdbath
                  </h1>
                  <p>
                    <img src="/img/birdbath.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>The Clinic
                  </h1>
                  <p>
                    <img src="/img/clinic.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>Daddy's Assets
                  </h1>
                  <p>
                    <img src="/img/daddyassets.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>When vegans fall off the wagon.
                  </h1>
                  <p>
                    <img src="/img/vegans.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>Sir Archibald Clerk Kerr letter to Lord
                    Pembroke
                  </h1>
                  <p>
                    <img src="/img/sirarchi.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>In memory of Simon Wiesenthal
                  </h1>
                  <p>
                    <img src="/img/nooffensejose.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>Communication
                  </h1>
                  <p>
                    <img src="/img/nonsequitor_communication.jpg" />
                  </p>
                  <h1>
                    <a href=""></a>Calvin - Kids
                  </h1>
                  <p>
                    <img src="/img/calvin_kids.jpg" />
                  </p>
                  <ul>
                    <li>
                      <a
                        href="http://kilvo.org/humour/dead_horses.html"
                        title="Dead Horses — The tribal wisdom of the Dakota Indians"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <HumourAside />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
