# House of MarkTech - Frontend Developer Task


## Installation

1. Clone the repository:

   git clone url
   cd house-of-marktech
   

2. Install dependencies:
    npm install
  

3. Run the development server:
   npm run dev

   Access the app at `http://localhost:3000`.

## Technologies Used

- **React.js (Vite)**: Frontend JavaScript library and build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for responsive and styled components.
- **JSONPlaceholder API**: Used for fetching dummy user data.
  
## Features

- **Hero Section**: Full-screen section with background image, heading, and call-to-action button.
- **User Search Bar**: A debounced search bar that dynamically filters user names fetched from the API.
- **Pricing Table**: Display of three pricing plans that adjust layout based on screen size.
- **Contact Form**: Simple form for users to send their name, email, and message.

## Search Bar Algorithm (Debounced Search)

- The **debounced search bar** filters through the user names fetched from the **JSONPlaceholder API**.
- To optimize performance, a **debounce technique** is used to limit the number of API calls while the user types.
- **HashMap** is utilized for fast lookups and filtering of the user names based on the search term. The **debounced function** ensures that the filtering happens only after a delay, avoiding unnecessary frequent searches.

### How It Works:
1. The **search term** entered by the user is captured in a state.
2. The search term is processed using a **debounced function** to wait until the user stops typing.
3. The names from the API are filtered using a **HashMap**, providing an efficient way to search through the data.

