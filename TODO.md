# List of tasks done and to be done in order

Scaffolding Tasks

- [x] Vite + Vue-ts
- [x] Prettier + ESlint + Husky + Lint Staged
- [x] Vue Router
- [x] Tailwind
- [x] Pinia
- [x] UI Library (Element Plus)

Designing and Development

- [x] Sign In Page with responsive
- [x] Auth Store to handle sign in with non persistant session
- [x] Portal Layout with responsive
- [x] Saving allowed accounts for customers using account_role in Auth Store
- [x] Header Bar Component with responsive
- [x] Sidebar with responsive
- [x] Base Pages with Responsive
- [x] Account Page with responsive

Pending or Future:

Design

- [ ] While basic responsive UI is done, need to make it better
- [ ] Alignment with icons in two places are wrong. Header avatar dropdown icon and Add new member icon.
- [ ] Whenever the route changes with mobile sidebar open, the pages jumps up for a second. Need to fix.
- [ ] Header organisation name can overlap tabs on super small screens.

Functionality

- [ ] Login session needs to be saved so it doesn't reset at browser refresh possibly with a JWT token and proper API's.
- [ ] Need to Split AuthStore into two different stores for handling customer data and account data in separate files.
- [ ] The function "isDisabled" is terribly written, need to re-write it better.
- [ ] Bug on Sidebar dropdown, shows empty list for account_roles mentioned in customers.json which do not exist in accounts.json
- [ ] Testing, Unit and E2E both.
- [ ] Replace local accounts and customer json with API's.
