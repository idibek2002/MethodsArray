### Массив в JavaScript


Массив — это объект, который содержит значения (любого типа), особенно в именованных свойствах/ключах,
а скорее в позиции с числовым индексом
В JavaScript массив — это упорядоченный список значений. Каждое значение называется элементом, указанным индекс. ... Во-первых, массив может содержать значения смешанных типов.
Массив — это специальная переменная, которая может содержать более одного значения:

1. Использование литерала массива


        const array_name=[item0,item1,...];


2. Использование нового ключевого слова


        const array = new Array('idibek',2,3,4)


##### Изменить элементы в массиве

Вы также можете добавлять элементы или изменять элементы, обращаясь к значению индекса
Предположим, массив состоит из двух элементов. Если вы попытаетесь добавить элемент с индексом 3 (четвертый
element), третий элемент будет неопределенным. Например,

        Пример 1
        const array=['idibek',21,'rahimov',2022]
        array[3]=2023
        console.log(array) // [ 'idibek', 21, 'rahimov', 2023 ]

        Пример 2
        const array=['idibek',21,'rahimov',2022]
        array[5]=2023
        console.log(array) // [ 'idibek', 21, 'rahimov', 2022, <1 empty item>, 2023 ]



### Методы массива

 `pop()`  
 `shift()`
 `push()`
 `unshift()`
 `concat()`
 `slice()`
 `join()`
 `includes()`
 `indexOf()`
 `splice()`
 `toString()`
 `toReversed()`

 `forEach()`
 `map()`
 `find()`
 `filter()`
 `reduce()`
 `toSorted()`

##### Метод push()
Метод push() добавляет один или несколько элементов в конец массива и возвращает новая длина массива.
Элемент(ы) для добавления в конец массива.
Синтаксис:          

        push(item0, item1, /* … ,*/ itemN)


Например:

        Добавление с переменными
        const animals=['pigs','goats','sheep']
        const animal=animals.push('cows','dogs')
        console.log(animal); // 5
        console.log(animals); // [ 'pigs', 'goats', 'sheep', 'cows', 'dogs' ]

        Добавить в саму переменную
        const animals=['pigs','goats','sheep']
        animals.push('dogs','froggy')
        console.log(animals); // [ 'pigs', 'goats', 'sheep', 'dogs', 'froggy' ]



##### Метод pop()
Метод pop() удаляет последний элемент из массива и возвращает этот элемент.
Этот метод изменяет длину массива.


Например: 

        const students=['student1','student2','student3','student4','student5']

        console.log(students.pop()); // student5

        console.log(students); // [ 'student1', 'student2', 'student3', 'student4' ]

        students.pop()
        console.log(students); // [ 'student1', 'student2', 'student3' ]
        students.pop()
        console.log(students); // [ 'student1', 'student2' ]


##### Метод unshift()
Метод unshift() добавляет один или несколько элементов в начало массива и возвращает новую длину массива.

Синтаксис

    unshift(item0,item1 , /* … ,*/ itemN)


Например:

    const array=[2,4,5,3,5,78]
    const array2=array.unshift(10,54,58,62)
    console.log(array); // [
       // 10, 54, 58, 62,  2,
       //  4,  5,  3,  5, 78
     // ] // значения массива
    console.log(array2); // 10 длина массив 



##### Метод shift()

Метод shift() удаляет первый элемент из массива и возвращает этот удаленный элемент. Этот метод изменяет длину массива.

Например:

    const array=[2,4,5,3,5,78]
    const array2=array.shift()
    console.log(array); // [ 4, 5, 3, 5, 78 ]
    console.log(array2); // 2


##### Метод toString()
Метод toString() возвращает строку, представляющую указанный массив и его элементы.
Строка, представляющая элементы массива.


    const array=[1,'idibek',4,3]
    console.log(array.toString()); // "1,idibek,4,3"
    console.log(array); // [ 1, 'idibek', 4, 3 ]


##### Метод indexOf()

    const array=["idibek","ferrari","Opel","BMW"]
    console.log(array.indexOf("Opel")); // 2

##### Метод includes()

    const array=["idibek","ferrari","Opel","BMW"]
    console.log(array.includes("Opel")); // true

##### Метод slice()

    const array=["idibek","ferrari","Opel","BMW"]
    console.log(array.slice(1,3)); // [ 'ferrari', 'Opel' ]


##### Метод concat()

    const array=["idibek","ferrari","Opel","BMW"]
    const array2=["Mercedes","Honda","Toyota"]
    console.log(array.concat(array2)); 
    // ['idibek','ferrari''Opel','BMW','Mercedes','Honda','Toyota']
    // console.log(array); // [ 'idibek', 'ferrari', 'Opel', 'BMW' ]


##### Метод splice()
Метод splice() изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы на место.

Чтобы создать новый массив с удаленным и/или замененным сегментом без изменения исходного массива, используйте toSpliced(). Чтобы получить доступ к части массива без его изменения, см. slice().

Синтаксис 

    array.splice(index,howmany,item1,......, itemX)

    Например:

        const months = ['Jan', 'March', 'April', 'June'];
        months.splice(1, 0, 'Feb'); // добавить новую значения на индекс 1
        console.log(months); // ["Jan", "Feb", "March", "April", "June"]

        months.splice(4, 1, 'May'); // удалить 4 индекс и добавить новую значения
        console.log(months); // ["Jan", "Feb", "March", "April", "May"]



##### Метод join()

Метод join() создает и возвращает новую строку путем объединения всех элементов массива (или объекта, подобного массиву), разделенных запятыми или заданной строкой-разделителем. Если в массиве только один элемент, то этот элемент будет возвращен без использования разделителя.

        const elements = ['Fire', 'Air', 'Water'];

        console.log(elements.join()); // "Fire,Air,Water"
        console.log(elements.join('')); // "FireAirWater"

        console.log(elements.join('-')); // "Fire-Air-Water"
    
##
### Обратные вызовы методов массива JavaScript

##### Метод map()
Метод map() создает новый массив, заполненный результатами вызова предоставленной функции для каждого элемента в вызывающем массиве.


        const array1 = [1, 4, 9, 16];
        const map1 = array1.map(x => x * 2);
        console.log(map1); // [ 2, 8, 18, 32 ]
        console.log(array1); // [ 1, 4, 9, 16 ]


        const array1 = [1, 4, 9, 16];
        const map1 = array1.map(myFunc);

        function myFunc(num) {
            return num*10
        }
        console.log(map1); // [ 10, 40, 90, 160 ]


##### Метод forEach()
Метод forEach() выполняет предоставленную функцию один раз для каждого элемента массива.

Синтаксис:

    Array.forEach(callback(item,index,arr), thisValue)


Например:
    
    const array1 = ['a', 'b', 'c'];
    array1.forEach(element => console.log(element)); a b c

##### Метод find()
Метод find() возвращает первый элемент предоставленного массива, который удовлетворяет предоставленной функции тестирования. Если никакие значения не удовлетворяют функции тестирования, возвращается значение undefined.

        const array1 = [5, 12, 8, 130, 44];
        const found = array1.find(element => element > 10);
        console.log(found); // 12



##### Метод reduce()
Метод reduce() выполняет предоставленную пользователем функцию обратного вызова «reducer» для каждого элемента массива по порядку, передавая возвращаемое значение из вычисления предыдущего элемента. Конечным результатом выполнения редуктора для всех элементов массива является одно значение.

При первом запуске обратного вызова нет «возвращаемого значения предыдущего вычисления». Если указано, вместо него может быть использовано начальное значение. В противном случае элемент массива с индексом 0 используется в качестве начального значения, и итерация начинается со следующего элемента (индекс 1 вместо индекса 0).

Возможно, самым простым для понимания случаем использования функции reduce() является возврат суммы всех элементов массива:


        const array1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
        const valueA = 0;
        const sum = array1.reduce(
          (a, b) => a + b,valueA);

        console.log(sum); // 10

##### Метод filter()
Метод filter() создает поверхностную копию части заданного массива, отфильтрованную до
только элементы из данного массива, которые проходят тест, реализованный предоставленным
функция.

        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);

        console.log(result); // ["exuberant", "destruction", "present"]


##### Метод toSorted()
Метод toSorted() экземпляров Array является копирующей версией метода sort().
Он возвращает новый массив с элементами, отсортированными в порядке возрастания.



        const values = [1, 10, 21, 2];
        const sortedValues = values.toSorted((a, b) => a - b);
        console.log(sortedValues); // [1, 2, 10, 21]



##### Деструктуризация метода

Синтаксис деструктурирующего присваивания представляет собой выражение JavaScript, которое делает его
можно распаковывать значения из массивов или свойства объектов в отдельные
переменные.

        let a, b, rest;
        [a,b]=[10,20]
        console.log(a); // 10
        console.log(b); // 20

        [a,b, ...rest]=[10,20,30,40,50]
        console.log(rest); // [ 30, 40, 50 ]


##### Метод spread (...)
Синтаксис распространения (...) позволяет использовать итерируемый объект, например массив или строку.
расширяется в местах, где ноль или более аргументов (для вызовов функций) или
элементы (для литералов массива) ожидаются. В литерале объекта синтаксис распространения
перечисляет свойства объекта и добавляет пары ключ-значение к объекту
создается.


        function sum(x,y,z) {
            return x+y+z
        }
        const number = [1,2,3]
        console.log(sum(...number)); // 6

##### Метод rest
Синтаксис остальных параметров позволяет функции принимать неопределенное значение.
количество аргументов в виде массива.


    function sum(...number) {
        return number
    }
    console.log(sum(1,2,3)); // [ 1, 2, 3 ]