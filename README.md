# Nest Template

## About

This project is created using [NestJS](https://nestjs.com/), a framework for building scalable applications on Node.js.

## Installation

1. Install dependencies using the following command:

   ```bash
   npm install
   ```

2. Run the project:


   ```bash
   npm run start
   ```

## Coding Standards

- Use [TypeScript](https://www.typescriptlang.org/) for all files.
- Follow commonly accepted TypeScript coding standards.
- Use kebab-case (hyphens between words) for naming files and folders:
- 1. Folder: some-folder-name
- 2. File: some-file-name.type.ts
- 3. Class: SomeClassName
- 4. Variable or function: someVariableName
- Follow SOLID and DRY principles in design and development.

## Project Structure

The project is organized according to the standard NestJS structure:

- `src/`: Source code of the project.
  - `modules/`: Folder for storing modules.
  - `controllers/`: Application controllers.
  - `services/`: Application services.
  - `dto/`: Data transfer objects (DTO).
  - `entities/`: Database entities (if using TypeORM or another ORM).
  - `middlewares/`: Middleware.
  - `filters/`: Error filters.
  - `interceptors/`: Interceptors.
  - `utils/`: Utilities and helper functions.
- `test/`: Tests.

## Documentation

The NestJS documentation can be found [here](https://docs.nestjs.com/)

