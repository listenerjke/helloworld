function Book () {
    this.toString = function () {
        return `${this.title} - ${this.authorSurname} ${this.authorName} ${this.releaseYear} ${this.publishing} ${this.costPrice} ${this.price} ${this.income}`
    };
    this.title = prompt('Название книги');
    this.authorName = prompt('Имя Автора');
    this.authorSurname = prompt('Фамилия Автора');
    this.releaseYear = +prompt('Год выхода');
    this.publishing = prompt('Издательство');
    this.costPrice = +prompt('Себестоимость');
    this.price = +prompt('Цена');
    this.income = +prompt('Прибыль');
}
function extend  (array) {
    do {
        array.push(new Book());
    } while (confirm('Добавить книгу?'));
    return array;
}

function read () {
    return extend([]);
}

function show (array) {
    alert(array.join('\n'));
}
function search (array, key, value) {
    for (let i = 0; i < array.length; i++) {
        let book = array[i];
        if (book[key] === value) {
            alert(book);
        }
    }
}

function sortBy (array, key) {
    return array.sort(function (bookA, bookB) {
        let a = bookA[key];
        let b = bookB[key];
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    });
}
let array = read();
search(array, 'authorName','Anton');
sortBy(array, 'price');
show(array);