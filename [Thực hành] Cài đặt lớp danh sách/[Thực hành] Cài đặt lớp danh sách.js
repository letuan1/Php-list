var List = function () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    //this.clear = clear;
    this.find = find;
    this.toString = toString;
    //this.insert = insert;
    //this.append = append;
    //this.remove = remove;
    //this.front = front;
    //this.end = end;
    //this.prev = prev;
    //this.next = next;
    this.length = length;
    //this.currPos = currPos;
    this.moveTo = moveTo;
    //this.getElement = getElement;
    this.length = length;
    //this.contains = contains;


    this.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.find = function (element) {
        for (i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };

    this.remove = function (element) {
        var fountAT = this.find(element);
        if (fountAT > -1) {
            this.dataStore.splice(fountAT, 1);
            --this.listSize;
            return true;
        }
        return false;
    };

    this.lenght = function () {
        return this.listSize;
    };

    this.toString = function () {
        return this.dataStore;
    };

    this.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };

    this.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };

    this.contains = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    };

    this.front = function () {
        this.pos = 0;
    };

    this.end = function () {
        this.pos = this.listSize - 1;
    };

    this.prev = function () {
        if (this.pos > 0) {
            --this.pos;
        }
    };

    this.next = function () {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    };

    this.currPos = function () {
        return this.pos;
    };

    this.moveTo = function (position) {
        this.pos = position;
    };

    this.getElement = function () {
        return this.dataStore[this.pos];
    };
};

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.front();
document.write(names.getElement());
names.next();
document.write(names.getElement());
names.next();
names.next();
names.prev();
document.write(names.getElement());