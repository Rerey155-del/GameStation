
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PUBG from "../assets/PUBG.jpeg";
import Apex from "../assets/Apex.jpeg";
import Valorant from "../assets/valorant.jpeg";
import WOWW from "../assets/WOOW.jpg";
import WOTT from "../assets/WOT.jpeg";
import "../components/card.css";
import latar from "../assets/latarValorant.jpeg";

const maincontent = () => {
  return (
    <div
      className="bekgrond container-fluid"
      style={{
        width: "100%",
        backgroundImage: `url(${latar})`,
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col-12 text-center my-5 text-white">
          <h2>Mainkan game yang ingin kamu mainkan</h2>
        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="oke col-lg-3 mb-3">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "20px",
                  background: "#6C0345",
                }}
              >
                <Card.Img
                  variant="top"
                  src={PUBG}
                  style={{ borderRadius: "20px 20px 0 0" }}
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    <b>PUBG</b>
                  </Card.Title>
                  <Card.Text className="truncate text-white">
                    "Enter a world where survival is the ultimate test, where
                    every step could mean life or death. Gear up, strategize,
                    and outlast your rivals in the unforgiving battlegrounds of
                    PUBG. Are you ready to show your true grit and emerge
                    victorious amidst the chaos?"
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-grey">
                  <ListGroup.Item style={{ background: "#6C0345" }}>
                    <a href="https://www.pubg.com/">Kunjungi situs PUBG</a>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" text-center">
                  <button type="button" className="btn btn-success">
                    Mainkan
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="oke col-lg-3 mb-3">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "20px",
                  background: "#6C0345",
                }}
              >
                <Card.Img
                  variant="top"
                  src={Apex}
                  style={{ borderRadius: "20px 20px 0 0" }}
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    <b>APEX Legends</b>
                  </Card.Title>
                  <Card.Text className="truncate text-white">
                    "Dive into the heart-pounding chaos of Apex Legends, where
                    legends are born and battles redefine the meaning of
                    teamwork. With diverse characters, intense firefights, and
                    adrenaline-fueled action, every moment in the Apex Games is
                    a chance to carve your legend into the annals of history.
                    Are you ready to rise above the competition, forge
                    alliances, and etch your name in the stars?"
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-grey">
                  <ListGroup.Item style={{ background: "#6C0345" }}>
                    <a href="https://www.ea.com/games/apex-legends">
                      Kunjungi situs APEX
                    </a>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" text-center">
                  <button type="button" class="btn btn-success">
                    Mainkan
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div class="oke col-lg-3 mb-3 ">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "20px",
                  background: "#6C0345",
                }}
              >
                <Card.Img
                  variant="top"
                  src={Valorant}
                  style={{ borderRadius: "20px 20px 0 0" }}
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    <b>Valorant</b>
                  </Card.Title>
                  <Card.Text className="truncate text-white">
                    "Embark on an exhilarating journey into the heart of
                    tactical prowess and strategic brilliance with Valorant.
                    Immerse yourself in a world where precision, teamwork, and
                    skill reign supreme. From heart-pounding firefights to
                    pulse-pounding showdowns, every match in Valorant is a
                    canvas for you to showcase your abilities, forge
                    unforgettable moments, and etch your legacy in the annals of
                    gaming history. Are you ready to rise to the challenge and
                    become a legend in the ever-evolving world of Valorant?"
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-grey">
                  <ListGroup.Item style={{ background: "#6C0345" }}>
                    <a href=" https://playvalorant.com/ ">
                      Kunjungi situs VALORANT
                    </a>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" text-center">
                  <button type="button" class="btn btn-success">
                    Mainkan
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="oke col-lg-3 mb-3">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "20px",
                  background: "#6C0345",
                }}
              >
                <Card.Img
                  variant="top"
                  src={WOWW}
                  style={{
                    borderRadius: "20px 20px 0 0",
                    background: "#6C0345",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    <b>World of Warships</b>
                  </Card.Title>
                  <Card.Text className="truncate text-white">
                    "Set sail on an epic voyage through the tumultuous seas of
                    history with World of Warships. Navigate through the
                    turbulent waters of war, where every decision shapes the
                    course of battle and every victory echoes through the ages.
                    From commanding mighty vessels to engaging in intense naval
                    warfare, immerse yourself in a world where strategy,
                    cunning, and mastery of the seas define true greatness. Are
                    you prepared to chart your course, conquer the waves, and
                    etch your name among the legends of naval warfare?"
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-grey">
                  <ListGroup.Item style={{ background: "#6C0345" }}>
                    <a href="  https://worldofwarships.com/ ">
                      Kunjungi situs WOW
                    </a>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" text-center">
                  <button type="button" class="btn btn-success">
                    Mainkan
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="oke col-lg-3 mb-3">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "20px",
                  background: "#6C0345",
                }}
              >
                <Card.Img
                  variant="top"
                  src={WOTT}
                  style={{
                    borderRadius: "20px 20px 0 0",
                    background: "#6C0345",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    <b>World of Tanks</b>
                  </Card.Title>
                  <Card.Text className="truncate text-white">
                    "Enter the battlefield and command your steel behemoth in
                    the relentless warfare of World of Tanks. Amidst the roar of
                    engines and the thunder of cannons, carve your path to
                    victory through strategic prowess and tactical cunning. From
                    the hallowed halls of history to the fiery crucible of
                    combat, every battle is a testament to your skill,
                    determination, and unwavering resolve. Are you ready to
                    forge your legend, conquer the battlefield, and reign
                    supreme as the ultimate armored commander?"
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-grey">
                  <ListGroup.Item style={{ background: "#6C0345" }}>
                    <a href="  https://worldoftanks.com/ ">
                      Kunjungi situs WOT
                    </a>{" "}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" text-center">
                  <button type="button" class="btn btn-success">
                    Mainkan
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default maincontent;
