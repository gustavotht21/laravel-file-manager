# Project Template

Um template de um projeto laravel (11.x) com todas as ferramentas que eu gosto de trabalhar.

## Ferramentas

### Front-end

* **[React](https://pt-br.react.dev/learn)**
* **[InertiaJS](https://inertiajs.com/)**
* **[TailwindCSS](https://tailwindcss.com/docs/installation)**
* **[HeroIcons](https://heroicons.com/)**
* **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**

### Back-end

* **[Larastan](https://github.com/larastan/larastan)**
* **[Pest PHP](https://pestphp.com/docs/installation)**
* **[Debug Bar](https://github.com/barryvdh/laravel-debugbar)**

### Laravel Packages

* **[Sail](https://laravel.com/docs/11.x/sail)**
* **[Pint](https://laravel.com/docs/11.x/pint)**
* **[Breeze](https://laravel.com/docs/11.x/starter-kits#laravel-breeze)**

### Dependências

* **[Yarn](https://yarnpkg.com/getting-started)**
* **[Husky](https://typicode.github.io/husky/getting-started.html)**
* **[Docker](https://docs.docker.com/guides/get-started/)**

### Suportes

* **Dark Mode**

# Getting started

## Clonando o projeto

* Clone o projeto na sua máquina:

```shell
git clone git@gitlab.com:borges-personal-projects/project-template-11.git project-name
```

* Entre na pasta do projeto:

```shell
cd project-name
```

* Remova a árvore antiga do git:

```shell
rm -rf .git
```

* Adicione o repositório do seu projeto como origin:

```shell
git init --initial-branch=main
git remote add origin git@gitlab.com:borges-external-projects/project-name.git
```

* Altere as configurações do seu arquivo .env.example para atender às credenciais do seu banco em ambiente local: 

```markdown
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=novo_banco_de_dados
DB_USERNAME=sail
DB_PASSWORD=password
```

* Depois, rode o seguinte comando:

```shell
sail build --cache
```

Isso serve para você não iniciar os containers utilizando credenciais errôneas, ou ainda impedir acesso ao banco de dados da sua aplicação.

* Copie o arquivo .env.example para .env:

```shell
cp .env.example .env
```

* Instale as dependências do docker:

```shell
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

* Suba os containers:

```shell
sail up -d
```

* Instale e atualize as dependências do projeto:

```shell
sail yarn install
sail yarn upgrade
sail composer install
sail composer update
```

* Inicie o husky:

```shell
sail yarn prepare
```

* Finalize a adição dos arquivos no seu novo repositório:

```shell
git add .
git commit -m "FEAT :: Initial commit"
git push --set-upstream origin main
```

* Gere a chave do projeto:

```shell
sail artisan key:generate
```

* Rode as migrações:

```shell
sail artisan migrate --seed
```

* Rode o projeto:

```shell
sail yarn run dev
```

* Caso estiver usando wsl, a cada alteração no frond-end, gere o build do projeto:

```shell
sail yarn run build
```
