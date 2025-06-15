## Reflection Questions

### 1. How did you handle optional props in your components?

I used TypeScript's `?` syntax to mark props as optional in the interface. Inside the component, I used conditional rendering (like `if (prop)` or `{prop && ...}`) to check whether the prop exists before trying to use it. This helped avoid errors and made the components more flexible.

### 2. What considerations did you make when designing the component interfaces?

I thought about what each component needed to display or do and created interfaces based on those needs. I grouped related data (like `user` or `product`) into their own types to keep things organized. I also made some props optional so the components could be reused in different situations.

### 3. How did you ensure type safety across your components?

I used TypeScript interfaces to define clear types for all props. I imported these interfaces into each component file and typed the `props` using `React.FC<YourPropsType>`. This helped me catch mistakes early, like missing or misused props, right in my code editor.

### 4. What challenges did you face when implementing component composition?

At first, it was a little tricky to figure out how to pass props between components and when to use `children`. I had to carefully think about how to keep components reusable while still allowing flexibility. Once I understood how React passes props and how `children` works, it became much easier to nest components and combine them in `App.tsx`.


## App Screenshot

![App Screenshot](./assets/screenshot-app.png)

