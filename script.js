// ========== DESTINATION DATA (FULL — unchanged) ==========
const destinations = [
    {
      name: "Paris, France",
      mood: "romantic",
      budget: "high",
      image: "./images/paris.jpg",
      description: "The City of Love — perfect for candlelight dinners, river cruises, and romantic strolls along the Seine.",
      budgetDetails: { flights: "$900", hotels: "$1500", food: "$400", total: "$2800" }
    },
    {
      name: "Bali, Indonesia",
      mood: "relaxing",
      budget: "medium",
      image: "./images/bali.jpg",
      description: "A tropical paradise filled with serene beaches, lush forests, and peaceful temples for the ultimate relaxation.",
      budgetDetails: { flights: "$600", hotels: "$700", food: "$300", total: "$1600" }
    },
    {
      name: "Tokyo, Japan",
      mood: "cultural",
      budget: "high",
      image: "./images/tokyo.jpg",
      description: "A vibrant mix of modern technology and ancient traditions — the perfect cultural blend.",
      budgetDetails: { flights: "$1000", hotels: "$1200", food: "$500", total: "$2700" }
    },
    {
      name: "Cape Town, South Africa",
      mood: "adventure",
      budget: "medium",
      image: "./images/capetown.jpg",
      description: "For thrill-seekers — hike Table Mountain, explore Cape Point, or dive with great white sharks.",
      budgetDetails: { flights: "$800", hotels: "$700", food: "$300", total: "$1800" }
    },
    {
      name: "Venice, Italy",
      mood: "romantic",
      budget: "high",
      image: "./images/venice.jpg",
      description: "Float through dreamy canals and enjoy Italy’s most romantic city of gondolas and sunsets.",
      budgetDetails: { flights: "$700", hotels: "$900", food: "$400", total: "$2000" }
    },
    {
      name: "Santorini, Greece",
      mood: "romantic",
      budget: "high",
      image: "./images/santorini.jpg",
      description: "Famous for its blue domes, cliffside sunsets, and ocean views — a perfect romantic escape.",
      budgetDetails: { flights: "$800", hotels: "$1200", food: "$400", total: "$2400" }
    },
    {
      name: "Machu Picchu, Peru",
      mood: "adventure",
      budget: "medium",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      description: "A trek through the Andes to this ancient Incan wonder — perfect for adventurous souls.",
      budgetDetails: { flights: "$700", hotels: "$500", food: "$300", total: "$1500" }
    },
    {
      name: "New York, USA",
      mood: "adventure",
      budget: "high",
      image: "./images/newyork.jpg",
      description: "The city that never sleeps — full of lights, skyscrapers, and exciting adventures.",
      budgetDetails: { flights: "$900", hotels: "$1300", food: "$400", total: "$2600" }
    },
    {
      name: "Maldives",
      mood: "relaxing",
      budget: "high",
      image: "./images/maldives.jpg",
      description: "Luxury ocean villas, clear turquoise water, and sunsets straight from a dream.",
      budgetDetails: { flights: "$1000", hotels: "$2000", food: "$500", total: "$3500" }
    },
    {
      name: "Prague, Czech Republic",
      mood: "cultural",
      budget: "medium",
      image: "./images/prague.jpg",
      description: "Cobblestone streets, castles, and Gothic architecture make Prague a history lover’s dream.",
      budgetDetails: { flights: "$600", hotels: "$600", food: "$200", total: "$1400" }
    },
    {
      name: "Dubai, UAE",
      mood: "luxury",
      budget: "high",
      image: "./images/dubai.jpg",
      description: "A futuristic desert city known for luxury shopping, fine dining, and sky-high adventures.",
      budgetDetails: { flights: "$800", hotels: "$1000", food: "$400", total: "$2200" }
    },
    {
      name: "Iceland",
      mood: "adventure",
      budget: "high",
      image: "./images/iceland.jpg",
      description: "Northern lights, geysers, and glaciers — Iceland is a haven for adventure lovers.",
      budgetDetails: { flights: "$1000", hotels: "$1000", food: "$400", total: "$2400" }
    },
    {
      name: "Kyoto, Japan",
      mood: "cultural",
      budget: "medium",
      image: "./images/kyoto.jpg",
      description: "Temples, tea houses, and cherry blossoms — Kyoto captures Japan’s timeless beauty.",
      budgetDetails: { flights: "$900", hotels: "$800", food: "$300", total: "$2000" }
    },
    {
      name: "Rome, Italy",
      mood: "cultural",
      budget: "high",
      image: "./images/rome.jpg",
      description: "Step back in time exploring the Colosseum, Vatican, and ancient ruins of the Eternal City.",
      budgetDetails: { flights: "$800", hotels: "$1000", food: "$400", total: "$2200" }
    },
    {
      name: "Marrakech, Morocco",
      mood: "cultural",
      budget: "medium",
      image: "./images/morocco.jpg",
      description: "A colorful maze of markets, spices, and stunning architecture — full of life and culture.",
      budgetDetails: { flights: "$700", hotels: "$500", food: "$300", total: "$1500" }
    },
    {
      name: "Sydney, Australia",
      mood: "adventure",
      budget: "high",
      image: "./images/sedney.jpg",
      description: "A sun-soaked city with beaches, surf spots, and vibrant nightlife — perfect for explorers.",
      budgetDetails: { flights: "$1000", hotels: "$1200", food: "$400", total: "$2600" }
    },
    {
      name: "Switzerland",
      mood: "relaxing",
      budget: "high",
      image: "./images/switzerland.jpg",
      description: "Breathtaking mountains, crystal lakes, and peaceful villages — relaxation at its finest.",
      budgetDetails: { flights: "$1000", hotels: "$1300", food: "$400", total: "$2700" }
    },
    {
      name: "Thailand",
      mood: "relaxing",
      budget: "medium",
      image: "./images/thailand.jpg",
      description: "Golden temples, tropical beaches, and delicious street food — all on a budget.",
      budgetDetails: { flights: "$500", hotels: "$500", food: "$200", total: "$1200" }
    },
    {
      name: "Nepal",
      mood: "adventure",
      budget: "low",
      image: "./images/nepal.jpg",
      description: "For trekkers and climbers — experience the Himalayas up close in a budget-friendly way.",
      budgetDetails: { flights: "$300", hotels: "$200", food: "$100", total: "$600" }
    },
    {
      name: "London, UK",
      mood: "cultural",
      budget: "high",
      image: "./images/london.jpg",
      description: "A historic and modern blend — from Buckingham Palace to world-class museums.",
      budgetDetails: { flights: "$800", hotels: "$1100", food: "$400", total: "$2300" }
    },
    {
      name: "Singapore",
      mood: "modern",
      budget: "high",
      image: "./images/singapore.jpg",
      description: "A futuristic city filled with gardens, lights, and delicious multicultural cuisine.",
      budgetDetails: { flights: "$700", hotels: "$1000", food: "$400", total: "$2100" }
    },
    {
      name: "Istanbul, Turkey",
      mood: "cultural",
      budget: "medium",
      image: "./images/istanbul.jpg",
      description: "Where Europe meets Asia — full of mosques, bazaars, and exotic flavors.",
      budgetDetails: { flights: "$500", hotels: "$600", food: "$200", total: "$1300" }
    },
    {
      name: "Reykjavik, Iceland",
      mood: "adventure",
      budget: "high",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      description: "The gateway to Northern Lights, glaciers, and volcanic landscapes.",
      budgetDetails: { flights: "$1000", hotels: "$1000", food: "$400", total: "$2400" }
    },
    {
      name: "Hawaii, USA",
      mood: "relaxing",
      budget: "high",
      image: "./images/hawai.jpg",
      description: "Golden beaches, palm trees, and island vibes — perfect for a tropical escape.",
      budgetDetails: { flights: "$900", hotels: "$1500", food: "$400", total: "$2800" }
    },
    {
      name: "Barcelona, Spain",
      mood: "cultural",
      budget: "medium",
      image: "./images/barcelona.jpg",
      description: "A city full of art, architecture, and tapas — perfect for culture and relaxation.",
      budgetDetails: { flights: "$700", hotels: "$800", food: "$300", total: "$1800" }
    }
  ];

  // 🧠 Smart Recommendation Function
function getSmartRecommendation(mood, budget) {
  const scored = destinations.map(dest => {
    let score = 0;
    if (dest.mood === mood) score += 2;
    if (dest.budget === budget) score += 1;
    return { ...dest, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0] || destinations[Math.floor(Math.random() * destinations.length)];
}

// --- AI-like Recommendation Feature ---
const recommended = destinations[Math.floor(Math.random() * destinations.length)];
console.log("🪄 Recommended for you:", recommended.name);

// (Optional) You can also display it on the website dynamically:
/*document.addEventListener("DOMContentLoaded", () => {
  const recSection = document.createElement("div");
  recSection.classList.add("recommended");
  recSection.innerHTML = `
    <h2>🪄 Recommended for You</h2>
    <div class="card">
      <img src="${recommended.image}" alt="${recommended.name}">
      <h3>${recommended.name}</h3>
      <p>${recommended.description}</p>
    </div>
  `;
  document.body.prepend(recSection);
});*/
// ========== MAIN VARIABLES ==========
const destinationContainer = document.getElementById("destinations");
const searchInput = document.getElementById("search");
const moodFilter = document.getElementById("mood-filter");
const budgetFilter = document.getElementById("budget-filter");

const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupWeather = document.getElementById("popup-weather");
const popupBudget = document.getElementById("popup-budget");

const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const signupPopup = document.getElementById("signupPopup");
const openSignup = document.getElementById("openSignup");

let wishlist = [];

// Debug quick-check
console.log("destinationContainer:", destinationContainer);
console.log("destinations length:", destinations.length);

// ========== RENDER ==========
function renderDestinations(list = destinations) {
  destinationContainer.innerHTML = "";
  list.forEach((dest) => {
    const isLiked = wishlist.some((w) => w.name === dest.name);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}">
      <div class="card-text">
        <h3>${dest.name} <button class="heartBtn ${isLiked ? 'liked' : ''}">♥</button></h3>
        <p>Perfect for: ${dest.mood}</p>
        <p class="desc-small">${dest.description}</p>
      </div>
    `;
    // heart
    const heart = card.querySelector(".heartBtn");
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isLiked) wishlist = wishlist.filter((w) => w.name !== dest.name);
      else wishlist.push(dest);
      filterDestinations();
    });

    card.addEventListener("click", () => openPopup(dest));
    destinationContainer.appendChild(card);
  });
}

// ========== FILTERS ==========
function filterDestinations() {
  const searchTerm = (searchInput.value || "").toLowerCase();
  const selectedMood = (moodFilter.value || "").toLowerCase();
  const selectedBudget = (budgetFilter.value || "").toLowerCase();

  const filtered = destinations.filter(dest => {
    const nameMatch = dest.name.toLowerCase().includes(searchTerm);
    const moodMatch = selectedMood === "" || dest.mood.toLowerCase() === selectedMood;
    const budgetMatch = selectedBudget === "" || dest.budget.toLowerCase() === selectedBudget;
    return nameMatch && moodMatch && budgetMatch;
  });
  document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const results = destinations.filter(d => 
      d.name.toLowerCase().includes(term) ||
      d.mood.toLowerCase().includes(term) ||
      d.description.toLowerCase().includes(term)
    );
  
    displayDestinations(results);
  });

  renderDestinations(filtered);


  // ==============================
  // 🔹 Smart AI Recommendation
  // ==============================
  function getSmartRecommendation(mood, budget) {
    const scored = destinations.map(dest => {
      let score = 0;
      if (dest.mood.toLowerCase() === mood) score += 2;
      if (dest.budget.toLowerCase() === budget) score += 1;
      return { ...dest, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored[0] || destinations[Math.floor(Math.random() * destinations.length)];
  }

  const recommended = getSmartRecommendation(selectedMood, selectedBudget);
  document.getElementById("recommendation").textContent =
    `🪄 Recommended for you: ${recommended.name}`;
}

searchInput.addEventListener("input", filterDestinations);
moodFilter.addEventListener("change", filterDestinations);
budgetFilter.addEventListener("change", filterDestinations);

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  moodFilter.value = "";
  budgetFilter.value = "";
  renderDestinations();
});

// wishlist view
document.getElementById("wishlistBtn").addEventListener("click", () => {
  if (wishlist.length === 0) alert("No destinations in wishlist!");
  else renderDestinations(wishlist);
});

// ========== POPUP ==========
async function openPopup(dest) {
  popup.classList.remove("hidden");
  popupContent.style.backgroundImage = `url(${dest.image})`;
  popupTitle.textContent = dest.name;
  popupDescription.textContent = dest.description;

  if (dest.budgetDetails) {
    popupBudget.innerHTML = `
      <li>✈️ Flights: ${dest.budgetDetails.flights}</li>
      <li>🏨 Hotels: ${dest.budgetDetails.hotels}</li>
      <li>🍽️ Food: ${dest.budgetDetails.food}</li>
      <li><strong>Total: ${dest.budgetDetails.total}</strong></li>
    `;
  } else {
    popupBudget.innerHTML = "<li>No budget information available.</li>";
  }

  // WEATHER — only shows if API key is valid and returns 200
  const apiKey = "febcb11c0d2a3c2cdd10b7d01edd669b";
  try {
    const city = dest.name.split(",")[0].trim();
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    popupWeather.textContent =
      data && data.cod === 200
        ? `🌤️ Weather: ${data.weather[0].description}, ${data.main.temp}°C`
        : "🌦️ Weather data unavailable.";
  } catch (err) {
    popupWeather.textContent = "🌦️ Weather data unavailable.";
  }
}

// close handlers for popup
document.getElementById("close-popup").addEventListener("click", () => popup.classList.add("hidden"));
document.getElementById("close-popup-bottom").addEventListener("click", () => popup.classList.add("hidden"));
// clicking outside the popup-box closes it
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

// ========== LOGIN / SIGNUP ==========
loginPopup.classList.add("hidden");
signupPopup.classList.add("hidden");

loginBtn.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
});
openSignup.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
  signupPopup.classList.remove("hidden");
});
document.getElementById("closeLogin").addEventListener("click", () => loginPopup.classList.add("hidden"));
document.getElementById("closeSignup").addEventListener("click", () => signupPopup.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === loginPopup) loginPopup.classList.add("hidden");
  if (e.target === signupPopup) signupPopup.classList.add("hidden");
});

// signup storage
document.getElementById("signupSubmit").addEventListener("click", () => {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;
  const repass = document.getElementById("signupRePassword").value;
  if (!email || !pass || !repass) return alert("Please fill all fields.");
  if (pass !== repass) return alert("Passwords do not match!");
  localStorage.setItem("user", JSON.stringify({ email, pass }));
  alert("Signup successful! Please log in.");
  signupPopup.classList.add("hidden");
  loginPopup.classList.remove("hidden");
});

// login validation
document.getElementById("loginSubmit").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && email === user.email && pass === user.pass) {
    alert("Login successful!");
    loginPopup.classList.add("hidden");
  } else alert("Invalid credentials!");
});

// initial render
renderDestinations();

//const recommended = destinations[Math.floor(Math.random() * destinations.length)];
document.getElementById("recommendation").textContent = `🪄 Recommended for you: ${recommended.name}`;

function aiTravelSuggestion() {
  const mood = document.getElementById("mood-filter").value.toLowerCase();
  const budget = document.getElementById("budget-filter").value.toLowerCase();

  let suggestion = "Hmm... I couldn't find a perfect match, try again!";

  if (mood === "romantic" && budget === "high") suggestion = "💞 Try Paris or Maldives for a luxury romantic trip!";
  else if (mood === "adventure" && budget === "medium") suggestion = "⛰️ Try Nepal or Iceland for thrilling adventures!";
  else if (mood === "relaxing" && budget === "low") suggestion = "🌴 Try Bali or Goa for affordable relaxation!";
  else if (mood === "cultural") suggestion = "🏯 Kyoto or Rome — both are rich in culture and history!";
  else if (mood === "urban") suggestion = "🏙️ New York or Tokyo — explore the city life!";

  alert("✨ AI Suggestion: " + suggestion);
}