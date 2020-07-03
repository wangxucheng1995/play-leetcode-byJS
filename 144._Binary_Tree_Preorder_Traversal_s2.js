/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const res = [];
    preHelper(root, res);
    return res;

    function preHelper(root, res) {
        if (root == null) return;
        res.push(root.val);
        preHelper(root.left, res);
        preHelper(root.right, res);
    }
};