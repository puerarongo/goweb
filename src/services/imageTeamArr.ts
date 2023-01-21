import { ITeamArr } from "./imageArrInterface";

import person1x from "../img/team/person1.jpg";
import person1web from "../img/team/person1.webp";
import person1x2 from "../img/team/person1@2x.jpg";
import person1web2 from "../img/team/person1@2x.webp";
import person2x from "../img/team/person2.jpg";
import person2web from "../img/team/person2.webp";
import person2x2 from "../img/team/person2@2x.jpg";
import person2web2 from "../img/team/person2@2x.webp";
import person3x from "../img/team/person3.jpg";
import person3web from "../img/team/person3.webp";
import person3x2 from "../img/team/person3@2x.jpg";
import person3web2 from "../img/team/person3@2x.webp";

const imageTeamArr: ITeamArr[] = [
  {
    jpg: person1x,
    webp: person1web,
    jpg2: person1x2,
    webp2: person1web2,
    name: "John Doe",
    profession: "President",
  },
  {
    jpg: person2x,
    webp: person2web,
    jpg2: person2x2,
    webp2: person2web2,
    name: "Jane Doe",
    profession: "Vice President",
  },
  {
    jpg: person3x,
    webp: person3web,
    jpg2: person3x2,
    webp2: person3web2,
    name: "Steve Smith",
    profession: "Marketing Head",
  },
];

export default imageTeamArr;
