## Роуты

- POST `/url` - создание короткой ссылки, принимает следующее тело `{ title?: string, url: string }`
- GET `/url/:title` - переадресация на сайт по title
- GET `/url` - отображает все ссылкы вместе их данными
- DELETE `/url/:id` - удаляет ссылку по айди