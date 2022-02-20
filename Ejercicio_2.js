class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(value){
        this.data[this.length] = value;
        this.length++;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        let value = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return value;
    }

    deleteAtIndex(index){
        if(index <= this.length){
            delete this.data[index];
            this.length--;
            return true;
        }
        return false;
    }

    shiftItems(index){
        if(index <= this.length){
            this.deleteAtIndex(index)
            this.length--;
            return true;
        }
        return false;
    }
}

    const arrayPerson = new MyArray();
    arrayPerson.push("David");
    arrayPerson.push("María");
    arrayPerson.push("Andrés");
    arrayPerson.push("Lucía");
    console.log(arrayPerson.data);
    console.log(arrayPerson.get(0))
    console.log(arrayPerson.get(1))
    console.log(arrayPerson.pop());
    console.log(arrayPerson.data)
    console.log(arrayPerson.length);
    console.log(arrayPerson.deleteAtIndex(4));
    console.log(arrayPerson.deleteAtIndex(2));
    console.log(arrayPerson.data)