const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if(this._root){
      return  this._root;
    }else{
      return null;
    }
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data);
    }

    let current = this._root;
    while (current) {
      if (current.data === data) {
        return;
      }
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(data);
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this._root;
    if (data === this._root.data) {
      // console.log("true");
      return true;
    }
    while (current) {
      if (data < current.data && current.left !== null) {
        if (data === current.left.data) {
          // console.log("true");
          return true;
        } else {
          current = current.left;
        }
      } else if (data > current.data && current.right !== null) {
        if (data === current.right.data) {
          // console.log("true");
          return true;
        } else {
          current = current.right;
        }
      } else {
        // console.log("false");
        return false;
      }
    }
  }

  find(data) {
    let current = this._root;
    if (data === this._root.data) {
      console.log(this._root);
      return this._root;
    }
    while (current) {
      if (data < current.data && current.left !== null) {
        if (data === current.left.data) {
          console.log(current.left);
          return current.left;
        } else {
          current = current.left;
        }
      } else if (data > current.data && current.right !== null) {
        if (data === current.right.data) {
          console.log(current.right);
          return current.right;
        } else {
          current = current.right;
        }
      } else {
        console.log(null);
        return null;
      }
    }
  }

  remove(data) {
    let current = this._root;
    if (data === this._root.data) {
      // два поддерева пустые
      if (current.left === null && current.right === null) {
        this._root = null;
        return;
      }
      // ищем в левом поддереве
      if (current.left !== null || current.right === null) {
        let parentLeft = this._root;
        let maxLeft = current.left;
        while (maxLeft.right) {
          parentLeft = maxLeft;
          maxLeft = maxLeft.right;
        }
        this._root.data = maxLeft.data;
        if (parentLeft === this._root) {
          if (maxLeft.left) {
            parentLeft.left = maxLeft.left;
          } else {
            parentLeft.left = null;
          }
        } else {
          if (maxLeft.left) {
            parentLeft.right = maxLeft.left;
          } else {
            parentLeft.right = null;
          }
        }
        return;
      }

      // ищем в правом поддереве
      if (current.right !== null || current.left === null) {
        let parentRight = this._root;
        let minRight = current.right;
        while (minRight.left) {
          parentRight = minRight;
          minRight = minRight.left;
        }
        this._root.data = minRight.data;

        if (parentRight === this._root) {
          if (minRight.right) {
            parentRight.right = minRight.right;
          } else {
            parentLeft.right = null;
          }
        } else {
          if (minRight.right) {
            parentRight.left = minRight.right;
          } else {
            parentRight.left = null;
          }
        }
        return;
      }
    }

    while (current) {
      if (data < current.data && current.left !== null) {
        if (data === current.left.data) {
          // console.log(current.left);
          // return current.left;

          // если узел является листом
          if (current.left.left === null && current.left.right === null) {
            current.left = null;
          } // если у узла два потомка
          else if (current.left.left !== null && current.left.right !== null) {
            let maxNode = current.left.left;
            let parentsMax = null;
            while (maxNode.right) {
              parentsMax = maxNode;
              maxNode = maxNode.right;
            }
            current.left.data = maxNode.data;

            if (parentsMax !== null) {
              parentsMax.right = maxNode.left;
            } else {
              current.left.left = maxNode.left;
            }
          } else {
            if (current.left.left) {
              current.left = current.left.left;
            } else {
              current.left = current.left.right;
            }
          }
        } else {
          current = current.left;
        }
      } else if (data > current.data && current.right !== null) {
        if (data === current.right.data) {
          // console.log(current.right);
          // return current.right;

          // если узел является листом
          if (current.right.left === null && current.right.right === null) {
            current.right = null;
          } else if (current.right.left !== null && current.right.right !== null) {
            let maxNode = current.right.left;
            let parentsMax = null;
            
            while (maxNode.right) {
              parentsMax = maxNode;
              maxNode = maxNode.right;
            }
            current.right.data = maxNode.data;

            if (parentsMax !== null) {
              parentsMax.right = maxNode.left;
            } else {
              current.right.left = maxNode.left;
            }
          } else {
            if (current.right.left) {
              current.right = current.right.left;
            } else {
              current.right = current.right.right;
            }
          }
        } else {
          current = current.right;
        }
      } else {
        console.log(null);
        return null;
      }
    }
  }

  min() {
    let current = this._root;
    if (!this._root) return null;
    while (current.left) {
      current = current.left;
    }
    console.log(current.data);
    return current.data;
  }

  max() {
    let current = this._root;
    if (!this._root) return null;
    while (current.right) {
      current = current.right;
    }
    console.log(current.data);
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};