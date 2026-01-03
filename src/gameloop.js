import { parseJSON } from "date-fns";
import famous_person from "../../famous_personel.js";

const famous = famous_person;

export default function getRandomID() {
  let random_Id = Math.floor(Math.random() * 299);
  console.log(random_Id);
  console.log(JSON.parse(famous[random_Id - 1].name));
  console.log(JSON.parse(famous[random_Id - 1].known_for));
}

getRandomID();
