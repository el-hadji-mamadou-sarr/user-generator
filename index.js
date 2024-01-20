import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import { skills } from "./skills.js";
async function generateData() {
  for (let id = 0; id < 100; id++) {
    const data = createData(id);
    await add(data);
  }
}

async function add(data) {
  const filename = "data.json";

  try {
    const fileData = await fs.readFile(filename, "utf8");
    const jsonData = JSON.parse(fileData);

    jsonData.push(data);

    const updatedJsonString = JSON.stringify(jsonData, null, 2);

    await fs.writeFile(filename, updatedJsonString, "utf8");

    console.log("Data appended successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
}

function generateSkills() {
  const user_skills = [];
  for (let i = 0; i <= Math.floor(Math.random() * 6); i++) {
    user_skills.push(skills[Math.floor(Math.random() * skills.length)]);
  }
  return user_skills;
}
function createData(id) {
  const first_name = faker.person.firstName();
  const last_name = faker.person.lastName();
  const email = faker.internet.email();
  const gender = faker.person.sex();
  const job = faker.person.jobTitle();
  const jobDes = faker.person.jobType();
  const avatar = faker.image.avatar();
  const birth = faker.date.birthdate();
  const country = faker.location.country();
  const city = faker.location.city();
  const about = faker.lorem.sentence();
  const created_at = faker.date.past();
  const updated_at = faker.date.past();
  const personal_website = faker.internet.url();
  const twitter = faker.internet.url();
  const linkedin = faker.internet.url();
  const github = faker.internet.url();
  const instagram = faker.internet.url();
  const photos = [];
  for (let i = 0; i <= Math.floor(Math.random() * 6); i++) {
    photos.push(faker.image.urlPicsumPhotos({ width: 373, height: 556 }));
  }
  const user_skills = generateSkills();

  const data = {
    id,
    first_name,
    last_name,
    email,
    gender,
    job,
    jobDes,
    avatar,
    birth,
    country,
    city,
    about,
    created_at,
    updated_at,
    photos,
    user_skills,
    socials: {
      personal_website,
      twitter,
      linkedin,
      github,
      instagram,
    },
  };
  return data;
}
generateData();
