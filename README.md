# Food Recipe App – Practical Assessment

This project is a Food Recipe App. It lets you browse recipes, add them to your cart or wishlist, and even share your own recipes with everyone.

---

## Features Implemented

### Technical Features

1. **Login System:**

   - Log in with a simple username and password.
   - The app remembers if you’re logged in using your browser (local storage).
   - Uses Context API to keep track of your login status.

2. **All Recipes Page:**

   - See a big list of all available recipes on a special page.

3. **Add to Cart:**

   - Add recipes to your cart.
   - If you're logged in, your cart is saved just for you.
   - If not logged in, your cart still stays saved in your browser.

4. **Submit Your Recipe (Multi-Step Form):**

   - Share your own recipes with a step-by-step form:
     - Step 1: Give your recipe a name and choose a category.
     - Step 2: Add ingredients and instructions.
     - Step 3: Upload a picture of your meal.

5. **Wishlist:**

   - Save your favorite recipes to your wishlist.
   - These are kept in your browser, so you don't lose them.

6. **Search:**

   - Search for recipes from the homepage or the all recipes page.

7. **Pagination:**

   - Recipes are shown in pages, so you don't have to scroll forever. 6 recipe will show per page.

8. **Footer:**

   - Added basic Footer.

9. **Form Handling & Validation:**

- The form is built using **React Hook Form** for easy state management.
- **Zod** is used for validating the form fields, making sure your input is correct.

### Non-Technical Features

- Enhanced user experience by allowing actions (cart/wishlist) even before logging in.
- Clear navigation and access to all recipes.

---

## Bug Fixes

- **Search Option:** Fixed issues with the search feature to ensure accurate and responsive results.
- **API Method (getRecipes):** Corrected improper mixing of `async/await` with `.then()` in the API fetching logic to prevent unpredictable behavior.
- **Image Setting in `next.config.js`:** Updated deprecated image settings to align with the latest Next.js recommendations.
- **Product Recipe Details:** Fixed display issues so the correct recipe details are shown every time.
- **Product Details Dialog Box:** Fixed the close button so the dialog for product details can be dismissed reliably.

---

## Time Spent (Approximate)

- **Total:** 9 hours
  - Planning: 1 hours
  - Feature building & Bug fixing: 7-8 hours
  - Testing & writing this doc: 1 hours

---

## Getting Started

1. Clone this repo.
2. Run `npm install` to get all the needed packages.
3. Run `npm run dev` to start the app.
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
