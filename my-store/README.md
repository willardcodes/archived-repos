# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

# Application Features

## Pages

### Product List
This page lists all available products. The products are currently being retrieved from `assets/data.json`. On this page, any product can be added to the cart with a quantity of 1 to 10. If the user clicks the item image, they are redirected to the product detail page.

### Product Detail
This page shows the product image, name, price, and description. It also allows the user to add the product to their cart with a quantity of 1 to 10. The user can click the "Return to product list" link to navigate back to the main product list.

### Cart
This page shows all products currently in the user's cart and displays a total. From here, the user can edit the quantity of each item or remove the item entirely. The cart page also contains a form that can be filled out to process the order.

A message is displayed if the cart does not contain any items.

### Confirmation
This page is reached by submitting the order form on the Cart page. It summarizes the order by listing the user's name and the total price of the order along with some boilerplate shipping information

## Limitations
As this is a project and not a real e-commerce application, the following restrictions exist:

- There is no login/authentication feature
- There is no dynamic shipping information on the confirmation page
- There is no payment processing system in place
- Certain pages can be reached by hard-coding them in the URL (e.g. confirmation)

# Development Instructions

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
