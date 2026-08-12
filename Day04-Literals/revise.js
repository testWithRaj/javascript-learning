
// A simple rule-based agent: it receives a profile and decides what to say.
function profileAgent(profile) {
  const { personName, age, city, occupation } = profile;
  const issues = [];

  if (typeof personName !== "string" || personName.trim() === "") {
    issues.push("Please provide a name.");
  }

  if (!Number.isInteger(age) || age < 0) {
    issues.push("Age must be a whole number that is zero or greater.");
  }

  if (typeof city !== "string" || city.trim() === "") {
    issues.push("Please provide a city.");
  }

  if (typeof occupation !== "string" || occupation.trim() === "") {
    issues.push("Please provide an occupation.");
  }

  if (issues.length > 0) {
    return `I need more information: ${issues.join(" ")}`;
  }

  return `My name is ${personName.trim()} and my age is ${age}. I live in ${city.trim()} and work as an ${occupation.trim()}.`;
}

const result = profileAgent({
  personName: "Raj Kumar",
  age: 31,
  city: "Dhanbad",
  occupation: "SDET",
});

console.log(result);
