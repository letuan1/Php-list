var List = function () {
    this.listSize = 0;
    this.dataStore = [];

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

    this.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };

    this.toString = function () {
        return this.dataStore;
    };
};

var Employees = function (name, salary, email) {
  this.name = name ;
  this.salary = salary;
  this.email = email;

  this.setName = function (_name) {
      this.setName = _name
  };

  this.getName = function () {
      return this.setName
  };

  this.setSalary = function (_salary) {
      this.setSalary = salary;
  };

  this.getSalary = function () {
      return this.setSalary;
  };

  this.setEmail = function (_email) {
      this.setEmail = _email;
  };

  this.getEmail = function () {
      return this.setEmail;
  };
};

var thao = new Employees("thao", 2000, "thao@gmail.com");
var khanh = new Employees("khanh", 2000, "khanh@gmail.com");
var linh = new Employees("linh", 2000, "linh@gmail.com");
var trang = new Employees("trang", 2000, "trang@gmail.com");
var tu = new Employees("tu", 2000, "tu@gamil.com");

var list = new List();

list.append(thao);
list.append(khanh);
list.append(linh);
list.append(trang);
list.append(tu);
//thêm khanh vào trước linh
list.insert(khanh,linh);
//xoá nhân viên thảo
    function main() {
        list.remove(thao);
        for (i = 0; i <= list.listSize; i++) {
            document.write((i + 1) + "-" + list.toString()[i].name + "-");
            document.write(list.toString()[i].salary + "-");
            document.write(list.toString()[i].email + "-" + "<br>");
        }
    }

for (i = 0 ; i <= list.listSize ; i++){
    document.write((i+1) + "-" + list.toString()[i].name + "-");
    document.write(list.toString()[i].salary + "-");
    document.write(list.toString()[i].email + "-" + "<br>");
}
