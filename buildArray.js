
class myArray {
    constructor(){
        this.data = {};
        this.length = 0
    }

    get(index){
        return this.data[index]
    }

    push(...elements){
        for(let i = 0; i < elements.length; i++){
            this.data[this.length] = elements[i]
            this.length++
        }
        
        return this.length
    }

    pop(){
        const lastElement = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastElement
    }

    delete(index){
        const element = this.data[index]
        this.shiftElement(index)
        return element
    }

    shiftElement(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    quicksort(){
        if (this.length <= 1) {
            return this.data;
          }
        
          const pivot = this.data[0];
          
          const left = []; 
          const right = [];
        
          for (let i = 1; i < this.length; i++) {
            this.data[i] < pivot ? left.push(this.data[i]) : right.push(this.data[i]);
          }
        
          return this.quicksort(left).concat(pivot, this.quicksort(right));
    }

}

const arr = new myArray()

//arr.push("I am a pretty pretty princess and things just work out in my favor and I don't know why!")
arr.push(1,20,3,40,52,6,73,8,94)

console.log("arr: ", arr)
console.log("get: ", arr.get(0))
console.log("sort: ", arr.quicksort())