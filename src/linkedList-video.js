// ! https://www.youtube.com/watch?v=dFwNSyVC_5Y
// ? What are Data Structures?
/*
* General Types of Data Structures in Java Script
* 1. Arrays –  структура данных, которая содержит в себе список однотипных элементов
*   Можно взаимодействовать либо сразу со всем этим списком элементов, либо с конкретным элементом, например по индексу.
*   Можно:
*       – находить элементы внутри массива
*       – изменять
*       – удалять
*       – добавлять
*       – и т.д.

* 2. Object – одна из основных структур данных в JS
*   Здесь описывается какой-либо один объект.

* 3. Set – не может содержать в себе одинаковые эелменты. В отличе от Array, здесь каждый элемент должен быть ункален
*   Работает со списком определённых элементов. Можно переводить Set -> Array / Array –> Set
*   Имеет более удобные встроенные методы, позволяющие взаимодействовать с данными внутри (для: добавление, удаление, проверка элементов, и т.д.)

* 4. Map - это некая аналогия Object, но его усовершенствованная версия.
*   Данные, так же как и в Object, хранятся в виде key: value.
*   Однако в Map key – может быть что угодно (Object, String, и даже что-то неопределённое).
*   Добавляет определённый интерфейс для взаимодействия с этими данными, например:
*/
// const map = new Map();
// map.(и + метод взаимодействия внутри map)
/* для того, чтобы взаимодействовать с данными внутри Map, есть:
*   - clear - сброс,
*   - delete - удаление,
*   - entries - перевод в,
*   - forEach - итерация,
*   – get – получение данных,
*   – has – проверка на наличие,
*   - set
*   – keys
*   - values
*   - size - выяснение размера

* 5. WeakMap & WeakSet – дополнительные структуры данных с своими особенностями по оптимизации.
*/

// ! ========= Классический пример linkedList =========
/*
* LinkedList – проставя структура данных.
* Имеет два свойства:
*   [value, next] -> [value, next] -> [value, next]
*   Здесь, каждый элемент имеет своё значение и ссылку на СЛЕДУЮЩИЙ элемент. Он не знает ничего про предыдущий или "через один", только про следующий.
*/
// Пример: есть массив, и необходимо поместить ещё один элемент в его конец.
// для Array можно воспользоваться методом
// [].push(value);
// Для того, чтобы проделать такую же операцию в LinkedList, то алгоритм будет следующий:

// 1. Создаю class Linkedlist(data){} и добавляю в него методы: конструктор, добавление (append / prepend)
// 2. Теперь, gосле создания класса linkedList, создам вспомогательный class Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.right = null;
    }
    // для того, чтобы протестировать конструктор, начну с метода, который будет добавлять в конец LinkedList новый элемент:
    append(data) {
        const node = new Node(data); /* Вместо { key: data, next: null }; указываю вспомогательный класс*/

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    prepend(data) {
        const node = new Node(data, this.head); /* Вместо { key: data, next: this.head }; указываю вспомогательный класс*/

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
    }

    toArray() {
        const output = [];
        let current = this.head;

        while (current) {
            output.push(current);
            current = current.next;
        }

        return output;
    }
}


const list = new LinkedList();

list.append('My');
list.append('name');
list.prepend('Hi');

list //
