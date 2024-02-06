// It is generally recommended to define selectors outside the render function.
// This will prevent unnecessary computations each render.
// It also allows React to optimize performance in concurrent mode.

// import { MangoStore } from './useStore';

export const customSelector = (state) => state.selectedMangoAccount.current;
