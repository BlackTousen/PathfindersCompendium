import { ListGroupItemHeading } from "reactstrap";

const GetStarted = () => {
  return (
    <>
      <p>
        <b>
          <ListGroupItemHeading>
            Character Creation Outline
          </ListGroupItemHeading>
        </b>
      </p>
      <br></br>
      <div style={{ textAlign: "left" }}>
        <p>
          <b>1)</b> Get some dice!
        </p>
        <p>
          <b>2) Get a character sheet!</b>{" "}
          <p>(Click the "Add Character" button on the left!)</p>
        </p>
        <p>
          <b>3) Determine ability scores.</b>
          <p>
            Start by generating your character’s ability scores. These six
            scores determine your character’s most basic attributes and are used
            to decide a wide variety of details and statistics. Some class
            selections require you to have better than average scores for some
            of your abilities. There are several methods to choose from for
            generating these scores so consult your GM to determine which method
            he is using.
          </p>
        </p>
        <p>
          <b>Choose A Race</b>
          <p>
            Pick a race, applying any modifiers to your ability scores and any
            other racial traits. Each race lists the languages a character of
            that race automatically knows, as well as a number of bonus
            languages it may learn. A character knows a number of additional
            bonus languages equal to his or her Intelligence modifier.
          </p>
          <div class="table-wrapper">
            <table border="1" cellpadding="5">
              <caption>Table: Race and Ability Score Bonuses</caption>
              <thead>
                <tr>
                  <th class="text">Race</th>
                  <th class="text">Ability Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text">Dwarf</td>
                  <td class="text">+2 Con , +2 Wis , –2 Cha</td>
                </tr>
                <tr>
                  <td class="text">Elf</td>
                  <td class="text">+2 Dex , +2 Int , –2 Con</td>
                </tr>
                <tr>
                  <td class="text">Gnome</td>
                  <td class="text">+2 Con , +2 Cha , –2 Str</td>
                </tr>
                <tr>
                  <td class="text">Half Elf</td>
                  <td class="text">+2 to one ability score (your choice)</td>
                </tr>
                <tr>
                  <td class="text">Halfling</td>
                  <td class="text">+2 Dex , +2 Cha , –2 Str</td>
                </tr>
                <tr>
                  <td class="text">Half Orc</td>
                  <td class="text">ability score (your choice)</td>
                </tr>
                <tr>
                  <td class="text">Human</td>
                  <td class="text">+2 to one ability score (your choice)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
      </div>
    </>
  );
};
export default GetStarted;
