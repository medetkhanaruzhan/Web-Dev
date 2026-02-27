# OnlineStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<!-- like(): void {
    const product = this.product();

    if (!product.liked) {
        product.likes++;
        product.liked = true;
    }
} -->

<!-- liked: boolean; -->

<!-- liked: false, -->


<!-- if (categoryId === 5) {
    return allProducts.filter(p => p.liked);
} -->



для фильрации
в app.ts 
minPrice = 0;
maxPrice = 1000000000;
и
get filteredProducts() {
  return this.products().filter(
    p => p.price >= this.minPrice && p.price <= this.maxPrice
  );
}

в app.html Перед <app-product-list> вставь:
<div class="price-filter">

  <label>
    Min: {{ minPrice }} ₸
    <input
      type="range"
      min="0"
      max="1000000000"
      step="1000"
      [(ngModel)]="minPrice"
    />
  </label>

  <label>
    Max: {{ maxPrice }} ₸
    <input
      type="range"
      min="0"
      max="1000000000"
      step="1000"
      [(ngModel)]="maxPrice"
    />
  </label>

</div>


заменить <app-product-list [products]="..."></app-product-list>
на <app-product-list [products]="filteredProducts"></app-product-list>

в app.ts добавить import { FormsModule } from '@angular/forms';
и в @Component → imports добавь: imports: [CommonModule, ProductListComponent, FormsModule],