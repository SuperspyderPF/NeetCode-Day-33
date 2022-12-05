var minDepth = function(r) {
    if (!r) return 0; //add 0
    if (!r.left) return 1 + minDepth(r.right);  //[1,2] => 2 when right skew
    if (!r.right) return 1 + minDepth(r.left);  //when left skew
    return 1 + Math.min(minDepth(r.left), minDepth(r.right));
}

//one line:
minDepth=r=>{if(!r)return 0;if(!r.left)return 1+minDepth(r.right);if(!r.right)return 1+minDepth(r.left);return 1+Math.min(minDepth(r.left),minDepth(r.right));}
