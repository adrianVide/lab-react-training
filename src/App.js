import React, { Component } from "react";
import { IdCard } from "./IdCard/IdCard";
import { FancyBorder } from "./FancyBorder/FancyBorder";
import { Greetings } from "./Greetings/Greetings";
import { Random } from "./Random/Random";
import { BoxColor } from "./BoxColor/BoxColor";
import { CreditCard } from "./CreditCard/CreditCard";
import { DriverCard } from "./DriverCard/DriverCard";
import LikeButton from "./LikeButton/LikeButton";
import Rating from "./Rating/Rating";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <FancyBorder>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/5.jpg"
          />
        </FancyBorder>

        <FancyBorder>
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/7.jpg"
          />
        </FancyBorder>
        <h1>Greetings</h1>
        <FancyBorder>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </FancyBorder>

        <h1>Random</h1>
        <FancyBorder>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </FancyBorder>

        <h1>BoxColor</h1>
        <FancyBorder>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </FancyBorder>
        <FancyBorder>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
        </FancyBorder>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
        <LikeButton/>
      </div>
    );
  }
}

export default App;
