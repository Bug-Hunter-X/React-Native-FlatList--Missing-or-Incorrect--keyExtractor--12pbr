# React Native FlatList KeyExtractor Bug

This repository demonstrates a common error in React Native's FlatList component:  failure to provide a unique `key` for each item, leading to incorrect rendering and performance problems.

## The Bug

The `bug.js` file shows an example of a FlatList without a proper `keyExtractor` function.  This results in inconsistent rendering and potential performance issues.

## The Solution

The `bugSolution.js` file demonstrates the correct usage of `keyExtractor` to assign a unique key to each item in the data array. This ensures that the FlatList renders correctly and efficiently.

## How to reproduce

1. Clone this repository
2. Navigate to the project directory
3. Run `npm install` or `yarn install`
4. Run the app (e.g., `npx react-native run-android` or `npx react-native run-ios`)
5. Observe the incorrect rendering in `bug.js` and the corrected rendering in `bugSolution.js`