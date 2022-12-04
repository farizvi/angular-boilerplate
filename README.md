# Angular Boilerplate

## Note:
This project is a work in progress. I will keep refining it with the passage of time.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10. 

## Steps to create the project

- Install Angular CLI by running `npm i -g @angular/cli@14.2.10`
- Create Angular app by running `ng new` and follow the steps to create an app with CSS and Angular Routing
- Install Bootstrap 5 by running `npm i bootstrap`
- Setup bootstrap by adding in `angular.json` 
    - `./node_modules/bootstrap/dist/css/bootstrap.css` to `projects->architect->build->styles`
    - `./node_modules/bootstrap/dist/js/bootstrap.js` to `projects->architect->build->scripts`
    - `./node_modules/jquery/dist/jquery.js` to `projects->architect->build->scripts`
- Setup Alertify by running `npm i altertifyjs`
- Modify `angular.json` again and add 
    - `./node_modules/alertifyjs/build/alertify.min.js` to `projects->architect->build->scripts`

## Adding Components

Add components to the app by running following command

```
ng g c <component_name_with_path>
e.g., ng g c features/users/auth --skip-tests
```

You can always verify the path where the component is going to be created by adding `--dry-run` at the end

## Routing
Angular provides a module in `app-routing.module.ts` which handles all routing for the application. To add route for newly added component, add an entry to the routes array
```
 const routes: Routes = [
  ...
  {path: 'register', component: UserSignupComponent},  
];
```

## Calling API Methods
To invoke API methods this app uses `angular/common/http`. To set it up add `HttpClientModule` to imports section of `app.module.ts`

Create a base service class with all http methods. Create a new service class for each feature which extends this base class to implement the CRUD operations

## Configuring Forms
This project uses `ReactiveForms` to handle user input. To set it up add `ReactiveFormsModule` to imports section of `app.module.ts`

Use `FormBuilder` to create forms. As an example please refer to `features/users/user-signup` component. 

### Reusable Form Components
To avoid writing repetitive code, this project uses shared form components which reside in `app/common/shared-components/forms`. As an example a text input component with validation is included in this project

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
