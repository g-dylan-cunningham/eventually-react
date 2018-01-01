import React, { Component } from 'react';
import Header from './Header';

class About extends Component {

  render () {
    return (
      <div>
        <Header />

          <div className="container aboutBody">
            <h3 className="aboutTitle">Galvanize Quarter 3 Project</h3>
            <h5 className="aboutSubTitle">An exercise in React and Redux</h5>
            < hr/>
          <p className='aboutP'>This project represents my work after completing three quarters of the 6 months curriculum at Galvanize. .
            </p>
            <p className="hidden">I know tables are lame, but i wanted to practice them a little bit</p>
            <div className="">
              <table>
                <tr>
                  <h5 className="heading"><th>Technologies Used</th></h5>
                </tr>
                <tr>
                  <td>React</td>
                </tr>
                <tr>
                  <td>Redux</td>
                </tr>
                <tr>
                  <td>Materialize</td>
                </tr>
                <tr>
                  <td>React-Router</td>
                </tr>
                <tr>
                  <td>Moment.js</td>
                </tr>
              </table>
            </div>
            <div className="">

              <table>
                <tr>
                  <h5 className="heading"><th>Intention of Project</th></h5>
                </tr>
                <tr>
                  <td>Create an app to help simplify gift giving</td>
                </tr>
                <tr>
                  <td>Maintain a record of people who will be given gifts</td>
                </tr>
                <tr>
                  <td>Maintain a list of potential gifts for each person</td>
                </tr>
                <tr>
                  <td>Display the coming gift-giving opportunities by date</td>
                </tr>
                <tr>
                  <td>Create 1 page app capable of use with back button, bookmarks, etc</td>
                </tr>
              </table>

            </div>
            <p className='aboutP'>Thanks for taking the time to have a look at my work and for your interest in me professionally. I plan on being horrified by how bad my methodologies were when I look back in a few months time, so please consider this a work in progress. Feel free to contact me however you like:
            </p>
            <table>

              <tr>
                <td>Phone:</td>
                <td>602 350 0692</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a href='mailto:gdylanc@gmail.com'>gdylanc@gmail.com</a></td>
              </tr>
              <tr>
                <td>GitHub:</td>
                <td><a href="https://github.com/flacallama">flacallama</a></td>
              </tr>
              <tr>
                <td>This repo:</td>
                <td><a href="  https://github.com/flacallama/gifted-react">gifted - q3 project React front end</a></td>
              </tr>
              <tr>
                <td>This repo:</td>
                <td><a href="  https://github.com/flacallama/gifted">gifted - q3 project Express server</a></td>
              </tr>
              <tr>
                <td>LinkedIn:</td>
                <td><a href="https://www.linkedin.com/in/g-dylan-cunningham/">g-dylan-cunningham</a></td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>Phoenix, AZ</td>
              </tr>

            </table>


          </div>
      </div>
    )
  }
}
export default About;

// https://git.heroku.com/gifted-reactapp.git
