# Codecamp Exercise: Testing with Vitest

## Learning Objectives

- Write unit tests with `describe`, `it`/`test`, and `expect`
- Use matchers: `toBe`, `toEqual`, `toContain`, `toThrow`, `toHaveLength`
- Test both success and failure/edge cases
- Use `beforeEach` / `afterEach` for test setup and teardown
- Achieve >80% code coverage

## Exercise Instructions

### Write Tests for Provided Functions

1. **Fork** this repository and **clone** your fork
2. Run `npm install` to install dependencies
3. The `src/` directory contains implemented functions with **no tests**
4. Your job: write comprehensive tests in `src/__tests__/`

#### Step 1: Test `math.ts`
- Create `src/__tests__/math.test.ts`
- Test `add`, `subtract`, `multiply`, `divide`
- Test edge cases: division by zero, negative numbers, zero

#### Step 2: Test `strings.ts`
- Create `src/__tests__/strings.test.ts`
- Test `capitalize`, `slugify`, `truncate`, `countWords`
- Test edge cases: empty strings, single characters, strings with special characters

#### Step 3: Test `validators.ts`
- Create `src/__tests__/validators.test.ts`
- Test `isValidEmail`, `isStrongPassword`, `isInRange`
- Test both valid and invalid inputs

#### Step 4: Test `array-utils.ts`
- Create `src/__tests__/array-utils.test.ts`
- Test `unique`, `chunk`, `flatten`, `groupBy`
- Test edge cases: empty arrays, single-element arrays

#### Step 5: Run Coverage
- Run `npm run test:coverage`
- Aim for >80% coverage across all files

## Acceptance Criteria

- [ ] All 4 test files created with meaningful test cases
- [ ] Each function has at least 3 test cases (happy path + edge cases)
- [ ] Tests use `describe` blocks for grouping
- [ ] At least one test uses `toThrow` for error cases
- [ ] `npm test` passes with all tests green
- [ ] Code coverage >80%

## File Structure

```
codecamp-exercise-vitest/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── vitest.config.ts
└── src/
    ├── math.ts              # Implemented — write tests for this
    ├── strings.ts           # Implemented — write tests for this
    ├── validators.ts        # Implemented — write tests for this
    ├── array-utils.ts       # Implemented — write tests for this
    └── __tests__/
        ├── math.test.ts         # TODO: Write tests
        ├── strings.test.ts      # TODO: Write tests
        ├── validators.test.ts   # TODO: Write tests
        └── array-utils.test.ts  # TODO: Write tests
```

## Commands

```bash
npm install          # Install dependencies
npm test             # Run all tests
npm run test:coverage  # Run tests with coverage report
```

## Tips

- Start with the simplest function (`add`) to get comfortable with the syntax
- Always test: happy path, edge cases, error cases
- Use `.toThrow()` to test that functions throw on bad input
- Group related tests in `describe` blocks
