# Laravel & React CRUD

## Project setup
Install node_modules.
```
npm install
```

Install Laravel Composer in your project folder, command in your terminal. 
```
composer install
```

Create .env file just command in your terminal:
```
cp .env.example .env
```

Database name set in your local server.
```
laravel-react-crud
```

Or Customize your .env file & .env.example
```
DB_DATABASE=laravel-react-crud
DB_USERNAME=root
DB_PASSWORD=root
```

Navigate your project then command in your terminal, **database migrate & seed** 

*This command is useful for completely building your database:*
```
php artisan migrate:fresh --seed
```

Laravel key:Generate in your project
```
php artisan key:generate
```
Navigate your project then command in your terminal:
``` 
php artisan serve
```

Compiles and reloads for development
``` 
npm run watch or npm run dev
```
Happy Coding :)