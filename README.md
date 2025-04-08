
# React Shopping Cart Project

A comprehensive shopping cart implementation using React with Context API and useReducer for state management. This project serves as an excellent example of fundamental React concepts in action.

## Key Features

- **Global State Management**: Uses Context API + useReducer (Redux-like pattern)
- **Cart Operations**:
  - Add/remove items
  - Increase/decrease quantities
  - Calculate totals
- **Responsive UI**: Clean, mobile-friendly interface
- **Performance Optimized**: Uses Map() for cart items storage

## Project Structure

```
src/
├── components/      # Presentational components
│   ├── CartContainer.js
│   ├── CartItem.js
│   └── Navbar.js
├── context/         # State management
│   └── cart_context.js
├── reducer.js       # All state update logic
├── actions.js       # Action type constants
└── App.js           # Main application layout
```

## Core Concepts Demonstrated

### 1. State Management Architecture
```javascript
// Context setup
const [state, dispatch] = useReducer(reducer, initialState);

// Provider value
<CartContext.Provider value={{ ...state, dispatch }}>
```

### 2. Reducer Pattern
```javascript
// Typical reducer action
case 'INCREASE': {
  const newCart = new Map(state.cart);
  const item = newCart.get(action.payload.id);
  newCart.set(action.payload.id, { ...item, amount: item.amount + 1 });
  return { ...state, cart: newCart };
}
```

### 3. Component Structure
- **Container Components**: Manage business logic (CartContainer)
- **Presentational Components**: Handle UI (CartItem, Navbar)

## How to Run

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm start
```

## Learning Points

### Context API Usage
```javascript
// Creating context
const CartContext = createContext();

// Custom hook for easy access
export const useCartContext = () => useContext(CartContext);
```

### useReducer Patterns
- **Immutable updates**: Always return new state objects
- **Action types**: Constants for maintainability
- **Complex state logic**: Centralized in reducer

### Performance Considerations
- **Map() vs Array**: O(1) lookups for cart items
- **Memoization**: Small component structure prevents unnecessary re-renders

## Key Files Explained

1. **cart_context.js**
   - Creates context and provider
   - Initializes state with useReducer
   - Exposes dispatch functions

2. **reducer.js**
   - Handles all state transitions
   - Pure function (no side effects)
   - Uses action.type switch pattern

3. **CartContainer.js**
   - Main cart display logic
   - Conditionally renders empty state
   - Maps cart items to CartItem components

4. **CartItem.js**
   - Stateless presentational component
   - Receives props from parent
   - Dispatches actions on user events

## Project Dependencies

- React (v18+)
- React DOM
- (Optional) PropTypes for type checking

## Suggested Improvements

1. Add local storage persistence
2. Implement product fetching from API
3. Add checkout functionality
4. Include tests with React Testing Library

## Conceptual Review Cheatsheet

| Concept | Implementation | File Reference |
|---------|----------------|----------------|
| Context API | Global state provider | cart_context.js |
| useReducer | State management | cart_context.js + reducer.js |
| Immutability | Map() operations | reducer.js |
| Component Composition | Container + Presentational | CartContainer.js + CartItem.js |
| Action Dispatching | UI event handlers | CartItem.js button clicks |
