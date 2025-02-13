# LeetCode TypeScript Solutions 🚀

This repository contains TypeScript solutions for LeetCode problems. Each problem is implemented in a separate file with the naming convention:

```
problemNumber-problemName.ts
```

## 📌 How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/keyurgarsondiya/leetcode.git
   cd leetcode
   ```

2. **Install Dependencies**
   ```bash
   npm install -g typescript ts-node
   ```

3. **Run the Code**
    - Open `index.ts` and import the problem file you want to test.
    - Create the problem file inside the problems folder
    - Call the function with the required inputs inside the `Main` function.
    - Comment out other problem function calls to avoid conflicts.

   Example (`index.ts`):
   ```ts
   import { rotate } from './problems';

   function Main() {
     rotate([1, 2, 3, 4, 5], 2);
   }

   Main();
   ```

4. **Start the Execution**
   ```sh
   npm start
   ```

## 📝 File Structure

```
📂 LeetCode-TS
 ┣ 📜 index.ts        # Main entry point
 ┣ 📜 problems        # Main entry point
 ┣┣ 📜 189-rotate-array.ts  # Example problem solution
 ┣┣ 📜 display-array.ts  # Utility for displaying arrays
 ┣ 📜 package.json     # Project configuration
 ┗ 📜 tsconfig.json    # TypeScript configuration
```

## 📌 Contribution

Feel free to contribute by adding new solutions or optimizing existing ones. Make sure to follow the filename convention.

Happy coding! 🚀