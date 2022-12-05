class MyQueue {x = [];constructor() {this.x = [];    }
    
    
        

/** 
 * @param {number} x
 * @return {void}
 */
    push(x) {
        this.x.push(x);
    }

/**
 * @return {number}
 */
    pop() {
        var m = this.x[0],q;
        
        if (this.x.length > 0) {
            q = m;
        }
        this.x.shift();
        return q;

    }

/**
 * @return {number}
 */
    peek() {
        return this.x[0];
    }


/**
 * @return {boolean}
 */
    empty() {
        return this.x.length === 0
    }
}
