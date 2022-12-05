class Solution {
    constructor(head) {
      this.size = 1e4;
      this.count = 0;
      this.head = head;
      this.node = head;
    }
  
    /**
     * @return {number}
     */
    getRandom() {
      let node = this.node;
      let rand = (Math.random() * this.size) | 0;
      do {
        if (this.head !== null) {
          this.count++;
        }
        node = this.node;
        this.node = node.next;
      } while (this.node && --rand >= 0);
      if (this.node) {
        return node.val;
      }
      node.next = this.head;
      this.node = this.head;
      this.head = null;
      this.size = this.count;
      return this.getRandom();
    }
  }