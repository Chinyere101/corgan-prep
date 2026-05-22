async function getUserBret() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetch the list of users from the API

    const users = await res.json(); // Parse the response as JSON

    const user = users.find(u => u.username === "Bret"); // Find the user with username "Bret"

    const { name, email, address } = user; // Destructure name, email, and address from the user object
    const { city } = address;

    console.log(`${name} · ${email} · ${city}`); // Log the name, email, and city in the specified format

  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

getUserBret();