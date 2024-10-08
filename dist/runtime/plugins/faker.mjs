import { defineNuxtPlugin } from "#imports";
import { utils } from "./utils.mjs";
const names = [
  "Dutch Van Der Linde",
  "Hosea Mathews",
  "Molly O'Shea",
  "Susan Grimshaw",
  "Pearson",
  "Micah Bells",
  "Charles Smith",
  "Bill Williamson",
  "Leopold Strauss",
  "John Marston",
  "Abigail Roberts",
  "Jack Marston",
  "Karen Jones",
  "Javier Escuella",
  "Tilly Jackson",
  "Uncle",
  "Mary-Beth Gaskill",
  "Lenny Summers",
  "Josiah Trelawny",
  "Reverend Swanson",
  "Sean Macguire",
  "Arthur Morgan",
  "Sadie Adler"
];
const addresses = [
  "Jl. Raya Kuta, Gang Cempaka, No. 17, Kuta, Bali",
  "Jl. Gunung Payung, Block F, No. 11, Nusa Dua, Bali",
  "Jl. Tirta Empul, G. 3, No. 8, Gianyar, Bali",
  "Jl. Raya Ubud, Block B, No. 21, Ubud, Bali",
  "Jl. Hanoman, Gang Melati, No. 9, Denpasar, Bali",
  "Jl. Pantai Berawa, G. 6, No. 12, Canggu, Bali",
  "Jl. Kediri, Block D, No. 7, Tabanan, Bali",
  "Jl. Gatot Subroto, G. 4, No. 15, Sanur, Bali",
  "Jl. Raya Kintamani, Block A, No. 3, Bangli, Bali",
  "Jl. Raya Candidasa, G. 9, No. 14, Karangasem, Bali",
  "Jl. Teuku Umar, Gang Pandan, No. 6, Denpasar, Bali",
  "Jl. Batu Belig, Block C, No. 2, Seminyak, Bali",
  "Jl. Raya Sukawati, G. 5, No. 19, Sukawati, Bali",
  "Jl. Pulau Sari, Block E, No. 10, Jimbaran, Bali",
  "Jl. Padang Tegal, Gang Sabtu, No. 11, Ubud, Bali"
];
const number = (length, startWith) => {
  try {
    let result = "";
    for (let i = 0; i < length - 1; i++) {
      const randomNumber = utils.randInt(0, 10);
      result += randomNumber.toString();
    }
    return (startWith ?? utils.randInt(0, 10)).toString() + result;
  } catch (e) {
    return "0";
  }
};
const price = (length = 5, locale = "id_ID", prefix = "") => {
  const randomIntValue = utils.randInt(0, Math.pow(10, length));
  const price2 = randomIntValue.toString();
  const value = price2.length < length ? `${price2}1` : price2;
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: prefix,
    minimumFractionDigits: 0
  });
  const result = formatter.format(parseInt(value));
  return result;
};
const name = () => {
  const randomIndex = utils.randInt(0, names.length);
  return names[randomIndex];
};
const email = (domain = "gmail.com", addNumber = false) => {
  let result = name().toLowerCase().replace(/ /g, "");
  if (addNumber) {
    result += `${Date.now().toString().padStart(3, "0").substring(0, 3)}@${domain}`;
  } else {
    result += `@${domain}`;
  }
  return result;
};
const phone = (prefix = "08") => {
  return `${prefix}${utils.randInt(0, 999999999)}`;
};
const address = () => {
  const randomIndex = utils.randInt(0, addresses.length);
  return addresses[randomIndex];
};
const date = (dateFormat = "yyyy-MM-dd") => {
  const now = /* @__PURE__ */ new Date();
  const formattedDate = utils.dateFormat(now, dateFormat);
  return formattedDate;
};
const gender = (data = ["Male", "Female"]) => {
  const randomIndex = utils.randInt(0, data.length);
  return data[randomIndex];
};
const time = () => {
  const hours = utils.randInt(0, 24).toString().padStart(2, "0");
  const minutes = utils.randInt(0, 60).toString().padStart(2, "0");
  const seconds = utils.randInt(0, 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
const invoice = (prefix = "INV") => {
  return `${prefix}-${utils.randInt(0, 999999999)}`;
};
const password = (length = 8, useSpecialChar = false) => {
  const specials = "!@#$%^&*()-_=+[]{}|;:,.<>?/".split("");
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = "0123456789".split("");
  let all = [...lower, ...upper, ...numbers];
  if (useSpecialChar) {
    all = all.concat(specials);
  }
  let result = "";
  for (let i = 0; i < length; i++) {
    result += all[utils.randInt(0, all.length)];
  }
  return result;
};
const image = (type = "avatar") => {
  const github = "https://raw.githubusercontent.com/ashtav/assets/master";
  switch (type) {
    case "avatar":
      return `${github}/avatar/${Math.floor(Math.random() * 16) + 1}.jpg`;
    default:
      return `${github}/food/${Math.floor(Math.random() * 12) + 1}.jpg`;
  }
};
const faker = {
  number,
  price,
  name,
  gender,
  email,
  phone,
  address,
  date,
  time,
  invoice,
  password,
  image
};
export { faker };
export default defineNuxtPlugin(() => {
  return {
    provide: {
      faker
    }
  };
});
